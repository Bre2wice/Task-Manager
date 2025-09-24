import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar: React.FC = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <nav>
      <div className="nav-container">
        <Link to="/">Dashboard</Link>
        <Link to="/create">Create Task</Link>

        {isAuthenticated ? (
          <>
            <span>Hello, {user?.name}</span>
            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Logout
            </button>
          </>
        ) : (
          <button onClick={() => loginWithRedirect()}>Login</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
