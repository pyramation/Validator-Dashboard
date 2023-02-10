import * as _202 from "./alloc/v1beta1/genesis";
import * as _203 from "./alloc/v1beta1/params";
import * as _204 from "./alloc/v1beta1/query";
import * as _205 from "./alloc/v1beta1/tx";
import * as _426 from "./alloc/v1beta1/query.lcd";
import * as _427 from "./alloc/v1beta1/query.rpc.Query";
import * as _506 from "./lcd";
import * as _507 from "./rpc.query";
import * as _508 from "./rpc.tx";
export namespace omniflix {
  export namespace alloc {
    export const v1beta1 = { ..._202,
      ..._203,
      ..._204,
      ..._205,
      ..._426,
      ..._427
    };
  }
  export const ClientFactory = { ..._506,
    ..._507,
    ..._508
  };
}