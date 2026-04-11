import React from 'react'

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';


const Hookcontact = () => {

    const schema = z.object({
  name: z.string().min(1, { message: 'Required' }),
  
  message: z.string().min(5, { message: 'Message should be at least 5 characters' }),
  email: z.string(),
});

    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

    const onSubmit =(data)=>{
        console.log(data);
    }
    
  return (
    <div className="w-100 h-screen flex flex-col gap-5">
      <div className="w-90 h-screen bg-slate-300 flex flex-col gap-5 ">
        <h1 className="text-3xl font-bold p-5 text-center">Hook Contact Page</h1>
        <form className=" flex flex-col gap-3 p-5 " onSubmit={handleSubmit(onSubmit)}>

        <div className="flex flex-col gap-5 p-2">
            <label htmlFor="name" className="text-xl ">Name:</label>
            <input type="text"  className=" border-2 py-2 pl-2 rounded-lg outline-none " {...register("name")}/>
            {errors.name?.message && <p>{errors.name?.message}</p>}
        </div>


        < div className="flex flex-col gap-5 p-2">
            <label htmlFor="email" className="text-xl ">Email:</label>
            <input type="email"  className=" border-2 py-2 pl-2 rounded-lg outline-none " {...register("email")} />
            {errors.email?.message && <p>{errors.email?.message}</p>}

        </div>


        <div className="flex flex-col gap-5 p-2">
            <label htmlFor="message" className="text-xl ">Message:</label>
            <input type="text"  className=" border-2 py-2 pl-2 rounded-lg outline-none " {...register("message")} />
            {errors.message?.message && <p>{errors.message?.message}</p>}
        </div>


        <div className="flex flex-col gap-5 p-2 w-full">
            <button type="submit" className="text-xl text-white bg-green-600 rounded-lg py-2 px-3">Submit</button>
        </div>

        </form>
      </div>
    </div>
  )
}

export default Hookcontact
