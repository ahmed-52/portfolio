import './fonts.css';
import Navbar from './Navbar';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';
import { useRef } from 'react';
import Lenis from '@studio-freight/lenis';


function App() {
gsap.registerPlugin(ScrollTrigger);
// lenis
// useEffect(() => {
//   const lenis = new Lenis({
//     lerp: 0, // Customize the lerp (smoothness) value (0 to 1)
//     smooth: true, // Enable smooth scrolling
//     // Other options as needed
//   });

//   function raf(time) {
//     lenis.raf(time); // Update Lenis on each animation frame
//     requestAnimationFrame(raf);
//   }

//   requestAnimationFrame(raf);

//   return () => {
//     lenis.destroy(); // Clean up Lenis instance on component unmount
//   };
// }, []);

///

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
    onEnterBack: () => gsap.to(mainElement, {backgroundColor: sections[0].color, duration: 0.6, ease: "power4.inOut"}),
  });

  // Set triggers for other sections
  sections.forEach(section => {
    ScrollTrigger.create({
      trigger: `#${section.id}`,
      start: "top center", // This might need adjustment
      end: "bottom center",
      onEnter: () => gsap.to(mainElement, {backgroundColor: section.color, duration: 0.6, ease: "power4.inOut"}),
      onEnterBack: () => gsap.to(mainElement, {backgroundColor: section.color, duration: 0.6, ease: "power4.inOut"}),
    });
  });

  return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
}, []);





  const divanim = useRef(null);
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
  
  

  return (
    <main id='main' className='bg-[#32321b]'>
   <div >
      <Navbar
    />
    <div id='section1' className='flex justify-center items-center h-[100vh] -mt-[50px]'>

    <div ref={divanim} className='bg-[#DCDCD4] py-[20px] px-[60px] no-blur-box-shadow'>
      <h1 id='te' className='text-[128px] font-semibold font-general'>Hey, I’m ahmed.</h1>
      <h1 id='te' className='text-[128px] text-stroke text-[#FFFFFF] font-semibold font-general'>Hey, I’m ahmed.</h1>
      <h1 id='te' className='text-[128px] font-semibold font-general mb-10'>Hey, I’m ahmed.</h1>
    </div>

    </div>


    {/* second section */}
    <div id='section2' className='h-[100vh]  py-[150px] px-[50px] mt-[100px] mb-10'>
    

    <h1 className='font-cabinet font-medium text-[#FFFFE3] text-[90px] leading-normal text-color-change'>
I create engaging digital solutions by combining advanced software development with intuitive design.</h1>
    
    </div>



    {/* third section */}
    <div id='section3' className='h-[100vh] my-10'>
      <div className='pt-[50px] flex justify-center items-center gap-6'><img src='aboutico.svg'></img><h1 className='font-general font-medium text-[96px] text-[#FFFFE3]'>About</h1><img className='rotate-180' src='aboutico.svg'></img></div>
    

    </div>
   </div>



   
   </main>
  );
}

export default App;
