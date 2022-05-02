import React, { Component } from 'react';
import { Typography, Grid } from '@mui/material';

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const { size } = this.props;

        return (
            <>
                <Grid container spacing={2} marginTop="1rem">

                    <Grid item xs={16} >
                        <Typography variant="h5" color="text.primary" fontSize="1rem" >
                            <h2>Welcome to Star Gallery!</h2>
                            <p>Click <span style={{ fontWeight: "bold" }}>Upload</span> to submit your own photo</p>
                            <p>Gallery Size: <span style={{ fontWeight: "bold" }}>{size}</span></p>
                        </Typography>
                    </Grid>
                </Grid>
            </>
        )
    }
}