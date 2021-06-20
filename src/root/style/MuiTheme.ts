import { createMuiTheme } from "@material-ui/core/styles";
import { amber, pink } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: pink[500],
    },
    secondary: {
      main: amber[500],
      contrastText: pink[900],
    },
  },
  typography: {
    fontSize: 16,
  },
});

export default theme;
