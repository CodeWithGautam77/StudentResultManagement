const student = () => {
    let studentResult = document.getElementById("tbl");
       


Students.forEach((student) => {
let tr = document.createElement("tr");
let td = document.createElement("td")

td.textContent = student.name;


let trb = document.createElement("td");
let show = document.createElement("button")

show.id = `re_${student._id}`
show.innerText = "Show"
show.className = "btn btn-primary"

// studentResult.appendChild(td);
trb.appendChild(show)


show.addEventListener("click", (e) => {
    let id = e.target.id.split("_")[1]
    console.log(id)

    window.location.href = `http://localhost:5100/view/Result.html?id=${id}`
})
tr.appendChild(td);
tr.appendChild(trb);
studentResult.appendChild(tr);
});
}

student()