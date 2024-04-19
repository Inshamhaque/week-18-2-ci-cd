import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { RevenueCard } from './Components/RevenueCard'
import { RevenueCardGrid } from './Components/RevenueCardGrid'
import './App.css'
import { Header } from './Components/Header'
import { Table } from './Components/Table'

function App() {
  return(
    <div>
      <Header />
      <RevenueCardGrid />
      <Table />
    </div>
  )
}

export default App
