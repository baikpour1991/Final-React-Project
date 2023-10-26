import React, { useState } from 'react'
import classes from './Contact.module.css'

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    alert('Thank you for reaching out! We will get back to you soon.')
  }

  return (
    <div className={classes.contact}>
      <section className={classes.contactHeader}>
        <h1>Contact Us</h1>
        <p>{`We'd love to hear from you. Fill out the form below to get in touch.`}</p>
      </section>
      <form className={classes.contactForm} onSubmit={handleSubmit}>
        <div className={classes.inputGroup}>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className={classes.inputGroup}>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className={classes.inputGroup}>
          <label>Message:</label>
          <textarea name="message" rows={4} value={formData.message} onChange={handleChange} required></textarea>
        </div>
        <button type="submit" className={classes.submitButton}>
          Submit
        </button>
      </form>
    </div>
  )
}
