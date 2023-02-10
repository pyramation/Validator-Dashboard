import * as _206 from "./downtime-detector/v1beta1/downtime_duration";
import * as _207 from "./downtime-detector/v1beta1/genesis";
import * as _208 from "./downtime-detector/v1beta1/query";
import * as _209 from "./epochs/genesis";
import * as _210 from "./epochs/query";
import * as _211 from "./gamm/pool-models/balancer/balancerPool";
import * as _212 from "./gamm/v1beta1/genesis";
import * as _213 from "./gamm/v1beta1/query";
import * as _214 from "./gamm/v1beta1/tx";
import * as _215 from "./gamm/pool-models/balancer/tx/tx";
import * as _216 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _217 from "./gamm/pool-models/stableswap/tx";
import * as _218 from "./gamm/v2/query";
import * as _219 from "./ibc-rate-limit/v1beta1/params";
import * as _220 from "./ibc-rate-limit/v1beta1/query";
import * as _221 from "./incentives/gauge";
import * as _222 from "./incentives/genesis";
import * as _223 from "./incentives/params";
import * as _224 from "./incentives/query";
import * as _225 from "./incentives/tx";
import * as _226 from "./lockup/genesis";
import * as _227 from "./lockup/lock";
import * as _228 from "./lockup/params";
import * as _229 from "./lockup/query";
import * as _230 from "./lockup/tx";
import * as _231 from "./mint/v1beta1/genesis";
import * as _232 from "./mint/v1beta1/mint";
import * as _233 from "./mint/v1beta1/query";
import * as _234 from "./pool-incentives/v1beta1/genesis";
import * as _235 from "./pool-incentives/v1beta1/gov";
import * as _236 from "./pool-incentives/v1beta1/incentives";
import * as _237 from "./pool-incentives/v1beta1/query";
import * as _238 from "./protorev/v1beta1/genesis";
import * as _239 from "./protorev/v1beta1/gov";
import * as _240 from "./protorev/v1beta1/params";
import * as _241 from "./protorev/v1beta1/protorev";
import * as _242 from "./protorev/v1beta1/query";
import * as _243 from "./protorev/v1beta1/tx";
import * as _244 from "./sumtree/v1beta1/tree";
import * as _245 from "./superfluid/genesis";
import * as _246 from "./superfluid/params";
import * as _247 from "./superfluid/query";
import * as _248 from "./superfluid/superfluid";
import * as _249 from "./superfluid/tx";
import * as _250 from "./swaprouter/v1beta1/genesis";
import * as _251 from "./swaprouter/v1beta1/module_route";
import * as _252 from "./swaprouter/v1beta1/query";
import * as _253 from "./swaprouter/v1beta1/swap_route";
import * as _254 from "./swaprouter/v1beta1/tx";
import * as _255 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _256 from "./tokenfactory/v1beta1/genesis";
import * as _257 from "./tokenfactory/v1beta1/params";
import * as _258 from "./tokenfactory/v1beta1/query";
import * as _259 from "./tokenfactory/v1beta1/tx";
import * as _260 from "./twap/v1beta1/genesis";
import * as _261 from "./twap/v1beta1/query";
import * as _262 from "./twap/v1beta1/twap_record";
import * as _263 from "./txfees/v1beta1/feetoken";
import * as _264 from "./txfees/v1beta1/genesis";
import * as _265 from "./txfees/v1beta1/gov";
import * as _266 from "./txfees/v1beta1/query";
import * as _267 from "./valset-pref/v1beta1/query";
import * as _268 from "./valset-pref/v1beta1/state";
import * as _269 from "./valset-pref/v1beta1/tx";
import * as _428 from "./gamm/pool-models/balancer/tx/tx.amino";
import * as _429 from "./gamm/pool-models/stableswap/tx.amino";
import * as _430 from "./gamm/v1beta1/tx.amino";
import * as _431 from "./incentives/tx.amino";
import * as _432 from "./lockup/tx.amino";
import * as _433 from "./protorev/v1beta1/tx.amino";
import * as _434 from "./superfluid/tx.amino";
import * as _435 from "./swaprouter/v1beta1/tx.amino";
import * as _436 from "./tokenfactory/v1beta1/tx.amino";
import * as _437 from "./valset-pref/v1beta1/tx.amino";
import * as _438 from "./gamm/pool-models/balancer/tx/tx.registry";
import * as _439 from "./gamm/pool-models/stableswap/tx.registry";
import * as _440 from "./gamm/v1beta1/tx.registry";
import * as _441 from "./incentives/tx.registry";
import * as _442 from "./lockup/tx.registry";
import * as _443 from "./protorev/v1beta1/tx.registry";
import * as _444 from "./superfluid/tx.registry";
import * as _445 from "./swaprouter/v1beta1/tx.registry";
import * as _446 from "./tokenfactory/v1beta1/tx.registry";
import * as _447 from "./valset-pref/v1beta1/tx.registry";
import * as _448 from "./downtime-detector/v1beta1/query.lcd";
import * as _449 from "./epochs/query.lcd";
import * as _450 from "./gamm/v1beta1/query.lcd";
import * as _451 from "./gamm/v2/query.lcd";
import * as _452 from "./ibc-rate-limit/v1beta1/query.lcd";
import * as _453 from "./incentives/query.lcd";
import * as _454 from "./lockup/query.lcd";
import * as _455 from "./mint/v1beta1/query.lcd";
import * as _456 from "./pool-incentives/v1beta1/query.lcd";
import * as _457 from "./protorev/v1beta1/query.lcd";
import * as _458 from "./superfluid/query.lcd";
import * as _459 from "./swaprouter/v1beta1/query.lcd";
import * as _460 from "./tokenfactory/v1beta1/query.lcd";
import * as _461 from "./twap/v1beta1/query.lcd";
import * as _462 from "./txfees/v1beta1/query.lcd";
import * as _463 from "./valset-pref/v1beta1/query.lcd";
import * as _464 from "./downtime-detector/v1beta1/query.rpc.Query";
import * as _465 from "./epochs/query.rpc.Query";
import * as _466 from "./gamm/v1beta1/query.rpc.Query";
import * as _467 from "./gamm/v2/query.rpc.Query";
import * as _468 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _469 from "./incentives/query.rpc.Query";
import * as _470 from "./lockup/query.rpc.Query";
import * as _471 from "./mint/v1beta1/query.rpc.Query";
import * as _472 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _473 from "./protorev/v1beta1/query.rpc.Query";
import * as _474 from "./superfluid/query.rpc.Query";
import * as _475 from "./swaprouter/v1beta1/query.rpc.Query";
import * as _476 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _477 from "./twap/v1beta1/query.rpc.Query";
import * as _478 from "./txfees/v1beta1/query.rpc.Query";
import * as _479 from "./valset-pref/v1beta1/query.rpc.Query";
import * as _480 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _481 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _482 from "./gamm/v1beta1/tx.rpc.msg";
import * as _483 from "./incentives/tx.rpc.msg";
import * as _484 from "./lockup/tx.rpc.msg";
import * as _485 from "./protorev/v1beta1/tx.rpc.msg";
import * as _486 from "./superfluid/tx.rpc.msg";
import * as _487 from "./swaprouter/v1beta1/tx.rpc.msg";
import * as _488 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _489 from "./valset-pref/v1beta1/tx.rpc.msg";
import * as _509 from "./lcd";
import * as _510 from "./rpc.query";
import * as _511 from "./rpc.tx";
export namespace osmosis {
  export namespace downtimedetector {
    export const v1beta1 = { ..._206,
      ..._207,
      ..._208,
      ..._448,
      ..._464
    };
  }
  export namespace epochs {
    export const v1beta1 = { ..._209,
      ..._210,
      ..._449,
      ..._465
    };
  }
  export namespace gamm {
    export const v1beta1 = { ..._211,
      ..._212,
      ..._213,
      ..._214,
      ..._430,
      ..._440,
      ..._450,
      ..._466,
      ..._482
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = { ..._215,
          ..._428,
          ..._438,
          ..._480
        };
      }
      export namespace stableswap {
        export const v1beta1 = { ..._216,
          ..._217,
          ..._429,
          ..._439,
          ..._481
        };
      }
    }
    export const v2 = { ..._218,
      ..._451,
      ..._467
    };
  }
  export namespace ibcratelimit {
    export const v1beta1 = { ..._219,
      ..._220,
      ..._452,
      ..._468
    };
  }
  export const incentives = { ..._221,
    ..._222,
    ..._223,
    ..._224,
    ..._225,
    ..._431,
    ..._441,
    ..._453,
    ..._469,
    ..._483
  };
  export const lockup = { ..._226,
    ..._227,
    ..._228,
    ..._229,
    ..._230,
    ..._432,
    ..._442,
    ..._454,
    ..._470,
    ..._484
  };
  export namespace mint {
    export const v1beta1 = { ..._231,
      ..._232,
      ..._233,
      ..._455,
      ..._471
    };
  }
  export namespace poolincentives {
    export const v1beta1 = { ..._234,
      ..._235,
      ..._236,
      ..._237,
      ..._456,
      ..._472
    };
  }
  export namespace protorev {
    export const v1beta1 = { ..._238,
      ..._239,
      ..._240,
      ..._241,
      ..._242,
      ..._243,
      ..._433,
      ..._443,
      ..._457,
      ..._473,
      ..._485
    };
  }
  export namespace store {
    export const v1beta1 = { ..._244
    };
  }
  export const superfluid = { ..._245,
    ..._246,
    ..._247,
    ..._248,
    ..._249,
    ..._434,
    ..._444,
    ..._458,
    ..._474,
    ..._486
  };
  export namespace swaprouter {
    export const v1beta1 = { ..._250,
      ..._251,
      ..._252,
      ..._253,
      ..._254,
      ..._435,
      ..._445,
      ..._459,
      ..._475,
      ..._487
    };
  }
  export namespace tokenfactory {
    export const v1beta1 = { ..._255,
      ..._256,
      ..._257,
      ..._258,
      ..._259,
      ..._436,
      ..._446,
      ..._460,
      ..._476,
      ..._488
    };
  }
  export namespace twap {
    export const v1beta1 = { ..._260,
      ..._261,
      ..._262,
      ..._461,
      ..._477
    };
  }
  export namespace txfees {
    export const v1beta1 = { ..._263,
      ..._264,
      ..._265,
      ..._266,
      ..._462,
      ..._478
    };
  }
  export namespace valsetpref {
    export const v1beta1 = { ..._267,
      ..._268,
      ..._269,
      ..._437,
      ..._447,
      ..._463,
      ..._479,
      ..._489
    };
  }
  export const ClientFactory = { ..._509,
    ..._510,
    ..._511
  };
}