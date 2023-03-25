import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sentBoxActions } from "../ReduxStore/SentBoxReducer";
import Sidebar from "./Sidebar";
import classes from './SentBox.module.css'
import { Link } from "react-router-dom";

const SentBox = () => {
  const dispatch = useDispatch();
  const sentBoxData = useSelector((state) => state.sentBoxReducer.dataSentbox);

  let url = "https://mailbox-f7b85-default-rtdb.firebaseio.com";
  const email = localStorage.getItem("email").replace(/['@','.']/g, "");
  const getData = async () => {
    try {
      const response = await fetch(`${url}/sentBox/${email}.json`);
      const data = await response.json();

      const arrayData = [];
      for (let key in data) {
        arrayData.unshift({ id: key, ...data[key] });
      }
      dispatch(sentBoxActions.updateSentbox(arrayData));
    } catch (error) {
      console.log(error);
    }
  };

const deleteData=async(id)=>{
  try {
    const response=await fetch(`${url}/sentBox/${email}/${id}.json`, {
      method:'DELETE'
    })
    getData();
  } catch (error) {
    console.log(error);
  }
}
const deleteHandler=(id)=>{
  deleteData(id)
}

  useEffect(() => {
    getData();
  }, []);


  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <Sidebar />
      </div>
      <div className={classes.tableParent}>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">To</th>
              <th scope="col">subject</th>
              <th scope="col">Message</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {sentBoxData.map((item, index) => {
              return (
                <tr key={item.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.to}</td>
                  <td>{item.subject}</td>
                  <td><Link to={`/Sentbox/${item.id}`}>Open Message</Link></td>
                  <td><button type="button" class="btn btn-danger" onClick={deleteHandler.bind(null, item.id)}>delete</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SentBox;
