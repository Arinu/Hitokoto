window.onload=function () {
	var gethi;
	var body = document.querySelector('body');
	var updatehi = document.querySelector('.sub');
	var hitokoto = document.querySelector('.hitokoto');
	var from = document.querySelector('.from');
	update();
	setcolor();
	function update() {
		gethi = new XMLHttpRequest();
		gethi.open("GET","https://sslapi.hitokoto.cn/?c=a");
		gethi.responseType="json";
		gethi.send();
		gethi.onreadystatechange = function () {
			if (true) {}
			if (gethi.readyState===4 && gethi.status===200) {
				hitokoto.innerHTML = gethi.response.hitokoto;
				from.innerHTML = "- "+ gethi.response.from;
			}
		}
	}
	function setcolor() {
		body.style.background=body.style.color=updatehi.style.background=color();
	}
	function color() {
		return "rgb("+random()+","+random()+","+random()+")";
	}
	function random() {
		return Math.floor(Math.random()*(101)+60)
		}
	updatehi.onclick=function () {
		update();
		setcolor();
	}
}