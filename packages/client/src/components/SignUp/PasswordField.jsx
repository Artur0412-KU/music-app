import { useState } from 'react';
import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Link } from '@chakra-ui/react';
import {
    InputGroup,
    useColorMode
  } from '@chakra-ui/core';
import { Field, useField } from "formik";

export default function PasswordField({ label, ...props }) {
    const [field, meta] = useField(props);
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <FormControl isInvalid={meta.touched && meta.error}>
            <FormLabel>{label}</FormLabel>
            <InputGroup>
                <Input
                    {...field}
                    {...props}
                    type={showPassword ? "text" : "password"}
                    autoComplete="off"
                />
                <Button size="sm" onClick={handleTogglePasswordVisibility}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
            </InputGroup>
            <FormErrorMessage>{meta.error}</FormErrorMessage>
            <Link onClick={() => navigate('/forgot-password')}>Forgot your password?</Link>
        </FormControl>
    );
}