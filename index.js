var ReactTestUtils = require('react-addons-test-utils');

/**
 * Shallow render an element
 * @param   {object} element
 * @returns {{component: object, tree: object}}
 */
module.exports = function(element) {

  var renderer = ReactTestUtils.createRenderer();
  renderer.render(element);

  var component = renderer.getMountedInstance ?
    renderer.getMountedInstance() :
    (renderer._instance ? renderer._instance._instance : null)
  ;

  return {
    component: component,
    element: renderer.getRenderOutput()
  };
};