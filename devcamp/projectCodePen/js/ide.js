const favicon = document.getElementById('favicon');

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    favicon.href = '../img/logo-white.png';
} else {
    favicon.href = '../img/logo-black.png'
}

function thisWorks() {
    alert('This action works! ');
}

var editorHTML = ace.edit("editorHTML");
editorHTML.setTheme("ace/theme/monokai");
editorHTML.session.setMode("ace/mode/html");

var editorCSS = ace.edit("editorCSS");
editorCSS.setTheme("ace/theme/monokai");
editorCSS.session.setMode("ace/mode/css");

var editorJS = ace.edit("editorJS");
editorJS.setTheme("ace/theme/monokai");
editorJS.session.setMode("ace/mode/javascript");


