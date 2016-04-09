
// function getArticle(){
//     //console.log(document.body.innerHTML);
//     return document.body.innerText;
// }

// function highlighter(){
//     //un_high();
    
//     for(var i = 0, length = art.length; i < length; i++){
//         var x = art[i].innerHTML.replace(highlight, "<mark>" + highlight + "</mark>");
//         art[i].innerHTML = x;
//     }
    
//     oldKeyword = highlight;
// }

// function un_high(){
//     for(var i = 0, length = art.length; i < length; i++){
//         var x = art[i].innerHTML.replace("<mark>" + oldKeyword + "</mark>", oldKeyword);
//         art[i].innerHTML = x;
//     }
// }

// var art = getArticle();
// console.log(art);

// var xhr = new XMLHttpRequest();

// xhr.open("GET", "http://api.diffbot.com/v3/analyze?token=fa2c9c8f090cbf172b891ca4499ecc45&url=http://www.cnn.com/2016/04/08/tech/spacex-historic-rocket-landing-irpt/index.html");
// xhr.send();

// // var obj = jQuery.parseJSON(xhr.response);
// // console.log(obj);
// console.log(xhr);
// console.log(xhr.responseText);
// console.log(xhr.status);
// console.log(xhr.statusText);
//use event listener to assign highlight
//maybe call highlighter within event listener
// var highlight = "A few Months";
// var oldKeyword = "";
// highlighter;
var url = "http://www.cnn.com/2016/04/08/tech/spacex-historic-rocket-landing-irpt/index.html";
$.getJSON('http://api.diffbot.com/v3/analyze?token=fa2c9c8f090cbf172b891ca4499ecc45&url='+url, function(response) {
    var obj = response.objects[0].text;
    var text = obj.text;
    var title = obj.title;
    
});

function replace(){
    //var all_code = document.body.innerHTML;
    //console.log(all_code);
    //var our_code = "<html><body style=\"width: 300px\"><p>Here is the popup</p></body></html>";
    //var our_code = document.open("text/html", "index");
    // console.log(our_code);
    // console.log(our_code.text);
    // console.log(our_code.textContent);
    //document.write(our_code.text);
    
    $("body").replaceWith("<html><body style=\"width: 300px\"><p>Here is the popup</p></body></html>");
}

replace();