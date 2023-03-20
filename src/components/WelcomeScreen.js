import React from 'react';
import classes from './WelcomeScreen.module.css'

const WelcomeScreen = () => {
  return (
    <div>
    <div className={classes.parent}>Welcome to Mail Box Client</div>
    <div className={classes.line}></div>
    </div>
  )
}

export default WelcomeScreen