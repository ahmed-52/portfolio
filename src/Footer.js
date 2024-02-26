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
<div className='pt-[50px] flex justify-center items-center gap-6 mb-20'><img alt='icon' className='md:w-auto w-[3vw]' src='circle.svg'></img><h1 className='font-cabinet font-medium md:text-[62px] lg:text-[96px] sm:text-[40px] text-[40px]'>Contact</h1><img className='rotate-180 md:w-auto w-[3vw]' alt='icon' src='circle.svg'></img></div>



    <div className='flex justify-center items-center'>
          <div className='w-[480px] h-[380px] bg-[#EEEEEE] shadow-md rounded-[20px] flex justify-start items-start flex-col pl-10 pt-5 gap-2'>
            <div className='flex justify-start items-center gap-3'><img alt='git profile pic' src='ahmedGit.png' className='rounded-full w-[68px]'></img><h2 className='font-semibold font-general text-[32px]'>Ahmed Abdulla</h2></div>
            
            
            <h2 className='text-start font-semibold font-general text-[24px]'>Location</h2>
            <div className="border-b border-[#4C4C4C] border-[2px] w-2/3"></div>
            <p className='text-start font-general font-medium'>Ithaca, New York<br></br>{time}</p>


            <h2 className='text-start font-semibold font-general text-[24px]'>Contact</h2>
            <div className="border-b border-[#4C4C4C] border-[2px] w-2/3"></div>
           <a className='text-start font-general font-medium m-0' href="mailto:aaa384@cornell.edu">aaa384@cornell.edu</a>
           <p className='text-start font-general font-medium '>+1 (929)-312-9571</p>


          <div className='flex gap-4 items-center'>
         <a href='https://github.com/ahmed-52'> <svg alr='github logo' width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 1.16667C10.6324 1.13245 7.38895 2.43671 4.98253 4.79282C2.57611 7.14892 1.20362 10.3641 1.16668 13.7317C1.17966 16.393 2.03578 18.9818 3.61209 21.1262C5.18839 23.2705 7.40377 24.8601 9.94001 25.6667C10.5817 25.7833 10.815 25.3983 10.815 25.06C10.815 24.7217 10.815 23.975 10.815 22.925C7.24501 23.6833 6.48668 21.245 6.48668 21.245C6.24903 20.4796 5.74378 19.8252 5.06335 19.4017C3.89668 18.6317 5.15668 18.6433 5.15668 18.6433C5.55994 18.6972 5.94576 18.8418 6.28521 19.066C6.62465 19.2903 6.90892 19.5885 7.11668 19.9383C7.47873 20.5661 8.0728 21.0267 8.77103 21.2209C9.46925 21.4151 10.2158 21.3274 10.85 20.9767C10.9152 20.3378 11.2046 19.7426 11.6667 19.2967C8.82001 18.9817 5.83335 17.9083 5.83335 13.09C5.80789 11.8331 6.2723 10.6156 7.12835 9.69501C6.73848 8.61592 6.78451 7.42737 7.25668 6.38167C7.25668 6.38167 8.34168 6.04334 10.7567 7.66501C12.8589 7.10482 15.0711 7.10482 17.1733 7.66501C19.6233 6.04334 20.6733 6.38167 20.6733 6.38167C21.1455 7.42737 21.1915 8.61592 20.8017 9.69501C21.6776 10.5988 22.1672 11.8081 22.1667 13.0667C22.1667 17.8967 19.1567 18.9583 16.3333 19.2733C16.6425 19.5735 16.8813 19.9384 17.0326 20.3418C17.1839 20.7453 17.2439 21.1773 17.2083 21.6067V25.0483C17.2083 25.0483 17.4417 25.7833 18.0833 25.655C20.6124 24.8435 22.8203 23.2535 24.3917 21.1122C25.9632 18.9708 26.8177 16.3877 26.8333 13.7317C26.7964 10.3641 25.4239 7.14892 23.0175 4.79282C20.6111 2.43671 17.3676 1.13245 14 1.16667Z" fill="black"/>
          </svg></a>


          <a href='https://www.linkedin.com/in/ahmed-abdulla-1aa908253/'><img  className='hover:cursor-pointer' src='link.svg' alt='linkedin logo'></img></a>



         <a href="mailto:aaa384@cornell.edu"><svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.25 0H3.75C2.75544 0 1.80161 0.434597 1.09835 1.20818C0.395088 1.98177 0 3.03098 0 4.125V17.875C0 18.969 0.395088 20.0182 1.09835 20.7918C1.80161 21.5654 2.75544 22 3.75 22H21.25C22.2446 22 23.1984 21.5654 23.9017 20.7918C24.6049 20.0182 25 18.969 25 17.875V4.125C25 3.03098 24.6049 1.98177 23.9017 1.20818C23.1984 0.434597 22.2446 0 21.25 0ZM20.4125 2.75L12.5 9.28125L4.5875 2.75H20.4125ZM21.25 19.25H3.75C3.41848 19.25 3.10054 19.1051 2.86612 18.8473C2.6317 18.5894 2.5 18.2397 2.5 17.875V4.46875L11.75 12.1C11.9664 12.2785 12.2295 12.375 12.5 12.375C12.7705 12.375 13.0336 12.2785 13.25 12.1L22.5 4.46875V17.875C22.5 18.2397 22.3683 18.5894 22.1339 18.8473C21.8995 19.1051 21.5815 19.25 21.25 19.25Z" fill="black"/>
</svg></a> 





          

          </div>


          </div>
      </div>








        <div className="mt-[200px] mb-5 flex justify-center items-center flex-col">

          <p className='font-general'>© {currentYear} Ahmed Abdulla. All rights Reserved.</p>
          </div>
        
        
        
        
        </div>



        </main>
  
    )
}