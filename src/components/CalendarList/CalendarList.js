import React from "react";
import CalendarItem from "../CalendarItem/CalendarItem";

class CalendarList extends React.Component {
	render() {
		const { meetings } = this.props;

		const meetingsList = meetings.map(meeting => {
			return <CalendarItem meeting={meeting} key={meeting.id} />;
		});

		return <ul>{meetingsList}</ul>;
	}
}

export default CalendarList;
