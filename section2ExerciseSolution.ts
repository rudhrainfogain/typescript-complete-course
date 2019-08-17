type BankAccountType = { money: number ,deposit: (value: number) => void};
let bankAccount: BankAccountType = {
    money: 2000,
    deposit(value: number) {
        this.money += value;
    }
};

let myself: { name: string, bankAccount: BankAccountType , hobbies: string[] } = {
    name: 'Rudhra',
    bankAccount: bankAccount,
    hobbies: ['Sports', 'Cooking']
};

myself.bankAccount.deposit(3000);

console.log(myself);

