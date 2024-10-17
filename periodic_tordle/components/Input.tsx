"use client"
import React from 'react'

const Input = () => {

    const handleChange = () => {
        return 
    }

    const handleSubmit = () => {
        return 
    }

  return (
    <div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <label className="block">
            <span >Enter an Element</span>
            <input
              type="text"
              onChange={handleChange}
              placeholder="Type Element here"
            />
          </label>
          <div >
            <button >Submit</button>
          </div>
        </form>
    </div>
  )
}

export default Input