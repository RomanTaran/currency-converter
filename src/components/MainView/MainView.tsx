import {
  Container,
  MenuItem,
  Box,
  FormControl,
  InputLabel,
  Select, SelectChangeEvent, TextField,
} from "@mui/material";
import * as yup from 'yup';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import {useDollarEuro} from "../../hooks";
import {ChangeEvent, Dispatch, SetStateAction, useEffect, useState} from "react";
import {CurrencyBox, CurrencyPaper} from "../../styled";

const validationSchema = yup.object().shape({
  amount: yup
    .number()
    .positive('Введіть додатне число')
});

const MainView = () => {
  const [currency1, setCurrency1] = useState(1);
  const [currency2, setCurrency2] = useState(1);
  const [amount1, setAmount1] = useState(0);
  const [amount2, setAmount2] = useState(0);
  const {dollar, euro} = useDollarEuro();

  const currencies = [
    {value: dollar, label: 'USD'},
    {value: euro, label: 'EURO'},
    {value: 1, label: 'UAH'},
  ];

  const handleCurrencyChange = (event: SelectChangeEvent<number>, setCurrency: Dispatch<SetStateAction<number>>) => {
    setCurrency(Number(event.target.value));
  };

  const handleAmountChange1 = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;

    try {
      validationSchema.validateSync({amount: input}, {abortEarly: false});

      setAmount1(Number(input));
      setAmount2(Number(input) * currency1 / currency2);
    } catch (e) {
      if (e instanceof yup.ValidationError) {
        console.error(e.errors[0]);
      }
    }
  }

  const handleAmountChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;

    try {
      validationSchema.validateSync({amount: input}, {abortEarly: false});

      setAmount2(Number(input));
      setAmount1(Number(input) * currency2 / currency1);
    } catch (e) {
      if (e instanceof yup.ValidationError) {
        console.error(e.errors[0]);
      }
    }
  }

  useEffect(() => {
    setAmount2(amount1 * currency1 / currency2);
  }, [currency1]);

  useEffect(() => {
    setAmount1(amount2 * currency2 / currency1);
  }, [currency2]);

  return (
    <Container>
      <CurrencyPaper elevation={8}>
        <CurrencyBox>
          <Box sx={{minWidth: 200}}>
            <FormControl fullWidth>
              <InputLabel id="currency-select-label1">Валюта</InputLabel>
              <Select
                labelId="currency-select-label1"
                id="currency-select1"
                value={currency1}
                label="Валюта"
                onChange={(e) => handleCurrencyChange(e, setCurrency1)}
              >
                {currencies.map((currency) => (
                  <MenuItem key={currency.label} value={currency.value}>{currency.label}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <TextField
            id="outlined-number1"
            label="Кількість"
            value={amount1}
            onChange={handleAmountChange1}
          />
        </CurrencyBox>
        <Box sx={{display: 'flex', justifyContent: 'center'}}><CurrencyExchangeIcon/></Box>
        <CurrencyBox>
          <Box sx={{minWidth: 200}}>
            <FormControl fullWidth>
              <InputLabel id="currency-select-label2">Валюта</InputLabel>
              <Select
                labelId="currency-select-label2"
                id="currency-select2"
                value={currency2}
                label="Валюта"
                onChange={(e) => handleCurrencyChange(e, setCurrency2)}
              >
                {currencies.map((currency) => (
                  <MenuItem key={currency.label} value={currency.value}>{currency.label}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <TextField
            id="outlined-number2"
            label="Кількість"
            value={amount2}
            onChange={handleAmountChange2}
          />
        </CurrencyBox>
      </CurrencyPaper>
    </Container>
  )
}

export default MainView;