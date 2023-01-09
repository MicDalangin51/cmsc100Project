import { readFileSync, writeFileSync } from 'fs';

const dbFile = 'db.json';

export async function getBlogs () {
  const dbText = readFileSync(dbFile, 'utf8');
  return JSON.parse(dbText);
}

export async function saveBlogs (db) {
  const dbText = JSON.stringify(db, null, 2);
  writeFileSync(dbFile, dbText, 'utf8');
}
