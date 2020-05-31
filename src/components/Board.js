import React, { Component } from "react";
import Square from "./Square";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { styled } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

const MyButton = styled(Button)({
  background: "linear-gradient(40deg, #ac35a2 55%, #cc95c5 90%)",
  border: "1px solid purple",
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  margin: 5,
  height: 70,
  width: 70,
  lineHeight: 70,
  "&:hover": {
    border: "1px solid lightgray",
    background: "#ac35a2",
  },
});

class Board extends Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <Container>
        <Grid item xs={12}>
          <div
            style={{
              textAlign: "center",
              backgroundColor: "rgb(238, 175, 222)",
            }}
          >
            <h1
              style={{
                fontSize: 80,
                fontWeight: "bold",
                color: "white",
                textShadow: "2px 2px 5px purple",
              }}
            >
              Tic Tac Toe
            </h1>
            <MyButton variant="contained">{this.renderSquare(0)}</MyButton>
            <MyButton variant="contained">{this.renderSquare(1)}</MyButton>
            <MyButton variant="contained">{this.renderSquare(2)}</MyButton>
            <br></br>
            <MyButton variant="contained">{this.renderSquare(3)}</MyButton>
            <MyButton variant="contained">{this.renderSquare(4)}</MyButton>
            <MyButton variant="contained">{this.renderSquare(5)}</MyButton>
            <br></br>
            <MyButton variant="contained">{this.renderSquare(6)}</MyButton>
            <MyButton variant="contained">{this.renderSquare(7)}</MyButton>
            <MyButton variant="contained">{this.renderSquare(8)}</MyButton>
          </div>
        </Grid>
      </Container>
    );
  }
}

export default Board;
