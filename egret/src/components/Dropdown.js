import React, { useState } from 'react'

function Dropdown ({ title, items = [], multiSelect = false }) {
  const [open, setOpen] = useState(false)
  const [selection, setSelection] = useState([])
  const toggle = () => setOpen(!open)

  function handleOnClick (item) {}

  return (
    <div className=''>
      <h2>this is a heaping pile of nonsense </h2>
      <div
        className='dropdown'
        tabIndex={0}
        className=''
        role='button'
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <div className=''>
          <p className=''>{title}</p>
          <div className=''>
            <p>{open ? 'Close' : 'Open'}</p>
          </div>
        </div>
        {open && (
          <ul className=''>
            {items.map(item => (
              <li className='' key={item.id}>
                <button type='button' onClick={() => handleOnClick(item)}>
                  <span>{item.value}</span>
                  <span>{item.value}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Dropdown
