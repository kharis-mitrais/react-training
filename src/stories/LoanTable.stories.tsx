import React from 'react';
import { ComponentMeta } from '@storybook/react';
import Book from '../components/Book';
import { BrowserRouter } from 'react-router-dom';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Book',
  component: Book,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   id: {
  //     name: 'id',
  //     type: { name: 'number', required: true},
  //     description: 'ID of the book',
  //     control: { type: 'number' }
  //   },
  // },
  decorators: [
    (Story: any) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    )
  ] 
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => <Book {...args} />;

export const Primary: any = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  id: 1,
  imageUrl: "https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-2-CRC.png",
  title: "Adobe Photoshop CS 99" 
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
