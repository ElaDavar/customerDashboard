import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
} from "@material-ui/core";
import "./overview.css"

function Overview() {

    return (
        <div>
            <Card className="card">
                <CardContent className="content">
                    <Typography className="items">Overview</Typography>
                    <Grid container>
                        <Grid items xs={5} className="items">Total Sum</Grid>
                        <Grid items xs={6} className="items">2000</Grid>
                        <Grid items xs={5} className="items">Average</Grid>
                        <Grid items xs={6} className="items">1000</Grid>
                        <Grid items xs={5} className="items">Total Items</Grid>
                        <Grid items xs={6} className="items">2</Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    );
}

export default Overview;
