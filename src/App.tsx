import { useTheme } from '@emotion/react';
import './App.css';
import Header from './components/Header/Header';
import { colorPalette } from './theme';

function App() {
	const theme = useTheme();
  const colors = colorPalette(theme);
	
  return (
		<div style={{ backgroundColor:colors.black[400],}}>
			<Header />
    </div>
  );
}

export default App;
