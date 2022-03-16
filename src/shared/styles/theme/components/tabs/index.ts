// Material Dashboard 2 React base styles
import colors from '@theme/base/colors'
import borders from '@theme/base/borders'
import boxShadows from '@theme/base/boxShadows'

// Material Dashboard 2 React helper functions
import pxToRem from '@theme/functions/pxToRem'
import type { Components } from '@mui/material/styles/components'

const { grey, white } = colors
const { borderRadius } = borders
const { tabsBoxShadow } = boxShadows

const tabs: Components['MuiTabs'] = {
	styleOverrides: {
		root: {
			position: 'relative',
			backgroundColor: grey[100],
			borderRadius: borderRadius.xl,
			minHeight: 'unset',
			padding: pxToRem(4),
		},

		flexContainer: {
			height: '100%',
			position: 'relative',
			zIndex: 10,
		},

		fixed: {
			overflow: 'unset !important',
		},

		vertical: {
			'& .MuiTabs-indicator': {
				width: '100%',
			},
		},

		indicator: {
			height: '100%',
			borderRadius: borderRadius.lg,
			backgroundColor: white.main,
			boxShadow: tabsBoxShadow.indicator,
			transition: 'all 500ms ease',
		},
	},
}

export default tabs
