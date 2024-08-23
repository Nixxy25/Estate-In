import ArrowUp from '../assets/Images/Icon.png'

type ContainerProps = {
    text: string;
    icon: string;  
}

const Container = ({ text, icon }: ContainerProps) => {
  return (
    <div className="py-8 relative bg-[#262626] border border-[#999999] w-full text-sm rounded-lg  justify-center flex flex-col items-center">
      <img src={ArrowUp} className='absolute top-0 right-0 m-2'/>
      <img src={icon} alt="icon" className="w-16" />
      <p className="">{text}</p>
    </div>
  )
}

export default Container;