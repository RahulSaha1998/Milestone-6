// console.log(this)

const kodomAli = {
    name: 'kodom ali',
    money: 5000,
    study: 'math',
    subjects: ['calculus','geometry','algebra'],
    exam: function(){
        console.log(this)
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

kodomAli.exam();
