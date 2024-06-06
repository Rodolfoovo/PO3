import PermissionType from "./PermissionType";

interface DataBaseItem{
    email:string;
    password:string;
    permission: PermissionType;
}

export const Database: DataBaseItem[] = [
    {email: "dansouza.no@gmail.com",
     password : "senha",
     permission: PermissionType.ADMIN
    },
    {email: "rodrigao@gmail.com",
    password : "senha2",
    permission: PermissionType.USER
    
    }
];


