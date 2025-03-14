import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const GeneralInquiryList = () => (
  <List>
    <Datagrid>
      <TextField source="name" />
      <TextField source="email" />
      <TextField source="message" />
      <TextField source="company" />
      <TextField source="consent" />
    </Datagrid>
  </List>
);

export const GeneralInquiryResource = {
  List: GeneralInquiryList,
};
