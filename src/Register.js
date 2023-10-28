import React, { useState } from "react";

export default function Register({ dispatchUser }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (formData.username && formData.password === formData.confirmPassword) {
      dispatchUser({ type: "REGISTER", username: formData.username });
      setFormData({
        username: "",
        password: "",
        confirmPassword: "",
      });
    } else {
      alert("Registration failed. Please check your input.");
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <label htmlFor="register-username">Username:</label>
      <input
        type="text"
        name="username"
        id="register-username"
        value={formData.username}
        onChange={handleInputChange}
      />

      <label htmlFor="register-password">Password:</label>
      <input
        type="password"
        name="password"
        id="register-password"
        value={formData.password}
        onChange={handleInputChange}
      />

      <label htmlFor="register-password-repeat">Repeat password:</label>
      <input
        type="password"
        name="confirmPassword"
        id="register-password-repeat"
        value={formData.confirmPassword}
        onChange={handleInputChange}
      />

      <input
        type="submit"
        value="Register"
        disabled={
          formData.username.length === 0 ||
          formData.password.length === 0 ||
          formData.password !== formData.confirmPassword
        }
      />
    </form>
  );
}
