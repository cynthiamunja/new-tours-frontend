
export interface addUser{

    UserName:string,
    Email:string,
    UserPassword:string
}

export interface registerResponse{
    message:string 
}

export interface loginReq{

    UserName:string,

    UserPassword:string
}

export interface loginResponse{
    message:string,
    token:string
    isSuccess:boolean
}