import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import classes from "./InboxMessage.module.css";
import Sidebar from "./Sidebar";

const InboxMessage = () => {
  const { Identifier } = useParams();
  const arrayData = useSelector((state) => state.inboxReducer.inboxData);
  const Msg = arrayData.filter((msg) => msg.id === Identifier);
  console.log(arrayData);
  const singlemsg = Msg[0].message;

  const user=Msg[0].from;

  let url = "https://mailbox-f7b85-default-rtdb.firebaseio.com";
  const receiver1 = localStorage.getItem("email").replace(/['@','.']/g, "");
  const putData = async () => {
    try {
      const response = await fetch(
        `${url}/Inbox/${receiver1}/${Identifier}.json`,
        {
          method: "PATCH",
          body: JSON.stringify({
            read: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
        
      );
      console.log(response);

    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    putData()
  },[])
  return (
    <div className={classes.parent}>
      
      <div className={classes.msg}>
      <p>From:- {user}</p>
        <p>Message:- {singlemsg}</p>
      </div>
    </div>
  );
};

export default InboxMessage;
