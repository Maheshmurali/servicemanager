import React, { useState } from 'react'
import Header from './Header'
import emailjs from 'emailjs-com'

function Forms() {
  const second= new Date().getSeconds()
  const date = new Date().getDate()
  const month = new Date().getMonth()
  const year = new Date().getFullYear()
   const jobid =second.toString()+~+date.toString()+month.toString()+year.toString()
  const [inputs , setInputs] = useState({jobid:jobid});
  const handleChanges = (event)=>{
      const formFielsName = event.target.name;
      const formFieldValue = event.target.value;
      setInputs({...inputs,[formFielsName]:formFieldValue});
  }
  const handleSubmit = (event)=>{
    event.preventDefault();
    emailjs.send('service_egnrbzk', 'template_oj4ceih',inputs,'Xlh_PvYo1SRuKz9tj' ).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
      },
      (error) => {
        console.log('FAILED...', error);
      },
    );
    setInputs({});
    
   };
  
  return (
    <div className='pt-32 md:pl-24'>
      <Header />
        <form action="" onSubmit={handleSubmit} className='border-2 rounded-md p-6 md:pl-24 md:w-8/12 md:ml-48 shadow-lg bg-slate-100 flex flex-wrap justify-evenly gap-8 md:m-24 md:-mt-2 mt-2'>
      <div>
        <input onChange={handleChanges} name='customername' value={inputs.customername || ''} placeholder='Customer Name' type="text"  className='border-2 rounded-lg p-2 mr-32 md:mr-0 md:w-96'/>
      </div>
      <div>
        <input onChange={handleChanges} name='sitename' value={inputs.sitename || ""} placeholder='SiteName' type="text" className='border-2 rounded-lg p-2 md:w-96 mr-32 md:mr-0'/>
      </div>
      <div>
        <input onChange={handleChanges} name='location' value={inputs.location || ""}  placeholder='Location' type="text" className='border-2 rounded-lg p-2 md:w-96 mr-32 md:mr-0'/>
      </div>
      <div>
        <input onChange={handleChanges} name='complant' value={inputs.complant || ""} placeholder='Customer Voice' type="text" className='border-2 rounded-lg p-2 md:w-96 mr-32 md:mr-0'/>
      </div>
      <div className='w-full'>
        <textarea onChange={handleChanges} name='changeditems' value={inputs.changeditems || ""} placeholder='Type Of Work,Items Changed'  id="" className='border-2 rounded-lg p-2 w-full'></textarea>
      </div>
      <div className='w-full'>
            <select onChange={handleChanges} value={inputs.status || ""} name="status" id="" className='border-2 rounded-lg p-2 md:w-96 cursor-pointer w-96'>
                <option value="">Work Status</option>
                <option value="complected">Complected</option>
                <option value="Pending">Pending</option>
            </select>
      <div>
        <input onChange={handleChanges} name='technicianname' value={inputs.technicianname || ""} placeholder='Technician Nmae' type="text" className='border-2 rounded-lg p-2 md:w-96 mr-32 md:mr-0'/>
      </div>
      </div>
      <button className='bg-yellow-400 p-3 w-24 rounded-lg cursor-pointer' type='submit'>Submit</button>
      </form>
      {console.log(inputs)}
    </div>
    
  )
}

export default Forms
