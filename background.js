chrome.tabs.getSelected(null, function(tab) {
        tabUrl = tab.url;
});

document.getElementById("flushOne").addEventListener("click", flushOne, false);
document.getElementById("flushAll").addEventListener("click", flushAll, false);
document.getElementById("devBuild").addEventListener("click", devBuild, false);

function flushOne() {
   chrome.tabs.update({url:tabUrl+'?flush=1'});  
}

function flushAll() {
   chrome.tabs.update({url:tabUrl+'?flush=all'});  
}

function devBuild() {
   chrome.tabs.update({url:tabUrl+'/dev/build'});  
}
  
