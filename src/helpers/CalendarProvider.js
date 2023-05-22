const url = "http://localhost:3005/meetings";

export function handleFetch(options, additionalPath = "") {
	const path = url + additionalPath;
	const promise = fetch(path, options);
	return promise.then(resp => {
		if (resp.ok) {
			return resp.json();
		}
		throw new Error("Network error!");
	});
}

export function postFetch(meeting) {
	const options = {
		method: "POST",
		body: JSON.stringify(meeting),
		headers: { "Content-Type": "application/json" },
	};
	return handleFetch(options);
}

export function removeFetch(meeting) {
	const options = {
		method: "DELETE",
	};
	return handleFetch(options, `/${meeting}`);
}
