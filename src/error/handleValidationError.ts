import { TGenericErrorMessage } from '../interfaces/error';
import { TGenericErrorRes } from '../interfaces/common';
import mongoose from 'mongoose';

const handleValidationError = (
  err: mongoose.Error.ValidationError
): TGenericErrorRes => {
  const errors: TGenericErrorMessage[] = Object.values(err.errors).map(
    (el: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: el?.path,
        message: el?.message,
      };
    }
  );

  const statusCode = 400;

  return {
    statusCode,
    message: 'Validation Error',
    errorMessages: errors,
  };
};

export default handleValidationError;
