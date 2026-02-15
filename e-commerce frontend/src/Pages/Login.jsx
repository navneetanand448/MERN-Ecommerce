import {useState} from 'react'
import {FcGoogle} from 'react-icons/fc'

function LogIn() {
  const [gender,setGender]=useState("");
  const [date,setDate]=useState("")
  return (
    <div className="login">
      <main>
          <h1 className="heading">Login</h1>
      </main>
      <div>
        <label>Gender</label>
          <select value={gender} onChange={(e)=>setGender(e.target.value)}></select>
          <option value="male">Male</option>
          <option value="female">Female</option>
      </div>
          <div>
        <label>Date of Birth</label>
          <input type="date"
          value={date}
          onChange={(e)=>setDate(e.target.value)}
          />
      </div>
      <div>
        <p>Already Signed In Once</p>
        <button>
          <FcGoogle/> <span>Sign in With Google</span>
        </button>
      </div>

    </div>
  )
}

export default LogIn
