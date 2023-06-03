window.addEventListener('load', () => {
	try {
		customizeCursor();
	} catch {
		console.error('CustomizeCursor not work');
	}

    window.addEventListener("scroll", reveal);
})