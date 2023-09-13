import Masina from "./masina.js";
import masinaDeCurse from "./masinaDeCurse.js";

function main(){
    const masina1 = new Masina("VOLVO", "XC-60", "negru", 234.000);
    const masina2 = new Masina("Mazda", "CX-5", "verde", 111.000);
    const masina3 = new Masina("Dacia", "BIGGSTER", "albastru", 20.000);

    masina1.getProprietati();
    masina2.getProprietati();
    masina3.getProprietati();
};
    
main();
  
function instanteazaMasiniCurse(){
    const masinaDeCurse1 = new masinaDeCurse("Toyota", "Turbo", "rosu", 100.000);
    const masinaDeCurse2 = new masinaDeCurse("Ferrari", "SF90 Stradale", "galben", 90.000);
   

masinaDeCurse1.getProprietati();
masinaDeCurse1.participaLaCampionat(-1);
masinaDeCurse2.getProprietati();
masinaDeCurse2.participaLaCampionat(1);
}

instanteazaMasiniCurse();



