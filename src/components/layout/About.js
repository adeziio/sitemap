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
                <div style={{ marginTop: "2rem" }}>
                    <Typography variant="h5" color="text.primary" fontSize="1.5rem" fontWeight="bold" margin="1rem" >
                        Welcome to Star Gallery!
                    </Typography>
                    <Typography variant="p" color="text.primary" fontSize="1rem" display="block" margin="1rem" >
                        Click <span style={{ fontWeight: "bold" }}>Upload</span> to submit your own photo
                    </Typography>
                    <Typography variant="p" color="text.primary" fontSize="1rem" display="block" margin="1rem" >
                        Gallery Size: <span style={{ fontWeight: "bold" }}>{size}</span>
                    </Typography>
                </div>
            </>
        )
    }
}