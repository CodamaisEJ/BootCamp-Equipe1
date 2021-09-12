    // dados

const proffys = [
    {   name: 'Diego Fernandes',
        avatar: 'https://avatars.githubusercontent.com/u/2254731?v=4',
        whatsapp: '000000000',
        bio: 'Entusiasta das melhores tecnologias de química avançada. <br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiêcias. Mais de 200.000 pessoas já passaram por uma das minhas explosões.',
        subject: 'Química',
        cost: '20',
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },
    {   name: 'Daniele Evangelista',
        avatar: 'https://avatars.githubusercontent.com/u/2254731?v=4',
        whatsapp: '000000000',
        bio: 'Entusiasta das melhores tecnologias de química avançada. <br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiêcias. Mais de 200.000 pessoas já passaram por uma das minhas explosões.',
        subject: 'Química',
        cost: '20',
        weekday: [1],
        time_from: [720],
        time_to: [1220]
    }
]

const subjects = [
    'Artes',
    'Biologia',
    'Ciências',
    'Educação física',
    'Física',
    'Geografia',
    'História',
    'Matemática',
    'Português',
    'Química',
]

const weekdays = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
]

    // funcionalidades

    function getSubject(subjectNumber) {
        const position = +subjectNumber -1
        return subjects[position]
    }

    // organização das funções com o .get
function pageLanding(req, res) {
    return res.render('index.html')
}
function pageStudy(req, res) {
    const filters = req.query
    return res.render('study.html', {proffys, filters, subjects, weekdays})
}
function pageGiveClasses(req, res) {
    const data = req.query

    // se tiver dados (data)
    const isNotEmpty = Object.keys(data).length > 0
    if (isNotEmpty) {

        data.subject = getSubject(data.subject)
    // adicionar data a lista de proffys
        proffys.push(data)

        return res.redirect('/study')
    }

    // se não, mostrar a página
    return res.render('give-classes.html', {subjects, weekdays})
}

    // servidor
const express = require('express')
const server = express()

    // configuração do nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true, 
});

    // funcionalidade do express / configuração do servidor
server.use(express.static('public'))
    // configuração dos arquivos estáticos tais como imagens, css e scripts

    // configuração da rota .get
.get('/', pageLanding)
.get('/study', pageStudy)
.get('/give-classes', pageGiveClasses)

    // o servidor está retornando esses arquivos

.listen(5500)
    // rodando o servidor
