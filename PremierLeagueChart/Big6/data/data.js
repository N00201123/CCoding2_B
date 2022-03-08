let data01 = [];
let table;
let fontTitle;
let fontRegular;

function preload() {
    fontTitle = loadFont("DM_Sans/DMSans-Bold.ttf");
    fontRegular = loadFont("DM_Sans/DMSans-Regular.ttf");
    table = loadTable('data/PremData.csv', 'csv', 'header');
}


function generateData() {
    for (let r = 0; r < table.getRowCount(); r++) {
        data01.push(table.rows[r].obj)
    }

    for (let i = 0; i < data01.length; i++) {
        data01[i].points = int(data01[i].points)
    }
}