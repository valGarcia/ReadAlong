function getText(){
    return document.body.innerText
}
function getHTML(){
    return document.body.outerHTML
}
//console.log(getText());             //Gives you all the text on the page
//console.log(getHTML());             //Gives you the whole HTML of the page

// chrome.extension.onRequest.addListener(
//     function(request, sender, sendResponse) {
//         if(request.method == "getText"){
//             sendResponse({data: document.all[0].innerText, method: "getText"}); //same as innerText
//         }
//     }
// );

// $html = $("body").find("article").;
// console.log($("body").find("article").html());
getArticle();

function getArticle(){
    var art = document.getElementsByClassName("story-body-text story-content");
    //art[0].innerHTML.css("color", "blue");
    for(var i = 0, length = art.length; i < length; i++){
        var x = art[i].innerHTML.replace("A few months", "<mark>A few months</mark>");
        art[i].innerHTML = x;
    }
    console.log(art);
}