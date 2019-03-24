module.exports = {
  title: '图片裁剪',
  serviceWorker: {},
  themeConfig: {
    repo: 'umijs/umi',
    docsDir: 'docs',
    serviceWorker: {
      updatePopup: {
        message: 'New content is available.',
        buttonText: 'Refresh'
      }
    },
    sidebar: {
      '/': [''],
      // '/api/': [''],
      // '/plugin/': [
      //   {
      //     title: 'Plugin',
      //     collapsable: false,
      //     children: ['']
      //   },
      //   {
      //     title: 'Offcial Plugins',
      //     collapsable: false,
      //     children: ['umi-plugin-react']
      //   },
      //   {
      //     title: 'Develop Plugin',
      //     collapsable: false,
      //     children: ['develop']
      //   }
      // ]
    }
  }
}
