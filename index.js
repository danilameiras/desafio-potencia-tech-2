function calcVitorias(victorias, 
    derrotas) {      
      const totalDeVitorias = victorias - 
    derrotas;      
      let nivel;

      if (victorias < 10) {
          nivel = "Ferro";
      } else if (victorias >= 11 && victorias <= 20) {
          nivel = "Bronze";
      } else if (victorias >= 21 && victorias <= 50) {
          nivel = "Prata";
      } else if (victorias >= 51 && victorias <= 80) {
          nivel = "Ouro";
      } else if (victorias >= 81 && victorias <= 90) {
          nivel = "Diamante";
      } else if (victorias >= 91 && victorias <= 100) {
          nivel = "Ascendente";
      } else {
          nivel = "Radiant";
      }   
      
      return { totalDeVitorias, nivel};
    }    
    
    const partidasGanhas = 90;
    const partidaPerdidas = 60;    
    const resultado = calcVitorias(partidasGanhas, partidaPerdidas);   
        console.log(`O Herói tem um saldo de ${resultado.totalDeVitorias} está no nível de ${resultado.nivel}`);