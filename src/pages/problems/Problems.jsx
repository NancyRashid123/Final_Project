
import React from 'react'
import Weather from '../../component/weather/Weather'
import SoilAnalysis from '../../component/soilAnalysis/SoilAnalysis'
import ChatbotSection from '../../component/chat/Chat'

export default function Problems() {
  return (
    <>
       <header className="problems-header">
    <div className="problems-header-bg"> </div>
    <div className="problems-header-title px">
      <h3>SOIL ANALYSIS</h3>
    </div>
    <div className="problems-header-overlay"></div>
  </header>

  <div className="dev">
        <Weather />
        <SoilAnalysis />
    </div>
  <ChatbotSection/>
    </>
 
  )
}