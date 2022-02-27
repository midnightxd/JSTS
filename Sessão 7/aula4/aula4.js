// Aula 4 - Métodos de instancia estáticas

(function(){
  class Control {
    constructor(device) {
      this.device = device;
      this.volume = 0;
    }

    // Metodo de instancia 
    volumeUp() {
      this.volume += 2;
    }
    volumeDown() {
      this.volume -= 2;
    }
    // metodo statico
    static genereteAID(max = 9999, min = 1000) {
      const rand = Math.random() * (max - min);
      return console.log(rand.toFixed(4));
    } 
  }
  const control = new Control('TV');
  console.log(control);
  Control.genereteAID();
})();
