import * as _234 from "./abci/types";
import * as _235 from "./crypto/keys";
import * as _236 from "./crypto/proof";
import * as _237 from "./libs/bits/types";
import * as _238 from "./p2p/types";
import * as _239 from "./types/block";
import * as _240 from "./types/evidence";
import * as _241 from "./types/params";
import * as _242 from "./types/types";
import * as _243 from "./types/validator";
import * as _244 from "./version/types";
export namespace tendermint {
  export const abci = { ..._234
  };
  export const crypto = { ..._235,
    ..._236
  };
  export namespace libs {
    export const bits = { ..._237
    };
  }
  export const p2p = { ..._238
  };
  export const types = { ..._239,
    ..._240,
    ..._241,
    ..._242,
    ..._243
  };
  export const version = { ..._244
  };
}