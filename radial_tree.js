var dataValues = [
  { "id": "p0", "parent": null, "name": "GDP at purchasers' prices" },
  { "id": "p1", "parent": "p0", "name": "Agriculture" },
  { "id": "p1.1", "parent": "p1", "name": "Crops" },
  { "id": "p1.1.1", "parent": "p1.1", "name": "Rubber" },
  { "id": "p1.1.2", "parent": "p1.1", "name": "Oil palm" },
  { "id": "p1.1.3", "parent": "p1.1", "name": "Paddy" },
  { "id": "p1.1.4", "parent": "p1.1", "name": "Vegetables" },
  { "id": "p1.1.5", "parent": "p1.1", "name": "Fruits" },
  { "id": "p1.1.6", "parent": "p1.1", "name": "Food crops" },
  { "id": "p1.1.7", "parent": "p1.1", "name": "Others" },
  { "id": "p1.2", "parent": "p1", "name": "Livestock" },
  { "id": "p1.2.1", "parent": "p1.2", "name": "Poultry" },
  { "id": "p1.2.2", "parent": "p1.2", "name": "Cattle" },
  { "id": "p1.2.3", "parent": "p1.2", "name": "Other livestocks" },
  { "id": "p1.3", "parent": "p1", "name": "Forestry and logging" },
  { "id": "p1.4", "parent": "p1", "name": "Fishing" },
  { "id": "p1.4.1", "parent": "p1.4", "name": "Marine fishing" },
  { "id": "p1.4.2", "parent": "p1.4", "name": "Aquaculture" },
  { "id": "p2", "parent": "p0", "name": "Mining and quarrying" },
  { "id": "p2.1", "parent": "p2", "name": "Crude oil and condensate" },
  { "id": "p2.2", "parent": "p2", "name": "Natural gas" },
  { "id": "p2.3", "parent": "p2", "name": "Other mining & quarrying and supporting services" },
  { "id": "p3", "parent": "p0", "name": "Manufacturing" },
  { "id": "p3.1", "parent": "p3", "name": "Vegetable and animal oils & fats, food processing, beverages and tobacco products" },
  { "id": "p3.1.1", "parent": "p3.1", "name": "Vegetable and animal oils & fats" },
  { "id": "p3.1.2", "parent": "p3.1", "name": "Food processing" },
  { "id": "p3.1.3", "parent": "p3.1", "name": "Beverages" },
  { "id": "p3.1.4", "parent": "p3.1", "name": "Tobacco products" },
  { "id": "p3.2", "parent": "p3", "name": "Textiles, wearing apparel and leather products" },
  { "id": "p3.2.1", "parent": "p3.2", "name": "Textile and wearing apparel" },
  { "id": "p3.2.2", "parent": "p3.2", "name": "Leather and related products" },
  { "id": "p3.3", "parent": "p3", "name": "Wood products, furniture, paper products and printing" },
  { "id": "p3.3.1", "parent": "p3.3", "name": "Wood products" },
  { "id": "p3.3.2", "parent": "p3.3", "name": "Paper and paper products" },
  { "id": "p3.3.3", "parent": "p3.3", "name": "Printing and reproduction of recorded media" },
  { "id": "p3.4", "parent": "p3", "name": "Petroleum, chemical, rubber and plastic products" },
  { "id": "p3.4.1", "parent": "p3.4", "name": "Refined petroleum products" },
  { "id": "p3.4.2", "parent": "p3.4", "name": "Chemicals & chemical products and pharmaceutical products" },
  { "id": "p3.4.3", "parent": "p3.4", "name": "Rubber products" },
  { "id": "p3.4.4", "parent": "p3.4", "name": "Plastics products" },
  { "id": "p3.5", "parent": "p3", "name": "Non-metallic mineral products, basic metal and fabricated metal products" },
  { "id": "p3.5.1", "parent": "p3.5", "name": "Non-metallic mineral products" },
  { "id": "p3.5.2", "parent": "p3.5", "name": "Basic metals" },
  { "id": "p3.5.3", "parent": "p3.5", "name": "Fabricated metal products" },
  { "id": "p3.6", "parent": "p3", "name": "Electrical, electronic and optical products" },
  { "id": "p3.6.1", "parent": "p3.6", "name": "Machinery and equipment" },
  { "id": "p3.6.2", "parent": "p3.6", "name": "Computers and peripheral equipment" },
  { "id": "p3.6.3", "parent": "p3.6", "name": "Electrical equipment" },
  { "id": "p3.6.4", "parent": "p3.6", "name": "Electronic components & boards, communication equipment and consumer electronics" },
  { "id": "p3.6.5", "parent": "p3.6", "name": "Manufacture of medical, precision & optical instrument, watches and clocks" },
  { "id": "p3.7", "parent": "p3", "name": "Transport equipment, other manufacturing and repair" },
  { "id": "p3.7.1", "parent": "p3.7", "name": "Motor vehicles and transport equipment" },
  { "id": "p3.7.2", "parent": "p3.7", "name": "Furniture" },
  { "id": "p3.7.3", "parent": "p3.7", "name": "Other manufacturing and repair & installation of machinery and equipment" },
  { "id": "p4", "parent": "p0", "name": "Construction" },
  { "id": "p4.1", "parent": "p4", "name": "Buildings" },
  { "id": "p4.1.1", "parent": "p4.1", "name": "Residential buildings" },
  { "id": "p4.1.2", "parent": "p4.1", "name": "Non-residential buildings" },
  { "id": "p4.2", "parent": "p4", "name": "Civil engineering" },
  { "id": "p4.3", "parent": "p4", "name": "Specialised construction activities" },
  { "id": "p5", "parent": "p0", "name": "Services" },
  { "id": "p5.1", "parent": "p5", "name": "Utilities, transportation & storage and information & communication" },
  { "id": "p5.1.1", "parent": "p5.1", "name": "Electricity and gas" },
  { "id": "p5.1.2", "parent": "p5.1", "name": "Water, sewerage and waste management" },
  { "id": "p5.1.3", "parent": "p5.1", "name": "Transportation and storage" },
  { "id": "p5.1.4", "parent": "p5.1", "name": "Information and communication" },
  { "id": "p5.2", "parent": "p5", "name": "Wholesale and retail trade, food & beverage and accommodation" },
  { "id": "p5.2.1", "parent": "p5.2", "name": "Wholesale and retail trade" },
  { "id": "p5.2.2", "parent": "p5.2", "name": "Food and beverage" },
  { "id": "p5.2.3", "parent": "p5.2", "name": "Accommodation" },
  { "id": "p5.3", "parent": "p5", "name": "Finance and insurance, real estate and business services" },
  { "id": "p5.4", "parent": "p5", "name": "Other services" },
  { "id": "p6", "parent": "p0", "name": "(plus) Import duties" }
];

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
