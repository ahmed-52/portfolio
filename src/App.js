import './fonts.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';
import { useRef } from 'react';
import CustomCursor from './CustomCursor';
import Services from './Services';


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

    <div ref={divanim} className='bg-[#DCDCD4] py-[20px] px-[60px] no-blur-box-shadow'>
      <h1 id='te' className='text-[128px] font-semibold font-general'>Hey, I’m ahmed.</h1>
      <h1 id='te' className='text-[128px] text-stroke text-[#FFFFFF] font-semibold font-general'>Hey, I’m ahmed.</h1>
      <h1 id='te' className='text-[128px] font-semibold font-general mb-10'>Hey, I’m ahmed.</h1>
    </div>

    </div>


    {/* second section */}
    <div id='section2' className='h-[100vh]  py-[150px] px-[50px] mt-[100px] mb-10'>
    

    <h1 id='contTitle' className='font-cabinet font-medium text-[#D1D1C7] text-[125px] leading-normal text-color-change max-w-[100vw]'>
I create engaging digital solutions by combining advanced software development with intuitive design.</h1>
    
    </div>



    {/* third section */}
    <div id='section3' className='h-[100vh] my-10'>
      <div className='pt-[50px] flex justify-center items-center gap-6'><img src='aboutico.svg'></img><h1 className='font-general font-medium text-[96px] text-[#FFFFE3]'>About</h1><img className='rotate-180' src='aboutico.svg'></img></div>

      <div className='flex items-start justify-around mt-20'>

        <img className='w-[500px] h-[500px]' src='tempPic.png'></img>

          <div className='flex flex-col justify-start items-start gap-10'>
            <h2 className='text-[#FFFFE3] font-cabinet font-bold text-[40px]'>A brief Into who I am?</h2>
            <p className='text-[#FFFFE3] font-cabinet font-medium text-[20px] max-w-[500px]'>I'm an undergraduate student at Cornell University, majoring in computer science. Originally from Yemen, I was raised in New York City. I don’t just coding; I craft digital experiences that resonate, bridge gaps, and spark change. This passion is my compass, guiding me to explore uncharted territories in technology and beyond, always with the aim to leave a mark that transcends the digital world.</p>
            
            <p className='text-[#FFFFE3] font-cabinet font-medium text-[20px] max-w-[500px]'>When I'm not developing or designing, you'll likely catch me unwinding with a lively game of badminton 🏸, teaming up for some  ⚽ soccer️, or enjoying a good cup of 
            coffee️ ☕</p>
          </div>

      </div>

    </div>







    <div id='section4' className=' my-10 bg-white'>
      <div className='pt-[50px] flex justify-center items-center gap-6'><img id="experience-img" src='experience.svg'></img><h1 className='font-general font-medium text-[96px] text-[#1E1E1E]'>My expertise</h1><img id="experience-img"  src='experience.svg'></img></div>


    <div className='flex justify-center items-center'>
<Services />
</div>

    </div>



    <div id='section5' className=' my-10 bg-[#1E1E1E]'>
      <div className='pt-[50px] flex justify-center items-center gap-6'><img src='recent.svg'></img><h1 className='font-general font-medium text-[96px] text-[#FFFFE3]'>Recent Work</h1><img className='rotate-180' src='recent.svg'></img></div>


          <div className='flex justify-center items-center flex-col'>
            <img className='w-[600px] h-auto' src='daliaProduct.png'></img>
            <div className='flex flex-col justify-start items-start'>
              <h2 className='text-[30px] text-[#FFFFE3] font-cabinet font-medium'>DALIA HEALTH</h2>
                <div className='flex justify-start items-start gap-5'>
                <p className='border rounded-full text-[#818167] border-[#818167] px-3 max-h-[33px] max-w-[113px] m-0 text-center font-cabinet text-[20px]'>2023</p>
                <p className='border rounded-full text-[#818167] border-[#818167] px-3 max-h-[33px] m-0 text-center font-cabinet text-[20px]'>ReactJS  • TailwindCSS • GSAP • Axios • Flask</p>
                </div>

                <p className='mt-5 font-general font-medium text-[20px] text-[#FAFAF8] max-w-[500px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut .</p>
            </div>
          </div>


          
    </div>



   </div>



   <CustomCursor />
   
   </main>
  );
}

export default App;
