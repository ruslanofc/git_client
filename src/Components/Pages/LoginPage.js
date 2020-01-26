import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import {Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import VALIDATION_QUERY from "../../Graphs/validation";
import {useLazyQuery} from "@apollo/react-hooks";
import {AUTH_TOKEN} from "../../authtoken";
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxwidth: '450px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '300px',
    justifyContent: 'center',
    //height: '450px'
    // position: 'absolute',
    // top: '50%'
  },
  form: {
    width: 100, // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  background: {
    backgroundImage: 'url(https://c.wallhere.com/photos/25/3b/space_stars_nebula_galaxy_mountains_snowy_peak_space_art_Earth-14493.jpg!d)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: "cover",
    height: '100vh',
  },
  pic: {
    marginTop: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100px',
    justifyContent: 'center',
  }
}));

export default function LoginPage({login}) {
  //let history = useHistory();
  const classes = useStyles();
  const [token, setToken] = useState("");
  const [error, setError] = useState(false);
  const [getData] = useLazyQuery(VALIDATION_QUERY, {
    onCompleted: () => {
      setError(false);
      login(token);
      //history.push(``);
      window.location.reload();
    },
    onError: () => {
      setError(true);
      localStorage.removeItem(AUTH_TOKEN);
    }
  });

  const validation = () => {
    localStorage.setItem(AUTH_TOKEN, token);
    getData();
  };

  return (
    <div className={classes.background}>
      <Grid container component="main" maxWidth="xs" className={classes.root}>
        <CssBaseline />
        <Paper levation={3} className={classes.paper}>
          <img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' alt="github_client" className={classes.pic}></img>
          <Typography component="h1" variant="h5">
            Login to continue
          </Typography>
          <TextField
              onChange={(e) => setToken(e.target.value)}
              value={token}
              error={error}
              variant="outlined"
              margin="normal"
              required
              width='100px'
              name="token"
              label="Token from github"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button width='80px' margin='normal' variant="contained" color="primary" className={classes.submit}
                    onClick={validation}>
              Sign In
            </Button>
        </Paper>
      </Grid>
    </div>
  );
}

