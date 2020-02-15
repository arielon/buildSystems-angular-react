import React from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { blueGrey, indigo, amber } from '@material-ui/core/colors';
import { connect } from "react-redux";
import { aSendLogin } from '../redux/actions';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { ThemeProvider } from '@material-ui/styles';
import newTheme from './color'

function LoginMsg(props){
    if(props.msg.length == 0){
        return null;
    }else{
        return (
              <Grid item xs>
                  <div className="login-msg" >{props.msg}</div>
              </Grid>
        )
    }
}

const styles = theme => ({
  cssLabel: {
    color: "white",
    "&$cssFocused": {
      color: blueGrey[100]
    },
  },
  cssFocused: {
    borderColor: "white",
    color: "white",
  },

  cssOutlinedInput: {
    "& $notchedOutline": {
      borderColor: "white",
    },

    "&$cssFocused $notchedOutline": {
      borderColor: blueGrey[100]
    },
    '&:hover $notchedOutline': {
        borderColor: blueGrey[100],
      },
      "&:not($focused)" : {
        color: "white",
        label: "white"
      },
  },

  notchedOutline: { borderColor: "white"},
  FormControlLabel: {color: "white"}
});

  class Login extends React.Component {

    constructor(props) {
        super(props);

        let save = localStorage.getItem('save');
        if(save){
          save = (save === 'true' || save == true)
        }else{
          save = false;
        }
        this.state = {
                      user : save ? localStorage.getItem('user') : '',
                      pass : save ? localStorage.getItem('pass') : '',
                      save : save,
                      userHelp : "",
                      passHelp : "",
                    };
      }
  sendLogin = () => {
    const {user, pass, save } = this.state;
    // si no tiene usuario muestra el error
    if(user.length == 0){
      this.setState({userHelp:'Ingrese un mail valido'})
      return;
    }
    // si no tiene passsord muestra el error
    if(pass.length  == 0){
      this.setState({passHelp:'Ingrese una contraseña'})
      return;
    }

    if(save){ // guarda la informacion en el local storafe
      localStorage.setItem("user", user);
      localStorage.setItem("pass", pass);
    }
    localStorage.setItem("save", save);

    // envia a procesar el login
    this.props.aSendLogin(user, pass);
  }

  // atuende cuando el input del usuario a cambiado
  userChange = (e) => {
    this.setState({user: e.target.value});
  }

  // atiende cuandi el inpuit del passsword a cambiado
  passChange = (e) => {
    this.setState({pass: e.target.value});
  }

  // atiende cuando el check del remember a guardado
  saveChange = (e) => {
    let save = !this.state.save;
    this.setState({save});
  }

    render() {
      const { classes } = this.props;
      const { user, pass, passHelp, userHelp, save } = this.state;
      return (
<ThemeProvider theme={newTheme}>
      <Box className="loginH" display="flex" alignItems="center">
      <Container component="main" maxWidth="xs">

      <CssBaseline />

      <div className="login-paper">
        <Typography component="h1" variant="h5" style={{ color: "white"}}>
          Inicia Sesión
        </Typography>
        <form className="login-form" noValidate color="deafult">
        <TextField
        InputLabelProps={{
          classes: {
            root: classes.cssLabel,
            focused: classes.cssFocused
          }
        }}
        InputProps={{
          classes: {
            root: classes.cssOutlinedInput,
            focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline
          }
        }}
        label="Correo Electrónico"
        variant="outlined"
        id="email"
        value={user}
        onChange={this.userChange}
        helperText={userHelp}
        style={{ margin: "24px 0px"}}
        name="email" autoComplete="email"
        required fullWidth
      />

<TextField
        InputLabelProps={{
          classes: {
            root: classes.cssLabel,
            focused: classes.cssFocused
          }
        }}
        InputProps={{
          classes: {
            root: classes.cssOutlinedInput,
            focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline
          }
        }}
        label="Contraseña"
        variant="outlined"
        id="password"
        value={pass}
        onChange={this.passChange}
        helperText={passHelp}
        style={{ margin: "24px 0px"}}
        name="password" type="password" autoComplete="current-password"
        required fullWidth
      />

          <FormControlLabel
            control={<Checkbox value="remember" color="secondary" checked={save} onChange={this.saveChange}/>}
            label="Recordarme" classes={{root: classes.FormControlLabel}} defaultChecked
          />

          <Button fullWidth variant="contained" color="secondary" className="login-submit" onClick={this.sendLogin}>
            Ingresar
          </Button>
          <LoginMsg msg={this.props.msg}/>
        </form>
      </div>
      </Container>
    </Box>
    </ThemeProvider>
      );
    }
  }

  const mapStateToProps = (state) => ({
    msg : state.tienda.loginMsg,
});

const mapDispatchToProps = {
    aSendLogin
};

const LoginFull = connect(mapStateToProps, mapDispatchToProps)(Login)

export default withStyles(styles)(LoginFull);
