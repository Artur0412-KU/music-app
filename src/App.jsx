import { useState } from 'react'
import ToggleColorMode from './components/color-mode/ToggleColorMode'
import './index.css'
import Views from './components/Views'

function App() {


  return (
    <div className="flex items-center flex-col">
      <ToggleColorMode/>
      <Views/>

    </div>
  )
}

export default App
