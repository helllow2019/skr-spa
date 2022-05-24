// import React from 'react'
import CustomThemeProvider from '@theme/ThemeProvider'
import { CssBaseline } from '@mui/material'

export const parameters = {
	layout: 'centered',
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	backgrounds: {
		grid: '#fff',
	},
	cellAmount: 5,
}

export const decorators = [
	(Story: React.FC) => (
		<div id="storybook-global-decorator">
			<CustomThemeProvider>
				<CssBaseline />
				<Story />
			</CustomThemeProvider>
		</div>
	),
]
