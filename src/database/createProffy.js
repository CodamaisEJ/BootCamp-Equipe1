module.exports = async function(db, { proffyValue, classValue, classScheduleValues }){
    //inserir dados na tabela de Proffys
<<<<<<< HEAD
    const insertedProffy = await db. run(`
=======
    const insertedProffy = await db.run(`
>>>>>>> 372e3775bf5ad3a7b046f66f4b54756f9013fae7
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
    `)

    const proffy_id = insertedProffy.lastID
    
    // Inserir dados na tabela classes
    const insertedClass = await db.run(`
        INSERT INTO classes (
            subject,
            cost,
            proffy_id
        ) VALUES(
            "${classValue.subject}",
            "${classValue.cost}",
            "${proffy_id}"
        );
    `)

    const class_id = insertedClass.lastID

    //Inserir dados na tabela class_schedule
    const insertedAllClassScheduleValues = classScheduleValues.map((classScheduleValue) =>{
        return db.run(`
            INSERT INTO class_schedule (
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES(
                "${class_id}",
                "${classScheduleValue.weekday}",
                "${classScheduleValue.time_from}",
                "${classScheduleValue.time_to}"
            );
        `)
    } )

        //aqui vou executar todos os db.runs() das class_schedules
        await Promise.all(insertedAllClassScheduleValues)
    }