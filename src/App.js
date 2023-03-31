// import logo from './logo.svg';
import './App.css';
import OnlineUserData from './UserDetails/OnlineUserData';
// import DataTable from './UserDetails/UserDetailTable';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Example from './UserDetails/Example';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#448aff',
    },
    secondary: {
      main: '#448881',
    }
  },
  components: {
    // Name of the component
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: '1rem',
          borderRadius: 4
        },
      },
    },
  },
});

function App() {
  return (
    // <DataTable></DataTable>
    <div className="App">
      <ThemeProvider theme={customTheme} >
        <OnlineUserData></OnlineUserData>
        {/* <Example></Example> */}
      </ThemeProvider>
    </div>

  );
}

export default App;
