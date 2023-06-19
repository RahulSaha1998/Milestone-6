const kodomAli = {
    name: 'kodom ali',
    money: 5000,
    study: 'math',
    subjects: ['calculus','geometry','algebra'],
    exam: function(){
        return this.name +'is participating in an exam';
    },
    improveExam: function(subject){
        this.exam();
        return `${this.name} is takeing improve exam on ${subject}`
    },
    treatDey: function(amount, tips){
        this.money = this.money - amount - tips;
        return this.money;
    }
}


const result = kodomAli.exam()

const badamAli = {
    name: 'kacha badam',
    money: 8000
}


const result2 = kodomAli.exam.call(badamAli);
// console.log(result2)
const badamMoney  = kodomAli.treatDey.call(badamAli, 400, 40)
console.log(badamMoney);
const badamMoney2  = kodomAli.treatDey.apply(badamAli, [1000, 100]);
console.log(badamMoney2);

const badamMAliTreat  = kodomAli.treatDey.bind(badamAli);
const remaining = badamMAliTreat(1000, 10);
console.log(remaining)

