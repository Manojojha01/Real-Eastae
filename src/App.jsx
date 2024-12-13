
import './App.css'
import About from './Componed/About'
import Contact from './Componed/Contact'
import Footer from './Componed/Footer'
import Header from './Componed/Header'
import Projects from './Componed/Projects'
import Testmonials from './Componed/Testmonials'
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function App() {
 

  return (
    <>
  <div className='w-full overflow-hidden'>
      <ToastContainer />
      <Header />
      <About />
      <Projects />
      <Testmonials />
      <Contact />
      <Footer />
  </div>
    </>
  )
}

export default App
