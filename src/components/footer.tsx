import EstateLogo from '../assets/Images/Logo (3).png';
import email from '../assets/Images/email.png';
import send from '../assets/Images/send.svg';

const Footer = () => {
  return (
    <div className="px-20 pt-10">
        <div className='grid grid-cols-8 '>
            <div className='space-y-4 col-start-1 col-span-3'>
                <div><img src={EstateLogo}></img></div>
                <div className='border bg-[#141414] flex items-center gap-2 w-72 px-4 py-2 rounded-md border-[#262626]'>
                    <img src={email}></img>
                    <input  type='email' placeholder='Enter Your Email' className='bg-[#141414] outline-none'/>
                    <img className="w-7" src={send}></img>
                </div>
            </div>

            <div className='flex col-start-4 col-span-8'>
                <div  className='flex flex-col'>
                    <a>Home</a>
                    <a>Features</a>
                    <a>Properties</a>
                    <a>Testimonials</a>
                    <a>FAQ's</a>
                </div>

                <div  className='flex flex-col'>
                    <a>Home</a>
                    <a>Features</a>
                    <a>Properties</a>
                    <a>Testimonials</a>
                    <a>FAQ's</a>
                </div>


                <div  className='flex flex-col'>
                    <a>Home</a>
                    <a>Features</a>
                    <a>Properties</a>
                    <a>Testimonials</a>
                    <a>FAQ's</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;