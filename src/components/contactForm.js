"use client"
import { useState } from "react"
import styles from "../styles/components/contactForm.module.css"
import Button from "./button"

export default function ContactForm() {

  const fields = {
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message"
  }

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch('api/email', {
      method: 'POST',
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      })
    })

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    })

    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      {Object.entries(fields).map(([key, value]) => (
        <label key={key}>
          {value}
          {key === "message" ? (
            <textarea 
              name={key}
              value={formData[key]}
              placeholder={value}
              onChange={handleChange}
              required
            />
          ) : key === "email" ? (
            <input 
              type="email"
              name={key}
              value={formData[key]}
              placeholder={value}
              onChange={handleChange}
              required
            />
          ) : (
            <input 
              type="text"
              name={key}
              value={formData[key]}
              placeholder={value}
              onChange={handleChange}
              required
            />
          )}
        </label>
      ))}

      <Button 
        label="Send"
        type="submit"
      />

    </form>
  )
}