import React from "react";
import "./CalendarItem.css";

class CalendarItem extends React.Component {
	render() {
		const { meeting } = this.props;

		return (
			<li className='calendar__item' key={meeting.id}>
				<p>
					<span className='item__text'>Meeting with:</span> {meeting.firstName}{" "}
					{""} {meeting.lastName}
				</p>
				<p>
					<span className='item__text'>Date:</span> {meeting.date}
				</p>
				<p>
					<span className='item__text'>Time:</span> {meeting.time}
				</p>
				<p>
					<span className='item__text'>E-mail: </span>
					{meeting.email}
				</p>
				<button
					className='btn__item'
					onClick={() => this.onClickRemove(meeting.id)}>
					Remove meeting
				</button>
			</li>
		);
	}

	onClickRemove = id => {
		const { removeMeeting } = this.props;
		removeMeeting(id);
	};
}

export default CalendarItem;
