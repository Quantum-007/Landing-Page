import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  DeleteButton,
  EditButton,
  Edit,
  TextInput,
  BooleanInput,
  SimpleForm,
  Create,
  required
} from 'react-admin';
import { Grid } from '@mui/material';

export const GeneralInquiryList = () => (
  <List>
    <Datagrid bulkActionButtons={false}>
      <TextField source="name" />
      <TextField source="email" />
      <TextField source="message" />
      <TextField source="company" />
      <TextField source="consent" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const GeneralInquiryCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextInput source="name" validate={required()} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextInput source="email" validate={required()} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextInput source="message" validate={required()} fullWidth multiline rows={3} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextInput source="company" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <BooleanInput source="consent" validate={required()} />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
);

export const GeneralInquiryEdit = () => (
  <Edit>
    <SimpleForm>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextInput source="name" validate={required()} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextInput source="email" validate={required()} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextInput source="message" validate={required()} fullWidth multiline rows={3} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextInput source="company" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <BooleanInput source="consent" validate={required()} />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export const GeneralInquiryResource = {
  List: GeneralInquiryList,
  Create: GeneralInquiryCreate,
  Edit: GeneralInquiryEdit,
};
