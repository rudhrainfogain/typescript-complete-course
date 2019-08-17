"use strict";
var bankAcct = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var maself = {
    name: 'Rudhra',
    bankAccount: bankAcct,
    hobbies: ['Sports', 'Cooking']
};
maself.bankAccount.deposit(3000);
console.log(maself);
//# sourceMappingURL=section2ExerciseSolution.js.map