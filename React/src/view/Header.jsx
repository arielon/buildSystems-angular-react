import React from 'react';
import { connect } from "react-redux";
import { aSendLogout, aShowPurchase, aShowHome } from '../redux/actions';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import Badge from '@material-ui/core/Badge';
import Box from '@material-ui/core/Box';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { ThemeProvider } from '@material-ui/styles';
import  newTheme from './color';

const Header = (props) => {

  function returnHome(){
    props.aShowHome(false);
  }

  let sendLogout = () => {
    props.aSendLogout();
  }

  let ShowPurcharse = () => {
    if(props.itemsCount > 0){
      props.aShowPurchase();
    }
  }

  if(props.isAuth){
    return (
    <div className="header-root">
      <ThemeProvider theme={newTheme}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" className="header-title">
            Tienda Online
          </Typography>
          <Box display="flex">
            <Box m={1} onClick={returnHome}>
                <IconButton aria-label="home">
                  <Badge color="secondary" className="header-badge">
                    <HomeIcon />
                  </Badge>
                </IconButton>
            </Box>
              <Box m={1} onClick={ShowPurcharse}>
                <IconButton aria-label="cart">
                  <Badge badgeContent={props.itemsCount} color="secondary" className="header-badge">
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
              </Box>
          </Box>
          <Button color="inherit" onClick={sendLogout}>Logout</Button>
        </Toolbar>
      </AppBar>
      </ThemeProvider>
    </div>)
  }
  else{
    return (
      <div></div>
    )
  }
};

const mapStateToProps = (state) => ({
  isAuth : state.tienda.isAuth,
  itemsCount : state.tienda.itemsCount
});

const mapDispatchToProps = {
  aSendLogout,
  aShowPurchase,
  aShowHome
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
