const express =require('express')
const app = express()
const axios = require('axios')
const port = 8081
const cors = require('cors')

app.use(cors())
app.get('/', (req,res) => {
    res.send("hello")
})

app.get('/gempa',async (req,res) => {

    try {
		const response = await axios({
			url: "https://data.bmkg.go.id/DataMKG/TEWS/gempaterkini.json",
			method: "get",
		});
		res.status(200).json(response.data);
	} catch (err) {
		res.status(500).json({ message: err });
} 
})



app.listen(port , () => {
    console.log('app berjalan di port'+port)
})