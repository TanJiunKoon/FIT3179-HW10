import { dataValues } from 'https://raw.githubusercontent.com/TanJiunKoon/FIT3179-HW10/refs/heads/main/data.js'; // Import dataset

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