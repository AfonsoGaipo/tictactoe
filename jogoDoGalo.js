function myFunc(){

    //valores das casas
    var b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6 = document.getElementById("b6").value;
    b7 = document.getElementById("b7").value;
    b8 = document.getElementById("b8").value;
    b9 = document.getElementById("b9").value;

    var b1btn, b2btn, b3btn, b4btn, b5btn,
        b6btn, b7btn, b8btn, b9btn;


    //casas
    b1btn = document.getElementById("b1");
    b2btn = document.getElementById("b2");
    b3btn = document.getElementById("b3");
    b4btn = document.getElementById("b4");
    b5btn = document.getElementById("b5");
    b6btn = document.getElementById("b6");
    b7btn = document.getElementById("b7");
    b8btn = document.getElementById("b8");
    b9btn = document.getElementById("b9");

    //checka todas as possiveis combinaçoes vencedoras
    if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' ||
        b2 == 'X') && (b3 == 'x' || b3 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Jogador X ganhou!";
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b1btn.style.color = "red";
        b2btn.style.color = "red";
        b3btn.style.color = "red";
    }
    else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' ||
        b4 == 'X') && (b7 == 'x' || b7 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Jogador X ganhou!";
        b2btn.disabled = true;
        b3btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b1btn.style.color = "red";
        b4btn.style.color = "red";
        b7btn.style.color = "red";
    }
    else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' ||
        b8 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Jogador X ganhou!";

        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;

        b7btn.style.color = "red";
        b8btn.style.color = "red";
        b9btn.style.color = "red";
    }
    else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' ||
        b6 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Jogador X ganhou!";

        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;

        b3btn.style.color = "red";
        b6btn.style.color = "red";
        b9btn.style.color = "red";
    }
    else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' ||
        b5 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Jogador X ganhou!";
        b2btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;

        b1btn.style.color = "red";
        b5btn.style.color = "red";
        b9btn.style.color = "red";
    }
    else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' ||
        b5 == 'X') && (b7 == 'x' || b7 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Jogador X ganhou!";
        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b3btn.style.color = "red";
        b5btn.style.color = "red";
        b7btn.style.color = "red";
    }
    else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' ||
        b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Jogador X ganhou!";
        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b9btn.disabled = true;

        b2btn.style.color = "red";
        b5btn.style.color = "red";
        b8btn.style.color = "red";
    }
    else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' ||
        b5 == 'X') && (b6 == 'x' || b6 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Jogador X ganhou!";
        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b4btn.style.color = "red";
        b5btn.style.color = "red";
        b6btn.style.color = "red";
    }

    // Checking of Player X finish
    // Checking for Player 0 starts, Is Jogador O ganhou! or
    // not and after that disabled all the other fields
    else if ((b1 == 'O' || b1 == 'O') && (b2 == 'O' ||
        b2 == 'O') && (b3 == 'O' || b3 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Jogador O ganhou!";
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b1btn.style.color = "red";
        b2btn.style.color = "red";
        b3btn.style.color = "red";
    }
    else if ((b1 == 'O' || b1 == 'O') && (b4 == 'O' ||
        b4 == 'O') && (b7 == 'O' || b7 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Jogador O ganhou!";
        b2btn.disabled = true;
        b3btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b1btn.style.color = "red";
        b4btn.style.color = "red";
        b7btn.style.color = "red";
    }
    else if ((b7 == 'O' || b7 == 'O') && (b8 == 'O' ||
        b8 == 'O') && (b9 == 'O' || b9 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Jogador O ganhou!";
        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;

        b7btn.style.color = "red";
        b8btn.style.color = "red";
        b9btn.style.color = "red";
    }
    else if ((b3 == 'O' || b3 == 'O') && (b6 == 'O' ||
        b6 == 'O') && (b9 == 'O' || b9 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Jogador O ganhou!";
        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b3btn.style.color = "red";
        b6btn.style.color = "red";
        b9btn.style.color = "red";
    }
    else if ((b1 == 'O' || b1 == 'O') && (b5 == 'O' ||
        b5 == 'O') && (b9 == 'O' || b9 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Jogador O ganhou!";
        b2btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;

        b1btn.style.color = "red";
        b5btn.style.color = "red";
        b9btn.style.color = "red";
    }
    else if ((b3 == 'O' || b3 == 'O') && (b5 == 'O' ||
        b5 == 'O') && (b7 == 'O' || b7 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Jogador O ganhou!";
        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b3btn.style.color = "red";
        b5btn.style.color = "red";
        b7btn.style.color = "red";
    }
    else if ((b2 == 'O' || b2 == 'O') && (b5 == 'O' ||
        b5 == 'O') && (b8 == 'O' || b8 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Jogador O ganhou!";
        b1btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b9btn.disabled = true;

        b2btn.style.color = "red";
        b5btn.style.color = "red";
        b8btn.style.color = "red";
    }
    else if ((b4 == 'O' || b4 == 'O') && (b5 == 'O' ||
        b5 == 'O') && (b6 == 'O' || b6 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Jogador O ganhou!";
        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b4btn.style.color = "red";
        b5btn.style.color = "red";
        b6btn.style.color = "red";
    }

    //checka empates
    else if ((b1 == 'X' || b1 == 'O') && (b2 == 'X'
        || b2 == 'O') && (b3 == 'X' || b3 == 'O') &&
        (b4 == 'X' || b4 == 'O') && (b5 == 'X' ||
            b5 == 'O') && (b6 == 'X' || b6 == 'O') &&
        (b7 == 'X' || b7 == 'O') && (b8 == 'X' ||
            b8 == 'O') && (b9 == 'X' || b9 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Empate";
    }
    else {

        // Here, Printing Result
        if (flag == 1) {
            document.getElementById('print')
                .innerHTML = "Vez do jogador X";
        }
        else {
            document.getElementById('print')
                .innerHTML = "Vez do jogador O";
        }
    }
}

function myFunc_reset(){
    location.reload();
    b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = '';
}


flag = 1;




function myFunc_1(){
    popup1.classList.add("show");
}

function myFunc_2(){
    popup2.classList.add("show");
}

function myFunc_3(){
    popup3.classList.add("show");
}

function myFunc_4(){
    popup4.classList.add("show");
}

function myFunc_5(){
    popup5.classList.add("show");
}

function myFunc_6(){
    popup6.classList.add("show");
}

function myFunc_7(){
    popup7.classList.add("show");
}

function myFunc_8(){
    popup8.classList.add("show");
}

function myFunc_9(){
    popup9.classList.add("show");
}