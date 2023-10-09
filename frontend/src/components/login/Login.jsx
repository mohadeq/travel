import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";

import { UserContext } from "../../context.js";
import { useHistory } from "react-router-dom";
// Styled components for styling
const FormContainer = styled.div`
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
`;

const FormTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;

const BookingForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const history = useHistory();
  const { saveUser } = useContext(UserContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/api/login", formData);
      console.log(res.data);
      saveUser(res.data);
      history.push("/");
    } catch (err) {
      alert(err?.response?.data?.message ?? err.message);
    }
  };

  return (
    <div>
      {/* <form> */}
      <FormContainer>
        <FormTitle>Hotel Booking</FormTitle>
        <BookingForm onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Username</Label>
            <Input
              type="text"
              name="username"
              placeholder="username"
              value={formData.username}
              onChange={handleInputChange}
              autoFocus={true}
            />
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </FormGroup>
          <Button type="submit" style={{ marginLeft: "30px" }}>
            Login
          </Button>
        </BookingForm>
      </FormContainer>
      {/* </form> */}
    </div>
  );
};

export default Login;
