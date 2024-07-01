import React from 'react'
import Navbar from './Navbar'

const View = () => {
  return (
    <div>
        <Navbar/>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table">
  <thead>
    <tr>
      <th scope="col">SL.NO</th>
      <th scope="col">NAME</th>
      <th scope="col">NEWSPAPER</th>
      <th scope="col">PRICE</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>INDIAN EXPRESS</td>
      <td>789</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>THE HINDU</td>
      <td>890</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>HINDUSTAN TIMES</td>
      <td>908</td>
    </tr>
  </tbody>
</table>
            </div>
        </div>
      </div>
    </div>
  )
}

export default View
