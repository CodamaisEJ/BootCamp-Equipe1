

document.querySelector("#add-time")

.addEventListener('click', cloneField)

function cloneField(){

    const fields = document.querySelector('.schedule-item').cloneNode(true)

    document.querySelector('#schedule-items') .appendChild(fields)
}


