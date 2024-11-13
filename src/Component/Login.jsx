import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="USERNAME"
        {...register('username', { required: true, maxLength: 20 })}
      />
      <br />
      <input
        placeholder="PASSWORD"
        {...register('password', { pattern: /^[A-Za-z]+$/i })}
      />
      <br />

      <input type="submit" />
    </form>
  );
}
