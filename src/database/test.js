const Database = require('./db')
const createProffy = require('./createProffy')
Database.then(async (db) => {
    //  Inserir dados

    proffyValue = {
        name: 'Diego Fernandes',
        avatar: 'https://avatars.githubusercontent.com/u/2254731?v=4',
        whatsapp: '000000000',
        bio: 'Entusiasta das melhores tecnologias de química avançada. <br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiêcias. Mais de 200.000 pessoas já passaram por uma das minhas explosões.',
    }

    classValue = {
        subject: "Química",
        cost: "20",
        // o proffy id virá pelo banco de dados
    }
    
    classScheduleValues = [
        //class_id virá pelo banco de dados, após cadastrarmos a class
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }   
    ]
    
    await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // Consultar os dados inseridos

})
//node src/database/db.js comando para iniciar o banco de dados
