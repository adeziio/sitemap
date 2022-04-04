import React, { Component } from 'react';
import { Typography, Grid, CardMedia } from '@mui/material';
import profile from "./../img/profile.jpg";

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
                        <CardMedia
                            component="img"
                            image={profile}
                            alt={"profile-pic"}
                        />
                    </Grid>
                    <Grid item xs={8} >
                        <Typography variant="h5" color="text.primary" fontSize="1rem">
                            About Me
                        </Typography>
                        <Typography variant="body2" color="text.secondary" fontSize="1rem">
                            Hi, my name is Aden, and this is my personal portfolio webpage 😎
                            I recently graduated from George Mason University with Honors Cum Laude 🎓
                            Currently, I am working as a Software Developer at SAIC 👔
                        </Typography>
                    </Grid>
                </Grid>
            </>
        )
    }
}