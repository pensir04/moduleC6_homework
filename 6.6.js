const wsUrl = 'wss://echo-ws-service.herokuapp.com';

const btn = document.querySelector('.btn');
const message = document.querySelector('.inp-message');
const geo = document.querySelector('.geo');
const chat = document.querySelector('.chat');
const text = ""
let websocket;

//Чат

function writeToScreen(message) {
	let pre = document.createElement("p");
	pre.style.wordWrap = "break-word";
	pre.className = "outcoming";
	pre.innerHTML = message;
	chat.appendChild(pre);
}

function sendMessage() {
	txt = message.value;
	websocket.send(txt);
	return(txt || text)
};

btn.addEventListener('click', () => {
	writeToScreen(sendMessage());
});

websocket = new WebSocket(wsUrl);
websocket.onopen = function(evt) {
	writeToScreen("Соединение успешно");
};
websocket.onmessage = function(evt) {
	writeToScreen(
		'<div style="text-align: right">Ответ: ' + (evt.data || text) + '</div>'
		);
};

// Геолокация

const error = () => {
	status.textContent = 'Невозможно получить ваше местоположение';
}

const success = (position) => {
	const latitude = position.coords.latitude;
	const longitude = position.coords.longitude;
	
	let maplink;
	maplink = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
	maplink = `<a href=${maplink}>Ссылка на карту</a>`;
	writeToScreen(maplink)
}

geo.addEventListener('click', () => {
	if (!navigator.geolocation) {
		status.textContent = 'Геолокация не поддерживается браузером';
	} else {
		navigator.geolocation.getCurrentPosition(success, error);
	}
});
