const db = require("/server/db/connect.js");
const Questions = require("/server/models/Game.js");

describe("Questions", () => {

    describe("getAllBySubjectId", () => {

        it("Gives all questions with matching subject ID", async () => {
            // ARRANGE 
            const mockQuestion = [ 
                {question_id: 1, question_text: "Mock test 1", subject_id: 1 },
                {question_id: 2, question_text: "Mock test 2", subject_id: 1 },
                {question_id: 3, question_text: "Mock test 3", subject_id: 2 }
            ];
            jest.spyOn(db, "query").mockResolvedValueOnce({ rows: mockQuestion });
            // ACT
            const result = await Questions.getAllBySubjectId(1);
            // ASSERT
            expect(result).toHaveLength(2);
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
            await expect(Questions.getAllBySubjectId()).rejects.toThrow("Unable to locate questions with that subject id")
            // ASSERT
        })
    })
})