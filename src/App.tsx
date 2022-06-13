import { Box, ThemeProvider } from '@mui/material';
import  {theme}  from './Themes/theme';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { MyLibrary } from './components/pages/MyLibrary/MyLibrary';
import { Layout } from './components/templates/Layout';

const App = () => {
  return (
    <div className="App" style={{margin: 'auto'}} data-testid="App">
      <ThemeProvider theme={theme}>
        <Layout>
          <Box>
            <MyLibrary />
          </Box> 
        </Layout>
      </ThemeProvider>  
    </div>
  );
}

export default App;
