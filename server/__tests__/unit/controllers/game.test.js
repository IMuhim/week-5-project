const gameController = require("../../../controllers/game")
const {Questions, Answers} = require("../../../models/Game");
const { json } = require("express");

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockEnd = jest.fn();

const mockStatus = jest.fn(() => ({
    send: mockSend,
    json: mockJson,
    end: mockEnd
}));

const mockRes = { status: mockStatus };

describe("Game controller", () => {
    
    beforeEach(() => jest.clearAllMocks());
    afterAll(() => jest.resetAllMocks());

    describe("show", () => {

        let testQuestion, mockReq;

        beforeEach(() => {
            testQuestion = { question_id: 1, question_text: "Test question", subject_id: 2 };
            mockReq = { query: { subject_id: 1 } };
        })

        it("should return an array of objects with a status code of 200", async () => {
            jest.spyOn(Questions, "getAllBySubjectId").mockResolvedValue([testQuestion]);

            await gameController.show(mockReq, mockRes);

            expect(Questions.getAllBySubjectId).toHaveBeenCalledTimes(1);
            expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockJson).toHaveBeenCalledWith([testQuestion]);
        });

        it("should return an Error of 404 if no questions are found", async () => {
            jest.spyOn(Questions, "getAllBySubjectId").mockRejectedValue(new Error("No"));

            await gameController.show(mockReq, mockRes);

            expect(Questions.getAllBySubjectId).toHaveBeenCalledTimes(1);
            expect(mockStatus).toHaveBeenCalledWith(404);
            expect(mockJson).toHaveBeenCalledWith({ error: "No"});
        });
    })

    describe("pull", () => {
        
        let testAnswers, mockReq

        beforeEach(() => {
            testQuestion = [
            { answer_id: 1, answer_text: "Test answer 1", is_correct: true, question_id: 1 },
            { answer_id: 2, answer_text: "Test answer 2", is_correct: false, question_id: 1 },
            { answer_id: 3, answer_text: "Test answer 3", is_correct: false, question_id: 1 },
            { answer_id: 4, answer_text: "Test answer 4", is_correct: false, question_id: 1 }
            ];
            mockReq = { params: { question_id: 1 } };
        })

        it("should return an array of objects with a status code of 200", async () => {
            jest.spyOn(Answers, "getAnswersByQuestionId").mockResolvedValue([testAnswers]);

            await gameController.pull(mockReq, mockRes);

            expect(Answers.getAnswersByQuestionId).toHaveBeenCalledTimes(1);
            expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockJson).toHaveBeenCalledWith([testAnswers]);
        });

        it("should return an Error of 404 if no answers are found", async () => {
            jest.spyOn(Answers, "getAnswersByQuestionId").mockRejectedValue(new Error("No"));

            await gameController.pull(mockReq, mockRes);

            expect(Answers.getAnswersByQuestionId).toHaveBeenCalledTimes(1);
            expect(mockStatus).toHaveBeenCalledWith(404);
            expect(mockJson).toHaveBeenCalledWith({ error: "No"});
        });
    });
});