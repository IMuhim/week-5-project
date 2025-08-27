const e = require("express");
const db = require("/server/db/connect.js");
const{ Questions } = require("/server/models/Game.js");
const{ Answers } = require("/server/models/Game.js");

describe("Questions", () => {

    describe("getAllBySubjectId", () => {

        it("Gives all questions with matching subject ID", async () => {
            // ARRANGE 
            const mockQuestion = [ 
                {question_id: 1, question_text: "Mock test 1", subject_id: 1 },
                {question_id: 2, question_text: "Mock test 2", subject_id: 1 },
                {question_id: 3, question_text: "Mock test 3", subject_id: 1 }
            ];
            jest.spyOn(db, "query").mockResolvedValueOnce({ rows: mockQuestion });
            // ACT
            const result = await Questions.getAllBySubjectId(1);
            // ASSERT
            expect(result).toHaveLength(3);
            expect(result[0]).toHaveProperty("question_id");
            expect(result[0]).toHaveProperty("question_text");
            expect(result[0]).toHaveProperty("subject_id");
            expect(result.every(q => q.subject_id === 1)).toBe(true);
            expect(db.query).toHaveBeenCalledWith('SELECT * FROM questions WHERE subject_id = $1', [1]);
        })

        it("Should return an Error when no questions with this subject ID are found", async () => {
            // ARRANGE 
            jest.spyOn(db, "query").mockResolvedValueOnce({ rows: [] })
            // ACT
            await expect(Questions.getAllBySubjectId(9999)).rejects.toThrow("Unable to locate questions with that subject id")
            // ASSERT
        })
    })

    describe("getSubjectById", () => {

        it("Gives subject name from subjects with matching subject_id", async () => {
            const mockSubject = [{ subject_id: 1, subject_name: "Mock subject" }];
            jest.spyOn(db, "query").mockResolvedValueOnce({ rows: mockSubject });
            const result = await Questions.getSubjectById(1);
            expect(result).toBe("Mock subject");
            expect(db.query).toHaveBeenCalledWith('SELECT subject_name FROM subjects WHERE subject_id = $1', [1]);
        })

        it("Should throw Error when a subject with this id is not found", async () => {
            jest.spyOn(db, "query").mockResolvedValueOnce({ rows: [] });
            await expect(Questions.getSubjectById(9999)).rejects.toThrow("Unable to to locate subject with that id");
        })
    })
})
