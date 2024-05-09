import axios from "axios";
import "./App.css";

import { Component } from "react";
import PlayersList from "./components/PlayersList";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      players: [],
    };
  }

  componentDidMount() {
    axios
      .get("/players.json")
      .then((res) => this.setState(res.data))
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        {this.state.players.length > 0 && (
          <PlayersList players={this.state.players} />
        )}
      </div>
    );
  }
}
