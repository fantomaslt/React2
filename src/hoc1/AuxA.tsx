// type Tab = [string, React.ReactNode];

// type Main = (children?: any) => JSX.Element

export interface Props {
  children?: React.ReactNode | any;
}

const aux = (props: Props) => props.children;

export default aux;
