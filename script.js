let country_list = {
    "CAD" : "CA",
    "CNY" : "CN",
    "JPY" : "JP",
    "USD" : "US",
    "AUD" : "AU",
 }
 const dropList = Array.from(document.querySelectorAll(".drop-list select"))




 dropList.forEach(element => {
    for(currency_list in country_list) {
        let optionTag = `<option value="${currency_list}">${currency_list}</option>`
        element.insertAdjacentHTML("beforeend", optionTag);
    }
});