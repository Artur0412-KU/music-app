import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/form-control";
import { Select } from "@chakra-ui/select";
import { useField } from "formik";
import { useEffect, useState } from "react";

export default function SelectCountryInput({ label, ...props }) {
  const [field, meta] = useField(props);
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

  return (
    <FormControl isInvalid={meta.touched && meta.error}>
      <FormLabel>{label}</FormLabel>
      <Select {...field} {...props}>
        <option value="">Select a country</option>
        {countries.map(country => (
          <option key={country} value={country}>{country}</option>
        ))}
      </Select>
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
}

