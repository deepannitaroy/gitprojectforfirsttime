//MODAL
$(function () {
	const modal = document.querySelector("#modals");
	const openModal = document.querySelector(".open-button");
	const closeModal = document.querySelector(".close-button");

	openModal.addEventListener("click", () => {
		modal.showModal();
	});

	closeModal.addEventListener("click", () => {
		modal.close();
	});
});

//=============== Project Section

$('.screenshot_slider').owlCarousel({
	loop: true,
	responsiveClass: true,
	nav: true,
	margin: 0,
	autoplayTimeout: 4000,
	smartSpeed: 400,
	center: true,
	navText: ['&#8592;', '&#8594;'],
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 1
		},
		1200: {
			items: 3
		}
	}
});

/****************************/

//=============== Client Section

$('#client').owlCarousel({
	items: 6,
	margin: 50,
	loop: true,
	nav: false,
	dots: false,
	infinite: true,
	autoplay: true,
	animateOut: 'fadeOut',
	autoplayTimeout: 3000,
	smartSpeed: 2000,
	responsive: {
		0: {
			items: 3
		},
		600: {
			items: 3
		},
		1000: {
			items: 6
		}
	}
});

/****************************/

//=============== Testimonial Section

$('#testimonial').owlCarousel({
	loop: true,
	responsiveClass: true,
	nav: true,
	margin: 0,
	autoplayTimeout: 4000,
	smartSpeed: 400,
	center: true,
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 1
		},
		1200: {
			items: 1
		}
	}
});

/****************************/


//=============== Testimonial Section

$('#latestnews').owlCarousel({
	autoplay: false,
	autoplayTimeout: 3000,
	autoplayHoverPause: true,
	items: 2,
	loop: true,
	center: false,
	rewind: true,
	mouseDrag: true,
	touchDrag: true,
	pullDrag: true,
	freeDrag: false,
	margin: 30,
	stagePadding: 0,
	merge: false,
	mergeFit: true,
	autoWidth: false,
	startPosition: 0,
	rtl: false,
	smartSpeed: 1000,
	fluidSpeed: false,
	dragEndSpeed: false,
	responsiveClass: true,
	nav: false,
	dots: false,
	dotsData: false,
	responsive: {
		0: {
			items: 1,
			nav: true
		},
		600: {
			items: 2,
			nav: true
		},
		1200: {
			items: 4
		}
	}
});

/****************************/

$(function () {
	$(document).on("load scroll", function () {
		const navbar = document.querySelector('nav');
		document.onscroll = () => {
			if (window.scrollY > 0) {
				navbar.classList.add('scroll-on');
			} else {
				navbar.classList.remove('scroll-on');
			}
		};
	});
});
const navbar = document.querySelector('nav');
window.onload = () => {
	if (window.scrollY > 100) {
		navbar.classList.add('scroll-on');
	} else {
		navbar.classList.remove('scroll-on');
	}
}



/*const navbar = document.querySelector('nav');
window.onscroll = () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scroll-on');
    } else {
        navbar.classList.remove('scroll-on');
    }
};*/

// Get the container element
var btnContainer = document.querySelector("navi-menu");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("menunav");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function () {
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
	});
}