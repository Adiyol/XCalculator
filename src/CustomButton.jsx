import React from 'react'
import styles from "./CustomButton.module.css"
const CustomButton = (props) => {
  return (
    <button className={styles.button} onClick={() => { props.addToExpression(props.value)}}>{props.value}</button>
  )
}

export default CustomButton