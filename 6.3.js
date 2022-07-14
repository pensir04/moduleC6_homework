const btn = document.querySelector('.btn');
const btn1 = document.querySelector('.btn-icon1');
const btn2 = document.querySelector('.btn-icon2');
btn2.hidden = true;

btn.addEventListener('click', () => {
	if (btn1.hidden == true) {
		btn1.hidden = false;
		btn2.hidden = true;
	} else {
		btn1.hidden = true;
		btn2.hidden = false;
	}
});