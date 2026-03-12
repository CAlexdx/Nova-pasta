const { open } = require('sqlite');
const sqlite3 = require('sqlite3');

async function setupDb() {
    const db = await open({
        filename: './database.db',
        driver: sqlite3.Database
    });

    await db.exec(`
        CREATE TABLE IF NOT EXISTS pessoas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT,
            idade INTEGER
        )
    `);

    return db;
}

module.exports = setupDb;