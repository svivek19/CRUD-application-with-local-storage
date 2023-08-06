let data = [
    { id: 1, name: "Bhav", email: "bhvi@gmail.com" },
    { id: 2, name: "Vivek", email: "Vvk@gmail.com" }
];

function readAll() {
    localStorage.setItem("object", JSON.stringify(data));
    let tableData = document.querySelector(".data-table");

    let object = localStorage.getItem('object');
    let objectData = JSON.parse(object);
    let elements = "";

    objectData.map(record => {
        elements += `<tr class="data-table">
        <td>${record.name}</td>
        <td>${record.email}</td>
        <td>
            <button class="edit" onclick={edit(${record.id})}>Edit <i class="fa-solid fa-user-pen"></i></button>
            <button class ="delete" onclick={remove(${record.id})}>Delete <i class="fa-solid fa-trash-can"></i></button>
        <td>
    </tr>
        `
    })
    tableData.innerHTML = elements;
}

function remove(id) {
    data = data.filter(rec => rec.id !== id)
    readAll();
}

function create() {
    document.querySelector('.create-form').style.display = "block";
    document.querySelector('.add-div').style.display = "none";
}

function add() {
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;


    let newObj = [{ id: 3, name: name, email: email }];
    data.push(...newObj);

    document.querySelector('.create-form').style.display = "none";
    document.querySelector('.add-div').style.display = "block";

    readAll()
}


function edit(id) {
    document.querySelector('.update-form').style.display = "block";
    let obj = data.find(rec => rec.id === id);
    document.querySelector('.uname').value = obj.name;
    document.querySelector('.uemail').value = obj.email;
    document.querySelector('.id').value = obj.id;
}

function update() {
    let id = parseInt(document.querySelector('.id').value);
    let name = document.querySelector('.uname').value;
    let email = document.querySelector('.uemail').value;
    let index = data.findIndex(rec => rec.id === id);
    data[index] = { id, name, email }
    document.querySelector('.update-form').style.display = "none";
    readAll()
}