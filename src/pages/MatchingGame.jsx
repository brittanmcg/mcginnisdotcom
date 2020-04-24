import React, { Component } from "react"
import Modal from "../components/Modal/Modal.jsx"

class MatchingGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
    }
  }

  toggleModal() {
    this.setState({ modal: !this.state.modal });
  }

  render() {
    return (
      <div>
        <h1>MatchingGameContainer</h1>
        <div className="modal-container">
          {this.state.modal === true && <Modal />}
        </div>
        <div>
          <ul>
            <li>
              <button onClick={() => this.toggleModal("create")}>
                Create New User
              </button>
            </li>
            <li>
              <button onClick={() => this.toggleModal("login")}>Login</button>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default MatchingGame
