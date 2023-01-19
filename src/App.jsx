import { useState } from 'react'
import './App.css'

// started at 10:20, Sat Dec 24, 2022
// finished at : 11:30 (1:10hrs)


// create an app that shows a color and 3 potential hex codes for that color, 1 being the correct one. When the user clicks a wrong one, user gets a response that it was the wrong one. When user selects the right one, gets a positive reward. A button exists at the bottom to allow for a new color to be generated with new codes.

// TODO

// Create function to create 3 random hex codes

// Randomly select 1 of them to color the box

// create buttons containing the hex codes

// on click of any button, if the code in that button is the code in the box, good
// if on click it's not, then 

function App() {
  const [hex3, setHex3] = useState([])
  const [color, setColor] = useState()
  const [answer, setAnswer] = useState()

  const create3HexCodes = () => {
    setAnswer()
    const randomHex = () => {
      let n = (Math.random() * 0xfffff * 1000000).toString(16);
      return n.slice(0, 6);
    };

    let hexCodes = [randomHex(), randomHex(), randomHex()]
    setHex3(hexCodes)
    setColor(hexCodes[Math.floor(Math.random() * 2)])
  }

  console.log(hex3)
  console.log(color)

  const checkAnswer = (hex) => {
    (hex === color) ? setAnswer('Correct') : setAnswer('Wrong')

  }


  return (
    <div className="App">
      <div className="card">
      <button onClick={create3HexCodes}>New Colors</button>
      <div className='box' style={{background: `#${color}`}}></div>

      {
        hex3.map((hex) => {
          return (
          <button onClick={() => checkAnswer(hex)}>#{hex}</button>
          )
        })
      }
      <h2>{answer}</h2>

      </div>
    </div>
  )
}

export default App
