import { useState } from 'react'

const ContactMe = () => {
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="form-container">
        
      <div className="form-header" onClick={() => setShowForm(!showForm)}>
        <ul>
          <li>
            <label htmlFor="name">Name</label>
          </li>
          <li>
            <label htmlFor="email">Email</label>
          </li>
          <li>
            <label htmlFor="cellNumber">Number</label>
          </li>
          <li>
            <label htmlFor="enquiry">Enquiry</label>
          </li>
        </ul>
      </div>
      {showForm && (
        <form className="form-content">
          <input
            className="p-2 w-full text-base font-bold text-fuchsia-200 bg-slate-950 bg-opacity-50 rounded-lg font-body"
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />

          <input
            className="h-[25%] w-full mb-2 p-2 text-base font-bold text-fuchsia-200 bg-slate-950 bg-opacity-50 rounded-lg font-body"
            name="email"
            type="email"
            placeholder="Email"
            required
          />

          <input
            className="h-[25%] w-full mb-2 p-2 text-base font-bold text-fuchsia-200 bg-slate-950 bg-opacity-50 rounded-lg font-body"
            name="cellNumber"
            type="number"
            placeholder="Cell Number"
            required
          />

          <textarea
            className="h-[25%] mb-2 p-2 w-full text-base font-bold text-fuchsia-200 bg-slate-950 bg-opacity-50 rounded-lg font-body"
            name="enquiry"
            placeholder="Your Enquiry"
          />

          <input type="submit" value="Submit" />
        </form>
      )}
    </div>
  )
}

export default ContactMe
