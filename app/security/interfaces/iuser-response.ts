export namespace IUserResponse {

  export interface Preferences {
    dashboard: string;
    hasSeenTutorial: string;
  }

  export interface RolesObject {
    uuid: string;
    type: string;
    name: string;
    groupType: string;
    systemPermission: boolean;
  }

  export interface User {
    type: string;
    uuid: string;
    version: number;
    aclEntries: string[];
    name: string;
    givenName: string;
    surname: string;
    organizationUuid: string;
    email: string;
    lastLoggedTime: number;
    passwordChangeRequired: boolean;
    locked: boolean;
    activated: boolean;
    preferences: Preferences;
    sysRoles: any[];
    roles: string[];
    rolesObjects: RolesObject[];
    readonly: boolean;
  }

  export interface BillingPerson {
    name: string;
    email: string[];
  }

  export interface BillingSettings {
    billingPerson: BillingPerson;
    currency: string;
  }

  export interface PasswordPolicy {
    allowSimplePassword: boolean;
    minimumPasswordLength: number;
    minimumNumbersOfLowerCaseLetters: number;
    minimumNumbersOfUpperCaseLetters: number;
    minimumNumbersOfDigits: number;
    requiredNumbersOfSymbols: number;
    maximumPasswordAge: number;
  }

  export interface TechnicalPerson {
    name: string;
    email: string[];
  }

  export interface PropertyMap {
  }

  export interface Organization {
    uuid: string;
    aclEntries: string[];
    name: string;
    uniqueName: string;
    billingSettings: BillingSettings;
    passwordPolicy: PasswordPolicy;
    technicalPerson: TechnicalPerson;
    assetPath: string;
    reportLocaleString: string;
    version: number;
    effectivePermissions: string;
    createdDate: number;
    modifiedDate: number;
    propertyMap: PropertyMap;
    createdUser: string;
    modifiedUser: string;
    licenseOrganizationUuid: string;
    licenseModelUuid: string;
    licenseModelName: string;
    licenseSignature: string;
    licenseHandshakeDate: number;
    defaultRoles: string[];
  }

  export interface Role {
    uuid: string;
    type: string;
    name: string;
    groupType: string;
    systemPermission: boolean;
  }

  export interface Roles {
    roles: Role[];
  }

  export interface PUBLICAPPFEATURE {
    organizationUuid: string;
    permissionUuid: string;
    expirationDate: number;
    validationState: string;
    metric: number;
  }

  export interface USERFEATURE {
    organizationUuid: string;
    permissionUuid: string;
    expirationDate: number;
    validationState: string;
    metric: number;
  }

  export interface GROUPFEATURE {
    organizationUuid: string;
    permissionUuid: string;
    expirationDate: number;
    validationState: string;
    metric: number;
  }

  export interface NATIVEAPPFEATURE {
    organizationUuid: string;
    permissionUuid: string;
    expirationDate: number;
    validationState: string;
    metric: number;
  }

  export interface DEVICEFEATURE {
    organizationUuid: string;
    permissionUuid: string;
    expirationDate: number;
    validationState: string;
    metric: number;
  }

  export interface WEBCLIPAPPFEATURE {
    organizationUuid: string;
    permissionUuid: string;
    expirationDate: number;
    validationState: string;
    metric: number;
  }

  export interface SECUREMAILGATEWAYFEATURE {
    organizationUuid: string;
    permissionUuid: string;
    expirationDate: number;
    validationState: string;
    metric: number;
  }

  export interface LDAPFEATURE {
    organizationUuid: string;
    permissionUuid: string;
    expirationDate: number;
    validationState: string;
    metric: number;
  }

  export interface RELUTIONAPPFEATURE {
    organizationUuid: string;
    permissionUuid: string;
    expirationDate: number;
    validationState: string;
    metric: number;
  }

  export interface LicenseInfos2 {
    PUBLIC_APP_FEATURE: PUBLICAPPFEATURE;
    USER_FEATURE: USERFEATURE;
    GROUP_FEATURE: GROUPFEATURE;
    NATIVE_APP_FEATURE: NATIVEAPPFEATURE;
    DEVICE_FEATURE: DEVICEFEATURE;
    WEBCLIP_APP_FEATURE: WEBCLIPAPPFEATURE;
    SECURE_MAIL_GATEWAY_FEATURE: SECUREMAILGATEWAYFEATURE;
    LDAP_FEATURE: LDAPFEATURE;
    RELUTION_APP_FEATURE: RELUTIONAPPFEATURE;
  }

  export interface LicenseInfos {
    licenseModelName: string;
    licenseInfos: LicenseInfos2;
  }

  export interface RootObject {
    user: User;
    organization: Organization;
    roles: Roles;
    licenseInfos: LicenseInfos;
    activeFeatureToggles: string[];
  }

}

