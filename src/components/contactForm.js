import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const ContactForm = () => {
  const [name, setName] = useState("")
  const [organization, setOrganization] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = e => {}
  const handleChange = e => {
    console.log(e.target.id)
    switch (e.target.id) {
      case "name":
        setName(e.target.value)
        break
      case "organization":
        setOrganization(e.target.value)
        break
      case "email":
        setEmail(e.target.value)
        break
      case "message":
        setMessage(e.target.value)
        break
    }
  }
  return (
    <form
      id="contactForm"
      onSubmit={handleSubmit}
      method="POST"
      style={{ width: "30vw", minWidth: "325px" }}
    >
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "12px",
          border: "1px solid lightgrey",
          borderRadius: "3px",
          boxSizing: "border-box",
          marginTop: "6px",
          marginBottom: "16px",
        }}
      />
      <label htmlFor="organization">Organization</label>
      <input
        type="text"
        id="organization"
        value={organization}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "12px",
          border: "1px solid lightgrey",
          borderRadius: "3px",
          boxSizing: "border-box",
          marginTop: "6px",
          marginBottom: "16px",
        }}
      />
      <label htmlFor="email">E-mail</label>
      <input
        type="text"
        id="email"
        value={email}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "12px",
          border: "1px solid lightgrey",
          borderRadius: "3px",
          boxSizing: "border-box",
          marginTop: "6px",
          marginBottom: "16px",
        }}
      />
      <label htmlFor="message">Enter your message</label>
      <textarea
        id="message"
        value={message}
        onChange={handleChange}
        style={{
          height: "200px",
          width: "100%",
          resize: "vertical",
          padding: "12px",
          border: "1px solid lightgrey",
          borderRadius: "3px",
          boxSizing: "border-box",
          marginTop: "6px",
          marginBottom: "16px",
        }}
      />
      <input
        type="submit"
        value="Submit"
        style={{
          width: "100%",
          border: "1px solid lightgrey",
          color: "black",
          backgroundColor: "white",
          textAlign: "center",
          textDecoration: "none",
          display: "inline-block",
          padding: "7px",
        }}
      />
    </form>
  )
}

export default ContactForm
