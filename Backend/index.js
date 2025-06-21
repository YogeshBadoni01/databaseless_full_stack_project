import express from 'express'
import TaskRouter from '../Backend/Router/task.routes.js'
import cors from 'cors'

const app = express()
const PORT = 5050;

// app.use(cors())
app.use(cors({
    // origin:  "http://localhost:5173",
    origin:  "https://databaseless-full-stack-project-frontend.onrender.com/",
    credentials: true, 
}));
app.use(express.json({limit:'16kb'}))
app.use(express.urlencoded({extended:true,limit:'16kb'}))

export let inMemoryTask = []


app.use("/api/v1/tasks",TaskRouter)

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});