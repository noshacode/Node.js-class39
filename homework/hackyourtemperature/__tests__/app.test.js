import app from "../app.js";
import supertest from "supertest";

const request = supertest(app);

describe("GET /", () => {
	it("should res back hello", async () => {
		const response = await request.get("/");

		expect(response.statusCode).toBe(200);
    expect(response.text).toBe("hello from backend to frontend!")
	});
});

describe("POST /weather", () => {
	it("should have city name ", async () => {
		const response = await request.post("/weather").send({"cityName":"Aden"});

		expect(response.statusCode).toBe(200);
    expect(response.text).toContain("Aden")
	});
  it("we dont have city name ", async () => {
		const response = await request.post("/weather");

		expect(response.statusCode).toBe(400);
    expect(response.text).toContain("CityName is not found!")
	});
  it("city name is gibberish", async () => {
		const response = await request.post("/weather").send({"cityName":"trasrgdgbdio"});
  
		expect(response.statusCode).toBe(404);
    expect(response.text).toContain("CityName is not found!")
	});
});
