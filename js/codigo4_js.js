let  impar = "";
let i = 1;

function ciclowhite(objeto)
{
    numero = parseInt(document.formulario.caja.value);
    while(i<=numero)
    {
        if(i%2!==0)
        {
            impar = impar + 1 + ",";
        }
        i = i+1;
    }
    document.formulario.respuesta.value = impar;
}