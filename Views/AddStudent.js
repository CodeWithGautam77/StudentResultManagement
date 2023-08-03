const button = document.getElementById("btn")

const AddStudent = async ()=> {
    try {
        const data = {
            name:document.getElementById("studentName").value,
            std:document.getElementById("studentStd").value
        }

        console.log(data)
        if(!data.name) return alert("Please Enter Student Name")
        if(!data.std) return alert("Please Enter Standard")

        let Options = {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        }

        let res = await fetch("http://localhost:5100/student/insert",Options)
        if(res.status === 200){
            res = await res.json()
        }else{
            res = await res.json()
            return alert(res.message)
        }
        const urlToOpen = 'http://localhost:5100/view/index.html';

        window.open(urlToOpen, '_self');
    } catch (error) {

        console.log(error)
        return alert(error.message)
    }
}

button.addEventListener("click",AddStudent)