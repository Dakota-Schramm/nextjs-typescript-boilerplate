const { component } = require('./.plop/generators/component');
const { hook } = require('./.plop/generators/hook');
const { page } = require('./.plop/generators/page');

module.exports = (plop) => {
  plop.setGenerator('component', component);
  plop.setGenerator('hook', hook);
  plop.setGenerator('page', page);
};
