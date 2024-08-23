import EstateLogo from '../assets/Images/Logo (3).png'

const Navbar = () => {
  return (
    <div className='text-[#fff] text-sm px-20 py-4 flex items-center bg-[#1a1a1a] justify-between'>
        <div><img src={EstateLogo}></img></div>

        <div className='flex gap-6'>
            <a>Home</a>
            <a>About Us</a>
            <a>Properties</a>
            <a>Services</a>
        </div>

        <div className='bg-[#141414] rounded-lg px-4 py-2 border border-[#262626]'><a>Contact Us</a></div>
    </div>
  )
}

export default Navbar