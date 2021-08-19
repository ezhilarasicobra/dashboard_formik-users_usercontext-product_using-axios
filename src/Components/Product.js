import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Product = () => {
  const [prodList, setProdList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(async () => {
    try {
      let products = await axios.get(
        "https://60efffc5f587af00179d3c35.mockapi.io/users"
      );
      setProdList([...products.data]);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);
  let handleDelete = async (id) => {
    let confirm = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirm) {
      try {
        await axios.delete(
          `https://60efffc5f587af00179d3c35.mockapi.io/users/${id}`
        );
        let rowIndex = prodList.findIndex((obj) => {
          obj.id = id;
        });
        prodList.splice(rowIndex, 1);
        setProdList(...prodList);
      } catch (error) {}
    }
  };
  return (
    <div>
      <h1>PRODUCT DATA</h1>
      <Link
        to="/createproduct"
        class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
      >
        <i class="fas fa-download fa-sm text-white-50"></i>Create Product
      </Link>
      {isLoading ? (
        <h3>loading...</h3>
      ) : (
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
            </tr>
          </thead>

          <tbody>
            {prodList.map((product, index) => {
              return (
                <tr>
                  <td>{product.id}</td>
                  <td>{product.productname}</td>
                  <td>{product.price}</td>
                  <Link
                    to={`/editproduct/${product.id}`}
                    className="btn btn-sm  btn-primary"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => {
                      handleDelete(product.id);
                    }}
                    className="btn btn-sm  btn-danger"
                  >
                    Delete
                  </button>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Product;
