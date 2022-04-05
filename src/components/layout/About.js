import React, { Component } from 'react';
import { Typography, Grid, CardMedia, Grow } from '@mui/material';
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
                        <Grow
                            in={true}
                            style={{ transformOrigin: '0 0 0' }}
                            {...(true ? { timeout: (1000) } : {})}
                        >
                            <div style={{ width: "100%" }}>
                                <CardMedia
                                    component="img"
                                    image={profile}
                                    alt={"profile-pic"}
                                />
                            </div>
                        </Grow>
                    </Grid>
                    <Grid item xs={8} >
                        <Typography variant="h5" color="text.primary" fontSize="1rem">
                            About Me
                        </Typography>
                        <Typography variant="body2" color="text.secondary" fontSize="1rem">
                            Hi, my name is Aden Tran, and this is a sitemap webpage for all of my projects.
                            I graduated from George Mason University in 2020 with Honors Cum Laude.
                            I currently work as a Software Engineer at SAIC.
                            I enjoy playing video game with friends and create websites for fun.
                            Feel free to explore my projects or contact me.
                        </Typography>
                    </Grid>
                </Grid>
            </>
        )
    }
}