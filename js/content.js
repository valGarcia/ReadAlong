console.log("done loading");
function replaceText(tab)  {
    url = document.location.href;
    console.log(url);
    $.getJSON('http://api.diffbot.com/v3/analyze?token=fa2c9c8f090cbf172b891ca4499ecc45&url='+ url, function(response) {
        console.log("succesful api call");
        var obj = response.objects[0];
        var text = obj.text;
        var title = obj.title;
        replace_with_new_html(text, title);
    });
}

function replace_with_new_html(text, title){
    console.log(text);
    var our_code = "<html><body>";
    our_code += "<h1>"+title+"</h1>";
    our_code +="<p>"+text+"</p>";
    our_code += "</html><></body>";
    $("body").replaceWith(our_code);
}
