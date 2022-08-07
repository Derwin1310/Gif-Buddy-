export function getTheme() {
	return localStorage.getItem('color-theme');
}

export function setTheme(newTheme) {
	localStorage.setItem('color-theme', newTheme);
	document.documentElement.setAttribute('data-color-theme', newTheme);
}

export function fadeInAnimation() {
  const theme = document.getElementById('theme');

	theme.classList.remove('theme--animation');
	setTimeout(() => theme.classList.add('theme--animation'), 300);
}

export function toogleTheme() {
	const newTheme = getTheme() === 'dark' ? 'light' : 'dark';

	setTheme(newTheme);
  	fadeInAnimation();
}

(function () {
	// the default preferred theme in the browser
	const preferredTheme = window.matchMedia('(prefers-color-scheme: light)').matches && 'light';

	// choose the theme between the chosen one, preferred one or the default dark
	setTheme(getTheme() || preferredTheme || 'dark');
})();