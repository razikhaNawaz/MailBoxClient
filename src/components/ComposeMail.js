import { EditorState } from "draft-js";
import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import classes from "./ComposeMail.module.css";
import Sidebar from "./Sidebar";


const ComposeMail = () => {
  const [editorState, setEditorState] = useState(()=> EditorState.createEmpty());
  const [receiver, setReceiver]=useState('');
  const [subject, setSubject]=useState('')

  let url='https://mailbox-f7b85-default-rtdb.firebaseio.com';
  const sender=localStorage.getItem('email').replace(/['@','.']/g,'')
  const sender1=localStorage.getItem('email')

  const postDatatoSentBox=async()=>{
    try {
        const response=await fetch(`${url}/sentBox/${sender}.json`, {
            method:'POST',
            body:JSON.stringify({
                to:receiver,
                subject:subject,
                message:editorState.getCurrentContent().getPlainText()
            }),
            headers:{
                'Content-Type':'application/json'
            }
            
        })
    } catch (error) {
        alert(error)
    }
  }

  const postDataToInbox=async()=>{
    const receiver1=receiver.replace(/['@','.']/g,'')
    try {
        const response=await fetch(`${url}/Inbox/${receiver1}.json`,{
            method:'POST',
            body:JSON.stringify({
                from:sender1,
                subject:subject,
                message:editorState.getCurrentContent().getPlainText(),
                read:false
            }),
            headers:{
                'Content-Type':'application/json'
            }
        })
    } catch (error) {
        alert(error)
    }
  }
  

  const EditorStateChangeHandler = (e) => {
    setEditorState(e);
  };

  const receiverHandler=(e)=>{
    setReceiver(e.target.value)
  }

  const subjectHandler=(e)=>{
    setSubject(e.target.value)
   
  }

  

  const submitHandler = (e) => {
    e.preventDefault();
    postDatatoSentBox()
    postDataToInbox()
    setReceiver('')
    setSubject('')
    setEditorState('')
  };

  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
    <Sidebar />
    </div>
      <div className={classes.parent}>
        <div className={classes.child1}>
          <div>To: </div>
          <input type="email" placeholder="email" value={receiver} onChange={receiverHandler}></input>
          <button type="button" class="btn btn-primary" onClick={submitHandler}>
            Send
          </button>
        </div>
        <div className={classes.child2}>
          <div>Subject: </div>
          <input type="text" value={subject} onChange={subjectHandler}></input>
        </div>
        <div className={classes.child3}>
          <Editor
            editorState={editorState}
            onEditorStateChange={EditorStateChangeHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default ComposeMail;
