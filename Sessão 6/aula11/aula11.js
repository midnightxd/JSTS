// Aula 11 - Polimorfismo

(function(){
  // 
  function Account (agency, accout, balance) {
    this.agency = agency;
    this.accout = accout;
    this.balance = balance;
  };
  
  // Proto
  Account.prototype.take = function(value) {
    if(value > this.balance) {
      console.log(`Issuficient balance: U$${this.balance}.`);
      return;
    }
    this.balance -= value;
    //console.log('TAKE\n');
    this.seeBalance();
  };

  // Proto
  Account.prototype.deposity = function(value) {
    this.balance += value;
    //console.log('Deposity\n');
    this.seeBalance();
  };

  // Proto
  Account.prototype.seeBalance = function() {
    const msg = `Agency: ${this.agency}.\nAccount:${this.accout}.\nBalance: U$${this.balance.toFixed(2)}.`;
    return console.log(msg);
  };

  function CurrentAccount(agency, accout, balance, limite) {
    Account.call(this, agency, accout, balance);
    this.limite = limite;
  };
  CurrentAccount.prototype = Object.create(Account.prototype);
  CurrentAccount.constructor = CurrentAccount;

  CurrentAccount.prototype.take = function(value) {
    if(value > (this.balance + this.limite)) {
      console.log(`Issuficient balance: $${this.balance.toFixed(2)}.\n`);
      return;
    }
    this.balance -= value;
    this.seeBalance();
  };

  function PoupanceAccount(agency, accout, balance) {
    Account.call(this, agency, accout, balance);
  }
  PoupanceAccount.prototype = Object.create(Account.prototype);
  PoupanceAccount.prototype.constructor = PoupanceAccount;

  const cc = new CurrentAccount(12, 2033, 0, 100);
  console.log('CurrentAccount');
  cc.deposity(10);
  //cc.seeBalance();
  cc.take(110);
  cc.take(1)

  console.log('PoupanceAccount');
  const cp = new PoupanceAccount(15, 2055, 0);
  cp.deposity(10);
  cp.take(110);
  cp.take(1);
  
})();
