import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AuthActions } from '../ReduxStore/AuthReducer';
import classes from './Authentication.module.css';

const Authentication = () => {
    const [email, setEmail]=useState('')
    const [Password, setPassword]=useState('')
    const [confirmPassword, setConfirmPassword]=useState('')
    const [login, setLogin]=useState(true)

    const dispatch=useDispatch()

    const emailHandler=(e)=>{
        setEmail(e.target.value)
    }

    const passwordHandler=(e)=>{
        setPassword(e.target.value)
    }

    const confirmPasswordHandler=(e)=>{
         setConfirmPassword(e.target.value)
    }
     const switchHandler=()=>{
        setLogin(!login)
     }

 

    let url;
    const auth=async()=>{
        if(confirmPassword!==Password){
            return alert('password and confirmpassword if different')
        }
        if(login){
            url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBxTQ7HpWywXD3DiL6bVUKO1E84bk-GQxI'
        }else {
            url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBxTQ7HpWywXD3DiL6bVUKO1E84bk-GQxI'
        }
        try {
            const response=await fetch(url, {
                method:'POST',
                body:JSON.stringify({
                    email: email,
                    password: Password,
                    returnSecureToken: true,
                }),
                headers:{
                    'Content-Type':'application/json'
                }
            })
            const data=await response.json();
            console.log(data);
            if(data.error){
                return alert(data.error.message)
            }
            alert('login successful')
            dispatch(AuthActions.login())
            localStorage.setItem('email',email)
        } catch (error) {
           console.log(error); 
        }

    }
    const submitHandler=(e)=>{
        e.preventDefault()
        console.log(email,Password,confirmPassword)
        auth()
    }

  return (
    <div className={classes.parent}>

    <div className={classes.container}>
        <form onSubmit={submitHandler} className={classes.child1}>
            <h3>SignUp</h3>
            <div className={classes.input}>
            <input type="email" placeholder='Email' value={email} onChange={emailHandler} required/>
            <input type="text" placeholder='Password' value={Password} onChange={passwordHandler} required/>
            <input type="password"placeholder='Confirm Password' value={confirmPassword} onChange={confirmPasswordHandler} required/>

            </div>
            <button type="submit" class="btn btn-primary" >
            {login ? 'login' : 'signUp'}
                </button>
        </form>
        

    </div>
    <div className={classes.child2}>
    <button type="button" class="btn btn-secondary" onClick={switchHandler}>
        {login ? 'create account' : 'Have an Account?Login'}
        
        </button>
        
    </div>
    </div>
  )
}

export default Authentication