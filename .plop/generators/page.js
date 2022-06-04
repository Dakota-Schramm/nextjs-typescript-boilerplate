const nextDataFetchOptns = [
    "getServerSideProps", "getStaticPaths", "getStaticProps", "getInitialProps", "None"
]

const dataAbbvs = [
  "GSSP", "GSPaths", "GSProps", "GIP", "n/a" 
]

const page = {
    description: "⚛ next page",
    prompts: [
        {
            type: "input",
            name: "name",
            message: "page name",
        },
        {
		    type: "list",
		    name: "type",
		    message: "component type",
		    choices: nextDataFetchOptns,
	    },
        {
            type: 'confirm',
            name: 'tests',
            message: 'Add tests?',
            default: false,
      },
    ],
    actions: (data) => {
        const BASE = './pages';
        const actions = [];
        if (data.tests) {
            actions.push({
                type: 'add',
                path: `${BASE}/{{kebabCase name}}.spec.ts`,
                templateFile: '.plop/templates/page/page-test.hbs'
            })
        }
        if (data.type) {
            nextDataFetchOptns.forEach((element, idx) => {
                if (data.type !== element) return true; // continue
                if (data.type !== "None") {
                    actions.push({
                        type: "add",
                        path: `${BASE}/{{kebabCase name}}.page.tsx`,
                        templateFile: `.plop/templates/page/${dataAbbvs[idx]}-header.hbs`
                    })

                    actions.push({
                        type: "append",
                        path: `${BASE}/{{kebabCase name}}.page.tsx`,
                        templateFile: ".plop/templates/page/page.hbs",
                    })

                    actions.push({
                        type: "append",
                        path: `${BASE}/{{kebabCase name}}.page.tsx`,
                        templateFile: `.plop/templates/page/${dataAbbvs[idx]}-main.hbs`
                    })

                } else {
                    actions.push({
                        type: "add",
                        path: `${BASE}/{{kebabCase name}}.page.tsx`,
                        templateFile: ".plop/templates/page/page.hbs",
                    })
                }
            });
        }

      return actions;
    }
}

module.exports.page = page;
