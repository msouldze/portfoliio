import '../assets/styles/Contact.css'

function Contact() {
  return (
    <section className='contacts' id='contacts'>
      <h3>contact me</h3>
      <ul className='contact-list'>
        <li className='contact'>
          <a href="tel:+821021051345">
            <ion-icon name="call"></ion-icon>
            <span>+82-10-2105-1345</span>
          </a>
        </li>
        <li className='contact'>
          <a href="mailto: msouldze1@gmail.com">
            <ion-icon name="mail"></ion-icon>
            <span>msouldze1@gmail.com</span>
          </a>
        </li>
        <li className='contact'>
          <a href="https://www.linkedin.com/in/aizhan-dzhumanalieva-a31545191/">
            <ion-icon name="logo-linkedin"></ion-icon>
            <span>LinkedIn</span>
          </a>
        </li>
        <li className='contact'>
          <a href="https://github.com/msouldze">
            <ion-icon name="logo-github"></ion-icon>
            <span>Github</span>
          </a>
        </li>
      </ul>
      <div className='copyright'>Copyright ©2024 Aizhan Dzhumanalieva</div>
    </section>
  )
}

export default Contact
