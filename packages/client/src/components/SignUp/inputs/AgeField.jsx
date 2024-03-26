import { useState } from 'react';
import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Link, NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper, } from '@chakra-ui/react';
import {
    InputGroup,
    useColorMode
  } from '@chakra-ui/core';
import { Field, useField } from "formik";
import { useNavigate } from "react-router-dom";

const AgeField = ({ label, ...props }) => {
  const [field, setField] = useState('');
  const [meta] = useField(props);

  const handleChange = (event) => {
    setField(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <InputGroup>
      <NumberInput>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
         </NumberInputStepper>
     </NumberInput>
      
      </InputGroup>
      
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default AgeField;
