let country_list = {
    "CAD" : "CA",
    "CNY" : "CN",
    "JPY" : "JP",
    "USD" : "US",
    "AUD" : "AU",
 }
 const dropList = Array.from(document.querySelectorAll(".drop-list select"))
 const exchangeBtn = document.getElementsByTagName("button")[0];
 const fromCurr = document.getElementsByTagName("select")[0];
 const toCurr = document.getElementsByTagName("select")[1];



 dropList.forEach(element => {
    for(currency_list in country_list) {
        let optionTag = `<option value="${currency_list}">${currency_list}</option>`
        element.insertAdjacentHTML("beforeend", optionTag);
    }
});

exchangeBtn.addEventListener("click", getExchangeRate);

window.addEventListener("load", ()=>{
    getExchangeRate();
});

amount.addEventListener("change", getExchangeRate);