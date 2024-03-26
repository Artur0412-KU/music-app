import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/form-control";
import { Select } from "@chakra-ui/select";
import { useField } from "formik";

export default function SelectGenderInput({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <FormControl isInvalid={meta.touched && meta.error}>
      <FormLabel>{label}</FormLabel>
      <Select {...field} {...props}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </Select>
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
}

