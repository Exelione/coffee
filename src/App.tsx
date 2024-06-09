
import './App.css'
import { Banner } from './components/banner/Banner.tsx'
import { CoffeeMachine } from './components/coffeeMachine/CoffeeMachine.tsx'
import { Features } from './components/features/Features.tsx'
import { Footer } from './components/footer/Footer.tsx'
import { Header } from './components/header/Header'
import { History } from './components/history/History.tsx'
import { LatestNews } from './components/latestNews/LatestNews.tsx'
import { MainProduct } from './components/mainProduct/MainProduct.tsx'
import { Menu } from './components/menu/Menu.tsx'
import { Reservation } from './components/reservation/Reservation.tsx'
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
    <Reservation/>
    <LatestNews/>
    <Footer/>
    </>
    
  )
}

export default App
