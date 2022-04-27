import { TextInput, Checkbox, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';

export default function Test() {
  const [firstQuery, setFirstQuery] = useState('');
  const [secondQuery, setSecondQuery] = useState('');
  const form = useForm({
    initialValues: {
      input1: '',
      input2: '',
    },

    validate: {
      input1: (value) => (/^[A-Za-z\s]+$/.test(value) ? null : 'Wprowadziłeś nieprawidłowe dane. Wymagane litery bądź spacje.'),
      input2: (value) => (/^[A-Za-z\s]+$/.test(value) ? null : 'Wprowadziłeś nieprawidłowe dane. Wymagane litery bądź spacje.'),
    },
  });
  

  return (
    
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit((function(values) { setFirstQuery(values.input1); setSecondQuery(values.input2);}))} >
        <TextInput
          required
          label="Pierwsze zapytanie"
          placeholder="poland"
          {...form.getInputProps('input1')}
        />

        <TextInput
          required
          label="Drugie zapytanie"
          placeholder="england"
          {...form.getInputProps('input2')}
        />

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
      <p> {firstQuery} </p>
      <p> {secondQuery} </p>
    </Box>
  );
}