import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { InputGroup, InputLeftElement } from '@chakra-ui/react';
import { Field, useField } from "formik";
import { PhoneIcon } from '@chakra-ui/icons';

export default function PhoneNumberField({ label, text, ...props }) {
    const [field, meta] = useField(props);

    return (
        <FormControl isInvalid={meta.touched && meta.error}>
            <FormLabel>{label}</FormLabel>
            <InputGroup>
                <InputLeftElement>
                    <PhoneIcon />
                </InputLeftElement>
                <Input type="tel" placeholder="Phone number" {...field} {...props} autoComplete='off' />
            </InputGroup>
            <FormErrorMessage>{meta.error}</FormErrorMessage>
        </FormControl>
    );
}



