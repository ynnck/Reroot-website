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
    <form id="contactForm" onSubmit={handleSubmit} method="POST">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={handleChange}
        className="textbox"
      />
      <label htmlFor="organization">Organization</label>
      <input
        type="text"
        id="organization"
        value={organization}
        onChange={handleChange}
        className="textbox"
      />
      <label htmlFor="email">E-mail</label>
      <input
        type="text"
        id="email"
        value={email}
        onChange={handleChange}
        className="textbox"
      />
      <label htmlFor="message">Enter your message</label>
      <textarea id="message" value={message} onChange={handleChange} />
      <input type="submit" value="Submit" className="button" />
    </form>
  )
}

export default ContactForm
