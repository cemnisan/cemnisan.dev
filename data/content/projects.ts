import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "İlayda Öğüşlü",
    desc: "Family counselor, İlayda Öğüşlü.",
    img: "/static/projects/ilaydaoguslu.png",
    link: "https://ilaydaoguslu.com/",
    tags: ["React", "NextJS", "TailwindCSS"],
  },
  {
    id: 1,
    title: "Konak Rotaract",
    desc: "Rotaract club of Konak, Turkey.",
    img: "/static/projects/konakrotaract.png",
    link: "https://konakrotaract.org/",
    tags: ["React", "NextJS", "TailwindCSS"],
  },
  {
    id: 2,
    title: "Garnetim",
    desc: "Corporate company selling garnet sand.",
    img: "/static/projects/garnetim.png",
    link: "https://garnetim.com/",
    tags: ["React", "NextJS", "TailwindCSS"],
  },
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects
