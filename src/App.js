import "./App.css";
import axios from "axios";
import logo from "./images/shipping-fast-solid.svg";
import dhlLogo from "./images/dhl-brands.svg";
// import Parcel from './components/Parcel';

function App() {
  // check localstorage for data?

  // save back to localstorage if new parcel

  console.log(process.env.REACT_APP_DHL_API_KEY);

  const ships = [
    { shipNr: "142775112730", delService: "DHL" },
    { shipNr: "4381443301", delService: "DHL" },
  ];

  // for each parcel in ourArr call api for latest info and render card component

  const options = {
    method: "GET",
    url: "https://api-eu.dhl.com/track/shipments",
    params: { trackingNumber: "142775112730" },
    headers: { "DHL-API-Key": `${process.env.REACT_APP_DHL_API_KEY}` },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data.shipments[0].status.statusCode);
    })
    .catch(function (error) {
      console.error(error);
    });

  return (
    <div className="App">
      <h1 className="header">
        <span className="strong">Parcel</span>finder
        <img src={logo} className="logo"></img>
      </h1>
      <form className="form">
        <input
          type="text"
          className="input"
          placeholder="Enter shipment number here"
        />
        <button type="submit" className="submit">
          Search
        </button>
      </form>
      <div className="card-container">
        {ships.map((item, index) => {
          return (
            <div className="card">
              <span className="hide"></span>
              <div className="card-row">
                <h3>DHL Shipment</h3>
                <img src={dhlLogo} className="provider-logo" />
              </div>
              <div className="card-row">
                <span>Tracking number: </span>
                <span> 8475947598734 </span>
              </div>
              <div className="card-row">
                <span>Destination: </span>
                <span>Berlin, Germany</span>
              </div>
              <div className="card-row">
                <span>Current location: </span>
                <span>Kitzingen, Germany</span>
              </div>
              <div className="card-row">
                <span>Expected delivery: </span>
                <span>Date</span>
              </div>
            </div>
          );
          {
            /* return <Parcel key={index} />; */
          }
        })}
      </div>
    </div>
  );
}

export default App;
