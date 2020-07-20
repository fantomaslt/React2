export interface Props {
  children?: React.ReactNode | any;
}

const aux: React.FC<Props> = (props) => props.children;

export default aux;
