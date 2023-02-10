import * as _175 from "./applications/transfer/v1/genesis";
import * as _176 from "./applications/transfer/v1/query";
import * as _177 from "./applications/transfer/v1/transfer";
import * as _178 from "./applications/transfer/v1/tx";
import * as _179 from "./applications/transfer/v2/packet";
import * as _180 from "./core/channel/v1/channel";
import * as _181 from "./core/channel/v1/genesis";
import * as _182 from "./core/channel/v1/query";
import * as _183 from "./core/channel/v1/tx";
import * as _184 from "./core/client/v1/client";
import * as _185 from "./core/client/v1/genesis";
import * as _186 from "./core/client/v1/query";
import * as _187 from "./core/client/v1/tx";
import * as _188 from "./core/commitment/v1/commitment";
import * as _189 from "./core/connection/v1/connection";
import * as _190 from "./core/connection/v1/genesis";
import * as _191 from "./core/connection/v1/query";
import * as _192 from "./core/connection/v1/tx";
import * as _193 from "./core/port/v1/query";
import * as _194 from "./core/types/v1/genesis";
import * as _195 from "./lightclients/localhost/v1/localhost";
import * as _196 from "./lightclients/solomachine/v1/solomachine";
import * as _197 from "./lightclients/solomachine/v2/solomachine";
import * as _198 from "./lightclients/tendermint/v1/tendermint";
import * as _403 from "./applications/transfer/v1/tx.amino";
import * as _404 from "./core/channel/v1/tx.amino";
import * as _405 from "./core/client/v1/tx.amino";
import * as _406 from "./core/connection/v1/tx.amino";
import * as _407 from "./applications/transfer/v1/tx.registry";
import * as _408 from "./core/channel/v1/tx.registry";
import * as _409 from "./core/client/v1/tx.registry";
import * as _410 from "./core/connection/v1/tx.registry";
import * as _411 from "./applications/transfer/v1/query.lcd";
import * as _412 from "./core/channel/v1/query.lcd";
import * as _413 from "./core/client/v1/query.lcd";
import * as _414 from "./core/connection/v1/query.lcd";
import * as _415 from "./applications/transfer/v1/query.rpc.Query";
import * as _416 from "./core/channel/v1/query.rpc.Query";
import * as _417 from "./core/client/v1/query.rpc.Query";
import * as _418 from "./core/connection/v1/query.rpc.Query";
import * as _419 from "./core/port/v1/query.rpc.Query";
import * as _420 from "./applications/transfer/v1/tx.rpc.msg";
import * as _421 from "./core/channel/v1/tx.rpc.msg";
import * as _422 from "./core/client/v1/tx.rpc.msg";
import * as _423 from "./core/connection/v1/tx.rpc.msg";
import * as _501 from "./lcd";
import * as _502 from "./rpc.query";
import * as _503 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = { ..._175,
        ..._176,
        ..._177,
        ..._178,
        ..._403,
        ..._407,
        ..._411,
        ..._415,
        ..._420
      };
      export const v2 = { ..._179
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._180,
        ..._181,
        ..._182,
        ..._183,
        ..._404,
        ..._408,
        ..._412,
        ..._416,
        ..._421
      };
    }
    export namespace client {
      export const v1 = { ..._184,
        ..._185,
        ..._186,
        ..._187,
        ..._405,
        ..._409,
        ..._413,
        ..._417,
        ..._422
      };
    }
    export namespace commitment {
      export const v1 = { ..._188
      };
    }
    export namespace connection {
      export const v1 = { ..._189,
        ..._190,
        ..._191,
        ..._192,
        ..._406,
        ..._410,
        ..._414,
        ..._418,
        ..._423
      };
    }
    export namespace port {
      export const v1 = { ..._193,
        ..._419
      };
    }
    export namespace types {
      export const v1 = { ..._194
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._195
      };
    }
    export namespace solomachine {
      export const v1 = { ..._196
      };
      export const v2 = { ..._197
      };
    }
    export namespace tendermint {
      export const v1 = { ..._198
      };
    }
  }
  export const ClientFactory = { ..._501,
    ..._502,
    ..._503
  };
}