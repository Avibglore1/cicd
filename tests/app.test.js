
const request = require("supertest");
const app = require("../server.js");

describe("API Tests", ()=>{
    test("GET/should return message", async()=>{
        const res = await request(app).get("/");
        expect(res.body.message).toBe("Hello CI/CD 🚀");
    })
    test("GET/sum should return correct result", async()=>{
        const res = await request(app).get("/sum?a=2&b=3");
        expect(res.body.result).toBe(5);
    })
})