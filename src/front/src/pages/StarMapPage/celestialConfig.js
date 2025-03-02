// celestialConfig.js

const celestialConfig = {
    projection: "airy",
    center: [0, 0],
    width: 800,
    disableAnimations: true,
    background: {
        fill: "#ebc455",
        stroke: "#000",
        opacity: 1,
        width: 1
    },
    constellations: {
        names: true,
        namesType: "iau",
        nameStyle: {
            fill: "#000",
            align: "center",
            baseline: "middle",
        },
        lines: true,
        lineStyle: { stroke: "#000", width: 1, opacity: 0.3 }
    },
    lines: {
        graticule: {
            show: true, stroke: "#000", width: 0.6, opacity: 0.8, step: [15, 15],
            // lon: {pos: ["center"], fill: "#000", font: "10px Helvetica, Arial, sans-serif"},
            lat: {pos: ["center"], fill: "#000", font: "10px Helvetica, Arial, sans-serif"},
        }
    },
    datapath: "https://ofrohn.github.io/data/",
    stars: {
        colors: false,
        names: false,
        style: {fill: "#000", opacity: 1},
        limit: 6,
        size: 5
    },
    location: false,
    formFields: {"location": false},
    geopos: [0.0, 180.0],
    orientationfixed: true,
    zoomlevel: null,
    zoomextend: 1,
    controls: false,
    form: false,
    dsos: {show: false},
    mw: {
        show: true,
        style: {fill: "#ffe492", opacity: 0.5}
    },
};

export default celestialConfig;
