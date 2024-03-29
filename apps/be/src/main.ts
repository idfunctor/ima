/* eslint-disable @typescript-eslint/no-unused-vars */
import { staticPlugin } from "@elysiajs/static"
// import { swagger } from "@elysiajs/swagger";
import { Elysia } from "elysia"
import { config } from "./config"
// import { ctx } from "./context";
import { api } from "./controllers/*"
import { pages } from "./pages/*"

//@ts-ignore
const app =
  new Elysia({
    prefix: '/e',
  })
    .use(
      //@ts-expect-error
      staticPlugin({})
    )
    // .use(swagger())
    .use(api)
    .use(pages)
    .onStart(() => {
      if (config.env.NODE_ENV === "development") {
        void fetch("http://localhost:3001/restart")
        // log.debug("🦊 Triggering Live Reload");
        console.log("🦊 Triggering Live Reload")
      }
    })
    .onError(({ code, error, request }) => {
      // log.error(` ${request.method} ${request.url}`, code, error);
      console.error(error)
    })
    .listen(3000)

export type App = typeof app
export type TElysiaApp = typeof app

console.log(
  `app is listening on http://${app.server?.hostname}:${app.server?.port}`,
)
