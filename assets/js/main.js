/*
	Prologue by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			wide:      [ '961px',  '1880px' ],
			normal:    [ '961px',  '1620px' ],
			narrow:    [ '961px',  '1320px' ],
			narrower:  [ '737px',  '960px'  ],
			mobile:    [ null,     '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Nav.
		document.getElementById('menu-toggle').addEventListener('click', function () {
			document.getElementById('nav-menu').classList.toggle('active');
		});		

		const menuToggle = document.getElementById('menu-toggle');
		const navMenu = document.getElementById('nav-menu');
		const overlay = document.getElementById('overlay');

		// Saat klik hamburger ☰
		menuToggle.addEventListener('click', () => {
			menuToggle.classList.add('active');        // animasi ☰ ➝ ✖
			navMenu.classList.add('active');           // munculkan nav
			overlay.classList.add('active');           // munculkan overlay
			menuToggle.classList.add('hidden');        // sembunyikan tombol
		});

		overlay.addEventListener('click', closeMenu);
			// Optional: klik link di nav juga menutup menu
			document.querySelectorAll('#nav-menu a').forEach(link => {
			link.addEventListener('click', closeMenu);
		});

		function closeMenu() {
			navMenu.classList.remove('active');
			overlay.classList.remove('active');
			menuToggle.classList.remove('active');     // kembali ke ☰
			menuToggle.classList.remove('hidden');     // tampilkan tombol
		}

	// Scrolly.
		$('.scrolly').scrolly();

	// Header (narrower + mobile).

		// Toggle.
			$(
				'<div id="headerToggle">' +
					'<a href="#header" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Header.
			$('#header')
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'header-visible'
				});

})(jQuery);