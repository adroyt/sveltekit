import { sveltekit } from "@sveltejs/kit/vite";
import type { UserConfig } from "vite";
import Unocss from "unocss/vite";

const config: UserConfig = {
  plugins: [Unocss(), sveltekit()],
};

export default config;
