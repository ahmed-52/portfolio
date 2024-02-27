import './fonts.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useMemo, useState} from 'react';
import { useRef } from 'react';
import Services from './Services';
import Work from './Work';
// import Lenis from "@studio-freight/lenis";

import Footer from './Footer';

function App() {

gsap.registerPlugin(ScrollTrigger);


const sections = useMemo(() => [
  { id: 'section1', color: '#FAFAF8' },
  { id: 'section3', color: '#9CC8FF' },
  { id: 'section4', color: '#FFFFFF'},
  { id: 'section5', color: '#1E1E1E'},
  { id: 'section6', color: '#FFFFFF'}
  // Add more sections as needed
], []); 


// terminal time
const [currentTime, setCurrentTime] = useState('');
useEffect(() => {
  // Function to update the current time
  const updateCurrentTime = () => {
    const now = new Date();
    const formattedTime = `Last login: ${now.toDateString()} ${now.toLocaleTimeString()} on console`;
    setCurrentTime(formattedTime);
  };

  // Update the current time initially
  updateCurrentTime();

  // Update the current time every second
  const intervalId = setInterval(updateCurrentTime, 1000);

  // Clean up the interval on component unmount
  return () => clearInterval(intervalId);
}, []);





//background color changing
useEffect(() => {
  const mainElement = document.getElementById('main');

  // Explicitly handle the top of the document to revert to the first section's color
  ScrollTrigger.create({
    trigger: "#section1",
    start: "top center", // Start at the very top of the page
    end: "bottom center", // Adjust based on your layout
    markers: true,
    onEnterBack: () => {
      gsap.to(mainElement, {backgroundColor: sections[0].color, duration: 0.6, ease: "power4.inOut"});
      // Change 'contTitle' color to gray when entering back to section 1
      gsap.to('#contTitle', {color: 'gray', duration: 0.6, ease: "power4.inOut"});
    },
  });

  

  // Set triggers for other sections
  sections.forEach(section => {
    ScrollTrigger.create({
      trigger: `#${section.id}`,
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        gsap.to(mainElement, {backgroundColor: section.color, duration: 0.6, ease: "power4.inOut"});
        // Conditionally change 'contTitle' color based on the section
        if (section.id === 'section2') {
          gsap.to('#contTitle', {color: '#FFFFE3', duration: 0.6, ease: "power4.inOut"});
        } else {
          gsap.to('#contTitle', {color: 'black', duration: 0.6, ease: "power4.inOut"});
        }
      },
      onEnterBack: () => {
        gsap.to(mainElement, {backgroundColor: section.color, duration: 0.6, ease: "power4.inOut"});
        if (section.id === 'section2') {
          gsap.to('#contTitle', {color: '#FFFFE3', duration: 0.6, ease: "power4.inOut"});
        } else {
          gsap.to('#contTitle', {color: 'black', duration: 0.6, ease: "power4.inOut"});
        }
      },
    });
  });

  return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
}, [sections]);






  const divanim = useRef(null);
  const navbar = useRef(null);
  useEffect(() => {
    gsap.set([divanim.current, '#te'], {clearProps: "all"});
    
    const tl = gsap.timeline();
    tl.fromTo(divanim.current, 
      { scale: 1.15 }, 
      { scale: 1, duration: 1.8, ease: 'power4.inOut' }
    )
    .fromTo('#te', 
      { y: 50, opacity: 0 }, // Starting properties
      { y: 0, opacity: 1, duration: 1, ease: "power4.inOute"}, // Ending properties
    );
  }, []);




  // animation for the images that wrap the experience title

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animation = gsap.to("#experience-img", {
      rotation: 720, // Defines a full 360-degree rotation
      ease: "none", // Ensures the rotation speed is constant
      scrollTrigger: {
        trigger: ".rotate-img",
        start: "top bottom", // Animation starts when the top of the image hits the bottom of the viewport
        end: "bottom top", // Animation ends when the bottom of the image hits the top of the viewport
        scrub: 0.05, // Links the animation progress to the scroll position
      }
    });

    return () => {
      if (animation.scrollTrigger) {
        animation.scrollTrigger.kill();
      }
      animation.kill();
    };
  }, []); 

  // useEffect(() => {
  //   const lenis = new Lenis();
  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }
  //   requestAnimationFrame(raf);
  // });


  const handleScroll = (e, id) => {
    e.preventDefault();
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };







  const [inputValue, setInputValue] = useState('');
  const [feedback, setFeedback] = useState('');

  // UseEffect for cursor blinking effect

  const handleRefresh = () => {
      window.location.reload(true);
  };


  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleEnter = () => {
    // Process the entered command
    if (inputValue.trim().toLowerCase() === 'ls') {

    } else if (inputValue.trim().toLowerCase() === 'cd contact') {

      handleScroll({ preventDefault: () => {}, target: { id: 'section6' } }, 'section6');
    } else if (inputValue.trim().toLowerCase() === 'cd recent work') {
      handleScroll({ preventDefault: () => {}, target: { id: 'section5' } }, 'section5');
    } else if (inputValue.trim().toLowerCase() === 'cd expertise') {
      handleScroll({ preventDefault: () => {}, target: { id: 'section4' } }, 'section4');

    } else if (inputValue.trim().toLowerCase() === 'cd projects') {
      handleScroll({ preventDefault: () => {}, target: { id: 'projects' } }, 'projects');
    } else if (inputValue.trim().toLowerCase() === 'sleepy joe or trump?') {
        setFeedback('trump');
      } else if (inputValue.trim().toLowerCase() === 'resume') {
        handleDownloadResume();
    } else {
      setFeedback('zsh: command not found: ' + inputValue);
    }

    // Clear the input field after processing the command
    setInputValue('');
  };



  const handleDownloadResume = () => {
    const resumePath = 'Ahmed8.5.pdf';
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'AhmedResume.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  


  return (
    <main id='main' className='bg-white'>
   <div >

   <nav ref={navbar} className="p-[35px] flex justify-between items-center sm:flex-row flex-col sm:gap-0 gap-5">
                <div>
                    <img alt='logo'  className='md:w-auto w-[100px]' src='logo.svg'></img>
                </div>
                <div>
                    <ul className="flex gap-5">
                        <a onClick={(e) => handleScroll(e, 'section3')}  href="#section3" className="md:text-3xl text-xl font-cabinet font-medium">About</a>
                        <a onClick={(e) => handleScroll(e, 'section5')}  href="#section5" className="md:text-3xl text-xl font-cabinet font-medium">Projects</a>
                        <a onClick={(e) => handleScroll(e, 'section6')}  href="#section6" className="md:text-3xl text-xl font-cabinet font-medium">Contact</a>
                    </ul>
                </div>
            </nav>






    <div id='section1' className='flex justify-center items-center h-[100vh] -mt-[50px]'>

    <div ref={divanim} className='bg-[#D2714F] py-[20px] md:px-[35px] px-[10%] no-blur-box-shadow overflow-visible'>
      <h1 id='te' className='lg:text-[128px] md:text-[70px] sm:text-[50px] text-[40px] text-[#FFFFFF] font-semibold font-general'>Hey, I’m ahmed.</h1>
      <h1 id='te' className='lg:text-[128px] md:text-[70px] sm:text-[50px] text-[40px] text-[#FFFFFF] font-semibold font-general'>Hey, I’m ahmed.</h1>
      <h1 id='te' className='lg:text-[128px] md:text-[70px] sm:text-[50px] text-[40px] text-[#FFFFFF] font-semibold font-general mb-10'>Hey, I’m ahmed.</h1>
    </div>

    </div>


    {/* second section */}
    {/* <div id='section2' className=' py-[150px] px-[50px] mt-[100px] mb-10'>
    

    <h1 id='contTitle' className='font-cabinet font-medium text-[#D1D1C7] xl:text-[100px] lg:text-[90px] md:text-[70px] sm:text-[40px] text-[35px] leading-normal text-color-change max-w-[100vw]'>
    I engineer dynamic digital solutions, intertwining software development techniques with a wide array of coding possibilities.</h1>
    
    </div> */}



    {/* third section */}
    <div id='section3' className='h-auto mt-20 mb-20'>
      <h1 className='font-cabinet font-bold lg:text-[80px] md:text-[60px] text-[50px] mx-3 text-white flex justify-center items-center mb-10 text-center '>About </h1>


      <div className='flex justify-center items-center'>

        <div className='bg-white rounded-[15px] mx-5 lg:m-0 lg:h-[600px] lg:w-[770px] shadow-lg'>

          {/* /title bar */}
          <div className='w-full lg:h-[40px] bg-[#F9F2F7] shadow-md rounded-t-[15px] flex'>


            <div className='flex gap-3 items-center justify-start pl-4'>

              <div onClick={handleRefresh}  className='rounded-full bg-[#FF514F] w-[18px] h-[18px] hover:bg-[#bb3b39] hover:cursor-pointer'></div>
              <div className='rounded-full bg-[#FFB800] w-[18px] h-[18px] hover:bg-[#c49d3b] hover:cursor-pointer'></div>
              <div onClick={(e) => handleScroll(e, 'section4')} className='rounded-full bg-[#00CB18] w-[18px] h-[18px] hover:bg-[#2d8e39] hover:cursor-pointer'></div>
            </div>


            <div className='flex items-center justify-center flex-1  mr-20'>
              <img src='icons8-mac-folder-48.png' alt='folderIcon' className='w-[25px] h-auto'></img>
              <h3 className='ml-2'>ahmed -- -zsh 80x24</h3>
            </div>

            </div>


            {/* /content */}
            <div className='mt-5 mx-3'>
              <p className='font-code text-[13px] text-start m-0'>{currentTime}</p>
              <p className='font-code text-[13px] text-start mt-1'>ahmed@dhcp-vl2041-32556 desktop % cd about</p>
              <p className='font-code text-[13px] text-start mt-10 text-[#4E4D4E]'>ahmed@dhcp-vl2041-32556 about % who is ahmed</p>
              <p style={{ maxWidth: '80%' }} className='font-code text-[13px] text-start mt-1'>I'm an undergraduate student at Cornell University, majoring in computer science. Originally from Yemen, I was raised in New York City. I don’t just code; I craft digital experiences that resonate, bridge gaps, and spark change. This passion is my compass, guiding me to explore uncharted territories in technology and beyond, always with the aim to leave a mark that transcends the digital world. </p>
              <p className='font-code text-[13px] text-start mt-10 text-[#4E4D4E]'>ahmed@dhcp-vl2041-32556 about % what do you do for fun</p>
              <p style={{ maxWidth: '80%' }} className='font-code text-[13px] text-start mt-1'>I love to travel, explore new cultures, and meet new people. I also enjoy playing soccer ⚽, coffee ☕, and learning about new technologies. </p>
              {/* <p className='font-code text-[13px] text-start mt-3'>ahmed@dhcp-vl2041-32556 about % what are you currently working on</p>
              <p style={{ maxWidth: '80%' }} className='font-code text-[13px] text-start mt-1'>I'm currently working on a project that aims to provide a platform for students to connect with professionals in their field of interest. </p> */}
              
              <p className='font-code text-[13px] text-start mt-10 text-[#4E4D4E]'>ahmed@dhcp-vl2041-32556 about % ls</p>
              <div className='flex items-center gap-4'>
              <p onClick={(e) => handleScroll(e, 'section5')} className='font-code text-[13px] text-start mt-1 cursor-pointer hover:underline'>Recent work</p>
              <p onClick={(e) => handleScroll(e, 'section6')} className='font-code text-[13px] text-start mt-1 cursor-pointer hover:underline'>Contact</p>
              <p onClick={(e) => handleScroll(e, 'projects')} className='font-code text-[13px] text-start mt-1 cursor-pointer hover:underline'>Projects</p>
              <p onClick={(e) => handleScroll(e, 'section4')} className='font-code text-[13px] text-start mt-1 cursor-pointer hover:underline'>Expertise</p>
              </div>

                  <div className='flex items-center mt-10'>
      <label htmlFor='input' className='font-code text-[13px] text-start mt-1'>ahmed@dhcp-vl2041-32556 about % </label>
      <input
        id='input'
        type='text'
        className='self-end font-code text-[13px] text-start text-black bg-transparent border-none outline-none pl-1'
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={(e) => e.key === 'Enter' && handleEnter()}
      />
    </div>
              <p className='font-code text-[13px] text-start mt-1'>{feedback}</p>
            
            </div>


        </div>

      </div>


    </div>







    <div id='section4' className='my-10'>
      <div className='pt-[50px] flex justify-center items-center gap-6'><img alt='icon'  className='w-[5vw]' id="experience-img" src='experience.svg'></img><h1 className='font-general font-medium md:text-[5vw] text-[40px] text-[#1E1E1E]'>My Expertise</h1><img alt='icon'  id="experience-img" className='w-[5vw]'  src='experience.svg'></img></div>

<div className='mx-3 flex justify-center items-center'>
<Services  />
</div>


    </div>



   </div>

<div id='section5'>
<Work />
</div>

<div id='section6'>
<Footer />
</div>


   
   </main>
  );
}

export default App;
