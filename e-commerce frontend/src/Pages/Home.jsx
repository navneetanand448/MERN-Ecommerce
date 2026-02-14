import React from 'react'
import ProductCard from '../Components/ProductCard'

function Home() {
  const addToCartHandler=()=>{

  }
  return (
    <div className="home">
      <section>

      </section>
      <h1>Latest Products
      <Link to="/search" className="findmore">
      More
      </Link>
      </h1>
      <main>
        <ProductCard
         productId="acednck"
         name="Macbook"
         price={456}
         stock={56}
         handler={addToCartHandler}
         photo="https://unsplash.com/photos/black-laptop-computer-turned-on-in-dim-light-o9XN28KdyN8"
      />
      </main>
    </div>
  )
}

export default Home
