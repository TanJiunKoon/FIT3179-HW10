import { dataValues } from 'data.js'; // Import dataset

// Build a lookup map of id to node
var dataMap = {};
dataValues.forEach(function(node) {
  dataMap[node.id] = node;
});

// Function to compute the path for each node
dataValues.forEach(function(node) {
  var pathNames = [node.name];
  var parent = node.parent;
  while (parent) {
    var parentNode = dataMap[parent];
    if (parentNode) {
      pathNames.unshift(parentNode.name);
      parent = parentNode.parent;
    } else {
      break;
    }
  }
  node.path = pathNames.join(' > ');
});

var spec = {
  "$schema": "https://vega.github.io/schema/vega/v5.json",
  "description": "Radial Tree Layout of Economic Sectors with Tooltips",
  "width": 1080,
  "height": 1080,
  "padding": 5,
  "autosize": "none",

  "signals": [
    { "name": "labels", "value": true, "bind": {"input": "checkbox"} },
    { "name": "radius", "value": 280, "bind": {"input": "range", "min": 20, "max": 600} },
    { "name": "extent", "value": 360, "bind": {"input": "range", "min": 0, "max": 360, "step": 1} },
    { "name": "rotate", "value": 0, "bind": {"input": "range", "min": 0, "max": 360, "step": 1} },
    { "name": "layout", "value": "tidy", "bind": {"input": "radio", "options": ["tidy", "cluster"]} },
    {
      "name": "links", "value": "line",
      "bind": { "input": "select", "options": ["line", "curve", "diagonal", "orthogonal"] }
    },
    { "name": "originX", "update": "width / 2" },
    { "name": "originY", "update": "height / 2" }
  ],

  "data": [
    {
      "name": "tree",
      "values": dataValues,
      "transform": [
        { "type": "stratify", "key": "id", "parentKey": "parent" },
        {
          "type": "tree",
          "method": {"signal": "layout"},
          "size": [1, {"signal": "radius"}],
          "as": ["alpha", "radius", "depth", "children"]
        },
        { "type": "formula", "expr": "(rotate + extent * datum.alpha + 270) % 360", "as": "angle" },
        { "type": "formula", "expr": "PI * datum.angle / 180", "as": "radians" },
        { "type": "formula", "expr": "inrange(datum.angle, [90, 270])", "as": "leftside" },
        { "type": "formula", "expr": "originX + datum.radius * cos(datum.radians)", "as": "x" },
        { "type": "formula", "expr": "originY + datum.radius * sin(datum.radians)", "as": "y" }
      ]
    },
    {
      "name": "links",
      "source": "tree",
      "transform": [
        { "type": "treelinks" },
        {
          "type": "linkpath",
          "shape": {"signal": "links"}, "orient": "radial",
          "sourceX": "source.radians", "sourceY": "source.radius",
          "targetX": "target.radians", "targetY": "target.radius"
        }
      ]
    }
  ],

  "scales": [
    {
      "name": "color",
      "type": "linear",
      "range": {"scheme": "magma"},
      "domain": {"data": "tree", "field": "depth"},
      "zero": true
    }
  ],

  "marks": [
    {
      "type": "path",
      "from": {"data": "links"},
      "encode": {
        "update": {
          "x": {"signal": "originX"},
          "y": {"signal": "originY"},
          "path": {"field": "path"},
          "stroke": {"value": "#ccc"}
        }
      }
    },
    {
      "type": "symbol",
      "from": {"data": "tree"},
      "encode": {
        "enter": { "size": {"value": 100}, "stroke": {"value": "#fff"} },
        "update": {
          "x": {"field": "x"},
          "y": {"field": "y"},
          "fill": {"scale": "color", "field": "depth"},
          "tooltip": {"field": "path"}
        }
      }
    },
    {
      "type": "text",
      "from": {"data": "tree"},
      "encode": {
        "enter": {
          "text": {"field": "name"},
          "fontSize": {"value": 9},
          "baseline": {"value": "middle"}
        },
        "update": {
          "x": {"field": "x"},
          "y": {"field": "y"},
          "dx": {"signal": "(datum.leftside ? -1 : 1) * 6"},
          "angle": {"signal": "datum.leftside ? datum.angle - 180 : datum.angle"},
          "align": {"signal": "datum.leftside ? 'right' : 'left'"},
          "opacity": {"signal": "labels ? 1 : 0"}
        }
      }
    }
  ]
};

vegaEmbed('#view', spec).then(function(result) {
  // Access the Vega view instance
}).catch(console.error);
