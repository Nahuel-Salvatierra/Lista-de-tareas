let inputText = document.getElementById('input-pendiente')
let taskList = document.getElementById('task-list')

function regularExpresion(frase) {
    return frase.replace(/\s/g, "")
}



function inputMove() {
 if (inputText.value!=''){
    taskList.innerHTML += `<input class="text-bg-ligth m-1 col-10" value="${inputText.value}"   type="text"><button type="button" onclick='eliminarInput(this)'class="col-1 d-inline delete-btn"><i class="bi bi-circle"></i></button>`

    inputText.value = null;
}
}

function taskComplete() {
    let task = document.getElementById(`asdf`)
}

function eliminarInput(boton) {
    var inputAEliminar = boton.previousElementSibling;
    inputAEliminar.parentNode.removeChild(inputAEliminar);
    boton.parentNode.removeChild(boton);
  }
