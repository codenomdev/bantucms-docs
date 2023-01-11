module.exports = {
    base: '/',
    port: '8080',
    cache: false,
    title: 'Bantucms Documentation',
    description: 'Bantucms Developer',
    head: [
        // ['link', { rel: "icon", type: "image/png", href: "/favicon.ico" }],
    ],
    themeConfig: {
        smoothScroll: true,
        lastUpdated: 'Last Updated',
        repo: 'codenomdev/bantucms-docs',
        repoLabel: 'Contribute to Bantucms',
        docsRepo: 'codenomdev/bantucms-docs',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: 'Help us improve this page on Github.',

        // logo: '/logo.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Extensions', link: 'https://bantucms.com/en/extensions/' },
            { text: 'Community Forum', link: 'https://forums.codenom.com/' }
        ],
        sidebar: require('./version-configs/1.x')
    },
    markdown: {
        lineNumbers: false
    },
    plugins: ['@vuepress/pwa', 'copy-code', '@vuepress/back-to-top']
};