import './fonts.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';
import { useRef } from 'react';
import CustomCursor from './CustomCursor';
import Services from './Services';
import Work from './Work';
import Lenis from "@studio-freight/lenis";

import Footer from './Footer';

function App() {
gsap.registerPlugin(ScrollTrigger);


const sections = [
  { id: 'section1', color: '#FAFAF8' },
  { id: 'section2', color: '#10100E' },
  { id: 'section3', color: '#85856D' },
  // Add more sections as needed
];



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
}, []);






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






  return (
    <main id='main' className='bg-white'>
   <div >

   <nav ref={navbar} className="p-[35px] flex justify-between items-center">
                <div>
                    <img src='logo.svg'></img>
                </div>
                <div>
                    <ul className="flex gap-5">
                        <a href="#" className="text-3xl font-cabinet font-medium">About</a>
                        <a href="#" className="text-3xl font-cabinet font-medium">Projects</a>
                        <a href="#" className="text-3xl font-cabinet font-medium">Contact</a>
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
    

    <h1 id='contTitle' className='font-cabinet font-medium text-[#D1D1C7] lg:text-[125px] md:text-[80px] sm:text-[50px] text-[40px] leading-normal text-color-change max-w-[100vw]'>
I create engaging digital solutions by combining advanced software development with intuitive design.</h1>
    
    </div>



    {/* third section */}
    <div id='section3' className='md:h-auto sm:h-[100vh] my-10'>
      <div className='pt-[50px] flex justify-center items-center gap-6'><img className='md:w-auto w-6' src='aboutico.svg'></img><h1 className='font-general font-medium md:text-[62px] lg:text-[96px] sm:text-[40px] text-[27px] text-[#FFFFE3]'>About</h1><img className='rotate-180 md:w-auto w-6' src='aboutico.svg'></img></div>

    <div className='max-w-[1300px] mx-auto'>
      <div className='flex items-start justify-around mt-20'>

        <img className='w-full h-atuo max-w-[500px]' src='tempPic.png'></img>

          <div className='flex flex-col justify-start items-start gap-10'>
            <h2 className='text-[#FFFFE3] font-cabinet font-bold text-[40px]'>A brief Into who I am?</h2>
            <p className='text-[#FFFFE3] font-cabinet font-medium text-[20px] max-w-[500px]'>I'm an undergraduate student at Cornell University, majoring in computer science. Originally from Yemen, I was raised in New York City. I don’t just coding; I craft digital experiences that resonate, bridge gaps, and spark change. This passion is my compass, guiding me to explore uncharted territories in technology and beyond, always with the aim to leave a mark that transcends the digital world.</p>
            
            <p className='text-[#FFFFE3] font-cabinet font-medium text-[20px] max-w-[500px]'>When I'm not developing or designing, you'll likely catch me unwinding with a lively game of badminton 🏸, teaming up for some  ⚽ soccer️, or enjoying a good cup of 
            coffee️ ☕</p>
          </div>

      </div>
      </div>

    </div>







    <div id='section4' className=' my-10 bg-white'>
      <div className='pt-[50px] flex justify-center items-center gap-6'><img id="experience-img" src='experience.svg'></img><h1 className='font-general font-medium text-[96px] text-[#1E1E1E]'>My expertise</h1><img id="experience-img"  src='experience.svg'></img></div>


    <div className='flex justify-center items-center'>
<Services />
</div>

    </div>



   </div>


<Work />

<Footer />
   <CustomCursor />
   
   </main>
  );
}

export default App;
