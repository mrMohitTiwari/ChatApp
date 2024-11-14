import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="m-auto mt-[70px] flex h-[350px] w-[350px] flex-col gap-y-1 border-4 p-10 shadow-xl shadow-zinc-300"
    >
      <h2 className="mb-2 text-center font-mono text-2xl font-bold">
        Login Form
      </h2>
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
