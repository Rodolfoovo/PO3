import SanduicheBuilder from "./builder/SanduicheBuilder";
import Director from "./director/Director";
import Sanduiche from "./products/Sanduiche";

const builder :SanduicheBuilder= new SanduicheBuilder();
const director :Director = new Director(builder);
director.constructHotDog();
const sanduiche : Sanduiche = builder.getSanduiche();
console.log("Preparando Sanduiche...");
console.log("Tipo: " + sanduiche.sanduicheType);
console.log("Pão: " + sanduiche.bread);
console.log("Salada: " + sanduiche.salad);
console.log("Carne" + sanduiche.protein);
console.log("Molhos:")
for(var i : number = 0; i < sanduiche.sauces.length; i++){
    console.log(" " + sanduiche.sauces[i].sauce);
}
