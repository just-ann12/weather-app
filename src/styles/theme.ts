import { createTheme } from '@mui/material/styles';

export const theme = createTheme({

	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					minWidth: 0,
					fontSize: 14,
					fontWeight: 600,
					padding: '14px 32px',
					borderRadius: '100px',
					textTransform: 'none',
					'&:focus': {
						outline: 'none',
					},
				},
			},
		},
		MuiTypography: {
			styleOverrides: {
				root: {
					fontSize: 16,
					letterSpacing: '0.16px',
					color: '#333333',
				},
			},
			variants: [
				{
					props: { variant: 'h1' },
					style: {
						textTransform: 'uppercase',
						fontStyle: 'normal',
						fontSize: '50px',
						fontWeight: '600',
						color: '#333333',
					},
				},
				{
					props: { variant: 'h2' },
					style: {
						textTransform: 'uppercase',
						fontStyle: 'normal',
						fontSize: '35px',
						fontWeight: '600',
						lineHeight: '58px',
						color: '#333333',
					},
				},
				{
					props: { variant: 'h3' },
					style: {
						textTransform: 'uppercase',
						fontStyle: 'normal',
						fontSize: '25px',
						fontWeight: '600',
						lineHeight: '44px',
						color: '#333333',
					},
				},
				{
					props: { variant: 'h4' },
					style: {
						fontStyle: 'normal',
						fontSize: '20px',
						fontWeight: '600',
						lineHeight: '29px',
						color: '#333333',
					},
				},
				{
					props: { variant: 'h5' },
					style: {
						fontStyle: 'normal',
						fontSize: '18px',
						fontWeight: '600',
						lineHeight: '24px',
						color: '#333333',
					},
				},
			],
		},
	},
});
