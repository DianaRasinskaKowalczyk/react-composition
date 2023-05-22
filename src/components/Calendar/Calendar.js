import React from "react";
import CalendarList from "../CalendarList/CalendarList";
import {
	handleFetch,
	postFetch,
	removeFetch,
} from "../../helpers/CalendarProvider";
import CalendarForm from "../CalendarForm/CalendarForm";
import "./Calendar.css";

class Calendar extends React.Component {
	state = {
		meetings: [],
	};

	render() {
		return (
			<>
				<h1 className='calendar__header'> Meetings Manager</h1>
				<CalendarForm submitForm={this.handleForm} />
				<CalendarList
					meetings={this.state.meetings}
					removeMeeting={this.handleRemoveMeeting}
				/>
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

	handleRemoveMeeting = meeting => {
		removeFetch(meeting).then(() =>
			handleFetch().then(meetings => {
				this.setState({ meetings: meetings });
			})
		);
	};
}

export default Calendar;
