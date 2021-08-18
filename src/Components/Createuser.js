import React, { useContext } from "react";
import { useState } from "react";
import {useHistory} from "react-router-dom";
import UserContext from "./userContext";
function Createuser(props) {
  const [username, setUsername] = useState("");
  const [position, setPosition] = useState("");
  const [office, setOffice] = useState("");
  const [age, setAge] = useState("");
  const [salary, setSalary] = useState("");
  const [startdate, setStartdate] = useState("");


  const userContext = useContext(UserContext);
  const history=useHistory()

  let handlesubmit = (e) => {
    e.preventDefault();
    //alert(`hello ${username}`)
    const myData = {
      username,
      position,
      office,
      age,
      salary,
      startdate,
    };
    //console.log(myData)
    //console.log(userContext.userList)

    userContext.setUserList([...userContext.userList, myData]);
    history.push("/user")
  }
  return (
    <div>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Create User</h1>
      </div>
      <div className="container">
        <form onSubmit={handlesubmit}>
          <div className="row">
            <div className="col-lg-6">
              <label>Name</label>
              <input
                type="text"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                className="form-control"
              />
            </div>
            <div className="col-lg-6">
              <label>Position</label>
              <input
                type="text"
                value={position}
                onChange={(e) => {
                  setPosition(e.target.value);
                }}
                className="form-control"
              />
            </div>
            <div className="col-lg-6">
              <label>Office</label>
              <input
                type="text"
                value={office}
                onChange={(e) => {
                  setOffice(e.target.value);
                }}
                className="form-control"
              />
            </div>

            <div className="col-lg-6">
              <label>Age</label>
              <input
                type="text"
                value={age}
                onChange={(e) => {
                  setAge(e.target.value);
                }}
                className="form-control"
              />
            </div>

            <div className="col-lg-6">
              <label>Salary</label>
              <input
                type="text"
                value={salary}
                onChange={(e) => {
                  setSalary(e.target.value);
                }}
                className="form-control"
              />
            </div>
          
          <div className="col-lg-6">
            <label>Start Date</label>
            <input
              type="date"
              value={startdate}
              onChange={(e) => {
                setStartdate(e.target.value);
              }}
              className="form-control"
            />
          </div>
          </div>
          <div className="col-lg-12">
            <input
              type="submit"
              value="submit"
              className="btn btn-primary mt-3"
              onSubmit={handlesubmit}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Createuser;
