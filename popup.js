// document.getElementById('entrance-p').addEventListener('click', function () {
//     document.querySelectorAll('.link')[0].innerHTML = "link";
//     // ...query for the active tab...
//     // chrome.tabs.query({
//     //     active: true,
//     //     currentWindow: true
//     // }, tabs => {
//     //     // ...and send a request for the DOM info...
//     //     chrome.tabs.sendMessage(
//     //         tabs[0].id,
//     //         {from: 'popup', subject: 'DOMInfo'},
//     //         setDOMInfo);
//     // });
// })
const setDOMInfo = info => {
    console.log(info);
};

// Once the DOM is ready...
window.addEventListener('DOMContentLoaded', () => {

})
chrome.runtime.onMessage.addListener((msg, sender, response) => {
    console.log("domInfo");
});
$('.entrance-p').on('click', function (){
    $('.reg').show();
    $('.count-cristal').hide();
    $('.out-p').show();
    $('.entrance-p').hide();
})
$('.out-p').on('click', function (){
    $('.reg').hide();
    $('.count-cristal').show();
    $('.out-p').hide();
    $('.entrance-p').show();
})
