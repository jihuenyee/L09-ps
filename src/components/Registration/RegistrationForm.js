import React, { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({ name: "", email: "", course: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return <p>Thank you for registering your interest!</p>;
  }

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <h1>Register Your Interest</h1>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <label>
        Course:
        <input type="text" name="course" value={formData.course} onChange={handleChange} required />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default RegistrationForm;