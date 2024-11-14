import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="shadow-l bg- m-auto mt-[100px] flex h-[350px] w-[350px] flex-col gap-y-1 rounded-sm border-4 bg-slate-200 p-7 shadow-zinc-500"
    >
      <h2 className="font- mb-7 text-center font-mono text-2xl">Login</h2>
      <input
        className=""
        placeholder="USERNAME"
        {...register('username', { required: true, maxLength: 20 })}
      />
      <br />
      <input
        placeholder="PASSWORD"
        {...register('password', { pattern: /^[A-Za-z]+$/i })}
      />
      <br />

      <input
        className="font-color-white ml-20 w-[80px] border-none border-slate-800 bg-slate-600 p-0.5 font-bold text-slate-50"
        type="submit"
      />
    </form>
  );
}
