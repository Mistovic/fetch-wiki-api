/**
 * Create main mobile navigation
 * 
 * works with CSS class
 * 
 * @param {string} btn button  HTML element
 * @param {string} nav navigation element
 */
function hamburgerMenu(btn, nav) {
	const _btn = document.querySelector(btn);
	const _nav = document.querySelector(nav);

	if (_btn && _nav) {
		_btn.addEventListener('click', (e) => {
			_btn.classList.toggle('active');
			_btn.classList.contains('active') ? _nav.classList.add('show') : _nav.classList.remove('show');
		});
	}
}

// -- Task 2 - API consumption 
/**
 * Get page content and display it inside container
 * 
 * @param {string} url 
 */
function getPage(url) {
	console.log(url)
	let _content;

	fetch(url)
		.then((req) => {
			console.log(req.ok);

			if (!req.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			return req.json();
		})
		.then((data) => {
			console.log(data);
			_content = data.parse.text["*"];
			console.log(_content, pageContent);
			pageContent.innerHTML += _content
		})
		.catch((err) => {
			console.log(err);
			pageContent.innerHTML = "There was an network error! Pleas try again later."
		})
}