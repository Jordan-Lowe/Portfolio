import React from 'react'
import { addUser } from '../apis/usersApi' // Added this import

interface Users {}

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

    addUser(form) // Call the addUser API
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }


  return (
    <div className="flex h-full justify-between">
      <form onSubmit={handleSubmit}>
        <div className="pb-4 ">
          <label
            className="font-sans font-bold text-slate-50 pb-2"
            htmlFor="name"
          >
          </label>
          <input
            className="p-2 w-full text-base font-bold text-fuchsia-200 bg-slate-950 bg-opacity-50 rounded-lg font-body"
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>

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
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default ContactMe
