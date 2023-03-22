


import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sentBoxActions } from '../ReduxStore/SentBoxReducer'

const SentBox = () => {
    const dispatch=useDispatch()
    const sentBoxData=useSelector(state=>state.sentBoxReducer.dataSentbox)

    let url='https://mailbox-f7b85-default-rtdb.firebaseio.com';
    const sender=localStorage.getItem('email').replace(/['@','.']/g,'')
    const getData=async()=>{
        try {
            const response=await fetch(`${url}/sentBox/${sender}.json`)
            const data=await response.json()

            const arrayData=[];
            for(let key in data){
                arrayData.unshift({id:key,...data[key]})
            }
            dispatch(sentBoxActions.updateSentbox(arrayData))
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <div>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">To</th>
      <th scope="col">subject</th>
      <th scope="col">Message</th>
    </tr>
  </thead>
  <tbody>
    {sentBoxData.map((item, index)=>{
        return (
        <tr key={item.id}>
        <th scope="row">{index+1}</th>
        <td>{item.to}</td>
        <td>{item.subject}</td>
        <td>{item.message}</td>
      </tr>
    )
    })}
    
    
  </tbody>
</table>
    </div>
  )
}

export default SentBox