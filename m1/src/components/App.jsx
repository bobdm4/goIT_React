import React from 'react';
import Product from './Product.jsx'
import Panel from './Panel';
import Profile from './Profile'


const App = () => (
  <>

    <div>
      <Panel title="User profile">
        <Profile name={2} email="mango@mail.com" />
      </Panel>
    </div>



    <Product
      imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=640"
      alt="Tacos With Lime"
      name="Tacos With Lime"
      price={10}
      textBtn='Add to cart' />
    <>
      <img
        className="image"
        src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=640"
        alt="Tacos With Lime"
        width="640"
      />
      <h2>Tacos With Lime</h2>
      <p>Price: 10$</p>
      <button type="button">Add to cart</button>
    </>
  </>
)

export default App;