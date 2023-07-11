module.exports = {
  title: 'ellapresso',
  head: [
    ['link', { rel: 'icon', href: '/assets/img/cat.png' }],
    [
      'meta',
      {
        name: 'google-site-verification',
        content: 'gQyOTLNCOiZpV2eNHtevgTZ-R94aphWIg0HbgskZkgg',
      },
    ],
    [
      'meta',
      {
        name: 'naver-site-verification',
        content: '193f8ae341fe542f28e9ead7749281b82e008769',
      },
    ],
    [
      'script',
      {
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4301280535384303',
        crossorigin: 'anonymous',
      },
    ],
  ],
  base: '/',
  description: 'Blog by ella',
  logo: './assets/img/logo.png',
  theme: require.resolve('../../'),
  themeConfig: {
    authors: [
      {
        name: 'ella',
        avatar: '/assets/img/ella.jpeg',
        link: '#',
        linktext: 'Link',
      },
      {
        name: 'John Doe',
        avatar: '/assets/img/avatar.png',
        link: 'https://bootstrapstarter.com/',
        linktext: 'Follow',
      },
    ],
    footer: {
      contact: [
        {
          type: 'codepen',
          link: '#',
        },
        {
          type: 'facebook',
          link: '#',
        },
        {
          type: 'github',
          link: 'https://github.com/ellapresso',
        },
        {
          type: 'gitlab',
          link: '#',
        },
        {
          type: 'instagram',
          link: 'https://www.instagram.com/ellapresso',
        },
        {
          type: 'linkedin',
          link: 'https://www.linkedin.com/in/ellapresso',
        },
        {
          type: 'mail',
          link: 'ellapresso@gmail.com',
        },
        {
          type: 'messenger',
          link: '#',
        },
        {
          type: 'phone',
          link: '#',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/wowthemesnet',
        },
        {
          type: 'web',
          link: '#',
        },
      ],
      copyright: [
        {
          text: 'Licensed MIT.',
          link: 'https://bootstrapstarter.com/terms-and-conditions/',
        },
        {
          text: 'Made with Mediumish - free Vuepress theme',
          link: 'https://bootstrapstarter.com/bootstrap-templates/vuepress-theme-mediumish/',
        },
      ],
    },
    sitemap: {
      hostname: 'https://ellapresso.github.io/',
    },
    plugins: {
      sitemap: { hostname: 'https://ellapresso.github.io/' },
      'vuepress-plugin-code-copy': true,
      '@vuepress/back-to-top': true,
    },
    comment: {
      service: 'disqus',
      shortname: 'demowebsite',
    },
    newsletter: {
      endpoint:
        'https://wowthemes.us11.list-manage.com/subscribe/post?u=8aeb20a530e124561927d3bd8&id=8c3d2d214b',
    },
    feed: {
      canonical_base:
        'https://github.com/wowthemesnet/vuepress-theme-mediumish/',
    },
    smoothScroll: true,
  },
}
