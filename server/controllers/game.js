const Question = require('../models/Game')

async function show(req, res){
    try{
        let id = req.body.id
        const questions = await Question.getAllBySubjectId(id)
        res.stauts(200).json(questions)
    }catch(err){
        res.status(404).json({ error: err.message })
    }
}


module.exports = { show }
