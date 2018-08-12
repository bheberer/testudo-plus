import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import { shouldUpdate, compose } from 'recompose';

const enhance = compose(
  withStyles(styles),
  shouldUpdate(() => false)
)

const styles = (theme) => ({
  nav: {
     color: '#FF4044'
  },
});

const NavBar = (props) => {

  const styles = props.classes;
  
  return(
    <AppBar position='static'>
      <ToolBar color='secondary'>
        <Typography variant='title' color='inherit'>
          Testudo++
        </Typography>
      </ToolBar>
    </AppBar>
  );
};

export default enhance(NavBar);