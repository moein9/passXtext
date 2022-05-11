chrome.runtime.onInstalled.addListener(() => {
console.log('Chrome extension successfully installed!');
return;
});


function changepasstotext(){
    
var inputs = document.getElementsByTagName("input");
var inpArr = Array.from(inputs);
function changeinput(d){if (d.type=="password"){
                    d.setAttribute("type", "text");
                  }}

inpArr.forEach(changeinput);
  }

chrome.action.onClicked.addListener((tab) => {
  if(!tab.url.includes("chrome://")) {

 
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: changepasstotext

    });
  }
});


