import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const Createproduct = (props) => {
  const history = useHistory();
  const [productname, setProductname] = useState("");
  const [price, setPrice] = useState("");
  const [isLoading, setLoading] = useState(false);

  let handlesubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post("https://60efffc5f587af00179d3c35.mockapi.io/users", {
        productname,
        price,
      });
      setLoading(false);
      history.push("/product");

    } catch (error) {
      setLoading(false);
    }
  };
  return (
    <div>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Create Product</h1>
      </div>
      <div className="container">
        <form onSubmit={handlesubmit}>
          <div className="row">
            <div className="col-lg-6">
              <label>Product Name</label>
              <input
                type="text"
                value={productname}
                onChange={(e) => {
                  setProductname(e.target.value);
                }}
                className="form-control"
              />
            </div>
            <div className="col-lg-6">
              <label>Price</label>
              <input
                type="text"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                className="form-control"
              />
            </div>
            <div className="col-lg-12">
              <input
                type="submit"
                value="submit"
                className="btn btn-primary mt-3"
                disabled={isLoading}
                onSubmit={handlesubmit}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Createproduct;
