import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FormController from '../components/FormController';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const validationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  phone: yup.string().min(10, 'Phone must be at least 8 characters').required('Phone is required'),
  description: yup.string().required('Description is required'),
  gender: yup.string().required('Gender is required')
});



const Form = () => {
  const [next, setNext] = useState(1)
  const { handleSubmit, control, reset } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const fetchInitialData = async () => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${next}`);
    return data;
  };
  const { isLoading } = useQuery({
    queryKey: ['sampleForm'],
    queryFn: fetchInitialData,
    onSuccess: (data) => {
      console.log("data", data)
      reset({
        name: data.name,
        description: data.company.catchPhrase,
        phone: data.phone,
      });
    },
  });
  useEffect(() => {
    const getData = async () => {
      const initialData = await fetchInitialData();
      reset({
        name: initialData.username,
        description: initialData.company.catchPhrase,
        phone: initialData.phone,
        // Set more fields if needed
      });
    };

    getData();
  }, [reset, next]);

  const onSubmit = (data) => {
    console.log(data);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormController
          controlType="input"
          name="name"
          control={control}
          placeholder="Username"
        />
        <FormController
          controlType="input"
          name="phone"
          control={control}
          placeholder="Phone"
        />
        <FormController
          controlType="textarea"
          name="description"
          control={control}
          placeholder="Description"
        />
        <FormController
          controlType="select"
          name="gender"
          control={control}
          options={[
            { value: '', label: 'Select Gender' },
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' },
          ]}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
      <div>
        <button
          onClick={() => setNext(p => p + 1)}
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Form;
