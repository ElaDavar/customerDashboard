import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
} from "@material-ui/core";

function Overview() {

    return (
        <div className="Overview">
            <Card className="card">
                <CardContent className="content">
                    <Typography>Overview</Typography>
                    <Grid container>
                        <Grid items xs={4}>Total</Grid>
                        <Grid items xs={8}>2000</Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    );
}

export default Overview;
