import React from 'react'

interface Users {
  handleSubmit(form: {
    name: string
    email: string
    cellNumber: number
    enquiry: string
  }): unknown
}

function ContactMe(props: Users) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const cellNumber = Number(formData.get('cellNumber'))
    const enquiry = formData.get('enquiry') as string

    const form = {
      name: name,
      email: email,
      cellNumber: cellNumber,
      enquiry: enquiry,
    }

    props.handleSubmit(form)
  }

  return (
    <div className='flex '>
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Name" required />
        <input name="email" type="email" placeholder="Email" required />
        <input
          name="cellNumber"
          type="number"
          placeholder="Cell Number"
          required
        />
        <textarea name="enquiry" placeholder="Your Enquiry" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default ContactMe
