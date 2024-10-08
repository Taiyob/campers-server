/* eslint-disable @typescript-eslint/no-explicit-any */
import { TErrorSource, TGenericErrorResponse } from '../interface/error';

const handleDuplicateError = (err: any): TGenericErrorResponse => {
  const match = err.message.match(/"([^"]*)"/);
  const extracted_msg = match && match[1];

  const statusCode = 400;
  const errorSources: TErrorSource = [
    {
      path: '',
      message: `${extracted_msg} is already exist in database`,
    },
  ];

  return {
    statusCode,
    message: 'Duplicate error',
    errorSources,
  };
};

export default handleDuplicateError;
