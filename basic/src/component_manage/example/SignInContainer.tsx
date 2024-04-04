import React from 'react'
import InputBox from './InputBox'
import './style.css'
import './common.css'

export default function SignInContainer() {
  return (
    <>
      <InputBox label='회원가입' type='text' placeholder='이메일 주소를 입력해주세요.' buttonTitle='회원가입' />
    </>
  )
}
