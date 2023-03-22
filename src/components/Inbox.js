import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { InboxActions } from '../ReduxStore/InboxReducer';
// import { Link } from 'react-router-dom'
import classes from './Inbox.module.css'

const Inbox = () => {
  const dispatch=useDispatch();
  const inboxData=useSelector(state=>state.inboxReducer.inboxData)

  let url='https://mailbox-f7b85-default-rtdb.firebaseio.com';
  const email=localStorage.getItem('email').replace(/['@','.']/g,'')
  const getData=async()=>{
    try {
      const response=await fetch(`${url}/Inbox/${email}.json`)
      const data=await response.json()
      let arrayOfData=[]
      for(let key in data){
        arrayOfData.unshift({id:key, ...data[key]})
      }
      dispatch(InboxActions.changeInbox(arrayOfData))
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getData()
  }, [])
  return (
    <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">From </th>
      <th scope="col">Subject </th>
      <th scope="col">Message </th>
    </tr>
  </thead>
  <tbody>
    {inboxData.map((item, index)=>{
      return (
        <tr key={index}>
      <td scope="row">{index+1}</td>
      <td>{item.from}</td>
      <td>{item.subject}</td>
      <td>{item.message}</td>
    </tr>
      )
    })}
    
    
  </tbody>
</table>
  )
}

export default Inbox    