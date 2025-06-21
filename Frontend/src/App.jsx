import React, { Suspense,  useState } from 'react'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
// import JoinUs from './components/JoinUs'
// import TestimonialCarousel from './components/TestimonialCarousel'
// import Form from './components/Form'
// import Hero from './components/Hero'
// import Featurs from './components/Featurs'
import { setTask } from './api'

const Hero = React.lazy(()=>import('./components/Hero'))
const Featurs = React.lazy(()=>import('./components/Featurs'))
const TestimonialCarousel = React.lazy(()=>import('./components/TestimonialCarousel'))
const Navbar = React.lazy(()=>import('./components/Navbar'))
const Form = React.lazy(()=>import('./components/Form'))
const JoinUs = React.lazy(()=>import('./components/JoinUs'))
const Footer = React.lazy(()=>import('./components/Footer'))


function App() {

  // const [isOpen,setIsOpen] = useState(false)
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

  // const putTask = () => {
  //   }

    //  useEffect(() => {
    //   putTask()
    //   }, [formData])

  return (
    <>
    <div className="font-[Raleway] ">
      <Suspense fallback = {<div>Loading...</div>}>
      <Navbar/>
      <Hero  onSubmit={handleFormSubmit} />
      <Featurs/>
      <TestimonialCarousel/>
      <JoinUs/>
      <Form formData={formData}/>
      <Footer/>
      </Suspense>
    </div>
    </>
  )
}

export default App
