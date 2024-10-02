document.getElementById('switch').oninput = () => {
	if(document.getElementById('switch').checked == true){
		document.querySelector('body').classList.add('dark');
	}else{
		document.querySelector('body').classList.remove('dark');
	}
};
