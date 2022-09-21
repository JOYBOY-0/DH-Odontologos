export enum PublicRoutes {
  HOME = '/',
  LOGIN = '/auth/login',
  REGISTER = '/auth/signup',
  AUTH = '/auth/*',
}

export enum PrivateRoutes {
  TURNOS= '/turnos',
  SUBMIT = '/submit',
  COLLECTION = '/collection',
}

export enum AdminRoutes {
  ADMIN = '/admin/*',
  ADMIN_USERS = '/admin/users',
  ADMIN_PATIENTS = '/admin/pacientes',
  ADMIN_DENTISTS = '/admin/odontologos',
}

