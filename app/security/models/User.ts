export interface IUser {
  userName: string;
  password: string;
  lastLoginTime?: number;
}

export class User implements IUser {
  userName: string;
  password: string;
  lastLoginTime: number;

  set lastLogin(user: IUser) {
    this.userName = user.userName;
    this.password = user.password;
    this.lastLoginTime = Date.now();
  }

  get lastLogin(): IUser {
    return {
      userName: this.userName,
      password: this.password,
      lastLoginTime: this.lastLoginTime
    }
  }
}
