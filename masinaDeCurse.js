import Masina from "./masina.js";

class masinaDeCurse extends Masina {
    constructor(
      marca,
      model,
      culoare,
      kilometraj
    ) {
      super(marca,model,culoare,kilometraj)};
      

      participaLaCampionat(pozitiaInCampionat)
      { 
        if (pozitiaInCampionat > 0){
            console.log(`Am castigat locul ${pozitiaInCampionat} `);
        }else if(pozitiaInCampionat <= 0){
            console.log("Nu am castigat nici un premiu");
        };
      };
    };

export default masinaDeCurse;