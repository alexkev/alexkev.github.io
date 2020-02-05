function dropdown(className) {
	let list = document.getElementsByClassName(className);
	for (const el of list) {
		el.classList.toggle('dropdown');
	}
}
