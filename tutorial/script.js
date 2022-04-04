function stylish(color){
	recolorClassBackground(['jumbotron', 'panel-footer','navbar'],color);
	recolorClass(['logo','logo-small','carousel-control.right', 'carousel-control.left', 'panel-footer', 'navbar-nav', 'glyphicon'], color);

}

function recolorClassBackground(classes, color){
	for (var i = classes.length - 1; i >= 0; i--) {
		var x= document.getElementsByClassName(classes[i]);
		for (var j = x.length - 1; j >= 0; j--) {
			x[j].style.backgroundColor= color;
		};
	};
}

function recolorClass(classes, color){
	for (var i = classes.length - 1; i >= 0; i--) {
		var x= document.getElementsByClassName(classes[i]);
		for (var j = x.length - 1; j >= 0; j--) {
			x[j].style.color= color;
		};
	};
}
