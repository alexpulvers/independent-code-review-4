export class CurrencyExchanger {
  async callAPI() {
    try {
      let newUrl = getRate(currency, amount);
      let response = await fetch(newUrl);
      let jsonifiedResponse;
      if (response.status === 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch (error) {
      return false;
    }
  }
}

export function getRate(currency, amount) {
  let newUrl;
  switch (currency) {
    case "eur":
      newUrl = `https://pro.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/eur/${amount}`;
      break;
    case "gbp":
      newUrl = `https://pro.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/gbp/${amount}`;
      break;
    case "jpy":
      newUrl = `https://pro.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/jpy/${amount}`;
      break;
    case "rub":
      newUrl = `https://pro.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/rub/${amount}`;
      break;
    case "krw":
      newUrl = `https://pro.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/krw/${amount}`;
      break;
    default:
      break;
  }
  return newUrl;
}
