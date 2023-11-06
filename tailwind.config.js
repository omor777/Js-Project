/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        amatic: ["Amatic SC", "sans-serif"],
      },
      backgroundImage: {
        ["p1-img"]: "url('https://source.unsplash.com/gYl-UtwNg_I/1500x1500')",

        ["p2-img"]: "url('https://source.unsplash.com/rFKUFzjPYiQ/1500x1500')",

        ["p3-img"]:
          "url('https://images.unsplash.com/photo-1580136051290-9efc31643f27?auto=format&fit=crop&q=80&w=1065&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",

        ["p4-img"]: "url('https://source.unsplash.com/ITjiVXcwVng/1500x1500')",

        ["p5-img"]: "url('https://source.unsplash.com/3MNzGlQM7qs/1500x1500')",
      },
    },
  },
  plugins: [],
};
