import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";

function Cart() {
  const [couponCode,setCouponCode]=useState("");
  const [isValidCouponCode,setIsValidCouponCode]=useState(false);
  useEffect(() => {
    const timeOutId=setTimeout(()=>{
      if(Math.random()>0.5) setIsValidCouponCode(true);
      setIsValidCouponCode(false);
    },1000)

    return () => {
      clearInterval(timeOutId);
      setIsValidCouponCode(false)
    }
  }, [couponCode])

  return (
    <div className="cart">
      <main></main>
      <aside>
      <p>Subtotal: ₹{subtotal}</p>
        <p>Shipping Charges: ₹{shippingCharges}</p>
        <p>Tax: ₹{tax}</p>
        <p>
          Discount: <em className="red"> - ₹{discount}</em>
        </p>
        <p>
          <b>Total: ₹{total}</b>
        </p>

        <input
          type="text"
          placeholder="Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />

        {couponCode &&
          (isValidCouponCode ? (
            <span className="green">
              ₹{discount} off using the <code>{couponCode}</code>
            </span>
          ) : (
            <span className="red">
              Invalid Coupon <VscError />
            </span>
          ))}
      </aside>
    </div>
  )
}

export default Cart
