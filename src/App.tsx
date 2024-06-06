
import './App.css'
import { Banner } from './components/banner/Banner.tsx'
import { CoffeeMachine } from './components/coffeeMachine/CoffeeMachine.tsx'
import { Features } from './components/features/Features.tsx'
import { Header } from './components/header/Header'
import { History } from './components/history/History.tsx'
import { MainProduct } from './components/mainProduct/MainProduct.tsx'
import { Menu } from './components/menu/Menu.tsx'
import { Testimonial } from './components/testimonial/Testimonial.tsx'

function App() {
 

  return (
    <>
    <Header/>
    <Banner/>
    <Features/>
    <History/>
    <MainProduct/>
    <CoffeeMachine/>
    <Menu/>
    <Testimonial/>
    </>
    
  )
}

export default App
