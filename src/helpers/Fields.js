export const fields = [
	{
		name: "firstName",
		label: "Firstname",
		required: true,
		pattern: false,
		type: "text",
	},
	{
		name: "lastName",
		label: "Lastname",
		required: true,
		pattern: false,
		type: "text",
	},
	{
		name: "date",
		label: "Date",
		required: true,
		pattern: "^([0-9]{4})-([0-9]{2})-([0-9]{2})",
		type: "number",
	},
	{
		name: "time",
		label: "Time",
		required: true,
		pattern: "^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$",
		type: "number",
	},
	{
		name: "email",
		label: "E-mail",
		required: true,
		pattern: "^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$",
		type: "text",
	},
];
