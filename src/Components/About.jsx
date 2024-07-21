import React, { useState } from 'react';
import emailjs from 'emailjs-com';
function About() {

  const [state,setState] = useState({})

   const Handlechanges = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setState({...state , [name]: value})
   };

   const handleSubmit = (event)=>{
    event.preventDefault();
    emailjs.send('service_egnrbzk', 'template_mbeqz55', state,'Xlh_PvYo1SRuKz9tj').then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
      },
      (error) => {
        console.log('FAILED...', error);
      },
    );
    setState({})
    
   };

   const handleClick =()=>{
    alert("Success")
   }

 
  return (
    <div className='pt-12 md:p-24'>
      <div className='w-full h-auto text-center '>
        <h2 className='text-lg underline'>Who We Are?</h2>
        <p className='text-wrap text-xl'>There are many variations of passages of Lorem Ipsum available, 
          but the majority have suffered alteration in some form, by injected humour,
           or randomised words which don't look even slightly believable.
            If you are going to use a passage of Lorem Ipsum, you need to 
            be sure there isn't anything embarrassing hidden in the middle of text.</p>
      </div>
      <div className='border-2 rounded-lg md:w-1/2 h-auto md:pl-28 p-8 md:ml-56 blure-md mt-8 text-cente bg-slate-200 shadow-lg'>
      <h3 className='ml-36'>GetTouch !</h3>
      <form action="" onSubmit={handleSubmit}>
      <div>
        <input onChange={Handlechanges} name='name' value={state.name || ''} className='border-2 rounded-md p-2 w-96 mt-6' placeholder='Name' type="text" />
      </div>
      <div className='mt-6'>
        <input onChange={Handlechanges} name='phone' value={state.phone || ''} type="tel" placeholder='Mobile Number' className='border-2 rounded-md w-96 p-2'/>
      </div>
      <div className='mt-6'>
        <input onChange={Handlechanges} name='place' value={state.place || ''} type="text" placeholder='Location Details ' className='border-2 rounded-md w-96 p-2'/>
      </div>
     
    
      <div className='mt-6'>
            <select onChange={Handlechanges} name="Type" value={state.Type || ''} id="" className='border-2 rounded-md w-96 p-2'>
                <option value={''}>Select</option>
                <option value={state.cctv}  >C C T V</option>
                <option value={state.inverter}  >Inverter</option>
                <option value={state.automation}  >Home Automation</option>
                <option value={state.amc}  >A M C Services</option>
            </select>
      </div>
      <button className='bg-yellow-400 p-2 w-24 mt-6 ml-32 rounded-md font-medium hover:cursor-pointer hover:bg-yellow-500' onClick={handleClick}>Submit</button>
      </form>
      </div>
    </div>
  )
}

export default About
