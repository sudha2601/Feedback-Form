import React from 'react'
import app from './firebase.js'
import { getDatabase, ref, set, push } from 'firebase/database'
import { useState } from 'react'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom'

const Form1 = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const [seal, newseal] = useState(false)
  const [existing, newexisting] = useState(false)
  const [isSubmitting, newisSubmitting] = useState(false)

  const onSubmit = async (data) => {
    console.log(data)
    newisSubmitting(true)
    const db = getDatabase(app)
    const newdoc = push(ref(db, "feedback/users"))
    await set(newdoc, {
      name: data.name,
      Email: data.Email,
      feedback: data.feedback
    }).then(() => {
      alert("Data saved successfully")
      newisSubmitting(false)
      reset()
    }).catch((error) => {
      alert("Error: " + error.message)
      newisSubmitting(false)
    })
  }

  return (
    <div className='flex items-center justify-center bg-cover bg-no-repeat p-4' style={{
      backgroundImage: 'url("data:image/jpeg;base64,/9j/4AAQSk...")',
    }}>
      <div className='bg-white bg-opacity-90 shadow-xl rounded-2xl w-full max-w-md p-8 border border-gray-300'>
        <h2 className='text-2xl font-bold text-center text-gray-800 mb-6'>Feedback Form</h2>

        {isSubmitting && <p className='text-center text-blue-600'>Submitting...</p>}

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
          <div>
            <input
              {...register("name", { required: "Name is required" })}
              placeholder='Your Name'
              className='w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
            {errors.name && <p className='text-red-600 text-sm mt-1'>{errors.name.message}</p>}
          </div>

          <div>
            <input
              {...register("Email", {
                required: "Gmail ID is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                  message: "Please enter a valid Gmail address (must end with @gmail.com)"
                }
              })}
              placeholder='Email ID'
              className='w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
            {errors.Email && <p className='text-red-600 text-sm mt-1'>{errors.Email.message}</p>}
          </div>

          <div>
            <textarea
              {...register("feedback", { required: "Feedback message is required" })}
              placeholder='Your Feedback'
              rows={4}
              className='w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none'
            />
            {errors.feedback && <p className='text-red-600 text-sm mt-1'>{errors.feedback.message}</p>}
          </div>

          <button
            type='submit'
            disabled={isSubmitting}
            className={`w-full py-3 rounded-lg text-white font-semibold transition-all duration-300 ${isSubmitting ? 'bg-green-300 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'}`}
          >
            Submit
          </button>
        </form>

      </div>
    </div>
  )
}

export default Form1
