//requirements
require('dotenv').config()
const URL = process.env.URI;
const PORT = process.env.PORT || 8000
const app = require('./app')
const mongoose = require('mongoose')
//dfinition du moteur de template
app.set('view engine','pug')
app.engine('pug', require('pug').__express)
// Etablire une connexion à la base de données
async function connDB(){
    try{
        const conn = await mongoose.connect(URL)
        console.log("connected!")
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}
connDB()
//Démarage du serveur su le le port : PORT dans .env
app.listen(PORT,()=>console.log(`http://localhost:${PORT}/posts`))