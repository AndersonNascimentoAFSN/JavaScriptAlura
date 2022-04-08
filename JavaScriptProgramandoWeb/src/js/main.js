const title = document.querySelector('.title');
title.textContent = 'Aparecida Nutricionista';

function validationWeightAndHeight(weight, height) {
  if (weight <= 0 || weight >= 1000) return { message: 'Peso inválido' };
  if (height <= 0 || height >= 1000) return { message: 'Altura inválida' };
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

  if (validation.message) {
    imcElement.textContent = validation.message;
    patient.classList.add('patient__invalid');
    return;
  }

  patient.classList.remove('patient__invalid');

  imcElement.textContent = calcImg(weight, height);
});
