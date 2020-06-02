
import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import  MenuItem from '@material-ui/core/MenuItem';
import MenuListComposition from '../burgerIcon.js';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
// import mobileHeader from '../mobileHeader.js'
// import './index.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
    
  },
  appBar: {
    flexGrow: 1,
    color: "white",
    backgroundColor: "#303030",
    height: 80,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: -8,
    marginRight: -16,
    marginLeft: -16
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  burgerIcon: {
    size: 60
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    color: "white",
    [theme.breakpoints.down('sm')]: {
      display: "none"
    }
  
  },
 
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    paddingTop: 2,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
    [theme.breakpoints.down('sm')]: {
      width: "100%"
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    paddingTop: 10,
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  // hiddenHeader: {
  //   display: "none",
  //   textAlign: "center",
  //   margin: "auto",
  //   marginTop: 15,
  //   marginBottom: 15,
    
  //   [theme.breakpoints.down('sm')]: {
  //     display: "block"
      
      
      
  //   }
  // }
  
}));

export default function Nav() {
  const classes = useStyles();

  return (
    <div className="navbar" >
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuListComposition />
              <MenuItem className={classes.burgerIcon}/>
          </IconButton>
          <Typography variant="h4" className={classes.title}>
            Denver through the Decades
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search Year"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
      {/* <h2 className={classes.hiddenHeader}>Denver through the Decades</h2> */}
    </div>
    
  );
}


