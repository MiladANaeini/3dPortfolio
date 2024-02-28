import React, { useState,useRef, Suspense } from 'react';
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import Toyota from '../models/Toyota'
import Loader from '../components/Loader'
const Contact = () => {
  const [form, setForm] = useState({name: '', email: '', message: ''})
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('idle')

  const formRef = useRef(null);
  const handleChange = (e) =>{
    setForm({...form , [e.target.name]: e.target.value})
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('run')
    
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Milad",
        from_email: form.email,
        to_email: 'milad.naeini11@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
    ).then(()=>{
      setIsLoading(false)
      setForm({name:'',email:'',message:''});
    }).catch((error)=>{
      setIsLoading(false);
      setCurrentAnimation('idle')
      console.log(error)
    })
  };
  const handleFoucs = () => setCurrentAnimation('fly');
  const handleBlur = () => setCurrentAnimation('idle');
  return (
    
    <section className='relative flex lg:flex-row flex-col max-container '>
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>
        <form className='w-full flex flex-col gap-7 my-14'
        onSubmit={handleSubmit}
        >
          <label className='text-black-500 font-semibold'>
            Name
            <input
            type='text'
            name='name'
            className='input'
            placeholder='Peter'
            required
            value={form.name}
            onChange={handleChange}
            onFocus={handleFoucs}
            onBlur={handleBlur}
            >
            </input>
          </label>
          <label className='text-black-500 font-semibold'>
            Email
            <input
            type='email'
            name='email'
            className='input'
            placeholder='Peter@email.com'
            required
            value={form.email}
            onChange={handleChange}
            onFocus={handleFoucs}
            onBlur={handleBlur}
            >
            </input>
          </label>
          <label className='text-black-500 font-semibold'>
            Message
            <textarea
            type='text'
            name='message'
            className='input'
            placeholder="Let us have a conversation"
            required
            value={form.message}
            onChange={handleChange}
            onFocus={handleFoucs}
            onBlur={handleBlur}
            >
            </textarea>
          </label>
          <button
          type='submit'
          className='btn'
          disabled={isLoading}
          onFocus={handleFoucs}
          onBlur={handleBlur}
          >
           {isLoading ? 'Sending..' : 'Submit Message'}
          </button>
        </form>
      </div>
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
       <Canvas
       camera={{
        position: [0,0,5],
        fov:74,
        near:0.1,
        far:1000
       }}
       >
        <directionalLight intensity={2.5} position={[0,0,1]}/>
        <ambientLight intensity={.5}/>
        <Suspense fallback={<Loader/>}>
          <Toyota
          currentAnimation={currentAnimation}
          position={[0.8,-1,0]}
          rotation={[0.3,-120,0]}
          scale={[1.3,1.3,1.3]}
          />
        </Suspense>
       </Canvas>
      </div>

    </section>
  )
}

export default Contact