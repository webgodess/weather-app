const iconMap = {
  "01d": "images/sun.png",
  "01n": "images/crescent-moon.png",
  "02d": "images/partly-cloudy-day.png",
  "02n": "images/partly-cloudy-night.png",
  "03d": "images/cloud.png",
  "03n": "images/cloud.png",
  "04d": "images/broken-clouds.png",
  "04n": "images/cloudy2.png",
  "09d": "images/shower.png",
  "09n": "images/shower.png",
  "10d": "images/rain.png",
  "10n": "images/rain2.png",
  "11d": "images/thunderstorms.png",
  "11n": "images/thunder.png",
  "13d": "images/snowflake.png",
  "13n": "images/snowflake.png",
  "50d": "images/mist.png",
  "50n": "images/mist.png",
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: 0, lon: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    /* get a user's location */
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        fetch(
          /* request the weather based on the user's location from openweather API*/
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            const iconCode = data.weather[0].icon;
            this.setState({
              lat: latitude,
              lon: longitude,
              location: data.name,
              imageUrl:
                iconMap[iconCode] ||
                `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
              desc: data.weather[0].description,
              temp: Math.round(data.main.temp),
              feels: Math.round(data.main.feels_like),
              wind: Math.round(data.wind.speed),
              humidity: Math.round(data.main.humidity),
            });
          });
      },
      (error) => {
        /* if user's location isn't shared set default location to paris */
        const defLat = 48.8566;
        const defLon = 2.3522;

        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${defLat}&lon=${defLon}&appid=${API_KEY}&units=metric`
        )
          .then((response) => response.json())
          .then((data) => {
            const iconCode = data.weather[0].icon;
            console.log(data.data);
            this.setState({
              lat: defLat,
              lon: defLon,
              location: data.name,
              imageUrl:
                iconMap[iconCode] ||
                `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
              desc: data.weather[0].description,
              temp: Math.round(data.main.temp),
              feels: Math.round(data.main.feels_like),
              wind: Math.round(data.wind.speed),
              humidity: Math.round(data.main.humidity),
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    );
  }

  /* click event for converting metrics */

  handleClick() {
    let regex = /[℃]/;
    let tempinF;
    let feelsinF;
    let feelsinC;
    let element = document.getElementsByClassName("tempDisplay")[0];
    let element1 = document.getElementsByClassName("feelDisplay")[0];
    if (regex.test(element.innerHTML)) {
      tempinF = (this.state.temp * 1.8 + 32).toFixed(2);
      feelsinF = (this.state.feels * 1.8 + 32).toFixed(2);
      element.innerHTML = tempinF + "℉";
      element1.innerHTML = feelsinF + "℉";
    } else {
      element.innerHTML = this.state.temp + "℃";
      element1.innerHTML = this.state.feels + "℃";
    }
  }
  render() {
    return (
      <div className="container">
        <h1>{this.state.location}</h1>
        <div className="img-container">
          <img alt="weather-icon" src={this.state.imageUrl} />
        </div>
        <p className="tempDisplay">
          {this.state.temp}
          <span className="unit">℃</span>
        </p>
        <p>{this.state.desc}</p>
        <div className="bottomContainer">
          <div className="column">
            <p>feels like</p>
            <div>
              <i className="fas fa-thermometer-half"></i>
              <span className="unit feelDisplay">{this.state.feels}℃</span>
            </div>
          </div>
          <div className="column">
            <p>wind</p>
            <div>
              <i className="fas fa-wind"></i>
              <span className="unit feelDisplay">{this.state.wind} m/s</span>
            </div>
          </div>
          <div className="column">
            <p>humidity</p>
            <div>
              <i className="fas fa-tint"></i>
              <span className="unit feelDisplay">{this.state.humidity}%</span>
            </div>
          </div>
        </div>
        <button className="convert" onClick={this.handleClick}>
          Convert
        </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
