import './work.css'


export default function Work() {

    const handelDalia = () => {
        window.open('https://daliahealth.com/')
    }
    return(
        <div id='section5' className='bg-[#1E1E1E]'>
        <div className='pt-[50px] flex justify-center items-center gap-6'><img src='recent.svg'></img><h1 className='font-general font-medium text-[96px] text-[#FFFFE3]'>Recent Work</h1><img className='rotate-180' src='recent.svg'></img></div>
  
  
            <div className='flex justify-center items-center flex-row-reverse'>
              <img onClick={handelDalia} className='lg:w-[800px] h-auto recent-work' src='daliaProduct.png'></img>
              <div className='flex flex-col justify-start items-start'>
                <h2 className='text-[30px] text-[#FFFFE3] font-cabinet font-medium'>DALIA HEALTH</h2>
                  <div className='flex justify-start items-start gap-5'>
                  <p className='border rounded-full text-[#818167] border-[#818167] px-3 max-h-[33px] max-w-[113px] m-0 text-center font-cabinet text-[20px]'>2023</p>
                  <p className='border rounded-full text-[#818167] border-[#818167] px-3 max-h-[33px] m-0 text-center font-cabinet text-[20px]'>ReactJS  • TailwindCSS • GSAP • Axios • Flask • Firebase</p>
                  </div>
  
                  <p className='mt-5 font-general font-medium text-[20px] text-[#FAFAF8] max-w-[500px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut .</p>
              </div>
            </div>

            <div className='flex justify-center items-center gap-20 mt-[10vh]'>
                <img className='max-w-[450px]' src='diagnosis.png'></img>
                <p className='max-w-[500px] font-general font-medium text-[20px] text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut .Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut .</p>
            </div>

            <div className='flex justify-center items-center gap-20'>
                <img className='max-w-[350px] pt-[200px]' src='DiagnosisInformation.png'></img>
               <img className='max-w-[480px]' src='patientCentric.png'></img>
            </div>


<div className='mt-20 max-w-[1300px] mx-auto flex flex-col justify-center items-center'>
    
<div>
<h1 className='lg:text-[60px] md:text-[50px] text-[30px] m-0 font-general text-[#EEEEEE] mb-[100px] self-start'>Projects.</h1>
    <div className='flex justify-center items-start gap-5 mb-40'>
    <img className='max-w-[350px]' src='aliens.png'></img>
        <div>
            <h2 className='text-[30px] text-[#FFFFE3] font-cabinet font-medium'>DALIA HEALTH</h2>
            <div className='flex justify-start items-start gap-5 flex-col-reverse'>
                  <p className='border rounded-full text-[#818167] border-[#818167] px-3 max-h-[33px] max-w-[113px] m-0 text-center font-cabinet text-[20px]'>2023</p>
                  <p className='border rounded-full text-[#818167] border-[#818167] px-3 max-h-[33px] m-0 text-center font-cabinet text-[20px]'>ReactJS  • TailwindCSS • GSAP • Axios • Flask • Firebase</p>
            </div>
            <p className='mt-5 font-general text-[20px] text-[#FAFAF8] max-w-[500px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut .</p>
        </div>

    </div>
</div>

    <div className='flex justify-center items-start gap-5 self-end flex-row-reverse mb-40'>
    <img className='max-w-[350px]' src='connectn.png'></img>
        <div>
            <h2 className='text-[30px] text-[#FFFFE3] font-cabinet font-medium'>DALIA HEALTH</h2>
            <div className='flex justify-start items-start gap-5 flex-col-reverse'>
                  <p className='border rounded-full text-[#818167] border-[#818167] px-3 max-h-[33px] max-w-[113px] m-0 text-center font-cabinet text-[20px]'>2023</p>
                  <p className='border rounded-full text-[#818167] border-[#818167] px-3 max-h-[33px] m-0 text-center font-cabinet text-[20px]'>ReactJS  • TailwindCSS • GSAP • Axios • Flask • Firebase</p>
            </div>
            <p className='mt-5 font-general text-[20px] text-[#FAFAF8] max-w-[500px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut .</p>
        </div>

    </div>



{/* 
    <div className='flex justify-center items-start gap-5 mb-40'>
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
        
<div className="flex justify-center gap-10 pb-20">

<div className='flex flex-col justify-center items-center gap-5'>
    <h2 className='font-cabinet text-[30px] text-[#FAFAF8]'>Task Manager</h2>
    <img className='max-w-[450px]' src='taskmanager.png'></img>
    <p className='max-w-[400px] text-center text-[#FAFAF8]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut .</p>
</div>


<div className='flex flex-col justify-center items-center gap-5'>
    <h2 className='font-cabinet text-[30px] text-[#FAFAF8]'>Hangman</h2>
    <img className='max-w-[450px]' src='hangmanGam.png'></img>
    <p className='max-w-[400px] text-center text-[#FAFAF8]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut .</p>
</div>



<div className='flex flex-col justify-center items-center gap-5'>
    <h2 className='font-cabinet text-[30px] text-[#FAFAF8]'>WeatherApp</h2>
    <img className='max-w-[450px]' src='weatherapp.png'></img>
    <p className='max-w-[400px] text-center text-[#FAFAF8]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut .</p>
</div>


</div>

  
  
            
      </div>
    )
}