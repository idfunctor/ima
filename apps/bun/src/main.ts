/* eslint-disable @typescript-eslint/no-unused-vars */
import { staticPlugin } from "@elysiajs/static"
// import { swagger } from "@elysiajs/swagger";
import { Elysia } from "elysia"
import { config } from "./config"
// import { ctx } from "./context";
import { api } from "./controllers/*"
import { pages } from "./pages/*"

const app = new Elysia()
  // .use(swagger())
  // @ts-expect-error idc
  .use(staticPlugin({ prefix: "/public" }))
  .use(api)
  .use(pages)
  .get("app*", async (ctx) => {
    let path = ctx.path.split("/").slice(2).join("/")
    const isPathWithExtension = path.split(".").length > 1
    path = path.endsWith("/") ? path : !isPathWithExtension ? `${path}/` : path

    const astroassetpath = "../web/dist"
    const publicPath = isPathWithExtension
      ? `${astroassetpath}/${path}`
      : `${astroassetpath}/${path}/index.html`
    const file = Bun.file(publicPath)
    console.log(path, "++++", publicPath)

    if (await file.exists()) return file
    throw new Error("404")
  })
  .onStart(({ log }) => {
    if (config.env.NODE_ENV === "development") {
      void fetch("http://localhost:3001/restart")
      // log.debug("🦊 Triggering Live Reload");
      console.log("🦊 Triggering Live Reload")
    }
  })
  .onError(({ code, error, request, log }) => {
    // log.error(` ${request.method} ${request.url}`, code, error);
    console.error(error)
  })
  .listen(3000)

export type App = typeof app

console.log(
  `app is listening on http://${app.server?.hostname}:${app.server?.port}`,
)
