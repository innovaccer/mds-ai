import React from 'react';
import { Title, Subtitle, Description, Primary, Controls, Stories } from '@storybook/blocks';

export const DocPage = () => {
  const isEmbedOnlyProp = window.location.search.includes('embed=prop-table');
  console.log('isEmbedOnlyProp', isEmbedOnlyProp);

  if(isEmbedOnlyProp) {
    return <Controls />
  }

  return (
    <div>
      <Title />
      <Subtitle />
      <Description />
      <Primary />
      <Controls />
      <Stories />
    </div>
  );
};
