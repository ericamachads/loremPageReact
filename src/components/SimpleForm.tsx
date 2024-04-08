import React from 'react';
import { database } from '../firebase/firebase-config';
import { push, ref } from 'firebase/database';

interface FormData {
  name:string;
  email:string;
}

const SimpleForm = () => {
  const [formData, setFormData]=React.useState<FormData>({name:'',email:''});
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {id,value} = e.target;
    setFormData((prevData)=>({...prevData, [id]:value}))
  }
  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    push(ref(database,'post'),formData)
    .then((data)=>{
      console.log(data);
      setFormData({name:'',email:''});
      alert('Data sent successfully');
    })
    .catch((error)=>{
      console.error(error);
      alert('Try again!');
    })
  }
  return (
    <form className="simpleForm" onSubmit={handleSubmit}>
      <h2>Call user to action</h2>
      <input type="text" name="name" id="name" placeholder='Name' required onChange={handleChange} value={formData.name}/>
      <input type="email" name="email" id="email" placeholder='Email' required onChange={handleChange} value={formData.email}/>
      <button type="submit" className='buttonPrimary'>Send</button>
    </form>
  )
}

export default SimpleForm