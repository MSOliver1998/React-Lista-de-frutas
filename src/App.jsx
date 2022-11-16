import {useState} from 'react'
import './App.css'
import {Cards} from './assets/components/cards/Cards'

function App() {

  const [fruits,setFruits]=useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
    {name:'grape', color:'green' , price:8 }
  ])

  function redFruits(){
    setFruits(fruits.filter(el=>el.color=='red'))
  }

  const totalPrice=fruits.map(el=>el.price).reduce((pV, cV) => pV + cV,
    0)
  console.log(totalPrice)

  return (
    <div className="App">
      <div>
        {
          fruits.map((el,index)=>{
            return (
              <Cards key={index} name={el.name} color={el.color} price={el.price}>

              </Cards>
            )
          })
        }
        <button onClick={redFruits}>vermelhas</button>
        <p>R$: {totalPrice.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default App
