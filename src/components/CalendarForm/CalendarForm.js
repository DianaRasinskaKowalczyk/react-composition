import React from "react";

class CalendarForm extends React.Component {
	state = {
		meeting: {
			firstName: "",
			lastName: "",
			email: "",
			date: "",
			time: "",
			id: "",
		},
	};

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
								onChange={this.inputHandler}></input>
						</label>
						<label>
							Last Name: {""}
							<input
								name='lastName'
								value={meeting.lastName}
								onChange={this.inputHandler}></input>
						</label>
						<label>
							Date:{""}
							<input
								name='date'
								placeholder={"YYYY-mm-dd"}
								value={meeting.date}
								onChange={this.inputHandler}></input>
						</label>
						<label>
							Time: {""}
							<input
								name='time'
								value={meeting.time}
								placeholder={"HH:mm"}
								onChange={this.inputHandler}></input>
						</label>
						<label>
							E-mail: {""}
							<input
								name='email'
								value={meeting.email}
								onChange={this.inputHandler}></input>
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

		// const { submitForm } = this.props;

		const meeting = {
			firstName: e.target.firstName.value,
			lastName: e.target.lastName.value,
			email: e.target.email.value,
			date: e.target.date.value,
			time: e.target.time.value,
			id: "",
		};

		console.log(meeting);

		const errors = this.validateInputs(meeting);

		if (errors.length > 0) {
			console.log(errors);
			alert("Fix the form");
		} else {
			// submitForm(meeting);
			this.setState({
				meeting: {
					firstName: "",
					lastName: "",
					email: "",
					date: "",
					time: "",
				},
			});
		}
	};

	validateInputs(inputData) {
		let errors = [];

		const { firstName, lastName, email, date, time } = inputData;

		if (firstName.length < 2) {
			errors.push("Firstname is too short");
		}

		if (lastName.length < 2) {
			errors.push("Lastname is too short");
		}

		const emailValidation = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

		if (!email.match(emailValidation)) {
			errors.push("Invalid email");
		}

		const dateValidation = /^([0-9]{4})-([0-9]{2})-([0-9]{2})/;

		if (!date.match(dateValidation)) {
			errors.push("Invalid date");
		}

		const timeValidation = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;

		if (!time.match(timeValidation)) {
			errors.push("Invalid time");
		}

		return errors;
	}
}

export default CalendarForm;
