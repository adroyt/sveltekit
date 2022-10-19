import { defineConfig, extractorSvelte, presetIcons, presetUno } from "unocss";

export default defineConfig({
  extractors: [extractorSvelte],
  // include: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors: {
      "c-gray": "hsl(0,0%,20%)", // custom gray
    },
  },
  rules: [["custom-rule", { color: "red" }]],
  shortcuts: {
    cs: "text-lg text-orange hover:text-teal", // custom short-cut
    // bk: "cs", // power!!!!
  },
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      cdn: "https://esm.sh/",
    }),
  ],
});
