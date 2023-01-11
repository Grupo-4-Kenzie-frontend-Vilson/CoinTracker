import { TextField } from "@mui/material";
import styled from "styled-components";
import * as muiStyles from "@mui/material/styles";
import { green } from "@mui/material/colors";

export const StyledTextField = muiStyles.styled(TextField)({
  borderRadius: "8px",
  background: "green",

  "& label.Mui-focused": {
    color: "var(--color-gray-100)", 
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "var(--color-gray-0)",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {},
    "&:hover fieldset": {
      borderColor: "var(--color-gray-20)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "black",
    },
  },
});
