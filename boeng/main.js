/*jshint esversion: 6 */

const btn = document.querySelector('.btn-submit'),
    field = document.querySelector('.message-field'),
    select = document.querySelector('.select');

function delMes(){
    field.textContent = "";
}

btn.addEventListener('click', () => {
    field.textContent = 'Сюда прилетит результат';
    setTimeout(delMes, 5000);
});