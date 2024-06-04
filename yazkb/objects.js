const objects_table = new VTable.ListTable(document.getElementById('objects_table'), {
    records: [
        {
            "name": "halo2*",
            "zk_algo": "SNARK",
            "zk_impl": "library",
            "route": "Rust APIs based manual circuiting with kinds of frontend",
            "site": "https://github.com/zcash/halo2",
            "status": "maintenance",
            "ver": "v2023_02_02"
        },
        {
            "name": "risc0",
            "zk_algo": "STARK",
            "zk_impl": "zkvm",
            "route": "VM to prove for any Rust program (in theory)",
            "status": "active",
            "site": "https://github.com/risc0/risc0",
            "ver": "0.21.0 @ 2024.03.13"
        },
        {
            "name": "sp1",
            "zk_algo": "STARK",
            "zk_impl": "zkvm",
            "route": "VM to prove for any Rust program (in theory)",
            "site": "https://github.com/succinctlabs/sp1",
            "status": "active",
            "ver": "b79e2c2005 @ 2024.05.08"
        },
    ],
    columns: [
        {
            "field": "name",
            "title": "Name",
            "width": "auto",
            "style": {
                autoWrapText: true,
                lineClamp: 'auto',
                textBaseline: "middle",
                textAlign: "center",
                fontSize: 18
            },
            "headerStyle": {
                textBaseline: "middle",
                textAlign: "center"
            }
        },
        {
            "field": "zk_algo",
            "title": "Algorithm",
            "width": "auto",
            "style": {
                autoWrapText: true,
                lineClamp: 'auto',
                textBaseline: "middle",
                textAlign: "center",
                fontSize: 18
            },
            "headerStyle": {
                "textStick": true,
                textBaseline: "middle",
                textAlign: "center"
            }
        },
        {
            "field": "zk_impl",
            "title": "Usage form",
            "width": "auto",
            "style": {
                autoWrapText: true,
                lineClamp: 'auto',
                textBaseline: "middle",
                textAlign: "center",
                fontSize: 18
            },
            "headerStyle": {
                "textStick": true,
                textBaseline: "middle",
                textAlign: "center"
            }
        },
        {
            "field": "route",
            "title": "Tech Route",
            "width": "auto",
            "style": {
                autoWrapText: true,
                lineClamp: 'auto',
                textBaseline: "middle",
                textAlign: "center",
                fontSize: 18
            },
            "headerStyle": {
                "textStick": true,
                textBaseline: "middle",
                textAlign: "center"
            }
        },
        {
            "field": "status",
            "title": "Status",
            "width": "auto",
            "style": {
                autoWrapText: true,
                lineClamp: 'auto',
                textBaseline: "middle",
                textAlign: "center",
                fontSize: 18
            },
            "headerStyle": {
                "textStick": true,
                textBaseline: "middle",
                textAlign: "center"
            }
        },
        {
            "field": "ver",
            "title": "bench version",
            "width": "auto",
            "style": {
                autoWrapText: true,
                lineClamp: 'auto',
                textBaseline: "middle",
                textAlign: "center",
                fontSize: 18
            },
            "headerStyle": {
                "textStick": true,
                textBaseline: "middle",
                textAlign: "center"
            }
        },
        {
            "field": "site",
            "title": "Site",
            "width": "auto",
            cellType: 'link',
            templateLink: '{site}',
            linkJump: true,
            fieldFormat(rec) {
                return rec['name']
            },
            "style": {
                autoWrapText: true,
                lineClamp: 'auto',
                textBaseline: "middle",
                textAlign: "center",
                fontSize: 18
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
    },
    widthMode: 'adaptive',
    heightMode: 'adaptive'
});