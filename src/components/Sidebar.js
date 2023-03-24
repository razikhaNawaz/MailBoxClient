import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AuthActions } from '../ReduxStore/AuthReducer';
import classes from './Sidebar.module.css';

const Sidebar = () => {
  const dispatch=useDispatch()
  const inboxData=useSelector(state=>state.inboxReducer.inboxData)
  const unread=useSelector(state=>state.inboxReducer.unread)

  // let unread=0;
  // inboxData.forEach((itm)=>{
  //   if(itm.read===false){
  //     unread++
  //   }
  // })

  const logoutHandler=()=>{
    dispatch(AuthActions.logout())
  }
  return (
    <div className={classes.container}>

        <div>All Mails</div>
        <div clasName={classes.button}>
        <Link to='/'><button type="submit" className="btn btn-success " style={{marginTop:'20px', width:'130px'}}>Compose Mail</button></Link>
        <Link to='/Inbox'><button type="submit" className="btn btn-success" style={{marginTop:'20px', width:'130px'}}>Inbox</button>{unread}</Link>
        <Link to='/SentBox'><button type="submit" className="btn btn-success " style={{marginTop:'20px', width:'130px'}}>Sent Box</button></Link>
        <button type="button" class="btn btn-success" style={{marginTop:'20px', width:'130px'}} onClick={logoutHandler}>Logout</button>
        </div>
    </div>
  )
}

export default Sidebar