import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import TaskProvider from "./context/TaskProvider";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Auth0Provider
    domain="dev-86jfy36753c0772o.us.auth0.com"
    clientId="JauMuq5Cwa6XPbQXRgCLif19iy1MObzL"
    authorizationParams={{ redirect_uri: window.location.origin }}
  >
    <TaskProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TaskProvider>
  </Auth0Provider>
);
