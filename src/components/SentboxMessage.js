

import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import classes from './SentboxMessage.module.css'

const SentboxMessage = () => {
    const {Identifier}=useParams()
    const dataSentbox=useSelector(state=>state.sentBoxReducer.dataSentbox)
    const singleMessage=dataSentbox.filter((msg)=>msg.id===Identifier)
    const Msg=singleMessage[0].message

    const user=singleMessage[0].to

  return (
    <div className={classes.parent}>
      
    <div className={classes.msg}>
    <p>To:- {user}</p>
      <p>Message:- {Msg}</p>
    </div>
  </div>
  )
}

export default SentboxMessage