const { response } = require('express');
const db = require('../db/connect')

class Questions{
    constructor({question_id, question_text, subject_id}){
        this.question_id = question_id
        this.question_text = question_text
        this.subject_id = subject_id
    }

    static async getAllBySubjectId(subjectid){
        const response = await db.query('SELECT * FROM questions WHERE subject_id = $1', [subjectid])
        if(response.rows.length === 0){
            throw new Error("Unable to locate questions with that subject ID")
        }
        
        //For loop to ensure all questions stored on the response object are returned as an instance of Question class
        for(let i = 0; i< response.rows.length; i++){
            return new Questions(response.rows)
        }

    }




}



module.exports = Questions