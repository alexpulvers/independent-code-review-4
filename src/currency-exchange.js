export class CurrencyExchanger {
  async callAPI() {
    try {
      let newUrl = `https://v6.exchangerate-api.com/v6/0e1a7fd3c25b141bbea59a38/latest/USD`;
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
