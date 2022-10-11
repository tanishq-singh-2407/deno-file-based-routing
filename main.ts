import { Application, Router } from "oak";
import manifest, { ROUTES } from "./routes.ts";

const app = new Application();
const router = new Router();

Object.keys(manifest.routes).map((name) =>
	router.all(name, manifest.routes[name as keyof ROUTES])
);

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
