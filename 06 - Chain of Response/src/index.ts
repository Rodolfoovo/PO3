import CheckPermissionMiddleware from "./middleware/CheckPermissionMiddleware";
import ChecUserMiddleware from "./middleware/CheckUserMiddleware";
import Server from "./server/Server";
import * as readline from "readline";
declare var process;
const server = new Server;

function setPromptQuestion(){
    const rl = readline.createInterface({
        input : process.stdin, output: process.stdout
    });
    rl.question("Digite seu Email: ", email => {
        rl.question("Digite a sua senha: ", password => {
            server.login(email,password);
            rl.close();
        })
    })
}

const middleware = new ChecUserMiddleware();
middleware.linkWith(new CheckPermissionMiddleware());
server.setMiddleware(middleware);
setPromptQuestion();