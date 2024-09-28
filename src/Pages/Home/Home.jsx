import "./Home.css";
import HeroImg from "../Images/11.png";
import { Link } from "react-router-dom";
import divImg from "../Images/3.jpg";
import { useState,useEffect } from "react";
import Footer from "../../Components/Footer/Footer";

function Home() {

  const [activeMembers, setActiveMembers] = useState(0);
  const [countries, setCountries] = useState(0);
  const [awards, setAwards] = useState(0);

  useEffect(() => {
    // Animate active members
    const activeMemberInterval = setInterval(() => {
      if (activeMembers < 50000) {
        setActiveMembers((prev) => prev + 1000); // Adjust increment as needed
      }
    }, 20); // Adjust the interval for speed

    // Animate countries
    const countriesInterval = setInterval(() => {
      if (countries < 120) {
        setCountries((prev) => prev + 2); // Increment by 1
      }
    }, 20); // Adjust the interval for speed

    // Animate awards
    const awardsInterval = setInterval(() => {
      if (awards < 217) {
        setAwards((prev) => prev + 2); // Increment by 1
      }
    }, 20); // Adjust the interval for speed

    return () => {
      clearInterval(activeMemberInterval);
      clearInterval(countriesInterval);
      clearInterval(awardsInterval);
    };
  }, [activeMembers, countries, awards]);



  return (
    // "Bid Now, Win Big: Unlock Exclusive Deals at Our Auction Hub!" "AuctionAura" name  "BidNest"
    <div>
      
        {/* hero section 1 */}
      <div className="hero-main">
        <div className="hero-text">
          <h1>Bid Now, Win Big</h1>
          <h2>
            Unlock Exclusive Deals at Our <br /> Auction Hub!
          </h2>
          <Link to='/products'>
          <button>Bid Now</button>
          </Link>
        </div>
        <div className="hero-image">
          <img src={HeroImg} alt="" />
        </div>
      </div>

      {/* Three Product Show  */}

      <div className="sec-hero">
        <div className="heading-btn">
            <h1>Latest</h1>
            <Link to='/products'>
            <button>See All</button></Link>
        </div>


        <div className="three-prod-show">
         <Link to='/products'>
          <div className="product-show">
            <img src={divImg} alt="" className="image" />
            <h1>Product Name</h1>
            <p>Price: $100</p>
            <button>Bid Now</button>
        </div>
        </Link>

        <Link to='/products'>
          <div className="product-show">
            <img src={divImg} alt="" className="image" />
            <h1>Product Name</h1>
            <p>Price: $100</p>
            <button>Bid Now</button>

        </div>
        </Link>
       
        <Link to='/products'>
          <div className="product-show">
            <img src={divImg} alt="" className="image" />
            <h1>Product Name</h1>
            <p>Price: $100</p>
            <button>Bid Now</button>
  
        </div>
        </Link>
  
      </div>
    

    </div> 

    {/* Our Community  */}

  <div className="community">
    <h1><span>Our Community</span></h1>

    <div className="community-counter">
      <div className="member">
        <h1>{activeMembers}</h1>
        <h1>Active Memeber</h1>
      </div>

      <div className="countries">
        <h1>{countries}</h1>
        <h1>Countries</h1>
      </div>

      <div className="award">
        <h1>{awards}</h1>
        <h1>Award</h1>
      </div>

    </div>
  </div>


  <Footer/>



    </div> //main
  );
}

export default Home;
