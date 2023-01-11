/* set version */
let version = '1.x';

/* version prefix setter */
function setVersionPrefix(children) {
    if (children.constructor === Array) {
        return children.map(child => {
            child[0] = `/${version}/${child[0]}`;
            return child;
        });
    }
    return `/${version}/${children}`;
}

/* module export */
module.exports = {
    '/1.x/installation-guide/': [
        '', //installation-guide/README.md
        {
            title: 'Installation Guide',
            children: [
                ['/1.x/installation-guide/overview.md', 'Overview'],
                ['/1.x/installation-guide/requirements.md', 'System Requirements'],
                ['/1.x/installation-guide/installation.md', 'Installation'],
                ['/1.x/installation-guide/docker.md', 'Docker']
            ]
        },
    ],
    '/1.x/coding-standards/': [
        '',
        ['/1.x/coding-standards/php.md', 'PHP coding standards'],
        ['/1.x/coding-standards/technical-guidelines.md', 'Technical Guidelines'],
    ]
    // {
    //     title: 'Installation Guide',
    //     path: setVersionPrefix('installation-guide'),
    //     collapsable: true,
    //     children: setVersionPrefix([
    //         ['installation-guide/overview', 'Overview'],
    //         ['installation-guide/requirements', 'System Requirements'],
    //         ['installation-guide/installation', 'Installation'],
    //         ['installation-guide/docker', 'Docker Installation'],
    //     ]),
    // },
    // {
    //     title: 'Coding Standards',
    //     path: setVersionPrefix('coding-standards'),
    //     collapsable: true,
    //     children: setVersionPrefix([
    //         // ['coding-standards/overview', 'Overview'],
    //         ['coding-standards/php', 'PHP coding standard'],
    //         ['coding-standards/technical-guidelines', 'Technical Guidelines'],
    //     ]),
    // }
};