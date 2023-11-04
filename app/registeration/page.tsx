'use client';
import Container from '@mui/material/Container';
import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface DocumentForm {
	subject: string;
	description: string;
	sender: string;
	receiver: string;
}

const Registration = () => {
	const { register, handleSubmit } = useForm<DocumentForm>();
	const router = useRouter();
	const onSubmit = async (data: DocumentForm) => {
		await axios.post('/api/document', data);
		router.push('/document');
	};

	return (
		<form
			className="registration-page p-12"
			onSubmit={handleSubmit((data) => onSubmit(data))}
		>
			<Container
				maxWidth="xl"
				className="flex flex-col gap-10"
			>
				<div className="subject-description-container flex flex-col gap-10">
					<TextField
						fullWidth
						label="Subject"
						className="bg-white"
						{...register('subject')}
					/>
					<TextField
						label="Description"
						minRows={5}
						fullWidth
						multiline
						className="bg-white"
						{...register('description')}
					/>
				</div>
				<div className="sender-receiver-container grid grid-cols-2 gap-10">
					<TextField
						fullWidth
						label="Sender"
						className="bg-white"
						{...register('sender')}
					/>
					<TextField
						fullWidth
						label="Receiver"
						className="bg-white"
						{...register('receiver')}
					/>
				</div>
				{/* <div className="grid grid-cols-2 gap-10">
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
								checked
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
								checked
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
				</div> */}
				<div className="action-box">
					<Button
						variant="contained"
						color="success"
						type="submit"
					>
						Success
					</Button>
				</div>
			</Container>
		</form>
	);
};

export default Registration;
