import './fonts.css';
import Navbar from './Navbar';

function App() {
  return (
   <div className='bg-[#FAFAF8]'>
      <Navbar
    />
    <div className='flex justify-center items-center my-[50px]'>

    <div className='bg-[#DCDCD4] py-[30px] px-[60px] no-blur-box-shadow'>
      <h1 className='text-[128px] font-semibold font-general'>Hey, I’m ahmed.</h1>
      <h1 className='text-[128px] text-stroke text-[#FFFFFF] font-semibold font-general'>Hey, I’m ahmed.</h1>
      <h1 className='text-[128px] font-semibold font-general'>Hey, I’m ahmed.</h1>
    </div>

    </div>


    {/* second section */}
    <div className='h-[100vh] transition-bg bg-[#10100E] py-[150px] px-[50px]'>
    

    <h1 className='font-cabinet font-medium text-[#FFFFE3] text-[80px]'>I engineer transformative digital solutions that captivate and engage users by melding sophisticated software development with intuitive design principles.</h1>
    
    </div>



    {/* third section */}
    <div className='h-[100vh] bg-[#85856D] transition-bg'>
      <div className='pt-[50px] flex justify-center items-center gap-6'><img src='aboutico.svg'></img><h1 className='font-general font-medium text-[96px] text-[#FFFFE3]'>About</h1><img className='rotate-180' src='aboutico.svg'></img></div>
    </div>
   </div>
  );
}

export default App;
