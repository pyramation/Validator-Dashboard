import * as _231 from "./mint/v1beta1/genesis";
import * as _232 from "./mint/v1beta1/mint";
import * as _233 from "./mint/v1beta1/query";
import * as _436 from "./mint/v1beta1/query.lcd";
import * as _437 from "./mint/v1beta1/query.rpc.Query";
import * as _452 from "./lcd";
import * as _453 from "./rpc.query";
export namespace stargaze {
  export namespace mint {
    export const v1beta1 = { ..._231,
      ..._232,
      ..._233,
      ..._436,
      ..._437
    };
  }
  export const ClientFactory = { ..._452,
    ..._453
  };
}