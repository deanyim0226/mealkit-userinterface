export enum UserStatus {
    ACTIVE,
    INACTIVE,
    SUSPENDED
}

export enum Role {
    ADMIN,
    REGULAR
}

export interface User{

    id:number;
    email:string;
    userStatus:UserStatus;
    password:string;
    role:Role
    
}