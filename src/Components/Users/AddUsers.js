import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./UsersStyle.css";

export default class AddUsers extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
  };
  add = (e) => {
    e.preventDefault();
    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.phone === ""
    ) {
      alert("all tha fields are mandatory");
      return;
    }
    this.props.addUserHandler(this.state);
    this.setState({ name: "", email: "", phone: "" });
    this.props.history.push("/");
    console.log(this.props);
  };
  render() {
    return (
      <section className="get-in-touch">
        <h1 className="title">Add User</h1>
        <form className="contact-form row" onSubmit={this.add}>
          <div className="form-field col-lg-6">
            <input
              id="name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
              className="input-text js-input"
              type="text"
              required
            />
            <label className="label" htmlFor="name">
              Name
            </label>
          </div>
          <div className="form-field col-lg-6 ">
            <input
              id="email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
              className="input-text js-input"
              type="email"
              required
            />
            <label className="label" htmlFor="email">
              E-mail
            </label>
          </div>
          <div className="form-field col-lg-6 ">
            <input
              id="tele"
              value={this.state.phone}
              onChange={(e) => this.setState({ phone: e.target.value })}
              className="input-text js-input"
              type="text"
              required
            />
            <label className="label" htmlFor="tele">
              Phone Number
            </label>
          </div>
          <div className="form-field col-lg-12">
            <button className="btn submit-btn mx-3">Add User</button>

            <Link to="/">
              <button className="btn submit-btn mx-3">Cancel</button>
            </Link>
          </div>
        </form>
      </section>
    );
  }
}
