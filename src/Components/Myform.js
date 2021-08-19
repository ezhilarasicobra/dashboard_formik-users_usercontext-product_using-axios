import { useFormik } from "formik";
import React from "react";
const Myform = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      age: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.username) {
        errors.username = "required";
      }
      else if(values.username.length<15){
errors.username="must be 15 characters"
      }
      if (!values.age) {
        errors.age = "required";
      }else if(values.age<18){
        errors.age="Age must be above 18"
              }
      return errors;
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label>Name</label>
        <input
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
        />
        {formik.errors.username ? (
          <span style={{ color: "red" }}>{formik.errors.username}</span>
        ) : null}
        <br />
        <label>Age</label>
        <input
          name="age"
          value={formik.values.age}
          onChange={formik.handleChange}
        />
        {formik.errors.age ? (
          <span style={{ color: "red" }}>{formik.errors.age}</span>
        ) : null}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Myform;
