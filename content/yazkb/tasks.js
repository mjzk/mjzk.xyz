const task_table_Instance = new VTable.ListTable(document.getElementById('task_table'), {
    records: [
        {
            "task": "fibonacci",
            "desc": "Exploring ZK system's fundamental overhead on proving and verifying via one simple computation. \nIn the meantime, this task shows how to implement a loop logic in a circuit and its implicit overhead.",
        },
        {
            "task": "sha2",
            "desc": "🛠️",
        },
    ],
    columns: [
        {
            "field": "task",
            "title": "Tasks",
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
            "field": "desc",
            "title": "Evaluation Consideration",
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
    ],
    "corner": {
        "titleOnDimension": "row",
    },
    widthMode: 'adaptive',
    heightMode: 'adaptive'
});