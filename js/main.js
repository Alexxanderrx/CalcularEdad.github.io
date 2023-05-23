const dia = document.getElementById("day");
const mes = document.getElementById("month");
const anho = document.getElementById("year");

const fecha_actual = new Date();
const dia_actual = fecha_actual.getDate();
let mes_actual = fecha_actual.getMonth() + 1;
let anho_actual = fecha_actual.getFullYear();

// const date_error = document.getElementsByClassName("date_error");

const btn = document.getElementById("submit");

const span_day = document.getElementById("span_day");
const span_month = document.getElementById("span_mon");
const span_year = document.getElementById("span_yea");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    activar();
});

function activar() {
    val_dia();
    val_mon();
    val_yea();

    find_dia();
    find_mes();
    find_anhos();
    // Este ↓ si debe ir al ultimo porfavor no lo muevas ↓↓↓
    val_date();
};

const mes_w_30 = ["2", "4", "6", "9", "11"]
const mes_w_31 = ["1", "3", "5", "7", "8", "10", "12"]

function find_dia() {
    let mostrar_dia = dia_actual - dia.value;

    if (mostrar_dia < 0 && mes_w_30.includes(mes.value)) {
        mostrar_dia = 30 + mostrar_dia;
        span_day.innerHTML = mostrar_dia;
        mes_actual--
    } else if (mostrar_dia < 0 && mes_w_31.includes(mes.value)) {
        mostrar_dia = 31 + mostrar_dia;
        span_day.innerHTML = mostrar_dia;

        mes_actual--
    } else {
        span_day.innerHTML = mostrar_dia;
    };
};

function find_mes() {
    let mostrar_mes = mes_actual - mes.value;

    if (mostrar_mes < 0) {
        mostrar_mes = 12 + mostrar_mes;
        span_month.innerHTML = mostrar_mes;

        // anho_actual--
    } else {
        span_month.innerHTML = mostrar_mes;
    };
};

function find_anhos() {
    let mostrar_anho = anho_actual - anho.value;
    if (mes_actual < mes.value) {
        span_year.innerHTML = mostrar_anho - 1;
    } else {
        span_year.innerHTML = mostrar_anho;
    }
};

function val_dia() {
    dia.value = parseInt (dia.value);
    if (dia.value > 31 || dia.value < 0) {
        document.getElementById("lab_day").style.color = 'rgb(193, 49, 69)';
        dia.style.border = '1px solid rgb(193, 49, 69)';
        document.getElementById("day_error").style.color = 'rgb(193, 49, 69)';
        error();
    } else {
        document.getElementById("lab_day").style.color = 'rgb(163, 163, 163)';
        dia.style.border = '1px solid rgb(0, 0, 0)';
        document.getElementById("day_error").style.color = 'transparent';
    };

}

function val_mon() {
//   Deve colocarse esto ↓ o sino los valores con 0 al principio no lo reconocera bien
    mes.value = parseInt (mes.value);
    if (mes.value > 12 || mes.value < 0) {
        document.getElementById("lab_month").style.color = 'rgb(193, 49, 69)';
        mes.style.border = '1px solid rgb(193, 49, 69)';
        document.getElementById("mon_error").style.color = 'rgb(193, 49, 69)';
        error();
    } else {
        document.getElementById("lab_month").style.color = 'rgb(163, 163, 163)';
        mes.style.border = '1px solid rgb(0, 0, 0)';
        document.getElementById("mon_error").style.color = 'transparent';
    };
}

function val_yea() {
    anho.value = parseInt(anho.value);
    if (anho.value > anho_actual) {
        document.getElementById("lab_year").style.color = 'rgb(193, 49, 69)';
        anho.style.border = '1px solid rgb(193, 49, 69)';
        document.getElementById("yea_error").style.color = 'rgb(193, 49, 69)';
        error();
    } else {
        document.getElementById("lab_year").style.color = 'rgb(163, 163, 163)';
        anho.style.border = '1px solid rgb(0, 0, 0)';
        document.getElementById("yea_error").style.color = 'transparent';
    };
}
function error() {
    span_day.innerHTML = "- -";
    span_month.innerHTML = "- -";
    span_year.innerHTML = "- -";
}

function val_date() {
    if (dia.value == "" || mes.value == "" || anho.value == "") {
        error();
        console.log("falta un dato");
    } else if (anho.value == anho_actual && mes.value > mes_actual) {
        if (dia.value >= dia_actual) {
            error();
        } else {

        };
    } else {
        console.log("todos los datos ingresados");
    };
}
