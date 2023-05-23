import React from "react";
import { validateInputs } from "../../helpers/Validator";
import "./CalendarForm.css";
import { fields } from "../../helpers/Fields";
import { v4 as uuid } from "uuid";

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
		return (
			<section>
				<form className='calendar__form' onSubmit={this.handleForm}>
					{this.renderInputs(fields)}
					<input className='btn' type='submit' value={"Send"}></input>
				</form>
			</section>
		);
	}

	inputHandler = e => {
		const { meeting } = this.state;
		const { value, name } = e.target;

		this.setState({ meeting: { ...meeting, [name]: value } });
	};

	handleForm = e => {
		e.preventDefault();

		const { submitForm } = this.props;

		const { meeting } = this.state;

		const errors = validateInputs(meeting, fields);

		if (errors.length > 0) {
			alert("Check the form");
		} else {
			submitForm(this.state.meeting);
			this.setState({
				meeting: this.handleInitValues(),
			});
		}
	};

	renderInputs = fieldsInputs => {
		const { meeting } = this.state;
		const newFields = fieldsInputs.map(field => {
			return (
				<React.Fragment key={uuid()}>
					<label className='form__label'>
						{field.label} {""}
						<input
							name={field.name}
							value={meeting[field.name]}
							onChange={this.inputHandler}
							required={field.required}></input>
					</label>
				</React.Fragment>
			);
		});

		return newFields;
	};
}

export default CalendarForm;
