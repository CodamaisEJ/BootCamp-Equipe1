const Database = require('sqlite-async')

function execute(db) {
    //criar as tabelas de banco de dados.
    db.exec(`
        CREATE TABLE IF NOT EXISTS proffys (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            avatar TEXT,
            whatsapp TEXT,
            bio TEXT
        );

        CREATE TABLE IF NOT EXISTS classes(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            subject TEXT,
            cost TEXT,
            proffy_id  INTENGER 
        );

        CREATE TABLE IF NOT EXISTS classes_schedule(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            class_id INTENGER,
            weekday INTENGER,
            time_from INTENGER,
            time_to INTENGER
        );
    `)
}

module.exports = Database.open(__dirname + '/database.sqlite').then(execute)