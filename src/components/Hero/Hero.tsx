import { Button, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import './Hero.css'


 function Hero() {
	const theme = useTheme();
	return (
		<Box className='heroBox' sx={{
			backgroundColor: theme.palette.primary.main,
			color: theme.palette.primary.contrastText
		}}>
			<div className="heroBox__contentWrap">
			<Typography variant="h1" className="HeroBox__titel">Lorem ipsum dolor sit amet.</Typography>
			<Button variant="outlined" 
			sx={{color:'inherit', 
			borderColor:'inherit', 
			height:'50px',
			width:'50%'}}>Lorem</Button>
			</div>
		</Box>

	)
}

export default Hero
