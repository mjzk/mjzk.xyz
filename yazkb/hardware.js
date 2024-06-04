const hardware_table = new VTable.ListTable(document.getElementById('hardware_table'), {
    records: [
        {
            "setup": "Config #1",
            "os": "Linux(MANJARO), kernel 6.8.8-2",
            "cpu": "13th Gen Intel(R) Core(TM) i5-13600KF",
            "disk": "Intel Optane SSD 900P(SSDPED1D280GA)"
        },
    ],
    columns: [
        {
            "field": "setup",
            "title": "Setup",
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
            "field": "os",
            "title": "OS",
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
            "field": "cpu",
            "title": "CPU",
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
            "field": "disk",
            "title": "Disk",
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
        }
    ],
    "corner": {
        "titleOnDimension": "row",
    },
    widthMode: 'adaptive',
    heightMode: 'adaptive',
    transpose: true
});