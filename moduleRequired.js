function format(data = '') {
    return `
<!DOCTYPE html>
<head>
<title>You've Been Served!</title>
</head>
<body>
<center>
<h1>Hello World!</h1>
<a href="/">Home</a>
<a href="/legal">Legal</a>
<a href="/contact">Contact</a>
<a href="/about">About</a>
<br>
${data}
<br>
${returnHome()}
</center>
</body>
</html>
`
};

function returnHome() {
    return `<hr>this is the footer`
}

module.exports = format