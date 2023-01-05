function readMore() {
	var img_btn = document.querySelector('.img_btn');
	var btn_text = document.querySelector('.btn_text');
	var more = document.querySelectorAll('.more');
	var more_2 = document.querySelectorAll('.more_2');
	var niga = document.querySelectorAll('.niga');
	
	if(window.innerWidth > 1120){
		if(btn_text.textContent == 'Показать все'){
			img_btn.src = "image/icon_h.svg"
			document.querySelector('.btn_text').innerHTML = 'Скрыть';
			for(var i = 0; i < more.length; i++){
				var element = more[i];
				element.style.display = 'flex'
		}
		
		} else {
		img_btn.src = "image/icon_m.svg";
		document.querySelector('.btn_text').innerHTML = 'Показать все';
		for(var i = 0; i < more.length; i++){
			var element = more[i];
			element.style.display = 'none'
		}
	}

	}

	if(window.innerWidth < 1120){
		if(btn_text.textContent == 'Показать все'){
			img_btn.src = "image/icon_h.svg"
			document.querySelector('.btn_text').innerHTML = 'Скрыть';
			for(var i = 0; i < more_2.length; i++){
				var element = more_2[i];
				element.style.display = 'flex'
		}
		
		} else {
			img_btn.src = "image/icon_m.svg";
			document.querySelector('.btn_text').innerHTML = 'Показать все';
			for(var i = 0; i < more_2.length; i++){
				var element = more_2[i];
				element.style.display = 'none'
			}
		}

	}
	window.addEventListener('resize', function(event) {
    if(window.innerWidth > 1120){
    	for(var i = 0; i < niga.length; i++){
				var element = niga[i];
				element.style.display = 'flex'
		}
    }
    if(window.innerWidth < 1120 && btn_text.textContent == 'Показать все'){
    	for(var i = 0; i < niga.length; i++){
				var element = niga[i];
				element.style.display = 'none'
		}
    }
}, true);
}

