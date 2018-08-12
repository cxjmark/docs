module.exports = {
    base: '/blog/',
    title: '技术文档',
    description: '陈小军的技术文档',
    serviceWorker: false,
    themeConfig: {
        repo: 'FinlayChen/blog',
        docsDir: 'blog',
        editLinks: true,
        editLinkText: '错别字纠正',
        sidebarDepth: 3,
        nav: [
            {
                text: '正文',
                link: '/art/'
            }
        ]
    }
};
