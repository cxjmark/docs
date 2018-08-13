module.exports = {
    base: '/mark-docs/',
    title: 'mark-docs',
    description: 'mark 技术文档',
    serviceWorker: false,
    themeConfig: {
        repo: 'cxjmark/mark-docs',
        docsDir: 'dcos',
        sidebar: [
            {
                title: '正则',
                collapsable: false,
                children: [
                    'regexp/',
                    'regexp/base'
                ]
            },
            {
                title: '持续更新...',
                collapsable: false
            }
        ]
    }
};
