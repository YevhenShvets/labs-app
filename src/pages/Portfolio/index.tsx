import React from 'react'
import { MainInfoSection, SecondaryInfoSection } from './components'


const Portfolio = () => {
  return (
    <div className="grid grid-cols-3 h-screen">
      <MainInfoSection />

      <div className="col-span-2 bg-slate-300">
        <SecondaryInfoSection />
      </div>
    </div>
  )
}

export default Portfolio
