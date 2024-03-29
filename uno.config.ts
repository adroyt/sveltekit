import extractorSvelte from "@unocss/extractor-svelte";
import {
	defineConfig,
	presetIcons,
	presetUno,
	transformerDirectives,
	transformerVariantGroup,
} from "unocss";
import { myPreset } from "./my-preset";

// https://unocss.dev
export default defineConfig({
	configDeps: ["./my-preset.ts"],
	extractors: [extractorSvelte()],
	theme: {},
	rules: [],
	shortcuts: [],
	variants: [],

	preflights: [
		{
			getCSS: () => `
      :root {
        -webkit-tap-highlight-color: transparent;        
      }

      html,
      body {
        overflow-x: hidden;
        height: 100%;
      }
      `,
		},
	],

	presets: [myPreset, presetUno(), presetIcons({ scale: 1.2, cdn: "https://esm.sh/" })],
	transformers: [transformerDirectives(), transformerVariantGroup()],
});
