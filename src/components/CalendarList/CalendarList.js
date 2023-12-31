import React from "react";
import CalendarItem from "../CalendarItem/CalendarItem";
import "./CalendarList.css";

class CalendarList extends React.Component {
	render() {
		const { meetings, removeMeeting } = this.props;

		const meetingsList = meetings.map(meeting => {
			return (
				<CalendarItem
					meeting={meeting}
					key={meeting.id}
					removeMeeting={removeMeeting}
				/>
			);
		});

		return <ul className='calendar__list'>{meetingsList}</ul>;
	}
}

export default CalendarList;
