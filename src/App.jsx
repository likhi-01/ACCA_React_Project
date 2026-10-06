import Header from './component/Header'
import './App.css'
import Become from './component/Become'
import WhyChooseUs from './component/WhyChooseUs'
import Eligibility from './component/Eligibility'
import WhatYouLearn from './component/WhatYouLearn'
import  Placement  from './component/Placement'
import KickOff from './component/KickOff'
import { ModalProvider } from './context/ModalContext'

function App() {

  return (
  <ModalProvider>
    <Header/>
    <Become/>
    <WhyChooseUs/>
    <Eligibility/>
    <WhatYouLearn/>
    <Placement/>
    <KickOff/>
    </ModalProvider>
    

    
  )
}

export default App
