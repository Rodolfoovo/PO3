import IBuilder from "../builder/interfaces/IBuilder";
import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauces from "../components/Sauces";
import Sanduiche from "../products/Sanduiche";

export default class Director{
    constructor(private builder:IBuilder){}

    public constructHotDog(){
        this.builder.setSanduicheType(SanduicheType.HOTDOG);
        this.builder.setBread(Bread.PAO_HOTDOG);
        this.builder.setSalad(Salad.ALFACE);
        this.builder.setProtein(Protein.SALSICHA);
        this.builder.addSauces(new Sauces("Ketchup"));
        this.builder.addSauces(new Sauces("Mostarda"));
    }
    public constructXSalada(){
        this.builder.setSanduicheType(SanduicheType.XSALADA);
        this.builder.setBread(Bread.PAO_FRANCES);
        this.builder.setSalad(Salad.TOMATE);
        this.builder.setProtein(Protein.HAMBURGUER);
        this.builder.addSauces(new Sauces("Molho Rose"));
        this.builder.addSauces(new Sauces("Molho de Mostarda"));
    }
}