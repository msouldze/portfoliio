import { useInView } from "react-intersection-observer";
import '../assets/styles/Home.css'
import { useEffect } from "react";


function Home() {
  const [ref, inView, entry] = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if(inView) {
      if(entry.isIntersecting) {
        entry.target.classList.add('animation');
      } else {
        entry.target.classList.remove('animation');
      }
    }
  }, [inView]);

  return (
    <section className='home' id='home'>
      <div className='home-content'>
        <div ref={ref} className='welcome-container'>
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
