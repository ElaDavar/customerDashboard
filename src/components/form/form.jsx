import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button
} from "@material-ui/core";
import "./form.css";

function Form() {

    const [name, setName] = useState('');
    const [net, setNet] = useState('');
    
    const handleReset = () => {

    };
    
    const handleAdd = (e) => {
        e.preventDefault();
    };
    
    return (
        <div>
            <Card className="card">
                <CardContent className="content">
                    <TextField
                        margin="dense"
                        id="nameInput"
                        type="textfield"
                        fullWidth
                        required
                        label="Name"
                        placeholder="Enter a name"
                        variant="outlined"
                        onChange={e => setName(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id="netInput"
                        type="textfield"
                        fullWidth
                        required
                        label="Net"
                        placeholder="Enter a net"
                        variant="outlined"
                        onChange={e => setNet(e.target.value)}
                    />
                    <Button onClick={handleReset} color="primary">
                        Reset
                    </Button>
                    <Button onClick={handleAdd} color="primary">
                        Add
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}

export default Form;
