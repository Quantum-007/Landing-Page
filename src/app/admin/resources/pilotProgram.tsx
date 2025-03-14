import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const PilotProgramList = () => (
  <List>
    <Datagrid>
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
    </Datagrid>
  </List>
);

export const PilotProgramResource = {
  List: PilotProgramList,
};
