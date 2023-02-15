import * as _222 from "../stargaze/alloc/v1beta1/genesis";
import * as _223 from "../stargaze/alloc/v1beta1/params";
import * as _224 from "../stargaze/alloc/v1beta1/query";
import * as _225 from "../stargaze/alloc/v1beta1/tx";
import * as _226 from "../stargaze/claim/v1beta1/claim_record";
import * as _227 from "../stargaze/claim/v1beta1/genesis";
import * as _228 from "../stargaze/claim/v1beta1/params";
import * as _229 from "../stargaze/claim/v1beta1/query";
import * as _230 from "../stargaze/claim/v1beta1/tx";
import * as _426 from "../stargaze/alloc/v1beta1/tx.amino";
import * as _427 from "../stargaze/claim/v1beta1/tx.amino";
import * as _428 from "../stargaze/alloc/v1beta1/tx.registry";
import * as _429 from "../stargaze/claim/v1beta1/tx.registry";
import * as _430 from "../stargaze/alloc/v1beta1/query.lcd";
import * as _431 from "../stargaze/claim/v1beta1/query.lcd";
import * as _432 from "../stargaze/alloc/v1beta1/query.rpc.Query";
import * as _433 from "../stargaze/claim/v1beta1/query.rpc.Query";
import * as _434 from "../stargaze/alloc/v1beta1/tx.rpc.msg";
import * as _435 from "../stargaze/claim/v1beta1/tx.rpc.msg";
import * as _449 from "./lcd";
import * as _450 from "./rpc.query";
import * as _451 from "./rpc.tx";
export namespace publicawesome {
  export namespace stargaze {
    export namespace alloc {
      export const v1beta1 = { ..._222,
        ..._223,
        ..._224,
        ..._225,
        ..._426,
        ..._428,
        ..._430,
        ..._432,
        ..._434
      };
    }
    export namespace claim {
      export const v1beta1 = { ..._226,
        ..._227,
        ..._228,
        ..._229,
        ..._230,
        ..._427,
        ..._429,
        ..._431,
        ..._433,
        ..._435
      };
    }
  }
  export const ClientFactory = { ..._449,
    ..._450,
    ..._451
  };
}