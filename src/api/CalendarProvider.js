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
	// .then(resp => {
	// 	console.log(resp);
	// });
}
