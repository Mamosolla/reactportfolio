import React, { Component } from 'react'
import "./home.css"
export class home extends Component {
  render() {
    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure><img src="../../assets/images/kagiso.jpeg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Kagiso Lesterina Mamosolla</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    )
  }
}

export default home