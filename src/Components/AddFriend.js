import React, { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";

const AddFriend = () => {
  let navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    age: "",
    email: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post('/friends',form)
      .then((res) => {
        console.log(res);
        navigate('/friends')
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>AddFriends</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input onChange={handleChange} name="name" id="name" />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input onChange={handleChange} name="age" id="age" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input onChange={handleChange} name="email" id="email" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddFriend;
