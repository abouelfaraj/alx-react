const getFullYear = () => {
	let current_year = new Date().getFullYear();
	return current_year;
}

const getFooterCopy = (isIndex) => {
	if (isIndex) {
		return "";
	} else {
		return "";
	}
}

module.exports = {
	getFooterCopy,
	getFullYear,
};
