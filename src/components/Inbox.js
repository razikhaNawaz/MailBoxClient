import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { InboxActions } from "../ReduxStore/InboxReducer";
// import { Link } from 'react-router-dom'
import classes from "./Inbox.module.css";
import Sidebar from "./Sidebar";

const Inbox = () => {
  const dispatch = useDispatch();
  const inboxData = useSelector((state) => state.inboxReducer.inboxData);

  let url = "https://mailbox-f7b85-default-rtdb.firebaseio.com";
  const email = localStorage.getItem("email").replace(/['@','.']/g, "");
  const getData = async () => {
    try {
      const response = await fetch(`${url}/Inbox/${email}.json`);
      const data = await response.json();
      let arrayOfData = [];
      for (let key in data) {
        arrayOfData.unshift({ id: key, ...data[key] });
      }
      dispatch(InboxActions.changeInbox(arrayOfData));
      let count=0;
      arrayOfData.forEach((msg)=>{
        if(msg.read===false){
          count++;
        }
      })
      dispatch(InboxActions.updateUnread(count))
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={classes.parent}>
      <div className={classes.sidebar}>
      <Sidebar />
      </div>
      <div className={classes.tableParent}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">From </th>
              <th scope="col">Subject </th>
              <th scope="col">Message </th>
              <th scope="col">Delete </th>
            </tr>
          </thead>
          <tbody>
            {inboxData.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td scope="row">{index + 1}</td>
                  <td>{item.from}</td>
                  <td>{item.subject}</td>
                  <td><Link to= {`/Inbox/${item.id}`}>Open Message</Link></td>
                  <td><button type="button" class="btn btn-danger">delete</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inbox;
