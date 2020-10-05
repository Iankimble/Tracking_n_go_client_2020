import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      trackingNumber: "",
      courier: "",
    };
  }
  // Return data for tracking- create a card for each update for item
  // Create button that saves the users package and allow them to customize the tracking number into a nmae
  // User will have list of packages they have with custom names and can check with the option to check status and delete from history

  // Logic that displays info in cards for order - map objects and return the data
  // "Date", "detail", "Status description", "checkpoint status" are the data points to return

  handleChange = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;

    // this.setState({
    //   [name]: value,
    // });
    this.setState({
      trackingNumber: e.target.value,
      courier: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let tracking = this.state.trackingNumber;
    console.log(`your tracking number is ${tracking}`);
    console.log(`your courier is ${this.state.courier}`);
    console.log("clicked");

    let trackingNumber = this.state.trackingNumber;
    let courierName = this.state.courier;
    let key = process.env.REACT_APP_TRACKING_API_KEY;

    fetch(
      `https://trackingmore.p.rapidapi.com/packages/track?lang=en&trackingNumber=${trackingNumber}&carrierCode=${courierName}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "trackingmore.p.rapidapi.com",
          "x-rapidapi-key": key,
        },
      }
    )
      .then((response) => {
        console.log(response.json());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Enter Tracking Number</Form.Label>
            <Form.Control
              name="Tracking Number"
              type="text"
              placeholder="Tracking Number"
              value={this.state.trackingNumber}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Label>Courier</Form.Label>
          <Form.Control as="select" className="" id="" custom>
            <option value="null">Choose a Courier...</option>

            <option value="usps" onChange={this.handleChange}>
              USPS
            </option>
            <option value="fedex" onChange={this.handleChange}>
              Fedex
            </option>
            <option value="ups" onChange={this.handleChange}>
              UPS
            </option>
            <option value="dhl" onChange={this.handleChange}>
              DHL
            </option>
          </Form.Control>
          <Button type="submit" value="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default Home;
