import React from 'react';

export interface Props {
  children: React.ReactNode;
}

const aux: React.FC<Props> = (props) => <>{props.children}</>;

export default aux;
