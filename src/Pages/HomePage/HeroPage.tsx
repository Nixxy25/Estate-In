import HeroImage from '../../assets/Images/Container.svg'
import Container from '../../components/container';

import Icon1 from '../../assets/Images/Icon Container.svg';
import Icon2 from '../../assets/Images/Icon Container (3).svg';
import Icon3 from '../../assets/Images/Icon Container (1).svg';
import Icon4 from '../../assets/Images/Icon Container (2).svg';

const HeroPage = () => {
  return (
    <div>
    <div className='ml-20 flex justify-evenly gap-6 bg-[#141414] h-full'>
        <div className='flex flex-col justify-center gap-8'>
            <h1 className='font-[600] text-4xl'>Discover Your Dream <br></br>Property with Estatein</h1>
            <p className='text-[#999999]'>Your journey to finding the perfect property begins here. Explore our listings to find the home that 
              matches your dreams.</p>

            <div className='flex gap-4'>
              <button className='bg-[#141414] rounded-lg px-4 py-3 border border-[#262626] text-sm'>Learn More</button>
              <button  className=' rounded-lg px-4 py-3 bg-[#703BF7] text-sm'>Browse Properties</button>
            </div>

            <div className='flex gap-4'>
              <div className='flex flex-col  bg-black rounded-lg px-4 py-4 border border-[#262626] bg-[#1A1A1A] '>
                <h2 className='font-bold text-2xl'>200+</h2>
                <h3 className='text-[#999999]'>Happy Customers</h3>
              </div>

              <div className='flex flex-col  bg-black rounded-lg px-4 py-4 border border-[#262626] bg-[#1A1A1A]  '>
                <h2 className='font-bold text-2xl'>10k+</h2>
                <h3 className='text-[#999999]'>Properties For Clients</h3>
              </div> 
              
              <div  className='flex flex-col  bg-black rounded-lg px-4 py-4 border border-[#262626] bg-[#1A1A1A] '>
                <h2 className='font-bold text-2xl'>16+</h2>
                <h3 className='text-[#999999]'>Years of Experience</h3>
              </div>
            </div>
        </div>

        <div><img className='' src={HeroImage}></img></div>
    </div>
    <div className="gap-8 flex p-2 border-4 border-[#262626]">
      <Container text="Find your Dream Home" icon={Icon1} />
      <Container text="Unlock Property Value" icon={Icon2} />
      <Container text="Effortless Property Management" icon={Icon3}  />
      <Container text="Smart Investments, Informed Decisions" icon={Icon4} />
    </div>

    </div>
  )
}

export default HeroPage;