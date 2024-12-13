import React from 'react'
import { toast } from 'react-toastify';

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", '6aa44e5d-f8e8-42bf-a943-aed4e1dc4072');
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("");
        toast.success("Form Submitted Successfully")
        event.target.reset();
      } else {
        console.log("Error", data);
        toast.error(data.message);
        setResult("");
      }
    };

  return (
    <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact  
        <span className='underline underline-offset-4 decoration-1 under font-light'> With Us</span></h1>
      <p className='text-center text-gray-500 mb-12 mx-w-80 mx-auto'>
        Ready to make a move / Let's Bulid your future together</p>

        <form onSubmit={onSubmit} className='max-w-2xl pt-8 mx-auto text-gray-700'>
            <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 text-left">
                Your Name
                   <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2'
                   type="text" name='name' placeholder='Your Nmae' required/>
                </div>  
                <div className="w-full md:w-1/2 text-left md:pl-4">
                Your Email
                   <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2'
                   type="email" name='Email' placeholder='Your Email' required/>
                </div> 
            </div>
            <div className="text-left">
                message
                <textarea
                 className='w-full border border-gray-300 rounded px-4 mt-2 h-48 resize-none py-3 '
                 name='massage' placeholder='message' required></textarea>
            </div>
            <button className='bg-blue-600 text-white py-2 px-12 mb-10 rounded'>
              {result ? result :"Send Message"}
            </button>
        </form>
 

   </div>
  )
}

export default Contact
