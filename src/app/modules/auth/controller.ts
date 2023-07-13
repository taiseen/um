import { sendResponse } from '../../../shared/sendResponse';
import { TLoginUserResponse } from './interface';
import { Request, Response } from 'express';
import { authService } from './service';
import catchAsync from '../../../shared/catchAsync';
import config from '../../../config';

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const { ...loginData } = req.body;

  const result = await authService.loginUser(loginData);

  const { refreshToken, ...others } = result;

  // set refresh token into cookie
  const cookieOptions = {
    secure: config.env === 'production',
    httpOnly: true,
  };

  res.cookie('refreshToken', refreshToken, cookieOptions);

  sendResponse<TLoginUserResponse>(res, {
    statusCode: 200,
    success: true,
    message: 'User logged in successfully !',
    data: others,
  });
});

// const refreshToken = catchAsync(async (req: Request, res: Response) => {
//   const { refreshToken } = req.cookies;

//   const result = await AuthService.refreshToken(refreshToken);

//   // set refresh token into cookie
//   const cookieOptions = {
//     secure: config.env === 'production',
//     httpOnly: true,
//   };

//   res.cookie('refreshToken', refreshToken, cookieOptions);

//   sendResponse<IRefreshTokenResponse>(res, {
//     statusCode: 200,
//     success: true,
//     message: 'User logged in successfully !',
//     data: result,
//   });
// });

// const changePassword = catchAsync(async (req: Request, res: Response) => {
//   const user = req.user;
//   const { ...passwordData } = req.body;

//   await AuthService.changePassword(user, passwordData);

//   sendResponse(res, {
//     statusCode: 200,
//     success: true,
//     message: 'Password changed successfully !',
//   });
// });

export const authController = {
  loginUser,
  // refreshToken,
  // changePassword,
};
