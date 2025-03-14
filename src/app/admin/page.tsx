'use client';

import React, { useEffect, useState } from 'react';
import { Admin, Resource } from 'react-admin';
import { dataProvider } from '../../lib/dataProvider';
import { PilotProgramResource } from './resources/pilotProgram';
import { GeneralInquiryResource } from './resources/generalInquery';
import { CustomerPilotProgramResource } from './resources/customerPilotProgram'

const AdminPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div>Loading admin interface...</div>;
  }

  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="generalInquery" list={GeneralInquiryResource.List} />
      <Resource name="businessPilotProgram" list={PilotProgramResource.List} />
      <Resource name="customerPilotProgram" list={CustomerPilotProgramResource.List} />
    </Admin>
  );
};

export default AdminPage;