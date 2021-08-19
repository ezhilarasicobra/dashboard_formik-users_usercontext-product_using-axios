import React,{useContext} from 'react'
import { Link } from "react-router-dom";
import ProductContext from "./productContext";
const Product = () => {
  const productContext = useContext(ProductContext)
 let  handleDelete =(index)=>{
let confirm=window.confirm("Are you sure yoou want to delete?")
if(confirm){
  productContext.productList.splice(index-1,1)
  productContext.setProductList([...productContext.productList])
}
 }
  return ( <div>
    <h1>PRODUCT DATA</h1>
    <Link
        to="/createproduct"
        class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
      >
        <i class="fas fa-download fa-sm text-white-50"></i>Create Product
      </Link>
   <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Product Name</th>
      <th scope="col">Price</th>
      </tr>
  </thead>
  
  <tbody>
          {
          productContext.productList.map((obj,index) => 
          {
            return  <tr>
              <td>{index+1}</td>
                <td>{obj.productname}</td>
                <td>{obj.price}</td>              
                <Link
                  to={`/editproduct/${index+1}`}
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
					
  </div> );
}
 
export default Product;