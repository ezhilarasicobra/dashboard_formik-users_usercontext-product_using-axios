import React,{useContext} from "react";
import { Link } from "react-router-dom";
import UserContext from "./userContext";
const Users = () => {
  const userContext = useContext(UserContext)
  console.log(userContext)
 let  handleDelete =(index)=>{
let confirm=window.confirm("Are you sure yoou want to delete?")
if(confirm){
  userContext.userList.splice(index-1,1)
  userContext.setUserList([...userContext.userList])
}
 }
  return (
    <div>
      <h1>USERS DATA</h1>
      <Link
        to="/createuser"
        class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
      >
        <i class="fas fa-download fa-sm text-white-50"></i>Create User
      </Link>
      <table class="table table-striped">
        <thead>
          <tr>
          <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Position</th>
            <th scope="col">Office</th>
            <th scope="col">Age</th>
            <th scope="col">Salary</th>
            <th scope="col">Start Date</th>
            
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
          userContext.userList.map((obj,index) => 


          {
            return  <tr>
              <td>{index+1}</td>
                <td>{obj.username}</td>
                <td>{obj.position}</td>
                <td>{obj.office}</td>
                <td>{obj.age}</td>
                <td>{obj.salary}</td>
                <td>{obj.startdate}</td>                
                <Link
                  to={`/edituser/${index+1}`}
                  className="btn btn-sm  btn-primary"
                >
                  Edit
                </Link>
                <button onClick={()=>{handleDelete(index+1)}}className="btn btn-sm  btn-danger">Delete</button>
              </tr>
          }
          )
          }
        </tbody>
      </table>
    </div>
  );
};

export default Users;
