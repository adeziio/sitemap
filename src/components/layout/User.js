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

    login = () => {
        const { user, password } = this.state;
        if (user === "admin") {
            if (password === process.env.REACT_APP_ADMIN_PASSWORD) {
                this.props.setisAdmin(true);
            }
            else {
                this.setResMsg("Error");
            }
        }
        else {
            this.setResMsg("Error");
        }
    }

    logout = () => {
        this.setState({
            user: "",
            password: "",
            resMsg: ""
        }, () => this.props.setisAdmin(false))
    }

    _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.login();
        }
    }

    render() {
        const { user, resMsg } = this.state;
        const { isAdmin } = this.props;

        return (
            <>
                {!isAdmin ?
                    <FormControl variant="standard" sx={{ width: "20rem" }}>
                        <TextField sx={{ marginTop: 1 }} label="User" variant="outlined" onChange={(e) => this.setUser(e)} onKeyDown={this._handleKeyDown} />
                        <TextField sx={{ marginTop: 1 }} label="Password" variant="outlined" onChange={(e) => this.setPassword(e)} onKeyDown={this._handleKeyDown} />
                        <Button sx={{ marginTop: 1 }} type="button" color="primary" variant="contained" onClick={this.login} >
                            Log in
                        </Button>
                        {resMsg === "Error" ? <Alert sx={{ marginTop: 1 }} severity="error">{`Invalid Username/Password`}</Alert> : null}
                    </FormControl>
                    :
                    <>
                        <AccountCircle sx={{ color: "orange", fontSize: 100 }} />
                        <Typography>Logged in as <span style={{ fontWeight: "bold" }}>{user}</span></Typography>
                        <Button sx={{ marginTop: 1 }} type="button" color="primary" variant="contained" onClick={this.logout} >
                            Log out
                        </Button>
                    </>
                }
            </>
        )
    }
}