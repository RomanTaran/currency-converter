import axios from "axios";

export const getCurrencies = () => axios.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
  .then(res => res.data);
