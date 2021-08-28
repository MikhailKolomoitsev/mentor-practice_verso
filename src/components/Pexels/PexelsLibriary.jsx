import { Component } from "react";
import { createClient } from 'pexels';

// const KEY = "563492ad6f91700001000001390f9fee0a794c1182a72e49e0e0eae2";
const NEW_KEY = "563492ad6f917000010000019e6a50d8313f45bfaf5897ff8025306d";
const BASE_URL = "https://api.pexels.com/v1/search";

const client = createClient(NEW_KEY);
console.log(client);

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

//   componentDidUpdate(prevState, prevProps) {
//     if (prevState.page !== this.state.page) {
//       this.getFetch();
//     }
//   }

  getFetch() {
    const { query } = this.state;
    client.photos
      .search({ query, per_page: 1 })
      .then((photos) => {
        console.log(photos);
        return photos.photos;
      })
      .then((data) =>
        this.setState((prevState) => {
          return {
            images: [...prevState.images, ...data],
          };
        })
      );
  }

  singleFormSubmit = (e) => {
    e.preventDefault();

    this.setState({ page: 1 });
    this.getFetch();
    e.target.reset();
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
