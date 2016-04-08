var page = require('webpage').create();
var url = 'https://web.hankyu-dept.co.jp/ecshop/shohinDetailDisplay.do?mstShohinId=352645';
page.open(url, function(status) {
    console.log("Status: " + status);
    if(status === "success") {
        page.render('example.png');
    }
    phantom.exit();
});
