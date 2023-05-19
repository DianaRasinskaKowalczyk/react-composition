import React from "react";
import CalendarList from "../CalendarList/CalendarList";
import { handleFetch, postFetch } from "../../api/CalendarProvider";
import CalendarForm from "../CalendarForm/CalendarForm";

class Calendar extends React.Component {
	state = {
		meetings: [],
	};

	render() {
		return (
			<>
				<CalendarForm submitForm={this.handleForm} />
				<CalendarList meetings={this.state.meetings} />
			</>
		);
	}

	componentDidMount() {
		handleFetch().then(meetings => {
			this.setState({ meetings: meetings }, () =>
				console.log(this.state.meetings)
			);
		});
	}

	handleForm = meeting => {
		const { meetings } = this.state;

		postFetch(meeting).then(meetingWithId => {
			this.setState({
				meetings: [...meetings, meetingWithId],
			});
		});
	};
}

export default Calendar;
