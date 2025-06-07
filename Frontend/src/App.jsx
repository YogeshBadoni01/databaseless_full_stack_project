import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import JoinUs from './components/JoinUs'
import Featurs from './components/Featurs'
import TestimonialCarousel from './components/TestimonialCarousel'
import Form from './components/Form'
import { setTask } from './api'

function App() {

  const [isOpen,setIsOpen] = useState(false)
  const[formData,setFormData] = useState([])

  const handleFormSubmit = async (newformData) => {
    
    await setTask(newformData)
    .then(res=>{
      console.log(res.data.data,"res")
      setFormData(prev =>[...prev, res.data.data]);
      console.log("when id is added" ,res.data.data.id)

    }).catch(err=>{
      console.log("when set the form error",err)
    })
  };

  // console.log(newf,"front end")

  const putTask = () => {
    }

    //  useEffect(() => {
    //   putTask()
    //   }, [formData])

  return (
    <>
    <div className="font-[Raleway] ">
      <Navbar/>
      <Hero  onSubmit={handleFormSubmit} />
      <Featurs/>
      <TestimonialCarousel/>
      <JoinUs/>
      <Form formData={formData}/>
      <Footer/>
    </div>
    </>
  )
}

export default App
