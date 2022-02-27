// Aula 3 - Heranças com classes
(function(){
  class Device {
    constructor(name) {
      this.name = name;
      this.state = 0; // 0 => turnOff 1 => turnOn
    }
    // Methods
    on() {
      if(this.state) {
        console.log(this.name + 'on.');
        return;
      }
      this.state = true;
    }
    off(){
      if(!this.state) {
        console.log(this.name + 'off');
        return;
      }
      this.state = false;
    }
  }
  
  class Phone extends Device {
    constructor(name, color, model, price, battery) {
      super(name);
      this.color = color;
      this.model = model;
      this.price = price;
      this.battery = battery;
    }
    status(){
      if(this.battery >=15) {
        console.log('Inicializing device');
      } else {
        console.log('Low battry, inicialization aborted.');
        return;
      } 
    }
  }

  class TV extends Device {
    constructor(name, color, price, width, resolution) {
      super(name);
      this.color = color;
      this.price = price;
      this.width = width;
      this.resolution = resolution;
    }
  }

  // Instance
  const phone = new Phone('Samsung', 'Black', 'A tab 7 lite', 1.400, 70);
  phone.status();
  const tv = new TV('Aoc', 'Grey', 3.500, 2.50, '8K');
  // Out
  console.log(phone);
  console.log(tv);
})();
