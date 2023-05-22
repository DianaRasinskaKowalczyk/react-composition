import React from "react";
import CalendarList from "../CalendarList/CalendarList";
import {
	handleFetch,
	postFetch,
	removeFetch,
} from "../../helpers/CalendarProvider";
import CalendarForm from "../CalendarForm/CalendarForm";

class Calendar extends React.Component {
	state = {
		meetings: [],
	};

	render() {
		return (
			<>
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
		removeFetch(meeting).catch(err => console.log(err));
	};
}

export default Calendar;
