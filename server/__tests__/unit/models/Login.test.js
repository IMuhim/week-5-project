/
const request = require("supertest");
const app = require("../../../app"); /
const loginController = require("../../../controllers/login"); 

jest.mock("../../../controllers/login", () => ({
    create: jest.fn((req, res) => res.status(200).json({ message: "Called login create" }))
}));

describe("Login Controller", () => {
    it("should call the login create function and return 200", async () => {
        const res = await request(app)
            .post("/auth/login")  
            .send({ username: "test", password: "test123" });

        expect(res.status).toBe(200);
        expect(res.body).toEqual({ message: "Called login create" });
        expect(loginController.create).toHaveBeenCalled();
    });

    it("should handle missing body gracefully", async () => {
        const res = await request(app)
            .post("/auth/login")
            .send({}); 

        expect(res.status).toBe(200); 
        expect(res.body).toEqual({ message: "Called login create" });
        expect(loginController.create).toHaveBeenCalled();
    });
});
