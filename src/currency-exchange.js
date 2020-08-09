export class CurrencyExchanger {
  async callAPI() {
    try {
      let newUrl = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
      let response = await fetch(newUrl);
      let jsonifiedResponse;
      if (response.status == 200) {
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
