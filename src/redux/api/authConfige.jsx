// export const authConfig = {
//   clientId: "gateway-service",
//   authorizationEndpoint:
//     "http://localhost:8181/realms/fitness-oauth2/protocol/openid-connect/auth",
//   tokenEndpoint:
//     "http://localhost:8181/realms/fitness-oauth2/protocol/openid-connect/token",
//   redirectUri: "http://localhost:5173",
//   scope: "openid profile email offline_access",
//   autoLogin: false,
//   onRefreshTokenExpire: (event) => event.login(),
// };

export const authConfig = {
  clientId: "gateway-service", // 👈 same as in Keycloak
  authorizationEndpoint:
    "http://localhost:8181/realms/fitness-oauth2/protocol/openid-connect/auth",
  tokenEndpoint:
    "http://localhost:8181/realms/fitness-oauth2/protocol/openid-connect/token",
  redirectUri: "http://localhost:5173",
  scope: "openid profile email offline_access",
  autoLogin: false,
  onRefreshTokenExpire: (event) => event.login(),
};
