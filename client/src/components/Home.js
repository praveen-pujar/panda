import React from 'react';
import './main.css';

// import { Header } from './Header';

function Home() {
  return (
    <div>


<div id="demo" class="carousel slide" data-ride="carousel">
  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
    <li data-target="#demo" data-slide-to="3"></li>
    <li data-target="#demo" data-slide-to="4"></li>
  </ul>
  <div >
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="img-fluid center-fit" src={require("../img/first.jpg")} alt="Connect your loved ones." width="1100px" height="500px" />
      <div class="carousel-caption">
      <h3>Stay at Home</h3>
    <p>Work from comfort of your couch</p>
      </div>   
    </div>
    <div class="carousel-item">
      <img class="img-fluid center-fit" src={require("../img/second.jpg")} alt="Connect your loved ones." width="1100px" height="500px" />
      <div class="carousel-caption">
      <h3>Talk With closed Ones</h3>
    <p>Have quality time with friends</p>
      </div>   
    </div>
    
    <div class="carousel-item">
      <img class="img-fluid center-fit" src={require("../img/third.jpg")} alt="Connect your loved ones." width="1100px" height="500px" />
      <div class="carousel-caption">
      <h3>Learn something new </h3>
    <p>Keen to learn new skills, learn it live.</p>
      </div>   
    </div>

    <div class="carousel-item">
      <img class="img-fluid center-fit" src={require("../img/fourth.jpg")} alt="Connect your loved ones." width="1100" height="500" />
      <div class="carousel-caption">
      <h3>Company work</h3>
    <p>communicate with team mates with no worries!</p>
      </div>   
    </div>
    
    <div class="carousel-item">
      <img class="img-fluid center-fit" src={require("../img/fifth.jpg")} alt="Connect your loved ones." width="1100" height="500" />
      <div class="carousel-caption">
      <h3>Attending Classes</h3>
    <p>continue your studies without delays.</p>
      </div>   
    </div>
    
    </div>
  </div>
  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>
</div>

{/* end div tag */}
    </div>
    
  );
}

export default Home;
