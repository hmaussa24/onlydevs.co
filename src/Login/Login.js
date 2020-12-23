import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        minWidth: 450,
    },
    login: {
        textAlign: 'center',
        marginTop: 100
    },
    text: {
        color: "#aaaaaa",
        margin: 10,
        textAlign: 'center'
    },
    danger: {
        color: "#f06292",
        margin: 10,
        textAlign: 'center'
    }

}));

const defaultProps = {
    bgcolor: 'background.paper',
    m: 1,
    border: 1,
    style: {
        height: 300,
        background: "#fafafa",
        position: 'absolute',
        float: 'left',
        width: 350,
        marginTop: 120,
        marginLeft: 40,
    },
};

export default function Login(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Only Devs
                    </Typography>
                    <Button color="inherit">¿Que somos?</Button>
                </Toolbar>
            </AppBar>
            <Box container={true} borderColor="#cfd8dc" borderRadius={4} {...defaultProps} spacing={3} justifyContent='center' >
                <Grid spacing={3} container={true}>
                    <Grid item xs={12}>
                        <Typography className={classes.text}>Red social para Devs</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className={classes.text}>Temas de Devs para Devs</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className={classes.text}>Enterate de que hablan los desarrolladores</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className={classes.text}>Opina, comenta, contribuye</Typography>
                    </Grid>
                </Grid>
            </Box>
            <Grid container={true} spacing={3} className={classes.login}>
                <Grid item xs={12}>
                    <Typography variant="h5">Login</Typography>
                </Grid>
                <Grid item xs={12}>
                    {props.isSend ?<CircularProgress />: null}
                    <Typography className={classes.danger}>{props.error}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField className={classes.paper} id="email" name="email" label="E-mail" variant="outlined" onChange={props.handleChange} />
                </Grid>
                <Grid item xs={12}>
                    <TextField className={classes.paper} id="password" name="password" label="Contraseña" variant="outlined" type='password' onChange={props.handleChange} />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" disableElevation onClick={props.onLogin}>
                        Ingresar
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Typography> Si aun no tienes cuenta,
                        <Link to="/registro">
                            <Button color="primary">
                                Registrate
                            </Button>
                        </Link>
                    </Typography>

                </Grid>
            </Grid>
        </div>
    );
}