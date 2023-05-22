export function validateInputs(inputData, fieldsArr) {
	let errors = [];

	fieldsArr.forEach(field => {
		const value = inputData[field.name];

		if (field.required) {
			if (value.length === 0) {
				errors.push(field.name + " is too short");
			}
		}

		if (field.pattern) {
			const reg = new RegExp(field.pattern);
			if (!reg.test(value)) {
				errors.push(field.name + `${field.label} is invalid`);
			}
		}
	});

	return errors;
}
