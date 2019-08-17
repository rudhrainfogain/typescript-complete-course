type BankAccountType = { money: number ,deposit: (value: number) => void};
let bankAcct: BankAccountType = {
    money: 2000,
    deposit(value: number) {
        this.money += value;
    }
};

let maself: { name: string, bankAccount: BankAccountType , hobbies: string[] } = {
    name: 'Rudhra',
    bankAccount: bankAcct,
    hobbies: ['Sports', 'Cooking']
};

maself.bankAccount.deposit(3000);

console.log(maself);

