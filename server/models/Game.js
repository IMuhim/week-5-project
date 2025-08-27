const { response } = require('express');
const db = require('../db/connect')

class Questions{
    constructor({question_id, question_text, subject_id}){
        this.question_id = question_id
        this.question_text = question_text
        this.subject_id = subject_id
    }

    static async getAllBySubjectId(subject_id){
        const response = await db.query('SELECT * FROM questions WHERE subject_id = $1', [subject_id])
        if(response.rows.length === 0){
            throw new Error("Unable to locate questions with that subject id")
        }
        
        return response.rows.map(row => new Questions(row))

    }

    static async getSubjectById(subject_id){
        const response = await db.query('SELECT subject_name FROM subjects WHERE subject_id = $1', [subject_id])
        if(response.rows.length === 0){
            throw new Error("Unable to to locate subject with that id")
        }
        return response.rows[0].subject_name
    }



}



class Answers{
    constructor({answer_id, answer_text, is_correct, question_id}){
        this.answer_id = answer_id
        this.answer_text = answer_text
        this.is_correct = is_correct
        this.question_id = question_id

    }


    static async getAnswersByQuestionId(question_id){
        const response = await db.query('SELECT * FROM answers WHERE question_id = $1', [question_id])
        if(response.rows.length === 0){
            throw new Error("Unable to locate answers with that question id")
        }
        
        return response.rows.map(row => new Answers(row))
        
        
    }
}



module.exports = { 
    Questions, 
    Answers,
}