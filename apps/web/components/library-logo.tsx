import type { SVGProps, ComponentType } from "react";
import { Package } from "lucide-react";
import { Angular } from "@/components/ui/svgs/angular";
import { AstroIconDark } from "@/components/ui/svgs/astroIconDark";
import { Authjs } from "@/components/ui/svgs/authjs";
import { Bun } from "@/components/ui/svgs/bun";
import { ChakraUi } from "@/components/ui/svgs/chakraUi";
import { DenoDark } from "@/components/ui/svgs/denoDark";
import { Docker } from "@/components/ui/svgs/docker";
import { DrizzleOrmDark } from "@/components/ui/svgs/drizzleOrmDark";
import { EffectDark } from "@/components/ui/svgs/effectDark";
import { SanityDark } from "@/components/ui/svgs/sanityDark";
import { Unjs } from "@/components/ui/svgs/unjs";
import { Vite } from "@/components/ui/svgs/vite";
import { Vitest } from "@/components/ui/svgs/vitest";
import { Elysiajs } from "@/components/ui/svgs/elysiajs";
import { Expo } from "@/components/ui/svgs/expo";
import { ExpressjsDark } from "@/components/ui/svgs/expressjsDark";
import { FastifyDark } from "@/components/ui/svgs/fastifyDark";
import { Hono } from "@/components/ui/svgs/hono";
import { Jest } from "@/components/ui/svgs/jest";
import { Mantine } from "@/components/ui/svgs/mantine";
import { Materialui } from "@/components/ui/svgs/materialui";
import { MongodbIconDark } from "@/components/ui/svgs/mongodbIconDark";
import { Nestjs } from "@/components/ui/svgs/nestjs";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Nuxt } from "@/components/ui/svgs/nuxt";
import { NxDark } from "@/components/ui/svgs/nxDark";
import { OpenaiDark } from "@/components/ui/svgs/openaiDark";
import { PayloadDark } from "@/components/ui/svgs/payloadDark";
import { Pinia } from "@/components/ui/svgs/pinia";
import { Playwright } from "@/components/ui/svgs/playwright";
import { PrismaDark } from "@/components/ui/svgs/prismaDark";
import { Qwik } from "@/components/ui/svgs/qwik";
import { RadixUiDark } from "@/components/ui/svgs/radixUiDark";
import { ReactDark } from "@/components/ui/svgs/reactDark";
import { Reactrouter } from "@/components/ui/svgs/reactrouter";
import { Redux } from "@/components/ui/svgs/redux";
import { ResendIconWhite } from "@/components/ui/svgs/resendIconWhite";
import { ShadcnUiDark } from "@/components/ui/svgs/shadcnUiDark";
import { SocketioIconDark } from "@/components/ui/svgs/socketioIconDark";
import { Solidjs } from "@/components/ui/svgs/solidjs";
import { Strapi } from "@/components/ui/svgs/strapi";
import { Stripe } from "@/components/ui/svgs/stripe";
import { Supabase } from "@/components/ui/svgs/supabase";
import { Svelte } from "@/components/ui/svgs/svelte";
import { Tailwindcss } from "@/components/ui/svgs/tailwindcss";
import { Tanstack } from "@/components/ui/svgs/tanstack";
import { Terraform } from "@/components/ui/svgs/terraform";
import { Trpc } from "@/components/ui/svgs/trpc";
import { Valibot } from "@/components/ui/svgs/valibot";
import { VercelDark } from "@/components/ui/svgs/vercelDark";
import { Vue } from "@/components/ui/svgs/vue";
import { Zod } from "@/components/ui/svgs/zod";

type SvgComponent = ComponentType<SVGProps<SVGSVGElement>>;

const LOGO_MAP: Record<string, SvgComponent> = {
  "ai-sdk": VercelDark,
  angular: Angular,
  astro: AstroIconDark,
  authjs: Authjs,
  bun: Bun,
  "chakra-ui": ChakraUi,
  deno: DenoDark,
  docker: Docker,
  drizzle: DrizzleOrmDark,
  effect: EffectDark,
  elysia: Elysiajs,
  expo: Expo,
  express: ExpressjsDark,
  fastify: FastifyDark,
  hono: Hono,
  jest: Jest,
  mantine: Mantine,
  mongoose: MongodbIconDark,
  mui: Materialui,
  nestjs: Nestjs,
  nextjs: NextjsIconDark,
  nitro: Unjs,
  nuxt: Nuxt,
  nx: NxDark,
  openai: OpenaiDark,
  payload: PayloadDark,
  pinia: Pinia,
  playwright: Playwright,
  prisma: PrismaDark,
  qwik: Qwik,
  "radix-ui": RadixUiDark,
  react: ReactDark,
  "react-native": ReactDark,
  "react-router": Reactrouter,
  "redux-toolkit": Redux,
  resend: ResendIconWhite,
  sanity: SanityDark,
  "shadcn-ui": ShadcnUiDark,
  socketio: SocketioIconDark,
  solidjs: Solidjs,
  strapi: Strapi,
  stripe: Stripe,
  supabase: Supabase,
  svelte: Svelte,
  tailwindcss: Tailwindcss,
  tanstack: Tanstack,
  terraform: Terraform,
  trpc: Trpc,
  valibot: Valibot,
  vercel: VercelDark,
  vite: Vite,
  vitest: Vitest,
  vue: Vue,
  zod: Zod,
};

export function LibraryLogo({
  id,
  size = 24,
}: {
  id: string;
  size?: number;
}) {
  const Logo = LOGO_MAP[id];
  const padding = Math.round(size * 0.25);

  return (
    <div
      className="flex shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5"
      style={{ width: size, height: size, padding }}
    >
      {Logo ? (
        <Logo className="h-full w-full" />
      ) : (
        <Package className="h-full w-full text-muted-foreground" />
      )}
    </div>
  );
}
