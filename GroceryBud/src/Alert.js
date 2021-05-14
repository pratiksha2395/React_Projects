import React, { useEffect } from 'react'

const Alert = ({removeAlert, msg, type, list}) => {
  useEffect (()=>{
    const timeout= setTimeout(()=>{
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout)
  },[list])
  console.log("in alert")
  return <p className={`alert alert-${type}`}>{msg}</p>
}

export default Alert
