import React from 'react';
import { Grid } from "@material-ui/core";
import Form from "./components/form/form";
import Overview from "./components/overview/overview";
import './App.css';

function App() {
  return (
    <div className="App">
      <Grid container>
        <Grid item xs={6}>
          <Form />
        </Grid>
        <Grid item xs={6}>
          <Overview />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
