import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'Feranet.fr',
  description: 'Welcome to my website',

  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['script', { defer: '' , src: '/_vercel/insights/script.js' }]
  ],

  themeConfig: {

    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Wiki', link: '/wiki/home', activeMatch: '/wiki/' },
      { text: 'Snippet', link: '/snippet/bash', activeMatch: '/snippet/' }
    ],

    sidebar: {
      '/wiki/': [
        {
          text: 'Linux',
          collapsed: false,
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
            { text: 'Vim', link: '/wiki/linux/vim' }
          ]
        },
        {
          text: 'Windows',
          collapsed: false,
          items: [
            { text: 'Bloatware & trackers', link: '/wiki/windows/bloatware-trackers' },
            { text: 'Windows commands', link: '/wiki/windows/commands' },
            { text: 'Upgrade to Windows 11', link: '/wiki/windows/upgrade-windows-11' },
            { text: 'Key activation', link: '/wiki/windows/enable-key' }
          ]
        }
      ],
      '/snippet/': [
        {
          text: 'Snippet',
          items: [
            { text: 'Bash', link: '/snippet/bash' },
            { text: 'JS - Method', link: '/snippet/javascript-method' },
            { text: 'JS - Config', link: '/snippet/javascript-config' },
            { text: 'Apache2 & Nginx', link: '/snippet/apache2-nginx' },
            { text: 'PowerShell', link: '/snippet/powershell' }
          ]
        }
      ],
    },

    editLink: {
      pattern: 'https://github.com/Fl0wyn/feranet.fr/edit/master/docs/:path',
      text: 'Edit this page on GitHub'
    },

    socialLinks: [
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z"/></svg>'
        },
        link: 'https://dribbble.com/Fl0wyn'
      },
      { icon: 'github', link: 'https://github.com/Fl0wyn/feranet.fr' }
    ],

    footer: {
      message: 'Released under the Creative Commons Zero v1.0 Universal',
      copyright: 'Copyright © 2023 — feranet.fr'
    },

  }
})

