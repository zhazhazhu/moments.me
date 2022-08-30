export interface Moment {
  path: string;
  image: string;
  title: string;
  date: string;
  tags?: string[];
  type?: "post" | "featured";
  lang?: string;
  description?: string;
  platform?: string;
  duration?: string;
  recording?: string;
}

export interface Project {
  name: string;
  link: string;
  desc: string;
  icon: string;
}

export interface Photo {
  path: string;
  date: string;
  description: string;
}
