import React from "react";
import CalendarList from "../CalendarList/CalendarList";
import { handleFetch } from "../../api/CalendarProvider";
import CalendarForm from "../CalendarForm/CalendarForm";

class Calendar extends React.Component {
	state = {
		meetings: [],
	};

	render() {
		return (
			<>
				<CalendarForm />
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
}

export default Calendar;
