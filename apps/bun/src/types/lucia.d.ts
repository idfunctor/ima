/// <reference types="lucia" />
declare namespace Lucia {
  type Auth = import("../auth/index").Auth
  interface DatabaseUserAttributes {
    handle: string
  }
  interface DatabaseSessionAttributes {}
}
