import { Component } from "react";
import SingleBook from "./SingleBook";
import { Container, ListGroup, Row, Card, Offcanvas } from "react-bootstrap";

class BookList extends Component {
  state = {
    search: "",
  };

  filtra = (query) => {
    this.setState({ search: query });
  };
  render() {
    return (
      <Container>
        <input type="text" onChange={(Event) => this.filtra(Event.target.value)} />
        <Row className="lista">
          {this.props.lista
            .filter((book) => book.title.toLowerCase().includes(this.state.search.toLowerCase()))
            .map((book, index) => (
              <SingleBook key={`book-${index}`} title={book.title} image={book.img} />
            ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
