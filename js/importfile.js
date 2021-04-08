LIB＿PATH = '';

BOOTSTRAP_JS_PATH = LIB＿PATH + 'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js';
BOOTSTRAP_CSS_PATH = LIB＿PATH + 'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css';

JQ_PATH = LIB＿PATH + 'https://code.jquery.com/jquery-3.6.0.min.js';

JQ_UI_JS_PATH = LIB＿PATH + 'https://code.jquery.com/ui/1.12.1/jquery-ui.min.js';
JQ_UI_CSS_PATH = LIB＿PATH + 'https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css';

VUEJS_PATH = LIB＿PATH + 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js';
CUSTOM_VUEJS_PATH = './js/dovue.js';

//console.log = () => { };

window.onload = function () {

	let jqEl = appendJs(JQ_PATH);
	console.log(JQ_PATH);

	//等待jqurey加载完毕
	jqEl.onload = () => {
		$(function () {
			appendJs(BOOTSTRAP_JS_PATH);
			appendJs(JQ_UI_JS_PATH);
			let vuejs = appendJs(VUEJS_PATH);

			appendCss(BOOTSTRAP_CSS_PATH);
			appendCss(JQ_UI_CSS_PATH);

			vuejs.onload = () => {
				appendJs(CUSTOM_VUEJS_PATH);
			};
		});
	}

};

function appendJs(URL) {
	console.log(URL);
	var el = document.createElement('script');
	el.src = URL;
	document.body.appendChild(el);

	return el;
};

function appendCss(URL) {
	console.log(URL);
	var el = document.createElement('link');
	el.href = URL;
	el.rel = 'stylesheet';
	el.type = 'text/css';
	// HEAD要素の最後に追加
	document.getElementsByTagName('head')[0].appendChild(el);
}

