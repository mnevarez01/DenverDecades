import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow:1,
    },
    hiddenHeader: {
        display: "none",
        textAlign: "center",
        margin: "auto",
        marginTop: 15,
        marginBottom: 0,
        fontSize: 40,
        paddingTop: 50,
        backgroundColor: "#ca3403",
        paddingBottom: 15,
        
        [theme.breakpoints.down('sm')]: {
          display: "block"
          
          
          
        }
      }
}))
export default function HiddenHeader() {
  const classes = useStyles();
  return (
    <div>
      <h2 className={classes.hiddenHeader}>Denver through the Decades</h2>
    </div>

  )
}
