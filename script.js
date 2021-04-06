"use strict";

let employers = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа', 'евГений', ' Дарья', ' ', 'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'];
const nameCourse = 'Базовый React';
let command = [];
for (let i = 0; i < employers.length; i++) {
    if (employers[i].length > 0 && employers[i].trim() !== '') {
        command.push(employers[i]);
    }
}
for (let i = 0; i < command.length; i++) {
    command[i] = command[i].toLowerCase().trim();
    command[i] = command[i][0].toUpperCase() + command[i].slice(1);
}

let data = {
    cash: [3, 8, 3],
    react: ['JSX', 'components', 'props', 'state', 'hooks'],
    add: ['styled-components', 'firebase']
};

const calcCash = (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += +arr[i];
    }
    return total;
}

const lesson = calcCash(data.cash);

const makeBusiness = (director, teacher, allModule, gang, course) => {
    teacher = teacher || 'Максим';
    let sumTech = data.react.concat(data.add, 'и другие');
    console.log(`Стартуем новый курс: "${course}". Владелец: ${director}, преподаватель: ${teacher}. Всего уроков: ${allModule}.
Команда Академии: ${gang}`);
    console.log(`Первое что изучим будет ${data.react[0]}. Он очень похож на HTML!`);
    console.log('Технологии которые мы изучим: ');
    console.log.apply(null, sumTech);

}

makeBusiness.apply(null, ['Артем', null, lesson, command, nameCourse]);

/*const employers = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа', 'евГений', ' Дарья', ' ', 'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'];
const nameCourse = 'Базовый React';
const command = employers.filter(name => name.trim().length)
.map(name => name.trim().charAt(0).toUpperCase() + name.trim().substr(1).toLowerCase());

const data = {
  cash: [3, 8, 3],
  react: ['JSX', 'components', 'props', 'state', 'hooks'],
  add: ['styled-components', 'firebase']
};

const { cash, react, react: [first], add } = data;

const calcCash = everyCash => everyCash.reduce((prev, curr) => prev + curr);

const lesson = calcCash(cash);

function makeBusiness(director, allModule, gang, course, teacher = 'Максим') {
  const sumTech = [...react, ...add, 'и другие'];
  console.log(`Стартуем новый курс: ${course}. Владелец: ${director}, преподаватель: ${teacher}. Всего уроков: ${allModule}
Команда Академии: ${gang}
Первое что изучим будет ${first}. Он очень похож на HTML!
Технологии которые мы изучим:
${sumTech}`);
}

makeBusiness('Артем', lesson, command, nameCourse);*/