
function getArticle(){
    return document.getElementsByClassName("story-body-text story-content");
}

function highlighter(){
    un_high();
    
    for(var i = 0, length = art.length; i < length; i++){
        var x = art[i].innerHTML.replace(highlight, "<mark>" + highlight + "</mark>");
        art[i].innerHTML = x;
    }
    
    oldKeyword = highlight;
}

function un_high(){
    for(var i = 0, length = art.length; i < length; i++){
        var x = art[i].innerHTML.replace("<mark>" + oldKeyword + "</mark>", oldKeyword);
        art[i].innerHTML = x;
    }
}

var art = getArticle();
//use event listener to assign highlight
//maybe call highlighter within event listener
var highlight = "A few Months";
var oldKeyword = "";
highlighter;