var all_new_colors = [
    // Red
    ["#FF8A80", "#FF5252", "#FF1744", "#D50000"],
    // Pink
    ["#FF80AB", "#FF4081", "#F50057", "#C51162"],
    // Purple
    ["#EA80FC", "#E040FB", "#D500F9", "#AA00FF"],
    // Deep Purple
    ["#B388FF", "#7C4DFF", "#651FFF", "#6200EA"],
    // Indigo
    ["#8C9EFF", "#536DFE", "#3D5AFE", "#304FFE"],
    // Blue
    ["#82B1FF", "#448AFF", "#2979FF", "#2962FF"],
    // Light Blue
    // ["#80D8FF", "#40C4FF", "#00B0FF", "#0091EA"],
    // Cyan
    // ["#84FFFF", "#18FFFF", "#00E5FF", "#00B8D4"],
    // Teal
    // ["#A7FFEB", "#64FFDA", "#1DE9B6", "#00BFA5"],
    // Green
    // ["#B9F6CA", "#69F0AE", "#00E676", "#00C853"],
    // Light Green
    // ["#CCFF90", "#B2FF59", "#76FF03", "#64DD17"],
    // Lime
    // ["#F4FF81", "#EEFF41", "#C6FF00", "#AEEA00"],
    // Yellow
    // ["#FFFF8D", "#FFFF00", "#FFEA00", "#FFD600"],
    // Amber
    ["#FFE57F", "#FFD740", "#FFC400", "#FFAB00"],
    // Orange
    // ["#FFD180", "#FFAB40", "#FF9100", "#FF6D00"],
    // Deep Orange
    ["#FF9E80", "#FF6E40", "#FF3D00", "#DD2C00"]
];

var new_color = all_new_colors[Math.floor(Math.random() * all_new_colors.length)];

var old_color = (function () {
    var arr = [];
    $("ul.legend").children("li").not(":first").each(function (index) {
        var color = rgb2hex($(this).css("background-color"));
        arr.push(color.toUpperCase());
        $(this).css("background-color", new_color[index]);
    });
    return arr;
})();

$("rect.day").each(function () {
    switch ($(this).attr("fill").toUpperCase()) {
        case old_color[0]:
            $(this).attr("fill", new_color[0]);
            break;
        case old_color[1]:
            $(this).attr("fill", new_color[1]);
            break;
        case old_color[2]:
            $(this).attr("fill", new_color[2]);
            break;
        case old_color[3]:
            $(this).attr("fill", new_color[3]);
            break;
    }
}, this);

function rgb2hex(rgb) {
    rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    return (rgb && rgb.length === 4) ? "#" +
        ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
}
