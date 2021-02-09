
document.addEventListener('DOMContentLoaded', function() {



    var head= document.getElementById('head');
    var up= document.getElementById('up');
    var burger = document.getElementById('burger');
	var nav = document.getElementById('nav');
    var offsetHeight = document.getElementById('head').offsetHeight;
    var headheight = head.offsetHeight;

    window.addEventListener('scroll' , function() {
        if (pageYOffset > offsetHeight + headheight) {
            head.classList.add('fixed');
            up.classList.add('top');
            nav.classList.remove("show");
        }else {
            head.classList.remove('fixed');
            up.classList.remove('top');
        }
    });






burger.onclick = function() {
	
		nav.classList.toggle('show');


}



    var act = 0;
    var images = document.querySelectorAll('.reviews-slider');

    for (var i = 0; i < images.length; i++) {

        var element = document.createElement("span");
        element.setAttribute("class", "whatever");
        var elementAbove = document.getElementById("spanclick");
        elementAbove.appendChild(element);

    }

    var spanbutton = document.querySelectorAll('.whatever');
    spanbutton[0].classList.add('activespan');

    spanbutton = Array.from(spanbutton);


    spanbutton.forEach(function(item) {
        item.onclick = (e) => {
            var ordinalplace = spanbutton.indexOf(e.target);
            images[act].classList.remove('active');
            spanbutton[act].classList.remove('activespan');

            images[ordinalplace].classList.add('active');
            spanbutton[ordinalplace].classList.add('activespan');
            act = ordinalplace;

        }
    });

});



