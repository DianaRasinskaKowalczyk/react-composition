import React from "react";
import { validateInputs } from "../../helpers/Validator";

class CalendarForm extends React.Component {
	state = {
		meeting: this.handleInitValues(),
	};

	handleInitValues() {
		const initValues = {
			firstName: "",
			lastName: "",
			email: "",
			date: "",
			time: "",
			id: "",
		};

		return initValues;
	}

	render() {
		const { meeting } = this.state;

		return (
			<section>
				<h1> Meetings Manager</h1>
				<section>
					<form onSubmit={this.handleForm}>
						<label>
							First Name: {""}
							<input
								name='firstName'
								value={meeting.firstName}
								onChange={this.inputHandler}
								required></input>
						</label>
						<label>
							Last Name: {""}
							<input
								name='lastName'
								value={meeting.lastName}
								onChange={this.inputHandler}
								required></input>
						</label>
						<label>
							Date:{""}
							<input
								name='date'
								placeholder={"YYYY-mm-dd"}
								value={meeting.date}
								onChange={this.inputHandler}
								required></input>
						</label>
						<label>
							Time: {""}
							<input
								name='time'
								value={meeting.time}
								placeholder={"HH:mm"}
								onChange={this.inputHandler}
								required></input>
						</label>
						<label>
							E-mail: {""}
							<input
								name='email'
								value={meeting.email}
								onChange={this.inputHandler}
								required></input>
						</label>
						<input type='submit' value={"Send"}></input>
					</form>
				</section>
			</section>
		);
	}

	inputHandler = e => {
		const { meeting } = this.state;
		const { value, name } = e.target;

		this.setState({ meeting: { ...meeting, [name]: value } }, () =>
			console.log(meeting)
		);
	};

	handleForm = e => {
		e.preventDefault();

		const { submitForm } = this.props;

		const fields = [
			{ name: "firstName", label: "Firstname", required: true, pattern: false },
			{ name: "lastName", label: "Lastname", required: true, pattern: false },
			{
				name: "date",
				label: "Date",
				required: true,
				pattern: "^([0-9]{4})-([0-9]{2})-([0-9]{2})",
			},
			{
				name: "time",
				label: "Time",
				required: true,
				pattern: "^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$",
			},
			{
				name: "email",
				label: "E-mail",
				required: true,
				pattern: "^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$",
			},
		];

		const errors = validateInputs(this.state.meeting, fields);

		if (errors.length > 0) {
			console.log(errors);
			alert("Check the form");
		} else {
			submitForm(this.state.meeting);
			this.setState({
				meeting: this.handleInitValues(),
			});
		}
	};
}

export default CalendarForm;
