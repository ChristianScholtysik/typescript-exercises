import Actor from "./Actor";

class Episode {
  title: string;
  length: string;
  description: string;
  actors: Actor[];

  constructor(
    title: string,
    length: string,
    description: string,
    actors: Actor[]
  ) {
    this.title = title;
    this.length = length;
    this.description = description;
    this.actors = actors;
  }
}
export default Episode;
