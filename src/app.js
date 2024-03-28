const express = require('express')
const path = require('path')
const hbs = require('hbs')


const app = express()
//Define path for express config
app.use(express.static(path.join(__dirname, '../public')))
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// handlebar engine set up
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)


app.get('', (req, resp) => {
    resp.render('index', { title: 'Weather App', name: 'Andrew Mead', footer:'I am foooter' })
})

app.get('/about', (req, resp) => {
    resp.render('about', { title: 'About', name: 'Andrew Mead12' , footer:'I am foooter'})
})

app.get('/help', (req, resp) => {
    resp.render('help', {
        helpText: 'This is some helpful text',
        title: 'Help',
        name: 'Timbora',
        footer:'I am foooter'        
    })
})

app.get('/weather', (req, resp) => {
    resp.send({
        forecast: ' I am snowing',
        location: 'I am in Boston'
    })
})


app.get('/help/*',(req,resp)=>{
resp.send('Help article not found')

})

app.get('*',(req,resp)=>{
    resp.render('404',{title: '404', name: 'Aj', errorMessage:'Page not found'})
    
    })
    
app.listen(3000, () => { console.log('i am running') })