import "./Home.css";
import HeroImg from "../Images/11.png";
import { Link } from "react-router-dom";
import divImg from "../Images/3.jpg";

function Home() {
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
          <Link to='./products'>
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
            <Link to='./products'>
            <button>see all</button></Link>
        </div>
      </div>


    </div> //main div
  );
}

export default Home;
