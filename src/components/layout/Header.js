import React, { Component } from 'react';
import { Button, Grid, Stack, Divider } from '@mui/material';
import { Extension, Person, LocalPhone } from '@mui/icons-material';
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
                        <div style={{ fontSize: "2rem", color: "white", fontFamily: "cursive" }}>Aden Tran</div>
                    </Grid>
                    <Grid item margin="auto"  >
                        <Stack
                            direction="row"
                            divider={<Divider orientation="vertical" flexItem />}
                            spacing={1}
                        >
                            <Button color="secondary" variant="contained" startIcon={<Extension />} onClick={this.setShowProjects}>Projects</Button>
                            <Button color="warning" variant="contained" startIcon={<Person />} onClick={this.setShowAbout}>About</Button>
                            <Button color="success" variant="contained" startIcon={<LocalPhone />} onClick={this.setShowContact}>Contact</Button>
                        </Stack>
                    </Grid>
                </Grid>
            </>
        )
    }
}