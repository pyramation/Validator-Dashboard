import * as _158 from "./downtime-detector/v1beta1/downtime_duration";
import * as _159 from "./downtime-detector/v1beta1/genesis";
import * as _160 from "./downtime-detector/v1beta1/query";
import * as _161 from "./epochs/genesis";
import * as _162 from "./epochs/query";
import * as _163 from "./gamm/pool-models/balancer/balancerPool";
import * as _164 from "./gamm/v1beta1/genesis";
import * as _165 from "./gamm/v1beta1/query";
import * as _166 from "./gamm/v1beta1/tx";
import * as _167 from "./gamm/pool-models/balancer/tx/tx";
import * as _168 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _169 from "./gamm/pool-models/stableswap/tx";
import * as _170 from "./gamm/v2/query";
import * as _171 from "./ibc-rate-limit/v1beta1/params";
import * as _172 from "./ibc-rate-limit/v1beta1/query";
import * as _173 from "./incentives/gauge";
import * as _174 from "./incentives/genesis";
import * as _175 from "./incentives/params";
import * as _176 from "./incentives/query";
import * as _177 from "./incentives/tx";
import * as _178 from "./lockup/genesis";
import * as _179 from "./lockup/lock";
import * as _180 from "./lockup/params";
import * as _181 from "./lockup/query";
import * as _182 from "./lockup/tx";
import * as _183 from "./mint/v1beta1/genesis";
import * as _184 from "./mint/v1beta1/mint";
import * as _185 from "./mint/v1beta1/query";
import * as _186 from "./pool-incentives/v1beta1/genesis";
import * as _187 from "./pool-incentives/v1beta1/gov";
import * as _188 from "./pool-incentives/v1beta1/incentives";
import * as _189 from "./pool-incentives/v1beta1/query";
import * as _190 from "./protorev/v1beta1/genesis";
import * as _191 from "./protorev/v1beta1/gov";
import * as _192 from "./protorev/v1beta1/params";
import * as _193 from "./protorev/v1beta1/protorev";
import * as _194 from "./protorev/v1beta1/query";
import * as _195 from "./protorev/v1beta1/tx";
import * as _196 from "./sumtree/v1beta1/tree";
import * as _197 from "./superfluid/genesis";
import * as _198 from "./superfluid/params";
import * as _199 from "./superfluid/query";
import * as _200 from "./superfluid/superfluid";
import * as _201 from "./superfluid/tx";
import * as _202 from "./swaprouter/v1beta1/genesis";
import * as _203 from "./swaprouter/v1beta1/module_route";
import * as _204 from "./swaprouter/v1beta1/query";
import * as _205 from "./swaprouter/v1beta1/swap_route";
import * as _206 from "./swaprouter/v1beta1/tx";
import * as _207 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _208 from "./tokenfactory/v1beta1/genesis";
import * as _209 from "./tokenfactory/v1beta1/params";
import * as _210 from "./tokenfactory/v1beta1/query";
import * as _211 from "./tokenfactory/v1beta1/tx";
import * as _212 from "./twap/v1beta1/genesis";
import * as _213 from "./twap/v1beta1/query";
import * as _214 from "./twap/v1beta1/twap_record";
import * as _215 from "./txfees/v1beta1/feetoken";
import * as _216 from "./txfees/v1beta1/genesis";
import * as _217 from "./txfees/v1beta1/gov";
import * as _218 from "./txfees/v1beta1/query";
import * as _219 from "./valset-pref/v1beta1/query";
import * as _220 from "./valset-pref/v1beta1/state";
import * as _221 from "./valset-pref/v1beta1/tx";
import * as _364 from "./gamm/pool-models/balancer/tx/tx.amino";
import * as _365 from "./gamm/pool-models/stableswap/tx.amino";
import * as _366 from "./gamm/v1beta1/tx.amino";
import * as _367 from "./incentives/tx.amino";
import * as _368 from "./lockup/tx.amino";
import * as _369 from "./protorev/v1beta1/tx.amino";
import * as _370 from "./superfluid/tx.amino";
import * as _371 from "./swaprouter/v1beta1/tx.amino";
import * as _372 from "./tokenfactory/v1beta1/tx.amino";
import * as _373 from "./valset-pref/v1beta1/tx.amino";
import * as _374 from "./gamm/pool-models/balancer/tx/tx.registry";
import * as _375 from "./gamm/pool-models/stableswap/tx.registry";
import * as _376 from "./gamm/v1beta1/tx.registry";
import * as _377 from "./incentives/tx.registry";
import * as _378 from "./lockup/tx.registry";
import * as _379 from "./protorev/v1beta1/tx.registry";
import * as _380 from "./superfluid/tx.registry";
import * as _381 from "./swaprouter/v1beta1/tx.registry";
import * as _382 from "./tokenfactory/v1beta1/tx.registry";
import * as _383 from "./valset-pref/v1beta1/tx.registry";
import * as _384 from "./downtime-detector/v1beta1/query.lcd";
import * as _385 from "./epochs/query.lcd";
import * as _386 from "./gamm/v1beta1/query.lcd";
import * as _387 from "./gamm/v2/query.lcd";
import * as _388 from "./ibc-rate-limit/v1beta1/query.lcd";
import * as _389 from "./incentives/query.lcd";
import * as _390 from "./lockup/query.lcd";
import * as _391 from "./mint/v1beta1/query.lcd";
import * as _392 from "./pool-incentives/v1beta1/query.lcd";
import * as _393 from "./protorev/v1beta1/query.lcd";
import * as _394 from "./superfluid/query.lcd";
import * as _395 from "./swaprouter/v1beta1/query.lcd";
import * as _396 from "./tokenfactory/v1beta1/query.lcd";
import * as _397 from "./twap/v1beta1/query.lcd";
import * as _398 from "./txfees/v1beta1/query.lcd";
import * as _399 from "./valset-pref/v1beta1/query.lcd";
import * as _400 from "./downtime-detector/v1beta1/query.rpc.Query";
import * as _401 from "./epochs/query.rpc.Query";
import * as _402 from "./gamm/v1beta1/query.rpc.Query";
import * as _403 from "./gamm/v2/query.rpc.Query";
import * as _404 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _405 from "./incentives/query.rpc.Query";
import * as _406 from "./lockup/query.rpc.Query";
import * as _407 from "./mint/v1beta1/query.rpc.Query";
import * as _408 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _409 from "./protorev/v1beta1/query.rpc.Query";
import * as _410 from "./superfluid/query.rpc.Query";
import * as _411 from "./swaprouter/v1beta1/query.rpc.Query";
import * as _412 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _413 from "./twap/v1beta1/query.rpc.Query";
import * as _414 from "./txfees/v1beta1/query.rpc.Query";
import * as _415 from "./valset-pref/v1beta1/query.rpc.Query";
import * as _416 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _417 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _418 from "./gamm/v1beta1/tx.rpc.msg";
import * as _419 from "./incentives/tx.rpc.msg";
import * as _420 from "./lockup/tx.rpc.msg";
import * as _421 from "./protorev/v1beta1/tx.rpc.msg";
import * as _422 from "./superfluid/tx.rpc.msg";
import * as _423 from "./swaprouter/v1beta1/tx.rpc.msg";
import * as _424 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _425 from "./valset-pref/v1beta1/tx.rpc.msg";
import * as _446 from "./lcd";
import * as _447 from "./rpc.query";
import * as _448 from "./rpc.tx";
export namespace osmosis {
  export namespace downtimedetector {
    export const v1beta1 = { ..._158,
      ..._159,
      ..._160,
      ..._384,
      ..._400
    };
  }
  export namespace epochs {
    export const v1beta1 = { ..._161,
      ..._162,
      ..._385,
      ..._401
    };
  }
  export namespace gamm {
    export const v1beta1 = { ..._163,
      ..._164,
      ..._165,
      ..._166,
      ..._366,
      ..._376,
      ..._386,
      ..._402,
      ..._418
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = { ..._167,
          ..._364,
          ..._374,
          ..._416
        };
      }
      export namespace stableswap {
        export const v1beta1 = { ..._168,
          ..._169,
          ..._365,
          ..._375,
          ..._417
        };
      }
    }
    export const v2 = { ..._170,
      ..._387,
      ..._403
    };
  }
  export namespace ibcratelimit {
    export const v1beta1 = { ..._171,
      ..._172,
      ..._388,
      ..._404
    };
  }
  export const incentives = { ..._173,
    ..._174,
    ..._175,
    ..._176,
    ..._177,
    ..._367,
    ..._377,
    ..._389,
    ..._405,
    ..._419
  };
  export const lockup = { ..._178,
    ..._179,
    ..._180,
    ..._181,
    ..._182,
    ..._368,
    ..._378,
    ..._390,
    ..._406,
    ..._420
  };
  export namespace mint {
    export const v1beta1 = { ..._183,
      ..._184,
      ..._185,
      ..._391,
      ..._407
    };
  }
  export namespace poolincentives {
    export const v1beta1 = { ..._186,
      ..._187,
      ..._188,
      ..._189,
      ..._392,
      ..._408
    };
  }
  export namespace protorev {
    export const v1beta1 = { ..._190,
      ..._191,
      ..._192,
      ..._193,
      ..._194,
      ..._195,
      ..._369,
      ..._379,
      ..._393,
      ..._409,
      ..._421
    };
  }
  export namespace store {
    export const v1beta1 = { ..._196
    };
  }
  export const superfluid = { ..._197,
    ..._198,
    ..._199,
    ..._200,
    ..._201,
    ..._370,
    ..._380,
    ..._394,
    ..._410,
    ..._422
  };
  export namespace swaprouter {
    export const v1beta1 = { ..._202,
      ..._203,
      ..._204,
      ..._205,
      ..._206,
      ..._371,
      ..._381,
      ..._395,
      ..._411,
      ..._423
    };
  }
  export namespace tokenfactory {
    export const v1beta1 = { ..._207,
      ..._208,
      ..._209,
      ..._210,
      ..._211,
      ..._372,
      ..._382,
      ..._396,
      ..._412,
      ..._424
    };
  }
  export namespace twap {
    export const v1beta1 = { ..._212,
      ..._213,
      ..._214,
      ..._397,
      ..._413
    };
  }
  export namespace txfees {
    export const v1beta1 = { ..._215,
      ..._216,
      ..._217,
      ..._218,
      ..._398,
      ..._414
    };
  }
  export namespace valsetpref {
    export const v1beta1 = { ..._219,
      ..._220,
      ..._221,
      ..._373,
      ..._383,
      ..._399,
      ..._415,
      ..._425
    };
  }
  export const ClientFactory = { ..._446,
    ..._447,
    ..._448
  };
}