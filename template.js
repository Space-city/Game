var templates = {
	header: './partials/header.html',
	map: './partials/map.html',
	sidebar: './partials/sidebar.html',
}

function getContent(template, cb) {
	fetch(template)
		.then(res => res.text())
		.then(html => cb(html))
}

function template () {
	var body = document.querySelector('body')
	var tpl = body.innerHTML
	
	getContent(templates.header, function (header) {
		tpl = tpl.replace(/{{header}}/g, header)
		body.innerHTML = tpl
	})

	getContent(templates.map, function (map) {
		tpl = tpl.replace(/{{map}}/g, map)
		body.innerHTML = tpl
	})
	
	getContent(templates.sidebar, function (sidebar) {
		tpl = tpl.replace(/{{sidebar}}/g, sidebar)
		body.innerHTML = tpl
	})
}