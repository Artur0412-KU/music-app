import React, { useState, useEffect } from 'react';
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Select,
    Button,
    IconButton,
    InputRightElement,
    InputGroup,
    Image
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Upload } from 'antd';
import axios from 'axios';

export default function EditForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        surName: '',
        gender: '',
        age: '',
        phoneNumber: '',
        email: '',
        country: '',
        password: '',
    });
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
              const response = await fetch("https://restcountries.com/v3.1/all");
              if (!response.ok) {
                throw new Error("Failed to fetch countries");
              }
              const data = await response.json();
              const sortedCountries = data.map(country => country.name.common).sort(); // Сортування країн за алфавітом
              setCountries(sortedCountries);
            } catch (error) {
              console.error(error);
            } finally {
              setLoading(false);
            }
          };
      
          fetchCountries();
    }, []);
    

    if (loading) {
        return <div>Loading countries...</div>;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <Box maxW="400px" mx="auto" mt="4">
            <form onSubmit={handleSubmit}>
                <FormControl mb="4">
                    <FormLabel>Username</FormLabel>
                    <Input name="fullName" value={formData.fullName} onChange={handleChange} />
                </FormControl>
                <FormControl mb="4">
                    <FormLabel>Surname</FormLabel>
                    <Input name="surName" value={formData.surName} onChange={handleChange} />
                </FormControl>
                <FormControl mb="4">
                    <FormLabel>Gender</FormLabel>
                    <Select name="gender" value={formData.gender} onChange={handleChange}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </Select>
                </FormControl>
                <FormControl mb="4">
                    <FormLabel>Age</FormLabel>
                    <Input type="number" name="age" value={formData.age} onChange={handleChange} />
                </FormControl>
                <FormControl mb="4">
                    <FormLabel>Phone number</FormLabel>
                    <Input name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                </FormControl>
                <FormControl mb="4">
                    <FormLabel>Email</FormLabel>
                    <Input type="email" name="email" value={formData.email} onChange={handleChange} />
                </FormControl>
                <FormControl mb="4">
                    <FormLabel>Country</FormLabel>
                    <Select name="country" value={formData.country} onChange={handleChange}>
                    {countries.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                    </Select>
                </FormControl>
                <FormControl mb="4">
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                        <Input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <InputRightElement width="4.5rem">
                            <IconButton
                                h="1.75rem"
                                size="sm"
                                onClick={() => setShowPassword(!showPassword)}
                                aria-label={showPassword ? 'Hide password' : 'Show password'}
                                icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                            />
                        </InputRightElement>
                    </InputGroup>
                </FormControl>
                <Button type="submit" colorScheme="blue">Save</Button>
                <FormControl mb="4">
                    <FormLabel>Profile photo</FormLabel>
                    <Upload>
                        <Button>Upload</Button>
                    </Upload>
                </FormControl>
            </form>
        </Box>
    );
}
