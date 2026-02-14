import {useState} from 'react'
import {BiArrowBack} from "react-icons/bi"
function Shipping() {
  const [shippingInfo,setShippingInfo]=useState({
    address:"",
    city:"",
    state:"",
    country:"",
    pincode:"",
  })
  const changeHandler=(e)=>{
    setShippingInfo((prev)=>({...prev,[e.target.name]:e.target.value}))
  }
  return (
    <div className="shipping">
      <button>
        <BiArrowBack/>
      </button>
      <form>
        <h1>Shipping Address</h1>
        <input required type="text" placeholder="Address" name="address" onChange={changeHandler}/>
         <input required type="text" placeholder="City" name="city" onChange={changeHandler}/>
         <input required type="text" placeholder="State" name="state" onChange={changeHandler}/>
          <select value={shippingInfo.country} onChange={changeHandler}>

          </select>
          <input required type="number" placeholder="Pin Code" name="pincode" onChange={changeHandler}/>

      </form>
      <button></button>
    </div>
  )
}

export default Shipping
