import './style/App.css'
import { Header } from './Components/index'
import Home from './Pages/Home'
import LocomotiveScroll from 'locomotive-scroll';

function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <Header />
      <Home/>
    </>
  )
}

export default App
