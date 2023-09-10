import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createCustomer } from './customerSlice'
import { nanoid } from 'nanoid'

function CreateCustomer() {
  const [fullName, setFullName] = useState('')
  const [id, setId] = useState('')
  const dispatch = useDispatch()

  function handleClick() {
    if (!fullName || !id) return
    dispatch(createCustomer(fullName, id))
  }

  return (
    <div>
      <h2>Create new customer</h2>
      <div className="inputs">
        <div>
          <label>Customer full name</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label>National ID</label>
          <input value={id} onChange={(e) => setId(e.target.value)} />
        </div>
        <button onClick={handleClick}>Create new customer</button>
      </div>
    </div>
  )
}

export default CreateCustomer
