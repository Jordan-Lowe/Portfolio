import { useRef } from 'react'

const Form_logo = 'public/Images/gmail-icon-logo-svgrepo-com.svg'

const ContactMe = ({ isActive, onToggle }) => {
  const formRef = useRef(null); // Create a reference to the form

  const handleSubmit = async (event) => {
    event.preventDefault()

    const form = event.target
    const userInfo = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      cellNumber: form.elements.cellNumber.value,
      enquiry: form.elements.enquiry.value,
    }

    try {
      const response = await fetch('http://localhost:5173/api/v1/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()

      console.log(data.message)

      // On successful submission, reset the form
      formRef.current.reset();

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="form-container">
      <div className="form-header" onClick={onToggle}>
        <button className="bg-transparent border-0">
          <img
            src={Form_logo}
            alt="Contact Me logo"
            className="form-logo w-[3vw] h-[6vh] hover:scale-125 transition duration-300 ease-in-out"
          />
        </button>
      </div>
      {isActive && (
        <form className="form-content" ref={formRef} onSubmit={handleSubmit}>
          <ul>
            <li>
              <label htmlFor="name">Name</label>
              <input
                className="p-2 w-full text-base font-bold text-fuchsia-200 bg-slate-950 bg-opacity-50 rounded-lg font-body"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
              />
            </li>

            <li>
              <label htmlFor="email">Email</label>
              <input
                className="w-full mb-2 p-2 text-base font-bold text-fuchsia-200 bg-slate-950 bg-opacity-50 rounded-lg font-body"
                name="email"
                type="email"
                placeholder="Email"
                required
              />
            </li>

            <li>
              <label htmlFor="cellNumber">Number</label>
              <input
                className="w-full mb-2 p-2 text-base font-bold text-fuchsia-200 bg-slate-950 bg-opacity-50 rounded-lg font-body"
                name="cellNumber"
                type="number"
                placeholder="Cell Number"
                required
              />
            </li>

            <li>
              <label htmlFor="enquiry">Enquiry</label>
              <textarea
                className="mb-2 p-2 w-full text-base font-bold text-fuchsia-200 bg-slate-950 bg-opacity-50 rounded-lg font-body"
                name="enquiry"
                placeholder="Your Enquiry"
              />
            </li>
          </ul>
          <input type="submit" value="Submit" />
        </form>
      )}
    </div>
  )
}

export default ContactMe
