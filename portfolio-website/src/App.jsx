import './App.css'
import {About, Footer, Header, Skills, Testimonial, Work} from './container'
import { Navbar } from './components'

function App() {

  return (
    <div className='app flex flex-col items-center'>
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      <Footer/> 
      {/* <Testimonial/> */}

    </div>
    
  )
}

export default App
