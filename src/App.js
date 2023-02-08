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
  <div className='flex m-0 p-0'>
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
