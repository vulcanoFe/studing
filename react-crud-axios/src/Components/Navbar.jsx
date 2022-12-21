import React from 'react';
import { AppBar, makeStyles, Toolbar } from '@material-ui/core';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  header: {
    backgroundColor: '#212121',
  },
  spacing :{
    paddingLeft: 20,
    color: '#fff',
    fontSize: '18px',
    textDecoration: 'none',
  }
});

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.header} position="static">
      <Toolbar >
        <Link to="/" className={classes.spacing}> React JS Crud</Link>
        <Link to="all" className={classes.spacing}> All Users</Link>
        <Link to="add" className={classes.spacing}> Add Users</Link>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;