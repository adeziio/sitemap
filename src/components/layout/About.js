import React, { Component } from 'react';
import { Typography, Grid, CardMedia, Grow } from '@mui/material';
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
                        <Grow
                            in={true}
                            style={{ transformOrigin: '0 0 0' }}
                            {...(true ? { timeout: (1000) } : {})}
                        >
                            <div style={{ width: "100%" }}>
                                <CardMedia
                                    component="img"
                                    image={image}
                                    alt={"profile-pic"}
                                />
                            </div>
                        </Grow>
                    </Grid>
                    <Grid item xs={8} >
                        <Typography variant="h5" color="text.primary" fontSize="1rem">
                            <p>Welcome to the Star Gallery collection.</p>
                            <p>Snacks and drinks will NOT be provided.</p>
                            <p>You can look but don't touch.</p>
                            <p>Videos and images are for personal/educational purposes only.</p>
                            <p>Under section 107 of the Copyright Act 1976, allowance is made for "Fair Use" for purposes such as criticism, comment, news, reporting, teaching, scholarship, and research.</p>
                            <p>Fair use is a use permitted by Copyright Statue that might otherwise be infringing, Non-Profit, Educational, or Personal Use tips the balance in favor of Fair Use.</p>
                        </Typography>
                    </Grid>
                </Grid>
            </>
        )
    }
}