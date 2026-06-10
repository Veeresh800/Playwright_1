const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

const ROOT = path.resolve(__dirname, '..');

async function readTree(dirPath, rel = '') {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  const list = [];
  for (const e of entries) {
    if (['node_modules', '.git', 'playwright-report', 'reports'].includes(e.name)) continue;
    const full = path.join(dirPath, e.name);
    const item = { name: e.name, path: path.join(rel, e.name) };
    if (e.isDirectory()) {
      item.type = 'folder';
      item.children = await readTree(full, path.join(rel, e.name));
    } else {
      item.type = 'file';
    }
    list.push(item);
  }
  return list;
}

app.get('/api/structure', async (req, res) => {
  try {
    const tree = await readTree(ROOT);
    res.json({ root: path.basename(ROOT), tree });
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
});

async function listTestFiles() {
  const testsDir = path.join(ROOT, 'tests');
  try {
    const entries = await fs.readdir(testsDir, { withFileTypes: true });
    const files = [];
    for (const e of entries) {
      if (e.isFile() && /\.spec\.(ts|js|jsx|tsx)$/.test(e.name)) files.push(e.name);
    }
    return files;
  } catch (err) {
    return [];
  }
}

function extractTestsFromSource(src) {
  const regex = /(?:^|\W)test\((?:'|")([\s\S]*?)(?:'|")\s*,/g;
  const res = [];
  let m;
  while ((m = regex.exec(src))) {
    res.push(m[1]);
  }
  return res;
}

app.get('/api/tests', async (req, res) => {
  const files = await listTestFiles();
  res.json({ files });
});

app.get('/api/tests/file', async (req, res) => {
  try {
    const file = req.query.path;
    if (!file) return res.status(400).json({ error: 'missing path' });
    const full = path.join(ROOT, 'tests', file);
    const src = await fs.readFile(full, 'utf8');
    const tests = extractTestsFromSource(src);
    res.json({ file, src, tests });
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
});

app.get('/api/testdata', async (req, res) => {
  try {
    const dataDir = path.join(ROOT, 'test-data');
    const entries = await fs.readdir(dataDir, { withFileTypes: true });
    const files = [];
    for (const e of entries) {
      if (e.isFile()) files.push(e.name);
    }
    const contents = {};
    for (const f of files) {
      const full = path.join(dataDir, f);
      const raw = await fs.readFile(full, 'utf8');
      if (/\.json$/i.test(f)) {
        try { contents[f] = JSON.parse(raw); } catch { contents[f] = raw; }
      } else if (/\.csv$/i.test(f)) {
        const rows = raw.split(/\r?\n/).filter(Boolean).map(r => r.split(','));
        contents[f] = rows;
      } else {
        contents[f] = raw;
      }
    }
    res.json({ files, contents });
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
});

app.get('/api/reports', async (req, res) => {
  try {
    const reportDir = path.join(ROOT, 'allure-results');
    const entries = await fs.readdir(reportDir, { withFileTypes: true });
    const results = [];
    let total = 0, passed = 0, failed = 0, skipped = 0;
    for (const e of entries) {
      if (e.isFile() && /-result\.json$/.test(e.name)) {
        const raw = await fs.readFile(path.join(reportDir, e.name), 'utf8');
        try {
          const obj = JSON.parse(raw);
          results.push(obj);
          total++;
          const status = obj.status || obj.stage || obj.result || '';
          if (/passed/i.test(status)) passed++;
          else if (/failed/i.test(status)) failed++;
          else skipped++;
        } catch {
          // ignore
        }
      }
    }
    res.json({ total, passed, failed, skipped, results });
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server listening on ${port}`));
