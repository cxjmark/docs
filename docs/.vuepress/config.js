module.exports = {
    base: '/vue-mark/',
    title: 'vue-mark',
    description: 'vue-mark 技术文档',
    serviceWorker: false,
    themeConfig: {
        repo: 'cxjmark/vue-mark',
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
