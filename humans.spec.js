const supertest = require("supertest");

const server = require("./api/server")
const db = require("./data/dbconfig");


describe('server.js', () => {

    beforeEach(async () => {
        await db('humans').truncate();
    })

    describe('GET /api/humans', () => {
        it('should return 200 ok', () => {
            return supertest(server)
                .get('/api/humans')
                .then(res => {
                    expect(res.status).toBe(200)
                })
        })
    })
    it("should return api: up", () => {
        return supertest(server)
            .get("/")
            .then(res => {
                // jest assertion
                expect(res.body.api).toBe("up");
                expect(res.body).toEqual({ api: "up" });
            });
    });
    it("should return JSON", () => {
        return supertest(server)
            .get("/")
            .then(res => {
                // jest assertion
                expect(res.type).toMatch(/json/i);
            });
    });


});

describe("POST /humans", () => {
    it("should save the human", () => {
        const name = "fred";

        return supertest(server)
            .post("/api/humans")
            .send({name})
            .then(res => {
                expect(res.body.name).toBe(name);
            });
    });
});




