// import { TextField } from '@mui/material';
import Container from '@mui/material/Container';
import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import React from 'react';

const Registration = () => {
	return (
		<div className="registration-page p-12">
			<Container
				maxWidth="xl"
				className="flex flex-col gap-10"
			>
				<div className="subject-desctiption-container flex flex-col gap-10">
					<TextField
						fullWidth
						label="Subject"
						className="bg-white"
					/>
					<TextField
						label="Description"
						minRows={5}
						fullWidth
						multiline
						className="bg-white"
					/>
				</div>
				<div className="sender-receiver-container grid grid-cols-2 gap-10">
					<TextField
						fullWidth
						label="Sender"
						className="bg-white"
					/>
					<TextField
						fullWidth
						label="Receiver"
						className="bg-white"
					/>
				</div>
				<div className="grid grid-cols-2 gap-10">
					<FormControl>
						<FormLabel id="send-receive-method-label">Send/Receive Method</FormLabel>
						<RadioGroup
							row
							aria-labelledby="send-receive-method-label"
							name="send-receive-method"
						>
							<FormControlLabel
								value="email"
								control={<Radio />}
								label="Email"
							/>
							<FormControlLabel
								value="post"
								control={<Radio />}
								label="Post"
							/>
							<FormControlLabel
								value="fax"
								control={<Radio />}
								label="Fax"
							/>
						</RadioGroup>
					</FormControl>

					<FormControl>
						<FormLabel id="urgency-label">Urgency</FormLabel>
						<RadioGroup
							row
							aria-labelledby="urgency-label"
							name="urgency"
						>
							<FormControlLabel
								value="normal"
								control={<Radio />}
								label="Normal"
							/>
							<FormControlLabel
								value="soon"
								control={<Radio />}
								label="Soon"
							/>
							<FormControlLabel
								value="immediate"
								control={<Radio />}
								label="Immediate"
							/>
						</RadioGroup>
					</FormControl>
				</div>
				<div className="action-box">
					<Button
						variant="contained"
						color="success"
					>
						Success
					</Button>
					<Button variant="outlined">Outlined</Button>
				</div>
			</Container>
		</div>
	);
};

export default Registration;
