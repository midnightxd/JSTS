// Aula 2 - Getters e Setters com class

(function() {
  // Class car
  const _speed = Symbol();
  class Car {
    constructor(name) {
      this.name = name;
      this[_speed] = 0;
    }

    set speed(value) {
      if(typeof value !== 'number') return;
      if(value >= 100 || value <= 100) return;
      this[_speed] = value;
    }
    get speed() {
      return this[_speed];
    }

    speedUp() {
      if(this[_speed] >= 100) return;
      this[_speed]++;
    }
    breaker() {
      if(this[_speed] <= 100) return;
      this[_speed]--;
    }
  }

  const myCar = new Car('Fusca');
  for(let i = 0; i <= 200; i++) {
    myCar.speedUp();
  }
  myCar.speed = 120;
  console.log(myCar.speed);
})();
