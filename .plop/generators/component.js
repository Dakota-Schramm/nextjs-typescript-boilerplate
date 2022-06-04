const component = {
    description: 'React Function Component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name?',
      },
      {
        type: 'confirm',
        name: 'prototype',
        message: 'Add to prototype folder?',
        default: true
      },
      {
        type: 'confirm',
        name: 'withState',
        message: 'Add useState?',
        default: false,
      },
      {
        type: 'confirm',
        name: 'tests',
        message: 'Add Jest tests?',
        default: false,
      },
    ],
    actions: (data) => {
      let BASE = 'app/javascript/src/components';
      if (data.prototype) BASE += '/prototype';

      const actions = [
        {
          type: 'add',
          path: `${BASE}/{{kebabCase name}}/index.ts`,
          templateFile: '.plop/templates/component-index.hbs',
        },
        {
          type: 'add',
          path: `${BASE}/{{kebabCase name}}/{{kebabCase name}}.tsx`,
          templateFile: '.plop/templates/component.hbs',

        },
        {

          type: 'add',
          path: `${BASE}/{{kebabCase name}}/{{kebabCase name}}.d.ts`,
          templateFile: '.plop/templates/component-types.hbs'

        }
      ];
      if (data.tests) {
        actions.push({
          type: 'add',
          path: `${BASE}/{{kebabCase name}}/{{kebabCase name}}.test.ts`,
          templateFile: '.plop/templates/component-test.hbs'

        })
      }

      return actions;
    },
  };

module.exports.component = component