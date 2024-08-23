
type ButtonProps = {
    text: string,
}

const Button = ({text}: ButtonProps) => {
  return (
    <div>
        <button className='bg-[#1a1a1a] rounded-lg px-4 py-3 border border-[#262626] text-sm'>{text}</button>
    </div>
  )
}

export default Button