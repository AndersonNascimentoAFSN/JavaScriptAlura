// function createElement(type, className = '', insertText = '') {
//     const element = document.createElement(type);
//     const text = document.createTextNode(insertText);
//     element.classList.add(className);
//     element.appendChild(text);
//     return element;
// }

// function insertElementIn(element, insertIn) {
//     insertIn.appendChild(element);
// }

// function createTrInTable(type, className, insertInElementId) {
//     const insertIn = document.querySelector(insertInElementId);
//     const arrayElementsContainer = [];

//     for (let index = 0; index < 5; index += 1) {
//         const element = createElement(type, className);
//         arrayElementsContainer.push(element);
//     }

//     arrayElementsContainer.forEach((element) => {
//         insertIn.appendChild(element);
//     });

//     return arrayElementsContainer;
// }

// const dataPatients = [
//     {   id: 1,
//         name: 'Paulo',
//         weight: 100,
//         height: 2,
//         fat: 10,
//         imc: 0
//     },
//     {   id: 2,
//         name: 'João',
//         weight: 80,
//         height: 1.72,
//         fat: 40,
//         imc: 0
//     },
//     {   id: 3,
//         name: 'Erica',
//         weight: 54,
//         height: 1.64,
//         fat: 14,
//         imc: 0
//     },
// ];
// const elementsArray = createTrInTable('tr', 'paciente', '#tabela-pacientes');
// console.log(elementsArray);
// const p = createElement('p', 'Olá, mundo');
// console.log(p);

// insertElementIn(p, document.body);




const title = document.querySelector('.title');
title.textContent = 'Aparecida Nutricionista';


function validationWeightAndHeight(weight, height) {
    if(weight <= 0 || weight >= 1000) return { message: 'Peso inválido' };
    if(height <= 0 || height >= 1000) return { message: 'Altura inválida' };
    return true;
}

function calcImg(weight, height) {
    const imc = weight / (height ** 2);
    return imc.toFixed(2);
}

const patients = document.querySelectorAll('.paciente');
patients.forEach((patient) => {
    const weightElement = patient.querySelector('.info-peso');
    const heightElement = patient.querySelector('.info-altura');
    const imcElement = patient.querySelector('.info-imc');

    const weight = weightElement.textContent;
    const height = heightElement.textContent;

    const validation = validationWeightAndHeight(weight, height);

    if(validation.message) {
        imcElement.textContent = validation.message;
        // patient.style.cssText = 
        //     "color: red;\
        //     font-weight: bold;\
        //     background-Color: lightcoral";
        patient.classList.add('patient__invalid');
        return;
    }

    patient.classList.remove('patient__invalid');

    imcElement.textContent = calcImg(weight, height);
});
