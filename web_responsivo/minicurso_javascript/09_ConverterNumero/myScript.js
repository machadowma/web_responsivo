function somar(){

    let n1 = document.getElementById('num1').value;
    n1 = parseInt(n1);

    let n2 = document.getElementById('num2').value;
    n2 = parseInt(n2);

    let n3 = n1 + n2;

    document.getElementById('demo').innerHTML = n1 + "+" + n2 + "=" + n3;
}