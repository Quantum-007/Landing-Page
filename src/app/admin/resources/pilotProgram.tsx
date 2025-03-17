import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  Create,
  Edit,
  Show,
  ShowButton,
  SimpleForm,
  SimpleShowLayout,
  TextInput,
  BooleanInput,
  required,
} from 'react-admin';
import { Grid } from '@mui/material';

export const PilotProgramList = () => (
  <List>
    <Datagrid bulkActionButtons={false}>
      <TextField source="name" />
      <TextField source="email" />
      <TextField source="company" />
      <TextField source="consent" />
      <TextField source="industry" />
      <TextField source="challenges" />
      <TextField source="roiTimeframe" />
      <TextField source="operationSize" />
      <TextField source="currentSystems" />
      <TextField source="automationLevel" />
      <TextField source="specificChallenges" />
      <TextField source="implementationTimeline" />
      <ShowButton />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const PilotProgramShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="email" />
      <TextField source="company" />
      <TextField source="consent" />
      <TextField source="industry" />
      <TextField source="challenges" />
      <TextField source="roiTimeframe" />
      <TextField source="operationSize" />
      <TextField source="currentSystems" />
      <TextField source="automationLevel" />
      <TextField source="roboticSolutions" />
      <TextField source="specificChallenges" />
      <TextField source="implementationTimeline" />
      <TextField source="additionalNotes" />
    </SimpleShowLayout>
  </Show>
);

const PilotProgramForm = () => (
  <SimpleForm>
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <TextInput source="name" validate={required()} fullWidth />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextInput source="email" validate={required()} fullWidth />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextInput source="company" fullWidth />
      </Grid>
      <Grid item xs={12} md={6}>
        <BooleanInput source="consent" />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextInput source="industry" fullWidth />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextInput source="challenges" fullWidth />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextInput source="roiTimeframe" fullWidth />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextInput source="operationSize" fullWidth />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextInput source="currentSystems" fullWidth />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextInput source="automationLevel" fullWidth />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextInput source="roboticSolutions" fullWidth />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextInput source="specificChallenges" fullWidth />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextInput source="implementationTimeline" fullWidth />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextInput source="additionalNotes" fullWidth />
      </Grid>
    </Grid>
  </SimpleForm>
);

export const PilotProgramEdit = () => (
  <Edit>
    <PilotProgramForm />
  </Edit>
);

export const PilotProgramCreate = () => (
  <Create>
    <PilotProgramForm />
  </Create>
);

export const PilotProgramResource = {
  List: PilotProgramList,
  Show: PilotProgramShow,
  Edit: PilotProgramEdit,
  Create: PilotProgramCreate,
};
