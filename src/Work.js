import './work.css'


export default function Work() {



    const handleClicks = (link) => {
        if (link === 'dalia') {
            window.open('https://daliahealth.com/')
            console.log('dalia')
        };
        if (link === 'daliaprovider') {
            window.open('https://provider.daliahealth.com/')
        };
        if (link === 'aliens') {
            window.open('https://github.com/ahmed-52/AlienInvaders')};
        if (link === 'connectn') {
            window.open('https://github.com/ahmed-52/ConnectN')
        };
        if (link === 'hangman') {
            window.open('https://github.com/ahmed-52/Hangman')};
        if (link === 'weather') {
            window.open('https://github.com/ahmed-52/WeatherApp')
        }
    };


    return(
        <div id='section5' className=''>
        <div className='pt-[50px] flex justify-center items-center gap-6'><img alt='icon' className='w-[5vw]' src='recent.svg'></img><h1 className='font-general font-medium lg:text-[96px] md:text-[60px] text-[30px] text-[#FFFFE3]'>Recent Work</h1><img img alt='icon' className='w-[5vw] rotate-180' src='recent.svg'></img></div>
  
  
            <div className='flex justify-center items-center flex-col'>
              <img  alt='daliaHealth'  onClick={() => handleClicks("dalia")} className='w-full lg:w-[600px] h-auto recent-work max-w-[600px] hover:scale-105 transition-transform duration-500 ease-in-out' src='daliaProduct.png'></img>
              <div className='flex flex-col justify-start items-start ml-2'>
                <h2 className='md:text-[30px] text-[20px] text-[#FFFFE3] font-cabinet font-medium'>DALIA HEALTH</h2>
                  <div className='flex justify-start items-start md:gap-5 gap-1 md:flex-row flex-col'>
                  <p className='border rounded-full text-[#818167] border-[#818167] px-3 max-h-[33px] max-w-[113px] m-0 text-center font-cabinet md:text-[20px] text-[15px] transition-all duration-500 ease-in-out'>2023</p>
                  <p className='border rounded-full text-[#818167] border-[#818167] px-3 max-h-[33px] m-0 text-center font-cabinet md:text-[20px] sm:text-[15px] text-[12px] transition-all duration-500 ease-in-out'>ReactJS  • TailwindCSS • GSAP • Axios • Flask • Firebase</p>
                  </div>
  
                  <p className='mt-5 font-general font-medium md:text-[20px] text-[15px]  text-[#FAFAF8] max-w-[500px] transition-all duration-500 ease-in-out'>In my role as the Frontend Developer Lead & CDO at DaliaHealth, I took charge of designing and enhancing the usability of the patient AI app. Using ReactJS, Axios, and Tawilwind, I crafted the product's frontend, ensuring a seamless and user-friendly experience. My responsibilities included conceptualizing, implementing design elements and optimizing user interfaces.</p>
              </div>
            </div>



            <div className='flex justify-center md:flex-row flex-col items-center md:gap-[40px] lg:gap-[70px] gap-1 md:mb-1 mb-[10vh] mt-[10vh] mx-2'>
                <img alt='daliaHealth'  onClick={() => handleClicks("dalia")} className='w-full h-auto max-w-[450px] mx-5 hover:scale-105 transition-transform duration-500 ease-in-out' src='diagnosis.png'></img>
                <p className='max-w-[500px] font-general font-medium md:text-[20px] text-[15px] text-white '>
                    On the doctor side, I focused on designing the doctor's 
                    interface, shaping how they interact with the application. 
                    These design decisions were research-driven, aiming to create an intuitive and efficient experience for healthcare professionals utilizing the platform. Additionally, I implemented routes for exporting AI diagnoses 
                    into formatted PDFs.</p>
            </div>

            <div className='flex justify-center items-center lg:gap-[5vw] sm:gap-2 flex-wrap'>
                <img alt='daliaHealth'  onClick={() => handleClicks("daliaprovider")} className='w-full h-auto max-w-[350px] px-4 lg:pt-[200px] hover:scale-105 transition-transform duration-500 ease-in-out' src='DiagnosisInformation.png'></img>
               <img  alt='daliaHealth' onClick={() => handleClicks("daliaprovider")} className='w-full h-auto max-w-[480px] hover:scale-105 transition-transform duration-500 ease-in-out px-2' src='patientCentric.png'></img>
            </div>


<div className='mt-20 max-w-[1300px] md:mx-auto flex flex-col justify-center items-center mx-2'>
    
<div>
<h1 className='lg:text-[60px] md:text-[50px] text-[45px] m-0 font-general text-[#EEEEEE] mb-[100px] self-start'>Projects.</h1>
    
    <div className='flex justify-center items-start md:flex-row flex-col gap-5 mb-40'>
    <img alt='aliens game'  onClick={() => handleClicks("aliens")} className='w-full h-auto max-w-[350px] hover:scale-105 transition-transform duration-500 ease-in-out' src='aliens.png'></img>
        
        <div>
        <h2 className='md:text-[30px] text-[20px] text-[#FFFFE3] font-cabinet font-medium'>ALIEN INVADERS</h2>
            <div className='flex justify-start items-start md:gap-5 gap-1 flex-col'>
            <p className='border rounded-full text-[#818167] border-[#818167] px-3 max-h-[33px] max-w-[113px] m-0 text-center font-cabinet lg:text-[20px] md:text-[18px] sm:text-[13px] text-[12px] transition-all duration-500 ease-in-out'>2023</p>
                  <p className='border rounded-full text-[#818167] border-[#818167] px-3 max-h-[33px] m-0 text-center font-cabinet lg:text-[20px] md:text-[18px] sm:text-[13px] text-[12px] transition-all duration-500 ease-in-out'> Python • Kivy </p>
            </div>
            <p className='mt-5 font-general font-medium md:text-[20px] text-[15px]  text-[#FAFAF8] max-w-[500px] transition-all duration-500 ease-in-out'>
            I developed Alien Invaders in Python, applying object-oriented principles for robust game logic. Utilizing the Kivy framework, I created an engaging user interface, enhancing the gaming experience. Emphasizing intricate gameplay mechanics, including scoring, lives, levels, and a final boss.</p>
        </div>








    </div>


    <div className='flex justify-center items-start gap-5 self-end flex-col md:flex-row-reverse mb-40'>
    <img alt='connectn game'  onClick={() => handleClicks("connectn")} className='w-full h-auto max-w-[350px] hover:scale-105 transition-transform duration-500 ease-in-out' src='connectn.png'></img>
    <div>
        <h2 className='md:text-[30px] text-[20px] text-[#FFFFE3] font-cabinet font-medium'>CONNECTN</h2>
            <div className='flex justify-start items-start md:gap-5 gap-1 flex-col'>
            <p className='border rounded-full text-[#818167] border-[#818167] px-3 max-h-[33px] max-w-[113px] m-0 text-center font-cabinet lg:text-[20px] md:text-[18px] sm:text-[13px] text-[12px] transition-all duration-500 ease-in-out'>2023</p>
                  <p className='border rounded-full text-[#818167] border-[#818167] px-3 max-h-[33px] m-0 text-center font-cabinet lg:text-[20px] md:text-[18px] sm:text-[13px] text-[12px] transition-all duration-500 ease-in-out'> Python • Kivy </p>
            </div>
            <p className='mt-5 font-general font-medium md:text-[20px] text-[15px]  text-[#FAFAF8] max-w-[500px] transition-all duration-500 ease-in-out'>Developed ConnectN in Python, featuring customizable grids for dynamic gameplay. Created two advanced AI opponents (Easy, Hard) using sophisticated algorithms. Introduced ConnectN, a Python game inspired by Connect4, with adjustable grid sizes for diverse gaming experiences.</p>
        </div>

    </div>



    </div>



    {/* <div className='flex justify-center items-start gap-5 mb-40'>
    <img className='max-w-[350px]' src='DiagnosisInformation.png'></img>
        <div>
            <h2 className='text-[30px] text-[#FFFFE3] font-cabinet font-medium'>DALIA HEALTH</h2>
            <div className='flex justify-start items-start gap-5 flex-col-reverse'>
                  <p className='border rounded-full text-[#818167] border-[#818167] px-3 max-h-[33px] max-w-[113px] m-0 text-center font-cabinet text-[20px]'>2023</p>
                  <p className='border rounded-full text-[#818167] border-[#818167] px-3 max-h-[33px] m-0 text-center font-cabinet text-[20px]'>ReactJS  • TailwindCSS • GSAP • Axios • Flask • Firebase</p>
            </div>
            <p className='mt-5 font-general text-[20px] text-[#FAFAF8] max-w-[500px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut .</p>
        </div>

    </div> */}

    


</div>
        




<div className="flex justify-center lg:flex-row flex-col gap-10 pb-20 mx-2">

<div className='flex flex-col justify-center items-center gap-5'>
    <h2 className='font-cabinet text-[30px] text-[#FAFAF8]'>Task Manager</h2>
    <img alt='weather'  onClick={() => handleClicks("weather")} className='w-full h-auto max-w-[350px] hover:scale-105 transition-transform duration-500 ease-in-out' src='taskmanager.png'></img>
    <p className='max-w-[400px] text-center text-[#FAFAF8]'>Developed a Flask-based task manager with SQL for efficient organization and task data management, supporting addition, editing, and deletion.</p>
</div>


<div className='flex flex-col justify-center items-center gap-5'>
    <h2 className='font-cabinet text-[30px] text-[#FAFAF8]'>Hangman</h2>
    <img alt='hangman'  onClick={() => handleClicks("hangman")} className='w-full h-auto max-w-[350px] hover:scale-105 transition-transform duration-500 ease-in-out' src='hangmanGam.png'></img>
    <p className='max-w-[400px] text-center text-[#FAFAF8]'>
Developed a Hangman game with a visually engaging interface. Implemented interactive and user-friendly features for an enjoyable gaming experience, offering challenges and entertainment.</p>
</div>



<div className='flex flex-col justify-center items-center gap-5'>
    <h2 className='font-cabinet text-[30px] text-[#FAFAF8]'>WeatherApp</h2>
    <img alt='weather'  onClick={() => handleClicks("weather")} className='w-full h-auto max-w-[350px] hover:scale-105 transition-transform duration-500 ease-in-out' src='weatherapp.png'></img>
    <p className='max-w-[400px] text-center text-[#FAFAF8]'>Programmed a weather application using the OpenWeather API and ReactJS, delivering real-time weather information. Implemented features for retrieving and displaying current weather data, forecasts, and location-specific details.</p>
</div>


</div>

  
  
            
      </div>
    )
}