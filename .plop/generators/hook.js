const hook = {
    description: "⚛ react hook",
    prompts: [
        {
            type: "input",
            name: "name",
            message: "hook name",
        },
        {
            type: 'confirm',
            name: 'tests',
            message: 'Add tests?',
            default: false,
      },
    ],
    actions: (data) => {
        const BASE = 'app/javascript/src/hooks';
        const actions = [
            {
                type: "add",
                path: `${BASE}/{{kebabCase name}}/index.ts`,
                templateFile: ".plop/templates/hook-index.hbs",
            },
            {
                type: "add",
                path: `${BASE}/{{kebabCase name}}/use{{pascalCase name}}.ts`,
                templateFile: ".plop/templates/hook.hbs",
            },
        ];
        if (data.tests) {
            actions.push({
                type: 'add',
                path: `${BASE}/{{kebabCase name}}/use{{pascalCase name}}.test.ts`,
                templateFile: '.plop/templates/hook-test.hbs'
        })
      }
      return actions;
    }
}

module.exports.hook = hook;
