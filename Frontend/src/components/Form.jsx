import React, { useEffect, useState } from 'react';
import { deleteTask, getAllTask } from '../api';
import Update from './update'; 

const Form = ({formData}) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [personToEdit, setPersonToEdit] = useState(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  

  const findTask = async (page, limit = 10) => {
    setLoading(true);
    try {
      const res = await getAllTask(page, limit);
      setTasks(res.data.data.showData);
      setCurrentPage(res.data.data.currentPage);
      setTotalPage(res.data.data.totalPages || 1); 
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPage) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  const DeleteTask = async (id) => {
    try {
      await deleteTask(id);
      console.log("ID deleted successfully:", id);
      findTask(currentPage); 
    } catch (err) {
      console.error("Failed to delete ID:", err);
    }
  };

  const handleEditClick = (person) => {
    setPersonToEdit(person);          
    setIsUpdateModalOpen(true);      
  };

  const handleCloseUpdateModal = () => {
    setIsUpdateModalOpen(false); 
    setPersonToEdit(null);       
    findTask(currentPage);        
  };

  useEffect(() => {
    findTask(currentPage);
  }, [formData, currentPage]); 


  if (loading) {
    return <div className="p-6 text-center">Loading tasks...</div>;
  }

  return (
    <div className="p-6 overflow-x-scroll">
      <div className="">
        <h2 className="text-xl font-bold mb-4">Table of Details</h2>
        <div className="flex justify-start items-center gap-2 text-white mb-3">
          <button
            className='bg-themeBtnSecondary py-1 px-3 rounded-sm disabled:opacity-35'
            disabled={currentPage === 1} 
            onClick={handlePrevPage}
          >
            Prev Page
          </button>
          <button
            className='bg-themeBtnSecondary py-1 px-3 rounded-sm disabled:opacity-35'
            disabled={currentPage === totalPage} 
            onClick={handleNextPage}
          >
            Next Page
          </button>
        </div>
      </div>

      <table className="w-full bg-gray-200 text-gray-800">
        <thead className="bg-gray-300">
          <tr>
            <th className="p-3">Id</th>
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Phone Number</th>
            <th className="p-3">Manage</th>
          </tr>
        </thead>
        <tbody>
          {tasks?.map((person, index) => (
            <tr key={person.id} className={index % 2 === 0 ? "bg-gray-100 text-center" : "bg-transparent text-center"}>
              <td className="p-3">{person.id}</td>
              <td className="p-3">{person.name}</td>
              <td className="p-3">{person.email}</td>
              <td className="p-3">{person.pNumber}</td>
              <td className="p-3 flex justify-center gap-2.5">
              
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                  onClick={() => handleEditClick(person)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded"
                  onClick={() => DeleteTask(person.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isUpdateModalOpen && personToEdit && (
        <Update
          open={isUpdateModalOpen}
          setOpen={handleCloseUpdateModal} 
          taskData={personToEdit}         
          id={personToEdit.id}            
        />
      )}
    </div>
  );
};

export default Form;