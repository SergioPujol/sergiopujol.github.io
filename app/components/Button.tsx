import React from 'react'

interface ButtonProps {
    onClickEvent: any
    title: string
}

const Button: React.FC<ButtonProps> = ({
    onClickEvent,
    title
}) => {
  return (
    <button onClick={onClickEvent} className="py-3 px-5 bg-transparent border-white border-2 items-center rounded-md shadow-2xl cursor-pointer transform hover:-translate-y-[3px] hover:text-accent hover:border-accent transition duration-300 ease-out">
        {title}
    </button>
  )
}

export default Button