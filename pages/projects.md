---
title: Projects - Zhazhazhu
display: Projects
subtitle: ""
description: "my projects"
plum: true
projects:
  Latest:
    - name: "Vue3-oidc"
      link: "https://github.com/zhazhazhu/vue3-oidc"
      desc: "Based on oidc-client-ts and vue3 responsive login authorization"
      icon: "i-arcticons-droidcam"
    - name: "Moments.me"
      link: "https://github.com/zhazhazhu/moments.me"
      desc: "This is my blog"
      icon: "i-carbon-blog"
---

<ProjectsList :projects="frontmatter.projects"></ProjectsList>
