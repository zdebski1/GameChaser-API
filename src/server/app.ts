import Fastify from "fastify";
import Ajv from "ajv";
import addFormats from "ajv-formats";
import ajvErrors from "ajv-errors";

import { userRoutes } from "../user/route";
import { authRoutes } from "../authenticate/route";
import { preferencesRoutes } from "../preference/route";
import { verificationRoutes } from "../verification/route";
import { teamRoutes } from "../team/route";
import { leagueRoutes } from "../league/route";
import { stadiumRoutes } from "../stadium/route";

import cors from "@fastify/cors";
import fastifyJwt from '@fastify/jwt';


const fastify = Fastify({ logger: true });

fastify.register(cors, {
  origin: true,
});

fastify.setValidatorCompiler(({ schema }) => {
  const ajv = new Ajv({ allErrors: true });
  addFormats(ajv);
  ajvErrors(ajv);
  return ajv.compile(schema);
});

fastify.register(fastifyJwt, {
  secret: process.env.JWT_SECRET!
});


fastify.register(userRoutes);
fastify.register(authRoutes);
fastify.register(preferencesRoutes);
fastify.register(verificationRoutes);
fastify.register(teamRoutes);
fastify.register(leagueRoutes);
fastify.register(stadiumRoutes);

export default fastify;
