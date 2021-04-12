import React from "react";
import "./App.css";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-react";
import AfterSignIn from "./components/PagesWrapper/AfterSignIn";
import BeforeSignIn from "./components/PagesWrapper/BeforeSignIn";

function App() {
  return (
    <Router>
      <ClerkProviderWithNavigate>
        <SignedOut>
          <BeforeSignIn />
        </SignedOut>

        <SignedIn>
          <AfterSignIn />
        </SignedIn>
      </ClerkProviderWithNavigate>
    </Router>
  );
}

function ClerkProviderWithNavigate({ children }) {
  const { push } = useHistory();
  return (
    <ClerkProvider
      frontendApi="clerk.yjgyw.zurdq.lcl.dev"
      navigate={(to) => {
        return push(to);
      }}
    >
      {children}
    </ClerkProvider>
  );
}

export default App;
