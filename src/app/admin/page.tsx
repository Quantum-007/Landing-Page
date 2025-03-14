'use client';

import React from 'react';
import { Admin, Resource } from 'react-admin';
import { dataProvider } from '../../lib/dataProvider';
import { GeneralInquiryResource } from './resources/generalInquery';
import { PilotProgramResource } from './resources/pilotProgram';

const AdminPage = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="generalInquery" list={GeneralInquiryResource.List} />
      <Resource name="pilotProgram" list={PilotProgramResource.List} />
    </Admin>
  );
};

export default AdminPage;
