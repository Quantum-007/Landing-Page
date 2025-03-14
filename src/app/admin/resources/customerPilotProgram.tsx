import React from 'react';

import { List, Datagrid, TextField } from 'react-admin';

export const CustomerPilotProgramList = () => (
  <List>
    <Datagrid>
      <TextField source="name" />
      <TextField source="email" />
      <TextField source="zipCode" />
      <TextField source="consent" />
    </Datagrid>
  </List>
);

export const CustomerPilotProgramResource = {
  List: CustomerPilotProgramList,
};
