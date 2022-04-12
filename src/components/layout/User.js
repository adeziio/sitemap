import React, { Component } from 'react';
import { Button, FormControl, Alert, TextField, Typography } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

export default class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "admin",
            password: "",
            resMsg: ""
        }
    }

    setUser = (e) => {
        this.setState({
            user: e.target.value
        })
    }

    setPassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    setResMsg = (msg) => {
        this.setState({
            resMsg: msg
        })
    }

    submit = () => {
        const { user, password } = this.state;
        if (user === "admin") {
            if (password === process.env.REACT_APP_ADMIN_PASSWORD) {
                this.props.setisAdmin(true);
            }
        }
        else {
            this.setResMsg("Error");
        }
    }

    _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.submit();
        }
    }

    render() {
        const { user, resMsg } = this.state;
        const { isAdmin } = this.props;


        return (
            <>
                {!isAdmin ?
                    <FormControl variant="standard">
                        <TextField sx={{ marginTop: 1 }} label="User" variant="outlined" onChange={(e) => this.setUser(e)} onKeyDown={this._handleKeyDown} />
                        <TextField sx={{ marginTop: 1 }} label="Password" variant="outlined" onChange={(e) => this.setPassword(e)} onKeyDown={this._handleKeyDown} />
                        <Button sx={{ marginTop: 1 }} type="button" color="primary" variant="contained" onClick={this.submit} >
                            Log in
                        </Button>
                        {resMsg === "Error" ? <Alert sx={{ marginTop: 1 }} severity="error">{`Invalid Username/Password`}</Alert> : null}
                    </FormControl>
                    :
                    <>
                        <AccountCircle sx={{ color: "#005b96", fontSize: 100 }} />
                        <Typography>Logged in as <Typography sx={{ fontWeight: "bold" }}>{user}</Typography></Typography>
                    </>
                }
            </>
        )
    }
}