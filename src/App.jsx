import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './App.module.css'
import CustomButton from './CustomButton'

function App() {
  const [expression, setExpression] = useState("")
  const [result, setResult] = useState()
  const [showResult, setShowResult] = useState(false)
  function addToExpression(value) {
    if(value === "=") {
      setResult(eval(expression))
      // setExpression("")
      setShowResult(true)
    } else if (value === "C") {
      setExpression("")
      setResult()
      setShowResult(false)
    } else {
      setExpression((exp) => exp + value)
    }
  }
  return (
    <div className={styles.container}>
      <h1>React Calculator</h1>
      <input value={expression} />
      {showResult && <div className={styles.result}>{result}</div>}
      <div className={styles.row}>
        <CustomButton value={"7"} addToExpression={addToExpression}/>
        <CustomButton value={"8"} addToExpression={addToExpression}/>
        <CustomButton value={"9"} addToExpression={addToExpression}/>
        <CustomButton value={"+"} addToExpression={addToExpression}/>
      </div>
      <div className={styles.row}>
        <CustomButton value={"4"} addToExpression={addToExpression}/>
        <CustomButton value={"5"} addToExpression={addToExpression}/>
        <CustomButton value={"6"} addToExpression={addToExpression}/>
        <CustomButton value={"-"} addToExpression={addToExpression}/>
      </div>
      <div className={styles.row}>
        <CustomButton value={"1"} addToExpression={addToExpression}/>
        <CustomButton value={"2"} addToExpression={addToExpression}/>
        <CustomButton value={"3"} addToExpression={addToExpression}/>
        <CustomButton value={"*"} addToExpression={addToExpression}/>
      </div>
      <div className={styles.row}>
        <CustomButton value={"C"} addToExpression={addToExpression}/>
        <CustomButton value={"0"} addToExpression={addToExpression}/>
        <CustomButton value={"="} addToExpression={addToExpression}/>
        <CustomButton value={"/"} addToExpression={addToExpression}/>
      </div>
    </div>
  )
}

export default App
