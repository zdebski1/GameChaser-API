import Fastify from "fastify";
import Ajv from "ajv";
import addFormats from "ajv-formats";
import ajvErrors from "ajv-errors";

import { userRoutes } from "../user/route";

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

export default fastify;
