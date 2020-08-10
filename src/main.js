import $ from "jquery";
import "./styles.css";
import { CurrencyExchanger } from "../src/currency-exchange.js";

$(document).ready(function () {
  $("#money").submit(function (event) {
    event.preventDefault();
    (async () => {
      let currencyExchanger = new CurrencyExchanger();
      const response = await currencyExchanger.callAPI();
      getElements(response);
    })();
  });
  $("#showErrors").hide();
  $("#showResult").hide();
  function getElements(response) {
    const amount = $("#amount").val();
    const cur = $("#currency").val();
    let userResponse;
    switch (cur) {
      case "eur":
        userResponse = `Your value in Euros is ${
          amount * response.conversion_rates.EUR
        }`;
        break;
      case "gbp":
        userResponse = `Your value in Pounds is ${
          amount * response.conversion_rates.GBP
        }`;
        break;
      case "jpy":
        userResponse = `Your value in Yen is ${
          amount * response.conversion_rates.JPY
        }`;
        break;
      case "rub":
        userResponse = `Your value in Rubles is ${
          amount * response.conversion_rates.RUB
        }`;
        break;
      case "krw":
        userResponse = `Your value in Won is ${
          amount * response.conversion_rates.KRW
        }`;
        break;
      default:
        break;
    }
    if (response.result == !200) {
      $("#showErrors").text("error, please check your connection");
    } else if (amount > 0) {
      $("#showResult").show();
      $("#showErrors").hide();
      $("#showResult").text(userResponse);
    } else {
      $("#showErrors").show();
      $("#showResult").hide();
      $("#showErrors").text("Please enter a positive number.");
    }
  }
});
