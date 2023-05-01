import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'Feranet.fr',
  description: 'Welcome to my website',

  lastUpdated: true,
  cleanUrls: 'without-subfolders',

  head: [
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['script', { defer: true, src: '/_vercel/insights/script.js' }]
  ],

  markdown: {
    headers: {
      level: [0, 0]
    }
  },

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/wiki/': sidebarWiki(),
      '/snippet/': sidebarSnippet(),
    },

    editLink: {
      pattern: 'https://github.com/Fl0wyn/feranet.fr/edit/master/docs/:path',
      text: 'Edit this page on GitHub'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Fl0wyn/feranet.fr' }
    ],

    footer: {
      message: 'Released under the Creative Commons Zero v1.0 Universal',
      copyright: 'Copyright © 2023 — feranet.fr'
    },

  }
})

function nav() {
  return [
    { text: 'Wiki', link: '/wiki/home', activeMatch: '/wiki/' },
    { text: 'Snippet', link: '/snippet/bash', activeMatch: '/snippet/' },
    { text: 'Dribbble', link: 'https://dribbble.com/Fl0wyn' },
  ]
}

function sidebarWiki() {
  return [
    {
      text: 'Introduction',
      collapsible: true,
      items: [
        { text: 'Home', link: '/wiki/home' },
      ]
    },
    {
      text: 'Windows',
      collapsible: true,
      items: [
        { text: 'Bloatware & trackers', link: '/wiki/windows/bloatware-trackers' },
        { text: 'Windows commands', link: '/wiki/windows/commands' },
        { text: 'Upgrade to Windows 11', link: '/wiki/windows/upgrade-windows-11' },
        { text: 'Key activation', link: '/wiki/windows/enable-key' },
      ]
    },
    {
      text: 'Linux',
      collapsible: true,
      items: [
        { text: 'Archives', link: '/wiki/linux/archives' },
        { text: 'Chroot SFTP', link: '/wiki/linux/chrootSFTP' },
        { text: 'Conditions', link: '/wiki/linux/conditions' },
        { text: 'Docker', link: '/wiki/linux/docker' },
        { text: 'Iptables & Fail2ban', link: '/wiki/linux/iptables-fail2ban' },
        { text: 'Share SAMBA', link: '/wiki/linux/samba' },
        { text: 'Meraki auto reboot', link: '/wiki/linux/scheduleMeraki' },
        { text: 'Screen', link: '/wiki/linux/screen' },
        { text: 'SSH', link: '/wiki/linux/ssh' },
        { text: 'Text manipulation', link: '/wiki/linux/textManipulation' },
        { text: 'Vim', link: '/wiki/linux/vim' },
      ]
    },
  ]
}

function sidebarSnippet() {
  return [
    {
      text: 'Snippet',
      collapsible: false,
      items: [
        { text: 'Bash', link: '/snippet/bash' },
        { text: 'JS - Method', link: '/snippet/javascript-method' },
        { text: 'JS - Config', link: '/snippet/javascript-config' },
        { text: 'Apache2 & Nginx', link: '/snippet/apache2-nginx' },
        { text: 'PowerShell', link: '/snippet/powershell' },
      ]
    }
  ]
}