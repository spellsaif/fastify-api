import autoload from '@fastify/autoload';
import Fastify from 'fastify';
import Swagger from '@fastify/swagger';
import SwaggerUI from '@fastify/swagger-ui';

const createServer = () => {
    const app = Fastify({
        logger: {
            transport: {
                target: 'pino-pretty',

            },

        }
    });

    app.register(Swagger);
    app.register(SwaggerUI);

    app.register(autoload, {
        dir: `${__dirname}/../plugins`
    });


    return app;
}

export default createServer;