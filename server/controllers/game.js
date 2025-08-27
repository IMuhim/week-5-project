const {Questions, Answers} = require('../models/Game')

async function show(req, res){
    try{
        const subject_id = req.query.id
        const questions = await Questions.getAllBySubjectId(subject_id)
        res.status(200).json(questions)
    }catch(err){
        res.status(404).json({ error: err.message })
    }
}

async function pull(req, res){
    try{
        const question_id = req.params.id
        const answers = await Answers.getAnswersByQuestionId(question_id)
        console.log(answers)
        res.status(200).json(answers)
    }catch(err){
        res.status(404).json({ error: err.message })
    }
}

async function getSubject(req, res){
    try{
        const subject_id = req.params.id
        const subject = await Questions.getAllBySubjectId(subject_id)
        res.status(200).json(subject)
    }catch(err){
        res.status(404).json({ error: err.message})
    }
}


module.exports = { show, pull, getSubject }
