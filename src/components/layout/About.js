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
                        <Typography variant="h5" color="text.primary" fontSize="1.5rem" fontWeight="bold" display="block">
                            Welcome to Star Gallery!
                        </Typography>
                        <Typography variant="p" color="text.primary" fontSize="1rem" display="block">
                            Click <span style={{ fontWeight: "bold" }}>Upload</span> to submit your own photo
                        </Typography>
                        <Typography variant="p" color="text.primary" fontSize="1rem" display="block">
                            Gallery Size: <span style={{ fontWeight: "bold" }}>{size}</span>
                        </Typography>
                    </Grid>
                </Grid>
            </>
        )
    }
}