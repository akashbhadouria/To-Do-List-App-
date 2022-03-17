document.querySelector("form").addEventListener("submit", todoList);

function todoList() {
    event.preventDefault();
    var name = document.querySelector("#name").value;
    var qty = document.querySelector("#qty").value;
    var pri = document.querySelector("#priority").value;

    var tr = document.createElement("tr");
    
    var td1 = document.createElement("td");
    td1.innerText = name;
    var td2 = document.createElement("td");
    td2.innerText = qty;
    var td3 = document.createElement("td");
    td3.innerText = pri;
    
    tr.append(td1, td2, td3);

    document.querySelector("tbody").append(tr);
    // console.log(name,qty,pri)
}