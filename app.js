console.log('Hello world');
const ZoneAPI = require('./zone')
//const zipInput = document.getElementById('zipInput')
//const submitButton = document.getElementById('submitButton')
//const resultContainer = document.getElementById('resultContainer')
const express = require('express'),
app = express()

const router = express.Router();

router.get('/', function (req, res, next){
    res.send('Tomato');
});

app.use('/api/', router);

const PORT = 3000


const asyncApiCall = async() =>{
    const response = await
    ZoneAPI.getZone(40217)
    console.log(response.data)
}

//submitButton.addEventListener('click', async() => {
//    let zipcode = zipInput
//    const response = await ZoneAPI.getZone(zipcode)
//    console.log(response.data)
//    return response
//})

asyncApiCall()

app.listen(PORT, ()=>{
    console.log(`Listening on Port: ${PORT}`)
})

