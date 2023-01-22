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
 const amount = document.getElementsByTagName("input")[0];


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

function getExchangeRate() {
    let amountVal = amount.value;
    if(amountVal == "" || amountVal == "0") {
        amount.value = "1";
        amountVal = 1;
    }
    exchangeRateTxt.innerText = "Loading...";
    let url = `https://open.er-api.com/v6/latest/${fromCurr.value}`;
    fetch(url)
        .then(response => response.json())
        .then(result => {})
}