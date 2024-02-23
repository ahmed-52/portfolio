import './fonts.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useMemo } from 'react';
import { useRef } from 'react';
import CustomCursor from './CustomCursor';
import Services from './Services';
import Work from './Work';
import Lenis from "@studio-freight/lenis";

import Footer from './Footer';

function App() {
gsap.registerPlugin(ScrollTrigger);


const sections = useMemo(() => [
  { id: 'section1', color: '#FAFAF8' },
  { id: 'section2', color: '#10100E' },
  { id: 'section3', color: '#85856D' },
  { id: 'section4', color: '#FFFFFF'},
  { id: 'section5', color: '#1E1E1E'},
  { id: 'section6', color: '#FFFFFF'}
  // Add more sections as needed
], []); 



//background color changing
useEffect(() => {
  const mainElement = document.getElementById('main');

  // Explicitly handle the top of the document to revert to the first section's color
  ScrollTrigger.create({
    trigger: "#section1",
    start: "top top", // Start at the very top of the page
    end: "bottom center", // Adjust based on your layout
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

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });


  const handleScroll = (e, id) => {
    e.preventDefault();
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
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

    <div ref={divanim} className='bg-[#DCDCD4] py-[20px] md:px-[35px] px-[2%] no-blur-box-shadow overflow-visible'>
      <h1 id='te' className='lg:text-[128px] md:text-[70px] sm:text-[50px] text-[30px] text- font-semibold font-general'>Hey, I’m ahmed.</h1>
      <h1 id='te' className='lg:text-[128px] md:text-[70px] sm:text-[50px] text-[30px] text-stroke text-[#FFFFFF] font-semibold font-general'>Hey, I’m ahmed.</h1>
      <h1 id='te' className='lg:text-[128px] md:text-[70px] sm:text-[50px] text-[30px] font-semibold font-general mb-10'>Hey, I’m ahmed.</h1>
    </div>

    </div>


    {/* second section */}
    <div id='section2' className=' py-[150px] px-[50px] mt-[100px] mb-10'>
    

    <h1 id='contTitle' className='font-cabinet font-medium text-[#D1D1C7] xl:text-[100px] lg:text-[90px] md:text-[70px] sm:text-[40px] text-[35px] leading-normal text-color-change max-w-[100vw]'>
    I engineer dynamic digital solutions, intertwining software development techniques with a wide array of coding possibilities.</h1>
    
    </div>



    {/* third section */}
    <div id='section3' className='h-auto mt-10 mb-20'>
      <div className='pt-[50px] flex justify-center items-center gap-6'><img alt='icon' className='md:w-auto w-6' src='aboutico.svg'></img><h1 className='font-general font-medium md:text-[62px] lg:text-[96px] text-[40px]  text-[#FFFFE3]'>About</h1><img alt='icon'  className='rotate-180 md:w-auto w-6' src='aboutico.svg'></img></div>

    <div className='max-w-[1300px] mx-auto'>
      <div className='flex lg:items-start items-center justify-around lg:flex-row flex-col-reverse mt-20 lg:gap-0 gap-5'>

        {/* <img className='w-full max-w-[500px]' src='tempPic.png'></img> */}

          <div className='flex flex-col items-center justify-center gap-10'>
            <h2 className='text-[#FFFFE3] font-cabinet font-bold lg:text-[40px] text-[30px] text-center'>A brief Into who I am?</h2>
            <p className='text-[#FFFFE3] font-cabinet font-medium text-[20px] max-w-[600px] text-center'>I'm an undergraduate student at Cornell University, majoring in computer science. Originally from Yemen, I was raised in New York City. I don’t just coding; I craft digital experiences that resonate, bridge gaps, and spark change. This passion is my compass, guiding me to explore uncharted territories in technology and beyond, always with the aim to leave a mark that transcends the digital world.</p>
            
            <p className='text-[#FFFFE3] font-cabinet font-medium text-[20px] max-w-[600px] text-center'>When I'm not developing or designing, you'll likely catch me unwinding with a lively game of badminton 🏸, teaming up for some  ⚽ soccer️, or enjoying a good cup of 
            coffee️ ☕</p>
          </div>

      </div>
      </div>

    </div>







    <div id='section4' className='my-10'>
      <div className='pt-[50px] flex justify-center items-center gap-6'><img alt='icon'  className='w-[5vw]' id="experience-img" src='experience.svg'></img><h1 className='font-general font-medium text-[5vw] text-[#1E1E1E]'>My Expertise</h1><img alt='icon'  id="experience-img" className='w-[5vw]'  src='experience.svg'></img></div>

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

   <CustomCursor />
   
   </main>
  );
}

export default App;
