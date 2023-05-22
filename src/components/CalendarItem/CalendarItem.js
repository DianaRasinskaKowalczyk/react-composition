import React from "react";

class CalendarItem extends React.Component {
	render() {
		const { meeting, onClick } = this.props;

		return (
			<>
				<li key={meeting.id}>
					<p>
						Meeting with: {meeting.firstName} {""} {meeting.lastName}
					</p>
					<p>Date: {meeting.date}</p>
					<p>Time: {meeting.time}</p>
					<p>E-mail: {meeting.email}</p>
				</li>
				<button onClick={onClick}>Remove meeting</button>
			</>
		);
	}
}

export default CalendarItem;
