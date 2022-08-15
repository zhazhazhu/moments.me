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
