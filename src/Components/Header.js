import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background: 'black',
    textTransform: 'downcase'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logoutButton: {   
    marginLeft: 860,
    textTransform: "lowcase"
  },
}));



export default function ButtonAppBar({logout}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="primary" position="static">
        <Toolbar>
          <Button href="/my_profile">GC</Button>
          <div className={classes.logoutButton}>
            <Button className={classes.logoutButton} onClick={logout}>Logout</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}