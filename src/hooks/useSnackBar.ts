import { useState, useCallback } from 'react';
import { AlertColor } from '@mui/material';

export function useSnackbar() {
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertSeverity, setAlertSeverity] = useState<AlertColor>('info');

  const showSnackbar = useCallback(
    (message: string, severity: AlertColor = 'info') => {
      setAlertMessage(message);
      setAlertSeverity(severity);
    },
    [],
  );

  const closeSnackbar = useCallback(() => {
    setAlertMessage(null);
  }, []);

  return {
    alertMessage,
    alertSeverity,
    showSnackbar,
    closeSnackbar,
  };
}
