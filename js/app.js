$(document).ready(function() {
  $("#read_now").click(function(){
    console.log("clicked!");
    

    chrome.tabs.getCurrent(function(tab) {
	 chrome.tabs.executeScript({
	 	code: "replaceText()"
	 });
	});

  });
});

