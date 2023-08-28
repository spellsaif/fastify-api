import { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";
import { getUserHandler } from "./user.controller";

const userPlugin: FastifyPluginAsyncTypebox = async (app) => {
    app.get('/', getUserHandler)
}

export default userPlugin;