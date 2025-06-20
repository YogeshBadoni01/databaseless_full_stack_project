
import axios from 'axios'

// const API = axios.create({
//     // baseURL:"http://localhost:5050/api/v1/tasks"
// });

<<<<<<< HEAD
=======
    
>>>>>>> e4a2527dad8903b045afae0d2220a0227bb92775
const backendLink = "https://databaseless-full-stack-project-backend.onrender.com"
const API = axios.create({
    baseURL:`${backendLink}/api/v1/tasks`
});

export const getAllTask = (page=1,limit=10) => API.get(`/?page=${page}&limit=${limit}`);
export const getTask = (id) => API.get(`/${id}`);
export const setTask = (data) => API.post("/",data);
export const updateTask = (id,data) => API.patch(`/${id}`,data);
export const deleteTask = (id) => API.delete(`/${id}`);
