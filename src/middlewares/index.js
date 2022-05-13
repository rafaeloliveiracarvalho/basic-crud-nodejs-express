import verifyEmailMiddleware from './verifyEmail.middleware';
import verifyIfIsAdminMiddleware from './verifyIfIsAdmin.middleware';
import verifyAuthTokenMiddleware from './verifyAuthToken.middleware';
import getUserByParamsOr404Middleware from './getUserByParamsOr404.middleware';
import verifyUserPermissionMiddleware from './verifyUserPermission.middleware';
import normalizeBodyFieldsToUpdateUser from './normalizeBoryFieldsToUpdateUser.middleware';

export {
  verifyEmailMiddleware,
  verifyIfIsAdminMiddleware,
  verifyAuthTokenMiddleware,
  getUserByParamsOr404Middleware,
  verifyUserPermissionMiddleware,
  normalizeBodyFieldsToUpdateUser,
};
