import React, { Component } from 'react';
import { Button, Grid, Stack, Divider } from '@mui/material';
import logo from "./../img/logo.png"

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    setShowProjects = () => {
        this.props.setShowProjects(true);
    }

    setShowAbout = (status) => {
        this.props.setShowAbout(true);
    }

    setShowContact = (status) => {
        this.props.setShowContact(true);
    }

    render() {

        return (
            <>
                <Grid container >
                    <Grid item padding={1} margin="auto" spacing={1} left="0" right="0">
                        <img
                            src={logo}
                            alt="img"
                            width="35%"
                        />
                        <div style={{ fontSize: "30px", color: "white", fontFamily: "cursive" }}>Aden Tran</div>
                    </Grid>
                    <Grid item padding={1} margin="auto" spacing={1} left="0" right="0">
                        <Stack
                            direction="row"
                            divider={<Divider orientation="vertical" flexItem />}
                            spacing={1}
                        >
                            <Button color="primary" variant="contained" onClick={this.setShowProjects}>My Projects</Button>
                            <Button color="primary" variant="contained" onClick={this.setShowAbout}>About Me</Button>
                            <Button color="primary" variant="contained" onClick={this.setShowContact}>Contact Me</Button>
                        </Stack>
                    </Grid>
                </Grid>
            </>
        )
    }
}