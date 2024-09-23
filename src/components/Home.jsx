import '../assets/styles/Home.css'


function Home() {
  return (
    <section className='home' id='home'>
      <div className='home-content'>
        <div className='welcome'>
          <div>Welcome to my Profile Page</div>
          <div>I am Aizhan Dzhumanalieva</div>
        </div>
        <div className='avatar'>
          <img src="avatar.svg" alt="Avatar" />
        </div>
      </div>
      <div className='home-background'>
        <img src="langs.svg" alt="Background" />
      </div>
    </section>
  )
}

export default Home
