const express = require('express')
const path = require('path')


const app = express()
app.use(express.static(path.join(__dirname, '../public')))


app.get('/help', (req, resp) => {
    resp.send([{
        name: 'Andrew'
    },
{name: 'Sarah'}])
})
app.get('/about', (req, resp) => {
    resp.send('<h1>About</h1>')
})
app.get('/weather', (req, resp) => {
    resp.send({forecast: ' I am snowing',
location: 'I am in Boston'})
})

app.listen(3000, () => { console.log('i am running') })