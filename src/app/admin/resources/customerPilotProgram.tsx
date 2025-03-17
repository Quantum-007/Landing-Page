import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  BooleanField,
  Edit,
  SimpleForm,
  TextInput,
  BooleanInput,
  Create,
  EditButton,
  DeleteButton,
  required
} from 'react-admin';
import { Grid } from '@mui/material';

export const CustomerPilotProgramList = () => (
  <List>
    <Datagrid bulkActionButtons={false}>
      <TextField source="name" />
      <EmailField source="email" />
      <TextField source="zipCode" />
      <BooleanField source="consent" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const CustomerPilotProgramEdit = () => (
  <Edit>
    <SimpleForm>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextInput source="name" validate={required()} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextInput source="email" validate={required()} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextInput source="zipCode" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <BooleanInput source="consent" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export const CustomerPilotProgramCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextInput source="name" validate={required()} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextInput source="email" validate={required()} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextInput source="zipCode" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <BooleanInput source="consent" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
);

export const CustomerPilotProgramResource = {
  List: CustomerPilotProgramList,
  Edit: CustomerPilotProgramEdit,
  Create: CustomerPilotProgramCreate,
};
