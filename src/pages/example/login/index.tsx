import React from 'react'
import { Helmet } from 'react-helmet-async'
import { get } from 'lodash-es'
import { Navigate, useLocation } from 'react-router-dom'
import { shallowEqual, useAppDispatch, useAppSelector } from '@hooks/index'
import { fakeLogin, selectIsLogin } from '@store/slices/auth'
import {
	Avatar,
	Box,
	Button,
	Checkbox,
	FormControlLabel,
	Grid,
	Link,
	TextField,
	Typography,
} from '@mui/material'
import { LockOutlined as LockOutlinedIcon } from '@mui/icons-material'

interface LoginFormValues {
	email: string
	password: string
	remember: boolean
}

const LoginPage: React.FC = ({}) => {
	const isLogin = useAppSelector(selectIsLogin, shallowEqual)
	const dispatch = useAppDispatch()
	const location = useLocation()
	let from = '/home'

	if (location.state) {
		from = get(location.state, ['from', 'pathname'], '/home')
	}

	const onFinish = (values: LoginFormValues) => {
		console.log('Success:', values)
		/**
		 * @event action login
		 * login({
		 *      username: 'john',
		 *      password: 'changeme111',
		 * })
		 */
		dispatch(fakeLogin(true))
	}

	const onFinishFailed: React.FormEventHandler = (errorInfo) => {
		console.log('Failed:', errorInfo)
	}

	// if (isLogin) {
	// 	return <Navigate replace to={from} />
	// }

	return (
		<>
			<Helmet>
				<title>Login Form</title>
			</Helmet>
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}>
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign in
				</Typography>
				<Box component="form" onSubmit={onFinishFailed} noValidate sx={{ mt: 1 }}>
					<TextField
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
					/>
					<FormControlLabel
						control={<Checkbox value="remember" color="primary" />}
						label="Remember me"
					/>
					<Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
						Sign In
					</Button>
					<Grid container>
						<Grid item xs>
							<Link href="#" variant="body2">
								Forgot password?
							</Link>
						</Grid>
						<Grid item>
							<Link href="#" variant="body2">
								Don't have an account? Sign Up
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</>
	)
}

export default LoginPage
