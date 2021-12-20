// console.log(location.hostname);
// console.log(document.referrer);
// if (location.hostname === "www.google.com" && (document.referrer !== "https://yandex.ru/" )) {
//     document.location.href = "https://yandex.ru";
// }
// if(location.hostname === "yandex.ru"){
//     document.location.href = "https://www.google.ru/";
// }
let link = document.querySelectorAll('a').length;

//alert(document.querySelectorAll('a').length);
// alert($("a").length);
// alert('hi')
chrome.runtime.sendMessage({
    from: 'content',
    subject: 'showPageAction',
});

// Listen for messages from the popup.
chrome.runtime.onMessage.addListener((msg, sender, response) => {
        console.log(msg);
        response({sms:'hi'});
});
