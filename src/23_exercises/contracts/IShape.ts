interface IShape {
  name: string;
  color: string;
  draw: () => void;
  isRound: () => boolean;
}
export default IShape;
