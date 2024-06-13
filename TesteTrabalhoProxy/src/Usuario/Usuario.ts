import Permission from "./Permission";

interface Usuario{
    email:string;
    password:string;
    permission: Permission;
}
export default Usuario;