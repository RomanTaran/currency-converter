import {Box, Paper} from "@mui/material";
import styled from "@emotion/styled";

export const MainPaper = styled(Paper)(() => ({
  marginTop: "30px",
  width: "650px",
  paddingBottom: "20px",
  marginLeft: "auto",
  marginRight: "auto",
  borderRadius: "20px",
  backgroundColor: "#d3cfcf"
}));

export const CurrencyPaper = styled(Paper)(() => ({
  marginTop: "10px",
  width: "500px",
  marginLeft: "auto",
  marginRight: "auto",
  borderRadius: "20px",
  backgroundColor: "#f6f6f6"
}));

export const CurrencyBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  padding: "20px"
}))
