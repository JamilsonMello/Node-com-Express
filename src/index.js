const express = require('express')

const server = express()

server.use(express.json())

// Query params = /users?name=jamilson
// Route params = /users/:id
// Request body = { "name": "jamilson", "idade": 23}

const data = { user: [] }

server.use((req, res, next) => {
    // MIDDLEWARE
    // Aqui podemos fazer as Verificações Necessárias
    
    return next()
})

server.get('/users', (req, res) => {
    return res.json({ data })
})

server.get('/users/:id', (req, res) => {
    const { id } = req.params
    return res.json({ 'user': `usuario ${data.user[id]}` })
})

server.post('/users', (req, res) => {
    const { name } = req.body

    data.user.push(name)

    return res.json({ data })
})

server.put('/users/:index', (req, res) => {
    const { index } = req.params
    const { name } = req.body
    
    data.user[index] = name

    return res.json({ data })
})

server.delete('/users/:index', (req, res) => {
    const {index } = req.params

    data.user.splice(index, 1)

    return res.json({ 'user': 'user was deleted' })
})

server.listen(3000)
