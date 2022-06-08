import { MenuItem as MuiMenuItem } from '@mui/material'

// types
import type { MenuItemProps } from '@mui/material'

export const MenuItem: React.FC<MenuItemProps> = ({ children, ...rest }) => {
	return <MuiMenuItem {...rest}>{children}</MuiMenuItem>
}
