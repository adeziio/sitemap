import React, { Component } from 'react';
import { Typography, Grid, CardMedia } from '@mui/material';
import image from "./../logo/project-img.png";

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <div style={{ width: "100%" }}>
                            <CardMedia
                                component="img"
                                image={image}
                                alt={"profile-pic"}
                            />
                        </div>
                    </Grid>
                    <Grid item xs={8} >
                        <Typography variant="h5" color="text.primary" fontSize="1rem">
                            <p>Welcome to Star Gallery</p>
                            <p>Click Upload to submit your photo and it will magically appear on the front page</p>
                        </Typography>
                    </Grid>
                </Grid>
            </>
        )
    }
}