chrome.browserAction.onClicked.addListener(function(activeTab)
{
    chrome.windows.create({ url: chrome.runtime.getURL("notes.html"), type: 
    "popup" });
});