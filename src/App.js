import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./Components/navbar";
import HomePage from "./Components/homePage/homepage";
import Loader from "./Components/Loader/loader";
import Social from "./Components/SocialBar/socialBar";
import genericNotFound from "./Components/NotFound/notFound";
import Footer from "./Components/Footer/footer";
import { IntlProvider } from "react-intl";
import { LOCALES } from "./i8n/locales";
import messages from "./i8n/messages";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1600);
  }, []);
  const [language, setLanguage] = useState(LOCALES.ENGLISH);
  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <Router>
        <Social />
        <Loader load={loading} />
        <div className="App" id={loading ? "noScroller" : "scroll"}>
          <NavBar setLanguage={setLanguage} />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route component={genericNotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </IntlProvider>
  );
}

export default App;
