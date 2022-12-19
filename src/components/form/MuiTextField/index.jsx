import React from "react";
import PropTypes from "prop-types";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Controller } from "react-hook-form";

const MuiTextField = (props) => {
  const {
    children,
    label,
    inputValue,
    name,
    type,
    control,
    rows,
    multiline,
    rules,
    margin,
    isRequired,
    disabled,
    changehandler,
    placeholder,
  } = props;
  return control ? (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      render={({ field, fieldState: { error } }) => (
        <>
          <FormControl
            focused
            fullWidth
            required={isRequired || false}
            variant="outlined"
            margin={margin}
            error={error ? true : false}
          >
            <InputLabel htmlFor={`input-${name}`}>{label}</InputLabel>
            <OutlinedInput
              id={`input-${name}`}
              size="small"
              disabled={disabled}
              placeholder={placeholder || ""}
              type={type}
              value={inputValue ? inputValue : field.value}
              endAdornment={
                <InputAdornment position="end">{children}</InputAdornment>
              }
              label={label}
              rows={rows}
              multiline={multiline}
              onChange={(e) => {
                field.onChange(e);
                if (changehandler) {
                  changehandler(e.target.value);
                }
              }}
            />
          </FormControl>
        </>
      )}
      rules={rules}
    />
  ) : (
    <FormControl
      focused
      fullWidth
      required={isRequired}
      variant="outlined"
      margin={margin}
    >
      <InputLabel htmlFor={`input-${name}`}>{label}</InputLabel>
      <OutlinedInput
        id={`input-${name}`}
        size="small"
        disabled={disabled}
        type={type}
        endAdornment={
          <InputAdornment position="end">{children}</InputAdornment>
        }
        label={label}
        rows={rows}
        multiline={multiline}
        value={inputValue}
        onChange={(e) => changehandler(e.target.value)}
      />
    </FormControl>
  );
};

MuiTextField.propTypes = {
  isRequired: PropTypes.bool,
  disabled: PropTypes.bool,
  changehandler: PropTypes.func,
};

MuiTextField.defaultValue = {
  isRequired: false,
  disabled: false,
  changehandler: () => null,
};

export default MuiTextField;
