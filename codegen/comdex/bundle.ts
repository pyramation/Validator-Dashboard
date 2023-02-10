import * as _54 from "./asset/v1beta1/asset";
import * as _55 from "./asset/v1beta1/events";
import * as _56 from "./asset/v1beta1/genesis";
import * as _57 from "./asset/v1beta1/gov";
import * as _58 from "./asset/v1beta1/msg";
import * as _59 from "./asset/v1beta1/pair";
import * as _60 from "./asset/v1beta1/params";
import * as _61 from "./asset/v1beta1/querier";
import * as _62 from "./oracle/v1beta1/genesis";
import * as _63 from "./oracle/v1beta1/gov";
import * as _64 from "./oracle/v1beta1/msg";
import * as _65 from "./oracle/v1beta1/oracle";
import * as _66 from "./oracle/v1beta1/params";
import * as _67 from "./oracle/v1beta1/querier";
import * as _68 from "./vault/v1beta1/events";
import * as _69 from "./vault/v1beta1/genesis";
import * as _70 from "./vault/v1beta1/msg";
import * as _71 from "./vault/v1beta1/querier";
import * as _72 from "./vault/v1beta1/vault";
export namespace comdex {
  export namespace asset {
    export const v1beta1 = { ..._54,
      ..._55,
      ..._56,
      ..._57,
      ..._58,
      ..._59,
      ..._60,
      ..._61
    };
  }
  export namespace oracle {
    export const v1beta1 = { ..._62,
      ..._63,
      ..._64,
      ..._65,
      ..._66,
      ..._67
    };
  }
  export namespace vault {
    export const v1beta1 = { ..._68,
      ..._69,
      ..._70,
      ..._71,
      ..._72
    };
  }
}