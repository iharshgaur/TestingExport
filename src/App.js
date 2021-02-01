import React from "react";
import "./styles.css";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  heading: {
    color: "red"
  }
});

export default function App() {
  const styles = useStyles();
  return (
    <div className="App">
      <Typography variant="h3" className={styles.heading}>
        Hello World
      </Typography>
      <Button color="secondary" variant="outlined">
        This is a button
      </Button>
    </div>
  );
}
