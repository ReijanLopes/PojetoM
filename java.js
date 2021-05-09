function add (){
    var element= document.getElementById('adicionar');
    element.style.ClassList('abackAddName')}

function remover(){
    var element = document.getElementById('adicionar');
    element.style.ClassList.remove('abackAddName')
}

function criar(){
    var element = document.getElementById('adicionar');
    element.style.ClassList.remove('abackAddName')

    var x = document.getElementById("txt").value;
  document.getElementById("Name").innerHTML = x;
}