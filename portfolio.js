(() => {
	const root = document.documentElement;
	const themeToggle = document.getElementById('themeToggle');
	const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
	const STORAGE_KEY = 'portfolio-theme';
	
	const applyTheme = (mode) => {
		if (mode === 'light') {
			root.setAttribute('data-theme', 'light');
			themeToggle.textContent = '🌙 Dark';
		} else {
			root.setAttribute('data-theme', 'dark');
			themeToggle.textContent = '☀︎ Light';
		}
	};

	const getPreferredTheme = () => {
		const saved = localStorage.getItem(STORAGE_KEY);
		if (saved === 'dark' || saved === 'light') return saved;
		return prefersDark.matches ? 'dark' : 'light';
	};

	let theme = getPreferredTheme();
	applyTheme(theme);

	themeToggle.addEventListener('click', () => {
		theme = theme === 'dark' ? 'light' : 'dark';
		localStorage.setItem(STORAGE_KEY, theme);
		applyTheme(theme);
	});

	prefersDark.addEventListener('change', () => {
		if (!localStorage.getItem(STORAGE_KEY)) {
			theme = getPreferredTheme();
			applyTheme(theme);
		}
	});

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					entry.target.classList.add('show');
					observer.unobserve(entry.target);
				}
			}
		},
		{ threshold: 0.12 },
	);

		document.querySelectorAll('.reveal, .section, .hero').forEach((el) => {
			observer.observe(el);
		});
})();
