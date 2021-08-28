import { Component } from "react";
import axios from "axios";

// const KEY = "563492ad6f91700001000001390f9fee0a794c1182a72e49e0e0eae2";
const NEW_KEY = "563492ad6f917000010000013c1b42eecfa242ac8674f4d0dcb1a46e";
const BASE_URL = "https://api.pexels.com/v1/search";

axios.defaults.headers.common.Authorization = NEW_KEY;
axios.defaults.baseURL = BASE_URL;
console.dir(axios);

export default class Pexels extends Component {
  state = {
    images: [],
    query: "",
    page: 1,
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
  componentDidUpdate(prevState, prevProps) {
    if (prevState.page !== this.state.page) {
      this.getFetch();
    }
  }
  async getFetch() {
    let queryParams = `?query=${this.state.query}&per_page=5&page=${this.state.page}`;
    const response = await axios.get(queryParams);
    const data = response.data.photos;
    console.log(data);
    this.setState({ images: [...data] });
  }
  singleFormSubmit = (e) => {
    e.preventDefault();

    this.setState({ page: 1 });
    this.getFetch();
    this.setState({ query: "" });
  };
  handleClick = () => {
    this.setState({ page: this.state.page + 1 });
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
        <button type="button" onClick={this.handleClick}>
          Load more
        </button>
      </div>
    );
  }
}
