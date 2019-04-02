import React from 'react';

export interface Props {
  onClick: () => void
}

export default function Hello(props: Props) {
  return (
    <div>
      <h1>Hello storybook</h1>
      <button onClick={props.onClick}>Click</button>
    </div>
  );
}
