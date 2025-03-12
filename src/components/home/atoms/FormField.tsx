import { TextField } from "@mui/material";

interface FormFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
  multiline?: boolean;
  rows?: number;
  error?: boolean;
  helperText?: string;
  placeholder?: string;
}

const FormField = ({
  label,
  name,
  value,
  onChange,
  required = false,
  multiline = false,
  rows = 1,
  error = false,
  helperText = '',
  placeholder = '',
  ...props
}: FormFieldProps) => {
  return (
    <TextField
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      variant="outlined"
      fullWidth
      required={required}
      multiline={multiline}
      rows={rows}
      error={error}
      placeholder={placeholder}
      helperText={helperText}
      sx={{
        "& .MuiOutlinedInput-root": {
          backgroundColor: "#121212",
          color: "white",
          "& fieldset": {
            borderColor: error ? "#d32f2f" : "transparent",
          },
          "&:hover fieldset": {
            borderColor: error ? "#d32f2f" : "#3c5a1e",
          },
          "&.Mui-focused fieldset": {
            borderColor: error ? "#d32f2f" : "#3c5a1e",
          },
        },
        "& .MuiInputLabel-root": {
          color: "white",
          "&.Mui-focused": {
            color: "white",
          },
        },
      }}
      {...props}
    />
  );
};

export default FormField;
