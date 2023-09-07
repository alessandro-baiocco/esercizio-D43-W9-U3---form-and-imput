import { Component } from "react";
import { Card, Container } from "react-bootstrap";

class SingleBook extends Component {
  state = { selected: true };
  render() {
    return (
      <Card
        style={{ backgroundColor: this.state.selected ? "blue" : "red" }}
        className="col-3"
        onClick={() => {
          this.state.selected ? this.setState({ selected: false }) : this.setState({ selected: true });
        }}
      >
        <img src={this.props.image} className="card-img-top" alt={this.props.title} />
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
        </div>
      </Card>
    );
  }
}

export default SingleBook;
