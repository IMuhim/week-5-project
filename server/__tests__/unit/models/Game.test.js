const e = require("express");
const db = require("/server/db/connect.js");
const { Questions } = require("/server/models/Game.js");
const { Answers } = require("/server/models/Game.js");

describe("Questions", () => {
  describe("getAllBySubjectId", () => {
    it("Gives all questions with matching subject ID", async () => {
      // ARRANGE
      const mockQuestion = [
        { question_id: 1, question_text: "Mock test 1", subject_id: 1 },
        { question_id: 2, question_text: "Mock test 2", subject_id: 1 },
        { question_id: 3, question_text: "Mock test 3", subject_id: 1 },
      ];
      jest.spyOn(db, "query").mockResolvedValueOnce({ rows: mockQuestion });
      // ACT
      const result = await Questions.getAllBySubjectId(1);
      // ASSERT
      expect(result).toHaveLength(3);
      expect(result[0]).toHaveProperty("question_id");
      expect(result[0]).toHaveProperty("question_text");
      expect(result[0]).toHaveProperty("subject_id");
      expect(result.every((q) => q.subject_id === 1)).toBe(true);
      expect(db.query).toHaveBeenCalledWith(
        "SELECT * FROM questions WHERE subject_id = $1",
        [1]
      );
    });

    it("Should return an Error when no questions with this subject ID are found", async () => {
      jest.spyOn(db, "query").mockResolvedValueOnce({ rows: [] });
      await expect(Questions.getAllBySubjectId(9999)).rejects.toThrow(
        "Unable to locate questions with that subject id"
      );
    });
  });

  describe("getSubjectById", () => {
    it("Gives subject name from subjects with matching subject_id", async () => {
      const mockSubject = [{ subject_id: 1, subject_name: "Mock subject" }];
      jest.spyOn(db, "query").mockResolvedValueOnce({ rows: mockSubject });
      const result = await Questions.getSubjectById(1);
      expect(result).toBe("Mock subject");
      expect(db.query).toHaveBeenCalledWith(
        "SELECT subject_name FROM subjects WHERE subject_id = $1",
        [1]
      );
    });

    it("Should throw Error when a subject with this id is not found", async () => {
      jest.spyOn(db, "query").mockResolvedValueOnce({ rows: [] });
      await expect(Questions.getSubjectById(9999)).rejects.toThrow(
        "Unable to locate subject with that id"
      );
    });
  });
});

describe("Answers", () => {
  describe("getAnswersByQuestionId", () => {
    it("Resolves all answers from answers table with matching id", async () => {
      const mockAnswers = [
        { answer_text: "mock answer 1", is_correct: true, question_id: 1 },
        { answer_text: "mock answer 2", is_correct: false, question_id: 1 },
        { answer_text: "mock answer 3", is_correct: false, question_id: 1 },
        { answer_text: "mock answer 4", is_correct: false, question_id: 1 },
      ];

      jest.spyOn(db, "query").mockResolvedValueOnce({ rows: mockAnswers });
      const result = await Answers.getAnswersByQuestionId(1);

      expect(result).toHaveLength(4);
      expect(result[0]).toHaveProperty("answer_text");
      expect(result[0]).toHaveProperty("is_correct");
      expect(result[0]).toHaveProperty("question_id");
      expect(result.every((q) => q.question_id === 1)).toBe(true);
      expect(db.query).toHaveBeenCalledWith(
        "SELECT * FROM answers WHERE question_id = $1",
        [1]
      );
    });

    it("Should return an Error when no asnwers with this question_id are found", async () => {
      jest.spyOn(db, "query").mockResolvedValueOnce({ rows: [] });
      await expect(Answers.getAnswersByQuestionId(9999)).rejects.toThrow(
        "Unable to locate answers with that question id"
      );
    });
  });
});
