import * as _270 from "./claim/v1beta1/claim_record";
import * as _271 from "./claim/v1beta1/genesis";
import * as _272 from "./claim/v1beta1/params";
import * as _273 from "./claim/v1beta1/query";
import * as _274 from "./claim/v1beta1/tx";
import * as _490 from "./claim/v1beta1/tx.amino";
import * as _491 from "./claim/v1beta1/tx.registry";
import * as _492 from "./claim/v1beta1/query.lcd";
import * as _493 from "./claim/v1beta1/query.rpc.Query";
import * as _494 from "./claim/v1beta1/tx.rpc.msg";
import * as _512 from "./lcd";
import * as _513 from "./rpc.query";
import * as _514 from "./rpc.tx";
export namespace passage3d {
  export namespace claim {
    export const v1beta1 = { ..._270,
      ..._271,
      ..._272,
      ..._273,
      ..._274,
      ..._490,
      ..._491,
      ..._492,
      ..._493,
      ..._494
    };
  }
  export const ClientFactory = { ..._512,
    ..._513,
    ..._514
  };
}