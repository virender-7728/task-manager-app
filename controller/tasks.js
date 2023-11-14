
const Task = require('../models/tasks')

const getalltasks = async (req,res)=>{
    try {
        const tasks = await Task.find({})
        res.status(200).json({tasks})
    } catch (error) {
        res.status(404).json(error)
    }
}
const createtask = async (req,res)=>{
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
        
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
const gettask = async (req,res)=>{
    try {
        const {id:taskid} = req.params
        const task = await Task.findOne({_id:taskid})
        if(!task)
        return res.status(404).json({msg: `No task with id: ${taskid}`})

        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }    
}

const updatetask = async (req,res)=>{
  
    try {
        const {id:taskID} = req.params
        const task = await Task.findByIdAndUpdate({_id:taskID},req.body,{
            new:true,runValidators:true
        })       // id and the data 
        if(!task)
        return res.status(404).json({msg: `No task with id: ${taskID}`})

        return res.status(200).json({task})
    } catch (error) {
        res.status(500).json(error)
    }
}
const deletetask = async (req,res)=>{
    try {
        const {id:taskid} = req.params
        const task = await Task.findOneAndDelete({_id:taskid})
        if(!task)
        return res.status(404).json({msg: `No task with id: ${taskid}`})
    
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
module.exports = {
    getalltasks,
    createtask,
    gettask,
    updatetask,
    deletetask
}