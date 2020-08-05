import Security from './security';

export function DoLogout() {
  if (window.sender) {
    window.sender.reset();
  }
  localStorage.clear();
  Security.unsetAuthorizationToken();
}

export function IsLogged() {
  return Security.authorizationTokenExists();
}
