import Link from "./Link";

function HeaderNav({ children, type, handleMenu, setStatus = '' }) {
  const name = type === 'header-btn-open' ? 'header-navbar' : 'aside-header';

  return (
    <>
      <nav className={name}>
        <a href='#home' onClick={() => setStatus(false)}>Home</a>
        <a href='#about' onClick={() => setStatus(false)}>About</a>
        <a href='#projects' onClick={() => setStatus(false)}>Projects</a>
        <a href='#contacts' onClick={() => setStatus(false)}>Contact</a>
      </nav>
      <button className={type} onClick={handleMenu}>
        {children}
      </button>
    </>
  )
}

export default HeaderNav;