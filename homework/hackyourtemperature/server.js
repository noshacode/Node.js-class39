import express from 'express';

const app = express(); 
app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello from backend to frontend!');
});


app.post('/weather', (req, res) => {
    const city = req.body.cityName;
    res.send(city);
});


app.listen(3000, () => {
    console.log("App running on port 3000");
});