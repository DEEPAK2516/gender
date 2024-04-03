$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "voice.csv",
        dataType: "text",
        success: function (data) {
            processData(data);
        }
    });

    function processData(allText) {
        var allTextLines = allText.split(/\r\n|\n/);
        var headers = allTextLines[0].split(',');
        var lines = [];

        for (var i = 1; i < allTextLines.length; i++) {
            var data = allTextLines[i].split(',');
            if (data.length == headers.length) {
                var tarr = [];
                for (var j = 0; j < headers.length; j++) {
                    tarr.push(data[j]);
                }
                lines.push(tarr);
            }
        }
        displayData(lines, headers);
    }

    function displayData(lines, headers) {
        var table = document.getElementById('voice-table');
        var tbody = table.getElementsByTagName('tbody')[0];

        for (var i = 0; i < lines.length; i++) {
            var row = tbody.insertRow();
            for (var j = 0; j < headers.length; j++) {
                var cell = row.insertCell();
                cell.innerHTML = lines[i][j];
            }
        }
    }
});
