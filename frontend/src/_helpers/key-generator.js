function keyGenerator(len) {
	const arr = '0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz';
	var ans = '';
	for (var i = len; i > 0; i--) {
		ans += arr[Math.floor(Math.random() * arr.length)];
	}
	return ans;
}

export { keyGenerator };
