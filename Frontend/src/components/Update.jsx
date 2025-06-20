import { Box, Modal } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getTask, updateTask } from '../api'

const Update = ({open,setOpen,id}) => {

    const [data ,setData] =useState({})
    const findTask = async() => {
      await getTask(id)
      .then(res => {setData(res.data.data)
      console.log(res.data.data,"getTask result")
     } )
    }

    const handleClose = ( ) => {
        setOpen(!open)
    }

    const handleSubmit = async (e ) => {
        e.preventDefault()

        await updateTask(id,data)
        .then(res => {
          console.log("data updated",res.data.data)
            setOpen(false)
            // setData()

        })
        .catch(err => {
            console.log("error when update task",err)
        })
    }

const handleChange = (e) => {
        const {name,value} = e.target
        setData( prevData => ({...prevData,  [name]: value }) );
console.log(data)
    }

    useEffect(() => {
        findTask();
    }, [])

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 569,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
      };

  return (
     <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="User Data"
        >
          <Box sx={style}>
            <h1>{data.id}</h1>
            <h2 className="font-semibold text-2xl leading-[100%]">
              Get Started Today!
            </h2>
            <h2 className="font-normal text-base leading-[100%] mt-[12px]">
              Fill in your details and take control of your tasks.
            </h2>
            <form className="text-base leading-[150%] mt-[12px]" onSubmit={handleSubmit}>
              <label className="font-medium " htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                margin="normal"
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 mb-2.5 bg-themeInput"
                value={data.name}
                required/>
              <label className="font-medium " htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                margin="normal"
                className="w-full p-3 border border-gray-300 mb-2.5 bg-themeInput"
                value={data.email}
              onChange={ handleChange}
              required />
              <label className="font-medium " htmlFor="Phone Number">
                Phone Number
              </label>
              <input
                type="text"
                name="pNumber"
                margin="normal"
                required
                onChange={ handleChange}
                className="w-full p-3 border border-gray-300 mb-2.5 bg-themeInput"
                value={data.pNumber}/>

              <button
                className=".button w-full mt-3 bg-themeBtnSecondary p-3 text-white  hover:opacity-85"
                type="submit">
                Update
              </button>
            </form>
          </Box>
        </Modal>
  )
}

export default Update