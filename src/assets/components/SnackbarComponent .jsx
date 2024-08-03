
import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const SnackbarComponent = ({ open, message, onClose }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={10000} // عرض الرسالة لمدة 10 ثواني
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} // أسفل اليمين
    >
      <Alert onClose={onClose} severity="success">
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarComponent;
