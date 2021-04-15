//local net
const LIB＿PATH = './com/lib';

const BOOTSTRAP_JS_PATH = LIB＿PATH + '/bootstrap/js/bootstrap.bundle.min.js';
const BOOTSTRAP_CSS_PATH = LIB＿PATH + '/bootstrap/css/bootstrap.min.css';

const JQ_PATH = LIB＿PATH + '/jquery-3.5.1.min.js';

const JQ_UI_JS_PATH = LIB＿PATH + '/jquery-ui.min.js';
const JQ_UI_CSS_PATH = LIB＿PATH + '/jquery-ui.min.css';

const VUEJS_PATH = LIB＿PATH + '/vue.js';

//online
const W_BOOTSTRAP_JS_PATH = 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js';
const W_BOOTSTRAP_CSS_PATH = 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css';

const W_JQ_PATH = 'https://code.jquery.com/jquery-3.6.0.min.js';

const W_JQ_UI_JS_PATH = 'https://code.jquery.com/ui/1.12.1/jquery-ui.min.js';
const W_JQ_UI_CSS_PATH = 'https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css';

const W_VUEJS_PATH = 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js';

//主逻辑文件
const CUSTOM_VUEJS_PATH = './js/dovue.js';


//console.log = () => { };

window.onload = function () {

	let jqEl = appendJs(JQ_PATH);

	jqEl.onload = () => {

		console.log("[NET_STATE]: local net.");
		appendJs(BOOTSTRAP_JS_PATH);
		appendJs(JQ_UI_JS_PATH);
		let vuejs = appendJs(VUEJS_PATH);

		appendCss(BOOTSTRAP_CSS_PATH);
		appendCss(JQ_UI_CSS_PATH);

		vuejs.onload = () => {
			appendJs(CUSTOM_VUEJS_PATH);
		};
	};

	jqEl.onerror = () => {
		let w_jqEl = appendJs(W_JQ_PATH);

		//等待jqurey加载完毕
		w_jqEl.onload = () => {
			console.log("[NET_STATE]: online.");
			$(function () {
				appendJs(W_BOOTSTRAP_JS_PATH);
				appendJs(W_JQ_UI_JS_PATH);
				let vuejs = appendJs(W_VUEJS_PATH);

				appendCss(W_BOOTSTRAP_CSS_PATH);
				appendCss(W_JQ_UI_CSS_PATH);

				vuejs.onload = () => {
					appendJs(CUSTOM_VUEJS_PATH);
				};
			});
		};
	};

};

function appendJs(URL) {
	console.log("[FILE_PATH]:" + URL);
	var el = document.createElement('script');
	el.type = 'text/javascript';
	el.src = URL;
	document.body.appendChild(el);

	return el;
};

function appendCss(URL) {
	console.log("[FILE_PATH]:" + URL);
	var el = document.createElement('link');
	el.href = URL;
	el.rel = 'stylesheet';
	el.type = 'text/css';
	// HEAD要素の最後に追加
	document.getElementsByTagName('head')[0].appendChild(el);
}
