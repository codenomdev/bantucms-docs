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
module.exports = [
    {
        title: 'Installation Guide',
        path: setVersionPrefix('installation-guide'),
        collapsable: true,
        children: setVersionPrefix([
            ['installation-guide/overview', 'Overview'],
            ['installation-guide/requirements', 'System Requirements'],
            ['installation-guide/installation', 'Installation']
        ]),
    }
];