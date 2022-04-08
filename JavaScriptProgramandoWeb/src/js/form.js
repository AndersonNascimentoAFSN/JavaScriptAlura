function validationWeightAndHeight(weight, height) {
    if (weight <= 0 || weight >= 1000) return { message: 'Peso inválido' };
    if (height <= 0 || height >= 1000) return { message: 'Altura inválida' };
    return true;
}

function calcImg(weight, height) {
    const validation = validationWeightAndHeight(weight, height);
    if (validation.message) {
        return;
    }

    const imc = weight / (height ** 2);
    return imc.toFixed(2);
}

function getPatientDataForm(form) {
    const imc = calcImg(form.peso.value, form.altura.value);
    const patient = {
        name: form.nome.value,
        weight: form.peso.value,
        height: form.altura.value,
        fat: form.gordura.value,
        imc
    }
    return patient;
}

const buttonAdd = document.querySelector('#adicionar-paciente');

buttonAdd.addEventListener("click", function (event) {
    event.preventDefault();

    const form = document.querySelector('#form-adiciona');
    const patientData = getPatientDataForm(form);

    const patientTr = document.createElement('tr');

    Object.values(patientData).forEach((data) => {
        const patientTd = document.createElement('td');
        patientTd.textContent = data;
        patientTr.appendChild(patientTd);
    });

    const tablePatients = document.querySelector('#tabela-pacientes');
    tablePatients.appendChild(patientTr);

    form.reset();
});
