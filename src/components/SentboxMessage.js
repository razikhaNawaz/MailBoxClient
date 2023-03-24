

import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const SentboxMessage = () => {
    const {Identifier}=useParams()
    const dataSentbox=useSelector(state=>state.sentBoxReducer.dataSentbox)
    const singleMessage=dataSentbox.filter((msg)=>msg.id===Identifier)
    const Msg=singleMessage[0].message

  return (
    <div><p>{Msg}</p></div>
  )
}

export default SentboxMessage