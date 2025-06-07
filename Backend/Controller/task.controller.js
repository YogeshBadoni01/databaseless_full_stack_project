import {inMemoryTask} from '../index.js'
import { APIResponse } from '../utils/APIResponse.js'
import { APIError } from '../utils/APIError.js'

export const getAllTask = (req,res,next) => {

    const {page =1,limit =10} =req.query

    if(page <=0 &&  limit <= 0){
        throw new APIError(403,"please fill correct page and limit")
    }

    const startIn =(page-1)*limit
    const endIn = startIn + limit
    const showData = inMemoryTask.slice(startIn,endIn)
    const totalItems= inMemoryTask.length
    const totalPage = Math.floor(totalItems/limit);


    if(showData && showData.length > 0 ){  
        // console.log(showData,"gettask")
        return res.status(200).json(new APIResponse(200,{showData,currentPage:page,totalItems,totalPage},"tasks gets successfully"))
    } else {
        // console.log("gettask not found")
        throw new APIError(404,"tasks not found")
    }
}
export const getTask = (req,res,next) => {
    const {id} =req.params
    
    if(!id){
            throw new APIError(404,"Id is not valid or found")
        }
        
        const task = inMemoryTask.find(task=>task.id== id)
        
        if(task){
            return res.status(200).json(new APIResponse(200,task,"task gets successfully"))
        } else {
            throw new APIError(404,`${id} is is not found`)

    }


}
export const setTask = (req,res) => {
    const {name,email,pNumber} = req.body

    if( !name || !email || !pNumber){
        throw new APIError(400,"All field are requied")
    }

    const findByemail = inMemoryTask.find(task => task.email === email)
    const findByPNum = inMemoryTask.find(task => task.pNumber === pNumber)

    // if( findByPNum && findByemail){
    //     throw new APIError(409,"email and phone number already exist")
    // }

    const newid = Math.floor(Date.now() + Math.random() * 1000);
    const createAt = new Date().toISOString()   
    const newformData = {
        id:String(newid),
        name,
        email,
        pNumber,
        createAt,
    }

    if(!newformData){
        throw new APIError(500,"Data not store server error")
    }


    inMemoryTask.push(newformData)
    console.log(newformData.id,"is genrated successfully")


    return res.status(200).json(new APIResponse(201,newformData,"form's data add to memory"))

}
export const updateTask = (req,res) => {

    const {id} =req.params;
    
    const {name,email,pNumber} =req.body;

    if(!id){
        throw new APIError(404,"id is not found")
    }
    
    const taskfind = inMemoryTask.findIndex(task => task.id === id)
    
    console.log(inMemoryTask,"inMemoryTask \n",taskfind,"taskfind \n",id,"id\n")
    if(taskfind !== -1){
        inMemoryTask[taskfind] = {...inMemoryTask[taskfind],
            name,
            email,
            pNumber,
            updateAt: new Date().toISOString(),
        }
        return res.status(200).json(new APIResponse(200, taskfind, "Task updated successfully"));
    }
    else {
        throw new APIError(500,`task not update of ${id}`)
    }
} 
export const deleteTask = (req,res) => {
    const {id} = req.params;

    console.log(`task  found ${id}`)
    if(!id){
        throw new APIError(404,`task not found ${id}`)
    }

    // console.log(inMemoryTask,"inMemoryTask")
    // const deltedTaskremove = inMemoryTask.filter(task => task.id !== id)
    
    // console.log(inMemoryTask.length,inMemoryTask,"after deletedtsk")
    // console.log(deltedTaskremove.length, deltedTaskremove,"after deletedtsk")

    console.log("ID Type:", typeof id);
console.log("Task ID Type:", typeof inMemoryTask[0]?.id); // Ensure there's data


    if (!Array.isArray(inMemoryTask) || inMemoryTask.length === 0) {
        throw new APIError(500, "Task list is empty or not initialized.");
    }
    

    const findObjectIndex = inMemoryTask.findIndex(task => task.id  === id.toString())

    console.log(findObjectIndex,"is findObjectIndex value")
    if(findObjectIndex !== -1){
        inMemoryTask.splice(findObjectIndex,1)
        return res.status(200).json(new APIResponse(200, inMemoryTask, "Task delted successfully"));
    } else {
        throw new APIError(500,`task not deleted of ${id}`)
    }
    // inMemoryTask=deltedTaskremove
    // else {
    // }

}
