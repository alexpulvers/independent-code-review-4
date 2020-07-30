import $ from "jquery";
import "./styles.css";
import { CurrencyExchanger } from "./../currency-exchange.js";

$(document).ready(function () {
  $("#money").submit(function () {
    const amount = $("#money").val();
    const currency = $("#currency").val();
    async () => {
      let currencyExchanger = new CurrencyExchanger();
      const response = await currencyExchanger.callAPI(currency, amount);
      getElements(response);
    };
  });
});

function getElements(response) {
  if (response) {
    $("#showResult").text("test");
  }
}
