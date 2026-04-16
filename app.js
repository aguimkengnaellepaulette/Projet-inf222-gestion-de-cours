const express =

require('express')

const app = express()
const PORT = 3000

app.use(express.json())

const courseRoutes =
require('./routes/courses')

app.get('/',(req,res)=>{
    res.send('API Gestion des cours ok')

})
app.get('/api/health',(req,res)=> {
    res.json({status: 'ok'})
})

app.use('/api/courses', courseRoutes);
app.listen(PORT,() => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`)
})