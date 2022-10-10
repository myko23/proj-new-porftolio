const loopColor = (list, index) => {
	const newIndex = index % list.length;

	return list[newIndex];
};

export default loopColor;
