import createServer from "./utils/create-server";

async function main() {

    const app = createServer();

    await app.listen({ port: 3001, host: '0.0.0.0' }, (err, address) => {
        if (err) {
            app.log.error(err)
        }
    });

    ['SIGINT', 'SIGTERM'].forEach(signal => {
        process.on(signal, async () => {
            await app.close();
            process.exit(0);
        })
    })

}



main();