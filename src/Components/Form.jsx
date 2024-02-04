import { useState } from "react"

export const Form = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState('') // success or error

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setMessageType('error')
      setMessage('Please fill in all fields')
      return
    }

    try {
      const response = await fetch('https://js2-ecommerce-api.vercel.app/api/messages', {
        method: 'POST',
        body: JSON.stringify(formData)
      })

      if (response.ok && response.status === 200) {
        setMessageType('success')
        setMessage('Message sent successfully')
      } else {
        console.error('Message failed to send')
        setMessageType('error')
        setMessage('Failed to send message')
      }
    } catch (error) {
      console.error(error)
      setMessageType('error')
      setMessage('An error occurred while sending the message')
    }
  }

  const handleChange = (e) => {
    setFormData((data) => ({ ...data, [e.target.name]: e.target.value }))
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">  
      <div className="form-group">
        <label className="form-label" htmlFor="name">
          Name
        </label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="form-control" />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="email">
          Email
        </label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-control" />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="message">
          Message
        </label>
        <textarea id="message" className="form-control" name="message" value={formData.message} onChange={handleChange} rows="4" cols="50"></textarea>
      </div>

      <button type="submit" className="btn form-submit-btn" >Submit</button>
      {message && <p style={{ color: messageType === 'error' ? 'red' : 'green' }}>{message}</p>}
    </form>
  )
}