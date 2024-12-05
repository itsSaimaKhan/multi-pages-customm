import React from 'react'

const Contact = () => {
  return (
    <div style={{backgroundImage: "url(watchcon.jpg)"}}>
      <section className='contact-form' >
        <h2 className='fade-in'>Contact</h2>
        <form >
          <input type='text' placeholder='Full Name'/>
          <input type='email' placeholder='Email Addess'/>
          <input type='text' placeholder='Phone Number'/>
          <textarea placeholder='Your Message' rows={5} required></textarea>
          <button type='submit'>Send Message</button>
        </form>
      </section>
    </div>
  )
}

export default Contact