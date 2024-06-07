import React from 'react'

const Button = ({ label, iconURL, backgroundColor, borderColor, textColor, fullWidth }) => {
  return (
    <button className={`flex items-center justify-center gap-2 py-4 text-lg leading-none
    border rounded-full font-montserrat px-7
      ${backgroundColor ? `${backgroundColor} ${borderColor} ${textColor}` :
        `text-white bg-coral-red border-coral-red`} ${fullWidth && 'w-full'}`}>
      {label}
      {iconURL && (
        <img src={iconURL} alt="arrow right icon" className='w-5 h-5 rounded-full' />
      )}
    </button>
  )
}

export default Button