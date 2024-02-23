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
      
        <main className="">
  <div className='max-w-[1300px] mx-auto'>
<div className='pt-[50px] flex justify-center items-center gap-6 mb-20'><img className='md:w-auto w-[3vw]' src='circle.svg'></img><h1 className='font-cabinet font-medium md:text-[62px] lg:text-[96px] sm:text-[40px] text-[27px]'>Contact</h1><img className='rotate-180 md:w-auto w-[3vw]' src='circle.svg'></img></div>

        <div className='flex justify-evenly items-center flex-col-reverse sm:flex-row gap-5 sm:gap-0 mb-[50vh]'>
            
            
        <div className="flex flex-col justify-center items-center">
                <h2 className="font-bold font-cabinet text-[25px] text-black text-center border-b-2 border-[#85856C] pb-[0px] mb-3">Location</h2>
                <p className="font-cabinet test-[15px] text-center">Ithaca, New York</p>
                <p className="font-cabinet test-[15px] text-center">{time}</p>
            </div>
            
            


            <div className="flex flex-col justify-center items-center">
                <h2 className="font-bold font-cabinet text-[25px] text-black text-center border-b-2 border-[#85856C] pb-[0px] mb-3">Contact Details</h2>
                <a href="mailto:aaa384@cornell.edu" className="font-cabinet test-[15px] text-center">aaa384@cornell.edu</a>
                <p className="font-cabinet test-[15px] text-center">+1 (929)-312-9571</p>
            </div>
            
            
            
            <div className="flex flex-col justify-center items-center">
                <h2 className="font-bold font-cabinet text-[25px] text-black text-center border-b-2 border-[#85856C] pb-[0px] mb-3">Socials</h2>
                <a href="https://www.linkedin.com/in/ahmed-abdulla-1aa908253/" className="font-cabinet text-[15px] text-center relative group">
                Linkedin
                <span className="absolute inset-x-0 bottom-0 w-full h-0.5 bg-black transform origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></span>
              </a>
              <a href="https://github.com/ahmed-52" className="font-cabinet text-[15px] text-center relative group">
                Github
                <span className="absolute inset-x-0 bottom-0 w-full h-0.5 bg-black transform origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></span>
              </a>
            </div>
            
        </div>

        



        <div className="mt-[200px] mb-5 flex justify-center items-center flex-col">

          <p className='font-general'>© {currentYear} Ahmed Abdulla. All rights Reserved.</p></div>
        </div>



        </main>
  
    )
}