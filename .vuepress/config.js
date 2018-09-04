module.exports = {
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' }
    ],
    sidebar: [{
      title: 'node',
      collapsable: true,
      children: [
        '/node/how-to-write-a-npm-module/',
        '/node/difference-between-local-and-global-module/',
        '/node/use-local-node-module-without-publish/'
      ]
    }, {
      title: '设计模式',
      collapsable: true,
      children: [
        '/js-design-pattern/publish-subscribe-pattern/',
        '/js-design-pattern/use-publish-subscribe-pattern/'
      ]
    }, {
      title: 'SPA路由',
      collapsable: true,
      children: [
        '/spa-router/implement-spa-router-with-hash/',
        '/spa-router/implement-spa-router-with-history/'
      ]
    }, {
      title: 'React',
      collapsable: true,
      children: [
        '/react/react-Fragments/',
      ]
    }, {
      title: 'Shell',
      collapsable: true,
      children: [
        '/shell/how-to-go-to-directory-created-just-now/',
      ]
    }, {
      title: 'Parcel',
      collapsable: true,
      children: [
        '/parcel/stay-console.log-after-build/',
      ]
    }]
  }
}
