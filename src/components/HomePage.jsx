import React from 'react'
import Navbar from './Navbar'

const HomePage = () => {
  return (
    <div>
        <Navbar/>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <h1>
                        <center>NEWSPAPER APP</center>
                    </h1>
<img src="https://i0.wp.com/s3.ap-south-1.amazonaws.com/img.paisawapas/images/2022/10/20113253/Rectangle-1English-Newspapers-in-India-1.png?fit=1200%2C600&ssl=1" alt="" />
                </div>
                <br />
                <h3>--------------------------ARE YOU LOOKING TOWARDS A HOT NEWS?--------------------------------</h3>
            
                    <div className="col col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div class="card" >
  <img src="https://upload.wikimedia.org/wikipedia/en/3/31/NewsPaperTheHindu.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">THE HINDU</h5>
    <p class="card-text">It is the most popular newspaper in india.The economic value is greater than 78.9% in the world.</p>
    <a href="#" class="btn btn-primary">Go to add</a>
  </div>
</div>
                    </div>
                    <div className="col col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div class="card">
  <img src="https://images.jdmagicbox.com/quickquotes/images_main/the-new-indian-express-newspaper-2213660871-qm33scmm.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">INDIAN EXPRESS</h5>
    <p class="card-text">It offers the sensitive and trustworthy news .Which have a social potential in the world.</p>
    <a href="#" class="btn btn-primary">Go to add</a>
  </div>
</div>
                    </div>
                    <div className="col col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div class="card">
  <img src="https://files.magzter.com/resize/magazine/1525333658/1683507162/view/3.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">HINDUSTAN TIMES</h5>
    <p class="card-text">It can be consider as the source of national political medium of news in the urban society.</p>
    <a href="#" class="btn btn-primary">Go to add</a>
  </div>
</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
