import express from "express";
import { API_KEY } from "./sources/keys.js";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
	res.send("hello from backend to frontend!");
});

app.post("/weather", async (req, res) => {
	const city = req.body.cityName;
	if (city) {
		const fetchData = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`
		);
		const data = await fetchData.json();
		console.log("what is dataaaaa ",data);

		if(data.cod === 200){
            res.json({weatherText: `${data.name} is  ${data.main.temp} degrees`});
        }else{
            res.status(404).json({ weatherText: "CityName is not found!" });
        }
		

	} else {
		res.status(400).json({ weatherText: "CityName is not found!" }); //send
	}
});

app.listen(3000, () => {
	console.log("App running on port 3000");
});
