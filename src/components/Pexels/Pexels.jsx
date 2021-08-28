import { Component } from "react";
import axios from "axios";

const KEY = "563492ad6f917000010000012505199bb27842618dc116a18c58462a";
const BASE_URL = "https://api.pexels.com/v1/search";

axios.defaults.headers.common.Authorization = KEY;
axios.defaults.baseURL = BASE_URL;
console.dir(axios);

export default class Pexels extends Component {
  state = {
    images: [],
    query: "",
  };
  handleChangeInput = (e) => {
    this.setState({ query: e.currentTarget.value });
  };
  //   handleFormSubmit = (e) => {
  //     e.preventDefault();
  //     let queryParams = `?query=${this.state.query}&per_page=3`;
  //     axios
  //       .get(queryParams)
  //       .then((response) => response.data)
  //       .then((data) => data.photos)
  //       .then((images) => this.setState({ images: [...images] }));
  //     this.setState({ query: "" });
  //   };
  singleFormSubmit = async (e) => {
    e.preventDefault();

    let queryParams = `?query=${this.state.query}&per_page=5`;
    const response = await axios.get(queryParams);
    const data = response.data.photos;
    this.setState({ images: [...data] });
  };
  render() {
    const { images, query } = this.state;
    return (
      <div>
        <form onSubmit={this.singleFormSubmit}>
          <input
            type="text"
            value={query}
            name={query}
            onChange={this.handleChangeInput}
          />
          <button type="submit">Search</button>
        </form>
        <ul>
          {images.length > 0 &&
            images.map((item) => (
              <li key={item.id}>
                <img
                  src={item.src.original}
                  alt={item.photographer}
                  width="300"
                />
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
