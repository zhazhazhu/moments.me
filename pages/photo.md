---
title: Photo Wall
description: "my photo"
plum: true
photos:
  - path: "/photo/qixi-1.jpeg"
    date: "2022-08-31"
    description: "Cat"
  - path: "/photo/taozi-1.JPG"
    date: "2022-08-31"
    description: "Cat"
  - path: "/photo/qixi-2.jpeg"
    date: "2022-08-31"
    description: "Cat"
  - path: "/photo/qixi-3.jpeg"
    date: "2022-08-31"
    description: "Cat"
  - path: "/photo/toy-us.JPG"
    date: "2022-08-31"
    description: "Toy-us"
  - path: "/photo/son-4.JPG"
    date: "2022-08-31"
    description: "Son-Cat"
  - path: "/photo/son-5.JPG"
    date: "2022-08-31"
    description: "Son-Cat"
  - path: "/photo/son-6.JPG"
    date: "2022-08-31"
    description: "Son-Cat"
---

<PhotoList :photos="frontmatter.photos"></PhotoList>
