import { createPolarCore } from "@polar-sh/sdk/2026-10";
import { env } from "@/env";

export const polarClient = createPolarCore({
  accessToken: env.POLAR_ACCESS_TOKEN,
  environment: env.POLAR_MODE,
});
