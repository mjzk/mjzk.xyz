const tableInstance = new VTable.PivotTable(document.getElementById('benchmark_results'), {
    records: [
        {
            "task": "fibonacci",
            "parameter": 10,
            "phase": "proving",
            "zksys": "halo2",
            "runtime": 19.6,
        },
        {
            "task": "fibonacci",
            "parameter": 10,
            "phase": "verifying",
            "zksys": "halo2",
            "runtime": 2.2,
        },
        {
            "task": "fibonacci",
            "parameter": 100,
            "phase": "proving",
            "zksys": "halo2",
            "runtime": 40.9,
        },
        {
            "task": "fibonacci",
            "parameter": 100,
            "phase": "verifying",
            "zksys": "halo2",
            "runtime": 2.2,
        },
        {
            "task": "fibonacci",
            "parameter": 1000,
            "phase": "proving",
            "zksys": "halo2",
            "runtime": 75.1,
        },
        {
            "task": "fibonacci",
            "parameter": 1000,
            "phase": "verifying",
            "zksys": "halo2",
            "runtime": 1.9,
        },
        {
            "task": "fibonacci",
            "parameter": 10000,
            "phase": "proving",
            "zksys": "halo2",
            "runtime": 622.1,
        },
        {
            "task": "fibonacci",
            "parameter": 10000,
            "phase": "verifying",
            "zksys": "halo2",
            "runtime": 2.0,
        },
        {
            "task": "fibonacci",
            "parameter": 100000,
            "phase": "proving",
            "zksys": "halo2",
            "runtime": 4244,
        },
        {
            "task": "fibonacci",
            "parameter": 100000,
            "phase": "verifying",
            "zksys": "halo2",
            "runtime": 1.9,
        },
        {
            "task": "fibonacci",
            "parameter": 10,
            "phase": "proving",
            "zksys": "sp1",
            "runtime": 996,
        },
        {
            "task": "fibonacci",
            "parameter": 10,
            "phase": "verifying",
            "zksys": "sp1",
            "runtime": 64.6,
        },
        {
            "task": "fibonacci",
            "parameter": 100,
            "phase": "proving",
            "zksys": "sp1",
            "runtime": 1022,
        },
        {
            "task": "fibonacci",
            "parameter": 100,
            "phase": "verifying",
            "zksys": "sp1",
            "runtime": 64.7,
        },
        {
            "task": "fibonacci",
            "parameter": 1000,
            "phase": "proving",
            "zksys": "sp1",
            "runtime": 1371,
        },
        {
            "task": "fibonacci",
            "parameter": 1000,
            "phase": "verifying",
            "zksys": "sp1",
            "runtime": 64.1,
        },
        {
            "task": "fibonacci",
            "parameter": 10000,
            "phase": "proving",
            "zksys": "sp1",
            "runtime": 3916,
        },
        {
            "task": "fibonacci",
            "parameter": 10000,
            "phase": "verifying",
            "zksys": "sp1",
            "runtime": 67.1,
        },
        {
            "task": "fibonacci",
            "parameter": 100000,
            "phase": "proving",
            "zksys": "sp1",
            "runtime": 26819,
        },
        {
            "task": "fibonacci",
            "parameter": 100000,
            "phase": "verifying",
            "zksys": "sp1",
            "runtime": 147.1,
        },
        {
            "task": "fibonacci",
            "parameter": 10,
            "phase": "proving",
            "zksys": "risc0",
            "runtime": 3996,
        },
        {
            "task": "fibonacci",
            "parameter": 10,
            "phase": "verifying",
            "zksys": "risc0",
            "runtime": 7.9,
        },
        {
            "task": "fibonacci",
            "parameter": 100,
            "phase": "proving",
            "zksys": "risc0",
            "runtime": 4022,
        },
        {
            "task": "fibonacci",
            "parameter": 100,
            "phase": "verifying",
            "zksys": "risc0",
            "runtime": 8.0,
        },
        {
            "task": "fibonacci",
            "parameter": 1000,
            "phase": "proving",
            "zksys": "risc0",
            "runtime": 3997,
        },
        {
            "task": "fibonacci",
            "parameter": 1000,
            "phase": "verifying",
            "zksys": "risc0",
            "runtime": 7.9,
        },
        {
            "task": "fibonacci",
            "parameter": 10000,
            "phase": "proving",
            "zksys": "risc0",
            "runtime": 8128,
        },
        {
            "task": "fibonacci",
            "parameter": 10000,
            "phase": "verifying",
            "zksys": "risc0",
            "runtime": 8.4,
        },
        {
            "task": "fibonacci",
            "parameter": 100000,
            "phase": "proving",
            "zksys": "risc0",
            "runtime": 652868,
        },
        {
            "task": "fibonacci",
            "parameter": 100000,
            "phase": "verifying",
            "zksys": "risc0",
            "runtime": 10.2,
        },
    ],
    rows: [
        {
            "dimensionKey": "task",
            "title": "Task",
            "width": "auto",
            "style": {
                autoWrapText: true,
                lineClamp: 'auto',
                textBaseline: "middle",
                textAlign: "center"
            },
            "headerStyle": {
                "textStick": true,
                textBaseline: "middle",
                textAlign: "center"
            }
        },
        {
            "dimensionKey": "parameter",
            "title": "Parameter",
            "width": "auto",
        },
    ],
    columns: [
        {
            "dimensionKey": "phase",
            "title": "Phase",
            "width": "auto",
            "style": {
                autoWrapText: true,
                lineClamp: 'auto',
                textBaseline: "middle",
                textAlign: "center"
            },
            "headerStyle": {
                "textStick": true,
                textBaseline: "middle",
                textAlign: "center"
            }
        },
        {
            "dimensionKey": "zksys",
            "title": "ZK Systems",
            "width": "auto",
            "style": {
                autoWrapText: true,
                lineClamp: 'auto',
                textBaseline: "middle",
                textAlign: "center"
            },
            "headerStyle": {
                "textStick": true,
                textBaseline: "middle",
                textAlign: "center"
            }
        }
    ],
    indicators: [
        {
            "indicatorKey": "runtime",
            "title": "millsec",
            "width": "auto",
            "showSort": false,
            "style": {
                autoWrapText: true,
                lineClamp: 'auto',
                textBaseline: "middle",
                textAlign: "center"
            },
            "headerStyle": {
                "textStick": true,
                textBaseline: "middle",
                textAlign: "center"
            }
        }
    ],
    "corner": {
        "titleOnDimension": "row",
        "headerStyle": {
            "textStick": true
        }
    },
    enableDataAnalysis: true,
    widthMode: 'adaptive',
    heightMode: 'adaptive'
});