import Header from './components/Header/Header';
import { ColorModeContext, colorPalette, useMode } from './theme';
import { ThemeProvider } from '@mui/material/styles';
import Hero from './components/Hero/Hero';

function App() {
	const [theme, colorMode]:any = useMode();
  const colors = colorPalette(theme);
	
	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<Header />
				<Hero/>
			</ThemeProvider>
		</ColorModeContext.Provider>
  );
}

export default App;
