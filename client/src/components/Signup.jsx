import React from 'react';
import { Container, Paper, Grid, TextField, Button } from '@material-ui/core';


function Signup() {
	const [form, updateForm] = React.useState({
		username: "",
		email: "",
		password: "",
		graduationYear: null,
	});

	function handleChange(event) {
		const { name, value } = event.target;
		updateForm(prevDetails => {
			return (
				{
					...prevDetails,
					[name]: value
				}
			);
		});

	}

	return (
		<Container maxWidth="sm">

			<h1 className="heading"> SIGN UP </h1>
			<form action="" method="POST" id="form" noValidate>
				<Paper style={{ padding: 16 }} id="from_style">
					<Grid container alignItems="flex-start" spacing={2}>
						<Grid item xs={12}>
							<TextField
								fullWidth
								required
								name="username"
								type="text"
								placeholder="Username"
								onChange={handleChange}
								value={form.username}
							/>
						</Grid>

						<Grid item xs={12}>
							<TextField
								fullWidth
								required
								name="email"
								type="email"
								placeholder="Email"
								onChange={handleChange}
								value={form.email}
							/>
						</Grid>

						<Grid item xs={12}>
							<TextField
								fullWidth
								required
								name="password"
								type="password"
								placeholder="Password"
								onChange={handleChange}
								value={form.password}
							/>
						</Grid>

						<Grid item xs={12}>
							<TextField
								fullWidth
								required
								name="graduation-year"
								type="number"
								placeholder="Graduation Year"
								onChange={handleChange}
								value={form.graduationYear}
							/>
						</Grid>

						<Grid item xs={12} justify="center">
							<Button
								variant="contained"
								color="secondary"
							>
								Submit
                </Button>
						</Grid>
					</Grid>
				</Paper>
			</form>
		</Container>

	)
}

export default Signup;