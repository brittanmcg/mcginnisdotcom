import React, { Component } from "react"
import { graphql } from "gatsby"
import "./style.css"

export default class Modal extends Component {
  render() {
    const { userType } = this.props
    return (
      <div className="modal">
        {!userType && (
          <form className="modal-create">
            <h2>Create a new user</h2>
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" />
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" />
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" />
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    )
  }
}
