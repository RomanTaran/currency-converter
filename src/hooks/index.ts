import {useQuery} from "react-query";
import {getCurrencies} from "../services";

interface ICurrencies {
  cc: string;
  exchangedate: string;
  r030: number;
  rate: number;
  txt: string;
}

export const useDollarEuro = () => {
  const {data: currencies} = useQuery<ICurrencies[]>('currencies', getCurrencies)

  const dollarItem = currencies?.find(item => item.cc === 'USD');
  const euroItem = currencies?.find(item => item.cc === 'EUR');
  const dollar = dollarItem?.rate;
  const euro = euroItem?.rate;

  return {dollar, euro}
}