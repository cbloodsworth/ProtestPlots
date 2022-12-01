import React from 'react'
import { Icon } from '@iconify/react'
import sendCircle from '@iconify/icons-mdi/map-search'
import './sidebar.css'

const formInputs = [
  { id: 'zipcode', type: 'text', label: 'Enter your zipcode', placeholder: 'Ex. 32612' },
]

const Sidebar = () => (
  <form className="sidebar">
    <h2 className="sidebar-h2">Find protests based on your location</h2>

    {
    formInputs.map(input => (
      <label key={input.label} id={input.id} className="sidebar-label">
        {input.label}

        {input.type === 'textarea' ? (
          <textarea className="sidebar-textarea" placeholder={input.placeholder} />
        ) : (
          <input
            className="sidebar-input"
            type={input.type}
            placeholder={input.placeholder}
          />
        )}
      </label>
    ))
    }

    <Icon className="sidebar-submit" icon={sendCircle} />

    {/* { <button className="form-submit" type="button">
      Search
    </button> } */}
  </form>
)

export default Sidebar