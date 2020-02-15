import { blueGrey, indigo, amber } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const primary = indigo[400];
const accent = amber[500];
const secondary = blueGrey[50];

const newTheme = createMuiTheme({
    palette: {
        primary: { main: '#5C6BC0', contrastText: '#ffffff' },
        secondary: { main: '#FFCA28', contrastText: '#37474F' },
        default: { main: '#eceff1' }
    }
});

export default newTheme;
