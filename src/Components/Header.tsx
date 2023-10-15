import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Header.css'

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className='headerbc'>
      <text className='header'>SpreedSheet</text>
      </div>
    
  )
}
