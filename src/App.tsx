import { Box, ThemeProvider } from '@mui/material';
import  {theme}  from './Themes/theme';
import { Footer } from './components/organisms/Footer/Footer';
import { Header } from './components/organisms/Header/Header';
import { Banner } from './components/molecules/Banner/Banner';
import { CardComponent } from './components/organisms/Card/Card';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { MyLibrary } from './components/pages/MyLibrary/MyLibrary';
import { TabPanelComponent } from './components/organisms/Tab/TabPanel';
import { Layout } from './components/templates/Layout';
import { ExtendedNav } from './components/molecules/ExtendedNav/ExtendedNav';
import { Link } from "react-router-dom";
import { EntepreneurshipPage } from './components/pages/EntrepreneurshipPage/EntrepreneurshipPage';

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
