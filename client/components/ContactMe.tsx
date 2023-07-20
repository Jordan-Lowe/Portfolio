import { useState } from 'react'

const Form_logo = 'public/Images/gmail-icon-logo-svgrepo-com.svg'

const ContactMe = ({ isActive, onToggle }) => {
  return (
    <div className="form-container">
      <div className="form-header" onClick={onToggle}>
        <button className='bg-transparent border-0'>
          <img
            src={Form_logo}
            alt="Contact Me logo"
            style={{ width: '3vw', height: '6vh' }}
          />
        </button>
      </div>
      {isActive && (
        <form className="form-content">
          <ul>
            <li>
              <label htmlFor="name">Name</label>
            </li>
            <input
              className="p-2 w-full text-base font-bold text-fuchsia-200 bg-slate-950 bg-opacity-50 rounded-lg font-body"
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
            />

            <li>
              <label htmlFor="email">Email</label>
            </li>
            <input
              className="w-full mb-2 p-2 text-base font-bold text-fuchsia-200 bg-slate-950 bg-opacity-50 rounded-lg font-body"
              name="email"
              type="email"
              placeholder="Email"
              required
            />
            <li>
              <label htmlFor="cellNumber">Number</label>
            </li>
            <input
              className="w-full mb-2 p-2 text-base font-bold text-fuchsia-200 bg-slate-950 bg-opacity-50 rounded-lg font-body"
              name="cellNumber"
              type="number"
              placeholder="Cell Number"
              required
            />
            <li>
              <label htmlFor="enquiry">Enquiry</label>
            </li>
            <textarea
              className="mb-2 p-2 w-full text-base font-bold text-fuchsia-200 bg-slate-950 bg-opacity-50 rounded-lg font-body"
              name="enquiry"
              placeholder="Your Enquiry"
            />
          </ul>
          <input type="submit" value="Submit" />
        </form>
      )}
    </div>
  )
}

export default ContactMe
