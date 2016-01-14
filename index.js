(function() {
	var img = document.querySelector('.img');
	var container = document.querySelector('.container');
	var textContainer = document.querySelector('.text');
	var loader = document.querySelector('.loader');
	var images = [
		['images/pic1-small.jpg', 'images/pic1-medium.jpg', 'images/pic1-big.jpg'],
		['images/pic2-small.jpg', 'images/pic2-medium.jpg', 'images/pic2-big.jpg'],
		['images/pic3-small.jpg', 'images/pic3-medium.jpg', 'images/pic3-big.jpg'],
		['images/pic4-small.jpg', 'images/pic4-medium.jpg', 'images/pic4-big.jpg'],
		['images/pic5-small.jpg', 'images/pic5-medium.jpg', 'images/pic5-big.jpg'],
	];
	var text = [
		'Text 1',
		'Text 2',
		'Text 3',
		'Text 4',
		'Text 5',
	];

	function setUp() {
		var width = window.innerWidth;
		var size = 2;
		if (width <= 500) {
			size = 0;
		} else if (width <= 800) {
			size = 1
		}
		var image = new Image();
		image.onload = function() {
			img.src = images[0][size];
			setHeight();
			setWidth();
		}
		image.src = images[0][size];
		setHeight();
		setWidth();
		
	}
		
	setUp()

	window.addEventListener('resize', function(e) {
		setHeight();
		setWidth();
	})

	function setHeight() {
		var contHeight = container.clientHeight;
		var imgHeight = img.clientHeight;
		if (imgHeight > contHeight) {
			var height = imgHeight - contHeight;
			img.style.marginTop = -height / 2; 
		} else {
			img.style.minHeight = contHeight + 100;
		}
	}

	function setWidth() {
		var imgWidth = img.clientWidth;
		var contWidth = container.clientWidth;	
		if (imgWidth > contWidth) {
			var width = imgWidth - contWidth;
			img.style.marginLeft = -width / 2; 
		} else {
			img.style.minWidth = contWidth + 100;
			img.style.minHeight = 'initial';
		}
	}

	var switches = document.querySelectorAll('.switch');
	for (var i = 0; i < switches.length; i++) {
		switches[i].addEventListener('click', handleSwitch);
	} 
	function handleSwitch(e) {
		if (!e.target.classList.contains('switch')) return;
		if (e.target.classList.contains('active')) return;
		for (var i = 0; i < switches.length; i++) {
			if (switches[i].classList.contains('active')) {
				switches[i].classList.remove('active');
			}
		}

		e.target.classList.add('active');
		var index = e.target.getAttribute('data-index');
		loader.style.display = 'block';
		var width = window.innerWidth;
		var size = 2;
		if (width <= 500) {
			size = 0;
		} else if (width <= 800) {
			size = 1
		} 
		var image = new Image();
		image.onload = function() {
			loader.style.display = 'none';
			img.src = images[index][size];
			textContainer.textContent = text[index];
			
			setWidth();
			setHeight();
		}
		image.src = images[index][size];
		}
})();