// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // ✅ Ensures Tailwind works in React files
  theme: {
    extend: {},
  },
  safelist: [
    'w-1/3',
    'bg-blue-500', 'bg-gray','border', 'border-yellow', 'text-white', 'border-red-500', 'text-black', 'font-extrabold', 'font-semibold','font-bold', 'text-yellow'],
  plugins: [],
};
