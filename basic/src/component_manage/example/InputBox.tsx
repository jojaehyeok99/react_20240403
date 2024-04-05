import React from 'react'

interface Props{
  label : string;
  type : 'text' | 'password';
  placeholder : string;
  buttonTitle? : string;
}

export default function InputBox({label, type, placeholder, buttonTitle} : Props) {
  return (
    <div className = "input-box">
      <div className = "input-label label">{label}</div>
      <div className = "input-content-box">
        <input className = "input" type={type} placeholder={placeholder}/>
        {/* && 연산자를 사용해 buttonTitle이 있으면 div 요소를 표시 아니면 표시 안함*/}
        {buttonTitle && <div className = "input-disable-button">{buttonTitle}</div>} 
      </div>
      <div className = "input-message"></div>
    </div>
  )
}
