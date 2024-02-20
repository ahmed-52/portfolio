import React, { useEffect, useState } from 'react';
export default function Footer() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());



    useEffect(() => {
        setInterval(() => {
          setTime(new Date().toLocaleTimeString());
        }, 1000);
      });

      useEffect(() => {
        const updateYear = () => {
          setCurrentYear(new Date().getFullYear());
        };
    
        // Update the year on mount
        updateYear();
    
        // Set up an interval to update the year every 1 minute (adjust as needed)
        const intervalId = setInterval(updateYear, 60000);
    
        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
      }, []);



    return(
      
        <main className="bg-white">
  <div className='max-w-[1300px] mx-auto'>
<div className='pt-[50px] flex justify-center items-center gap-6 mb-20'><img className='md:w-auto w-6' src='circle.svg'></img><h1 className='font-cabinet font-medium md:text-[62px] lg:text-[96px] sm:text-[40px] text-[27px]'>Contact</h1><img className='rotate-180 md:w-auto w-6' src='circle.svg'></img></div>

        <div className='flex justify-evenly items-center'>
            
            
            <div className="flex flex-col justify-center items-center">
                <h2 className="font-bold font-cabinet text-[25px] text-black text-center">Contact Details</h2>
                <a href="mailto:aaa384@cornell.edu" className="font-cabinet test-[15px] text-center">aaa384@cornell.edu</a>
                <p className="font-cabinet test-[15px] text-center">+1 (929)-312-9571</p>
            </div>
            
            
            <div className="flex flex-col justify-center items-center">
                <h2 className="font-bold font-cabinet text-[25px] text-black text-center">Location</h2>
                <p className="font-cabinet test-[15px] text-center">Ithaca, New York</p>
                <p className="font-cabinet test-[15px] text-center">{time}</p>
            </div>
            
            
            <div className="flex flex-col justify-center items-center">
                <h2 className="font-bold font-cabinet text-[25px] text-black text-center">Socials</h2>

                    <div className='flex justify-center items-center'><img className='' src='linkedin.svg'></img><a href='https://www.linkedin.com/in/ahmed-abdulla-1aa908253/' className="-mb-2 font-cabinet test-[15px] text-center "> Linkedin</a></div>
                    <div className='flex justify-center items-center'><img src='insta.svg'></img><a href='https://www.instagram.com/ahmed.veo/' className="font-cabinet test-[15px] text-center ">  Instagram</a></div>

            </div>
        </div>

        




        <div className="mt-[200px] mb-5 flex justify-center items-center"><p className='font-bold font-general'>© {currentYear} Ahmed Abdulla. All rights Reserved.</p></div>
        </div>
        </main>
  
    )
}