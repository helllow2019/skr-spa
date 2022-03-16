// Material Dashboard 2 React base styles
import colors from '@theme/base/colors'

// Material Dashboard 2 React helper functions
import pxToRem from '@theme/functions/pxToRem'

const { transparent } = colors

const select = {
	styleOverrides: {
		select: {
			display: 'grid',
			alignItems: 'center',
			padding: `0 ${pxToRem(12)} !important`,

			'& .Mui-selected': {
				backgroundColor: transparent.main,
			},
		},

		selectMenu: {
			background: 'none',
			height: 'none',
			minHeight: 'none',
			overflow: 'unset',
		},

		icon: {
			display: 'none',
		},
	},
}

export default select
