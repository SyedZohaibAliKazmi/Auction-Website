import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "./UserLayout.css";

function UserLayout() {
  return (
    <div className="main-user-Layout">
      <div className="layout-pages">
        
        <div className="user-page">
            <h1>Account Deatils</h1>
          <Link to={"/user/Profile"}>
            <h2 >
             * Profile
            </h2>
          </Link>
          <Link to={"/user/UserProduct"}>
            <h2 >
              * Products
            </h2>
          </Link>
          <Link to={"/user/Bid"}>
            <h2 >
              * Bids
            </h2>
          </Link>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default UserLayout;
