---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/Fl0wyn.png',
    name: 'Florian',
    title: "Web Developer & SysAdmin",
    links: [{ icon: 'github', link: 'https://github.com/Fl0wyn' }]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
      <template #title>
      Welcome to my Wiki
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="members" />
</VPTeamPage>
