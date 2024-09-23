import { useEffect, useState } from 'react'

import HeaderNav from './HeaderNav';

import '../assets/styles/Header.css'

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (event) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    if(isOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  })

  return (
    <>
      <header className='header'>
        <div className='main-header'>
          <div className='header-logo'>MSD</div>
          <HeaderNav type='header-btn-open' handleMenu={handleClick}>
            <span></span>
            <span></span>
            <span></span>
          </HeaderNav>
        </div>
        {
          isOpen && 
          <aside className='aside-header'>
            <HeaderNav type='header-btn-close' handleMenu={handleClick} setStatus={setIsOpen} >
              <span></span>
              <span></span>
            </HeaderNav>
          </aside>
        }
      </header>
    </>
  )
}

export default Header
