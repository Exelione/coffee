
import './App.css'
import { Banner } from './components/banner/Banner.tsx'
import { Features } from './components/features/Features.tsx'
import { Header } from './components/header/Header'
import { History } from './components/history/History.tsx'
import { MainProduct } from './components/mainProduct/MainProduct.tsx'

function App() {
 

  return (
    <>
    <Header/>
    <Banner/>
    <Features/>
    <History/>
    <MainProduct/>
    </>
    
  )
}

export default App
