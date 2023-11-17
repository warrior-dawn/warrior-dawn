const buttons = document.querySelectorAll('.btn');

buttons.forEach((btn) => {
	btn.onclick = () => {
		if (btn.classList[1] == 'instagram') {
			location.href = 'https://instagram.com/al_amin19_6';
		} else if (btn.classList[1] == 'facebook') {
			location.href = 'https://www.facebook.com/amin.mtg.5';
		} else if (btn.classList[1] == 'google') {
			location.href = 'https://www.google.com';
		} else if (btn.classList[1] == 'youtube') {
			location.href = 'https://www.youtube.com';
		}
	};
});
