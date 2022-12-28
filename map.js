var map = AmCharts.makeChart("mapdiv",{
    type: "map",
    theme: "dark",
    projection: "mercator",
    panEventsEnabled : true,
    backgroundColor : "#e7edfd",
    backgroundAlpha : 1,
    zoomControl: {
    zoomControlEnabled : true
    },
    dataProvider : {
    map : "worldHigh",
    getAreasFromMap : true,
    areas :
    []
    },
    areasSettings : {
    autoZoom : true,
    color : "#54707e",
    colorSolid : "#cfd5e3",
    selectedColor : "#cfd5e3",
    outlineColor : "#f3f3f3",
    rollOverColor : "#666666",
    rollOverOutlineColor : "#000000"
    }
    });
