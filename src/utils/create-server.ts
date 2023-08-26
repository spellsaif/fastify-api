import AutoLoad from '@fastify/autoload';
import Fastify from 'fastify';
import Swagger from '@fastify/swagger';
import SwaggerUI from '@fastify/swagger-ui';

const createServer = () => {
    const app = Fastify({
        logger: {
            transport: {
                target: 'pino-pretty'
            }
        }
    });

    app.register(Swagger);
    app.register(SwaggerUI);

    app.register(AutoLoad, {
        dir: `${__dirname}/../routes`
    });


    return app;
}

export default createServer;