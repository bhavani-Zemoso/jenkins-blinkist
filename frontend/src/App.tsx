import { ThemeProvider } from '@mui/material';
import  {theme}  from './Themes/theme';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Layout } from './components/templates/Layout';

const App = () => {
  return (
    <div className="App" style={{margin: 'auto'}} data-testid="App">
      <ThemeProvider theme={theme}>
          <Layout /> 
      </ThemeProvider>  
    </div>
  );
}

export default App;
