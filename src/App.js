import {
  Navbar,
  Hero,
  AboutMe,
  Skills,
  Projects,
  Footer
} from './components';

function App() {
  return ( 
  <div className='flex w-screen m-0 scroll-behavior'>
    <Navbar />
    <div className='bg-[#f5f5f5]'>
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Footer />
    </div>
  </div>
  )
}

export default App;
