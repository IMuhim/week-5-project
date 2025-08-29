
// const request = require("supertest");
// const app = require("../app"); 
// const Logins = require("../models/Logins");


// jest.mock("../models/Logins");

// describe("POST /auth/login", () => {

//     beforeEach(() => {
//         jest.clearAllMocks();
//     });

//     test("Login succeeds with correct credentials", async () => {
      
//         Logins.findOne.mockResolvedValue({
//             id: 1,
//             username: "testuser",
//             password: "password123"
//         });

//         const res = await request(app)
//             .post("/auth/login")
//             .send({ username: "testuser", password: "password123" });

//         expect(res.statusCode).toBe(200);
//         expect(res.body).toEqual({
//             message: "Login successful",
//             userId: 1
//         });
//     });

//     test("Login fails with wrong password", async () => {
//         Logins.findOne.mockResolvedValue({
//             id: 1,
//             username: "testuser",
//             password: "password123"
//         });

//         const res = await request(app)
//             .post("/auth/login")
//             .send({ username: "testuser", password: "wrongpass" });

//         expect(res.statusCode).toBe(401);
//         expect(res.body).toEqual({ message: "Invalid credentials" });
//     });

//     test("Login fails with non-existent user", async () => {
//         Logins.findOne.mockResolvedValue(null);

//         const res = await request(app)
//             .post("/auth/login")
//             .send({ username: "fakeuser", password: "password123" });

//         expect(res.statusCode).toBe(401);
//         expect(res.body).toEqual({ message: "Invalid credentials" });
//     });

//     test("Login fails when username or password is missing", async () => {
//         const res = await request(app)
//             .post("/auth/login")
//             .send({ username: "testuser" }); 

//         expect(res.statusCode).toBe(400);
//         expect(res.body).toEqual({ message: "Username and password are required" });
//     });

// }); 