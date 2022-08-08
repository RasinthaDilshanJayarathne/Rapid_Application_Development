import { withStyles } from "@mui/styles";
import { Component } from "react";
import { styleSheet } from "./styles";
import { ValidatorForm } from "react-material-ui-form-validator";
import { Button, Grid, TextField, Typography } from "@mui/material";
import {Link} from "react-router-dom";
import GDSESnackBar from "../../common/SnakBar/index";

class Login extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { classes } = this.props;
        return (
            <>
                <ValidatorForm ref="form" className="pt-2" >
                    <Grid className={classes.logIn_container}>
                        <Grid className={classes.logIn_form}>
                            <Grid className={classes.logIn_header}>
                                <Typography variant="h4" gutterBottom component="div" >
                                    Login
                                </Typography>
                            </Grid>
                            <Grid className={classes.text_field}>
                                <TextField id="outlined-basic" label="User Name" variant="outlined" size="small" style={{ width: '300px' }} />
                                <TextField id="outlined-basic" label="Password" type="password" variant="outlined" size="small" style={{ width: '300px' }} />
                            </Grid>
                            <Grid className={classes.logIn_button}>
                                <Button variant="contained" color="primary" style={{ width: '150px' }}>Login</Button>
                            </Grid>
                            <Grid className={classes.click_here}>
                                <Typography variant="body2" gutterBottom component="div" style={{ color: 'black' }}>
                                    Create new user account?
                                    <span>
                                        <Link to="/user"
                                            style={{ textDecoration: "none", paddingLeft: "5px" }}
                                        >
                                            click here
                                        </Link>
                                    </span>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </ValidatorForm>
                <GDSESnackBar
                    open={this.state.alert}
                    onClose={() => {
                        this.setState({ alert: false })
                    }}
                    message={this.state.message}
                    autoHideDuration={3000}
                    severity={this.state.severity}
                    variant="filled"
                />
            </>
        )
    }
}

export default withStyles(styleSheet)(Login)