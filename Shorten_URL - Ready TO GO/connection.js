const mongoose = require('mongoose')

async function connectMongoDB(url){
    mongoose.connect(url)
    .then(()=>{
        console.log("MongoDB Connected!!");
    })
    .catch((err)=>{
        console.log("MongoDB Connection Error!! ",err)
    })
}

module.exports = {connectMongoDB}