//
// chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
//     var activeTab = tabs[0];
//     chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
// });
chrome.runtime.onMessage.addListener((msg, sender) => {
    // First, validate the message's structure.
    if ((msg.from === 'content') && (msg.subject === 'showPageAction')) {
        // Enable the page-action for the requesting tab.
        //chrome.pageAction.show(sender.tab.id);
        console.log('eee');
    }
    console.log('eee');
});

