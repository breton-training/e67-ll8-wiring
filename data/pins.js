// E67 LL8 ECM pin data — shared between connectors.html and (eventually) systems.html.
// Single source of truth: edit pin facts here, both views pick up the change.
//
// ECM: GM E67, P/N 12618163, service 12607096, broadcast YRH
// Application: 2008-2009 Chevrolet Trailblazer, 4.2L Atlas I6 (LL8)
// Last verified against physical connectors: 2026-04-28
//
// Per-pin schema:
//   cat:      category class (cat-power, cat-ground, cat-ignition, cat-comm,
//             cat-ref-5v, cat-ref-12v, cat-sensor, cat-injector, cat-coil,
//             cat-relay, cat-cruise, cat-other)
//   wire:     jacket color code (BK BN RD OG YE GY TN WH PK PU; D-/L- prefix
//             for dark/light; "BASE-TRACER" for two-tone, e.g. GY-BK = gray w/ black tracer)
//   gauge:    cross-section in mm² (0.35 ≈ 22 AWG, 0.5 ≈ 20 AWG, 1.0 ≈ 18 AWG)
//   circuit:  GM circuit number from factory diagram
//   label:    human-readable pin function
//   v42:      true if function is specific to 4.2L Atlas calibration (vs. shared 5.3L)
//   verified: 'suspect' = data conflict, requires factory-diagram check before wiring
//             (omit field for unverified default; UI tracks verified state in localStorage)
//   note:     optional caveat shown in the click-through detail panel

const PIN_DATA = {
  x1: {
    1:{cat:'cat-sensor',wire:'PU',gauge:'0.35',circuit:'806',label:'Crank Voltage'},
    2:{cat:'cat-cruise',wire:'PU',gauge:'0.35',circuit:'420',label:'TCC Brake / Cruise Release Signal'},
    4:{cat:'cat-cruise',wire:'GY-BK',gauge:'0.35',circuit:'1694',label:'4WD Low Signal (NP8)'},
    7:{cat:'cat-cruise',wire:'L-BU',gauge:'0.35',circuit:'1320',label:'CHMSL Control (K34)'},
    9:{cat:'cat-ground',wire:'BK',gauge:'0.35',circuit:'2759',label:'Low Reference'},
    12:{cat:'cat-cruise',wire:'BN-WH',gauge:'0.35',circuit:'419',label:'MIL Control'},
    13:{cat:'cat-relay',wire:'D-GN-WH',gauge:'0.35',circuit:'465',label:'Fuel Pump Relay Control'},
    16:{cat:'cat-comm',wire:'D-GN',gauge:'0.35',circuit:'1049',label:'Class 2 Serial Data'},
    18:{cat:'cat-ignition',wire:'PK',gauge:'0.35',circuit:'1020',label:'Ignition Voltage'},
    19:{cat:'cat-ignition',wire:'PK',gauge:'0.35',circuit:'439',label:'Ignition Voltage'},
    20:{cat:'cat-power',wire:'OG',gauge:'0.35',circuit:'240',label:'Battery Positive Voltage'},
    21:{cat:'cat-cruise',wire:'GY-BK',gauge:'0.35',circuit:'87',label:'Cruise Resume/Accel Switch (K34)'},
    22:{cat:'cat-cruise',wire:'D-BU',gauge:'0.35',circuit:'84',label:'Cruise Set/Coast Switch (K34)'},
    25:{cat:'cat-sensor',wire:'WH',gauge:'0.35',circuit:'121',label:'Engine Speed Signal (output)'},
    30:{cat:'cat-cruise',wire:'GY',gauge:'0.35',circuit:'397',label:'Cruise Control On Switch (K34)'},
    33:{cat:'cat-ref-5v',wire:'WH-BK',gauge:'0.35',circuit:'1164',label:'5-Volt Reference'},
    34:{cat:'cat-ref-5v',wire:'GY',gauge:'0.35',circuit:'2709',label:'5-Volt Reference'},
    35:{cat:'cat-ref-5v',wire:'TN',gauge:'0.35',circuit:'1274',label:'5-Volt Reference'},
    36:{cat:'cat-ground',wire:'BN',gauge:'0.35',circuit:'1271',label:'Low Reference'},
    37:{cat:'cat-ground',wire:'PU',gauge:'0.35',circuit:'1272',label:'Low Reference'},
    39:{cat:'cat-sensor',wire:'D-GN-WH',gauge:'0.35',circuit:'817',label:'Vehicle Speed Signal'},
    40:{cat:'cat-relay',wire:'YE',gauge:'0.35',circuit:'5991',label:'Powertrain Relay Coil Control'},
    44:{cat:'cat-sensor',wire:'PU',gauge:'0.35',circuit:'1589',label:'Fuel Level Sensor Signal'},
    47:{cat:'cat-sensor',wire:'D-BU',gauge:'0.35',circuit:'1161',label:'APP Sensor 1 Signal'},
    48:{cat:'cat-sensor',wire:'D-GN',gauge:'0.35',circuit:'890',label:'Fuel Tank Pressure Sensor'},
    49:{cat:'cat-sensor',wire:'L-BU',gauge:'0.35',circuit:'1162',label:'APP Sensor 2 Signal'},
    51:{cat:'cat-relay',wire:'PK-BK',gauge:'0.5',circuit:'429',label:'AIR Solenoid Relay Coil Control',v42:true},
    53:{cat:'cat-relay',wire:'D-GN-WH',gauge:'0.35',circuit:'459',label:'A/C Compressor Clutch Relay'},
    55:{cat:'cat-relay',wire:'WH',gauge:'0.35',circuit:'1310',label:'EVAP Canister Vent Solenoid'},
    56:{cat:'cat-relay',wire:'YE-BK',gauge:'0.35',circuit:'625',label:'Starter Enable Relay Control',verified:'suspect',note:'Conflict with X2-43 — both labeled Starter Enable Relay. Different circuits/colors. Verify which is the actual relay drive output.'}
  },
  x2: {
    1:{cat:'cat-coil',wire:'PU',gauge:'0.35',circuit:'2121',label:'IC 1 Control'},
    2:{cat:'cat-sensor',wire:'TN',gauge:'0.5',circuit:'1664',label:'HO2S Low — B1S1'},
    3:{cat:'cat-sensor',wire:'PU-WH',gauge:'0.5',circuit:'1665',label:'HO2S High — B1S1'},
    4:{cat:'cat-sensor',wire:'PU-WH',gauge:'0.5',circuit:'1668',label:'HO2S High — B1S2'},
    5:{cat:'cat-sensor',wire:'TN-WH',gauge:'0.5',circuit:'1669',label:'HO2S Low — B1S2'},
    6:{cat:'cat-sensor',wire:'L-BU',gauge:'0.35',circuit:'1876',label:'KS 2 Signal'},
    7:{cat:'cat-sensor',wire:'GY',gauge:'0.35',circuit:'2303',label:'KS 2 Signal'},
    8:{cat:'cat-sensor',wire:'D-BU',gauge:'0.35',circuit:'496',label:'KS 1 Signal'},
    9:{cat:'cat-sensor',wire:'GY',gauge:'0.35',circuit:'1716',label:'KS 1 Signal'},
    11:{cat:'cat-sensor',wire:'YE',gauge:'0.5',circuit:'581',label:'TAC Motor Control 1'},
    12:{cat:'cat-sensor',wire:'BN',gauge:'0.5',circuit:'582',label:'TAC Motor Control 2'},
    13:{cat:'cat-ignition',wire:'PK',gauge:'0.5',circuit:'839',label:'Ignition Voltage'},
    14:{cat:'cat-other',wire:'BN',gauge:'0.35',circuit:'2198',label:'CMP Actuator Solenoid (VVT)',v42:true},
    17:{cat:'cat-coil',wire:'D-GN',gauge:'0.35',circuit:'2125',label:'IC 5 Control',v42:true},
    18:{cat:'cat-coil',wire:'D-GN-WH',gauge:'0.5',circuit:'2124',label:'IC 4 Control',v42:true,verified:'suspect',note:'Same circuit (2124) and label as X2-34. Likely transcription error — verify against factory diagram before wiring coil 4.'},
    23:{cat:'cat-ground',wire:'PK-BK',gauge:'0.35',circuit:'632',label:'Low Reference'},
    24:{cat:'cat-sensor',wire:'PU',gauge:'0.35',circuit:'114',label:'Low Oil Pressure Switch',v42:true},
    27:{cat:'cat-ground',wire:'BK',gauge:'0.5',circuit:'407',label:'Low Reference',v42:true},
    29:{cat:'cat-ground',wire:'BK-WH',gauge:'0.35',circuit:'1704',label:'Low Reference'},
    32:{cat:'cat-injector',wire:'YE-BK',gauge:'0.5',circuit:'846',label:'Fuel Injector 6 Control'},
    33:{cat:'cat-coil',wire:'L-BU',gauge:'0.35',circuit:'2123',label:'IC 3 Control',v42:true},
    34:{cat:'cat-coil',wire:'D-GN-WH',gauge:'0.35',circuit:'2124',label:'IC 4 Control',v42:true,verified:'suspect',note:'Same circuit (2124) and label as X2-18. Likely transcription error — verify against factory diagram before wiring coil 4.'},
    39:{cat:'cat-ref-12v',wire:'RD',gauge:'0.35',circuit:'631',label:'12-Volt Reference'},
    42:{cat:'cat-ground',wire:'BK',gauge:'0.5',circuit:'2760',label:'Low Reference'},
    43:{cat:'cat-relay',wire:'YE',gauge:'0.35',circuit:'6259',label:'Starter Enable Relay',v42:true,verified:'suspect',note:'Conflict with X1-56 — both labeled Starter Enable Relay. May be relay drive vs. crank inhibit/feedback. Verify against factory diagram.'},
    44:{cat:'cat-ref-5v',wire:'GY',gauge:'0.35',circuit:'2701',label:'5-Volt Reference',v42:true},
    46:{cat:'cat-ground',wire:'BK',gauge:'0.35',circuit:'2199',label:'Low Reference',v42:true},
    48:{cat:'cat-injector',wire:'BK-WH',gauge:'0.5',circuit:'845',label:'Fuel Injector 5 Control',v42:true},
    49:{cat:'cat-injector',wire:'L-BU-BK',gauge:'0.5',circuit:'844',label:'Fuel Injector 4 Control',v42:true},
    52:{cat:'cat-injector',wire:'L-GN-BK',gauge:'0.5',circuit:'1745',label:'Fuel Injector 2 Control'},
    53:{cat:'cat-coil',wire:'L-BU-WH',gauge:'0.35',circuit:'2126',label:'IC 6 Control',v42:true},
    54:{cat:'cat-coil',wire:'RD-WH',gauge:'0.35',circuit:'2122',label:'IC 2 Control',v42:true},
    59:{cat:'cat-sensor',wire:'BK',gauge:'0.35',circuit:'630',label:'CMP Sensor Signal',v42:true},
    62:{cat:'cat-sensor',wire:'TN',gauge:'0.5',circuit:'472',label:'IAT Sensor Signal'},
    63:{cat:'cat-sensor',wire:'BN-WH',gauge:'0.5',circuit:'633',label:'CKP Sensor Signal',v42:true},
    64:{cat:'cat-sensor',wire:'D-GN',gauge:'0.35',circuit:'485',label:'TP Sensor 1 Signal'},
    66:{cat:'cat-sensor',wire:'PU',gauge:'0.35',circuit:'486',label:'TP Sensor 2 Signal'},
    67:{cat:'cat-sensor',wire:'YE',gauge:'0.5',circuit:'492',label:'MAF Sensor Signal'},
    68:{cat:'cat-sensor',wire:'D-GN',gauge:'0.5',circuit:'676',label:'HO2S Heater B1S1',v42:true},
    69:{cat:'cat-sensor',wire:'BN',gauge:'0.5',circuit:'1423',label:'HO2S Heater B1S2',v42:true},
    71:{cat:'cat-injector',wire:'PK-BK',gauge:'0.5',circuit:'1746',label:'Fuel Injector 3 Control',v42:true},
    72:{cat:'cat-injector',wire:'BK',gauge:'0.5',circuit:'1744',label:'Fuel Injector 1 Control'},
    73:{cat:'cat-ground',wire:'BK-WH',gauge:'1.0',circuit:'451',label:'Ground (PRIMARY)',v42:true}
  },
  x3: {
    7:{cat:'cat-other',wire:'PU',gauge:'0.35',circuit:'5428',label:'Generator Regulator Control'},
    9:{cat:'cat-relay',wire:'BN',gauge:'0.5',circuit:'436',label:'AIR Pump Relay Control',v42:true},
    12:{cat:'cat-other',wire:'TN',gauge:'0.35',circuit:'464',label:'Delivered Torque Signal'},
    17:{cat:'cat-other',wire:'OG-BK',gauge:'0.35',circuit:'463',label:'Requested Torque Signal'},
    21:{cat:'cat-ground',wire:'BK',gauge:'0.35',circuit:'2751',label:'Low Reference'},
    23:{cat:'cat-ground',wire:'OG-BK',gauge:'0.35',circuit:'469',label:'Low Reference'},
    26:{cat:'cat-ground',wire:'D-BU-WH',gauge:'0.5',circuit:'6785',label:'AIR Valve 1 Low Reference',v42:true},
    29:{cat:'cat-other',wire:'GY',gauge:'0.35',circuit:'23',label:'Generator Field Duty Cycle'},
    33:{cat:'cat-comm',wire:'TN',gauge:'0.35',circuit:'2501',label:'CAN Low (GMLAN −)'},
    35:{cat:'cat-ground',wire:'BK',gauge:'0.35',circuit:'2761',label:'Low Reference'},
    37:{cat:'cat-ref-5v',wire:'GY',gauge:'0.35',circuit:'2700',label:'5-Volt Reference'},
    39:{cat:'cat-ref-5v',wire:'GY',gauge:'0.35',circuit:'2704',label:'5-Volt Reference'},
    42:{cat:'cat-ref-12v',wire:'BN-WH',gauge:'0.5',circuit:'6789',label:'AIR Valve 12V Reference',v42:true},
    47:{cat:'cat-cruise',wire:'OG-BK',gauge:'0.35',circuit:'1786',label:'PNP Switch Signal'},
    48:{cat:'cat-relay',wire:'D-GN-WH',gauge:'0.35',circuit:'428',label:'EVAP Canister Purge Solenoid'},
    53:{cat:'cat-comm',wire:'TN-WH',gauge:'0.35',circuit:'2500',label:'CAN High (GMLAN +)'},
    55:{cat:'cat-sensor',wire:'YE',gauge:'0.35',circuit:'410',label:'ECT Sensor Signal'},
    57:{cat:'cat-sensor',wire:'RD-BK',gauge:'0.35',circuit:'380',label:'A/C Refrigerant Pressure'},
    59:{cat:'cat-sensor',wire:'L-GN',gauge:'0.35',circuit:'432',label:'MAP Sensor Signal'},
    62:{cat:'cat-sensor',wire:'YE',gauge:'0.5',circuit:'6787',label:'Secondary AIR Pressure',v42:true},
    65:{cat:'cat-sensor',wire:'TN',gauge:'0.35',circuit:'231',label:'Oil Pressure Switch',v42:true},
    66:{cat:'cat-sensor',wire:'RD',gauge:'0.35',circuit:'381',label:'Signal High — Front'}
  }
};

// Wire color hex values for SVG fill
const WIRE_COLORS = {
  'OG': '#ff8c1a',
  'PK': '#ffb6c1',
  'PU': '#9d4edd',
  'BK': '#1a1a1a',
  'WH': '#f0f0f0',
  'RD': '#e63946',
  'BN': '#6f4e37',
  'YE': '#ffd60a',
  'GY': '#999999',
  'TN': '#d4a373',
  'D-GN': '#1a5e3a',
  'L-BU': '#87ceeb',
  'D-BU': '#1d3557',
  'L-GN': '#90ee90',
};
