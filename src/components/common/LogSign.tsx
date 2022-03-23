import { Link } from 'react-router-dom'
import { Box, Tooltip, styled } from '@mui/material'

const LogoWrapper = styled(Link)(
	({ theme }) => `
        color: ${theme.palette.text.primary};
        display: flex;
        text-decoration: none;
        width: 53px;
        margin: 0 auto;
        font-weight: ${theme.typography.fontWeightBold};
`,
)

const LogoSignWrapper = styled(Box)(
	() => `
        width: 52px;
        height: 38px;
`,
)

const LogoSignStyled = styled(Box)(
	({ theme }) => `
        background: ${theme.general.reactFrameworkColor};
        width: 18px;
        height: 18px;
        border-radius: ${theme.general.borderRadiusSm};
        position: relative;
        transform: rotate(45deg);
        top: 3px;
        left: 17px;

        &:after, 
        &:before {
            content: "";
            display: block;
            width: 18px;
            height: 18px;
            position: absolute;
            top: -1px;
            right: -20px;
            transform: rotate(0deg);
            border-radius: ${theme.general.borderRadiusSm};
        }

        &:before {
            background: ${theme.palette.primary.main};
            right: auto;
            left: 0;
            top: 20px;
        }

        &:after {
            background: ${theme.palette.secondary.main};
        }
`,
)

const LogoSignInner = styled(Box)(
	({ theme }) => `
        width: 16px;
        height: 16px;
        position: absolute;
        top: 12px;
        left: 12px;
        z-index: 5;
        border-radius: ${theme.general.borderRadiusSm};
        background: ${theme.header.background};
`,
)

export const LogoSign = () => {
	return (
		<Tooltip title="Tokyo Free White React Admin Dashboard" arrow>
			<LogoWrapper to="/overview">
				<LogoSignWrapper>
					<LogoSignStyled>
						<LogoSignInner />
					</LogoSignStyled>
				</LogoSignWrapper>
			</LogoWrapper>
		</Tooltip>
	)
}
