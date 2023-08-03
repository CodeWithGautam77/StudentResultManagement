const showStudents = async () => {
    try {
        const result = await fetch("http://localhost:5100/student/getStudent")
        if(result.status === 200){
            data = await result.json()
            // console.log(data)
        }
            Students = data.student
            // SelectStudent(Students)
            const select = document.getElementById("select_student")
            let i = 0
            while (i < Students.length) {
                let option = document.createElement("option")
                option.value = Students[i]._id
                option.innerText = Students[i].name
                select.appendChild(option)
                i++
            }
            student()
        } catch (error) {
            console.log(error)
            return alert(error.message)
        }
    }
    showStudents()

    
    

    const showSubjects = async () => {
        try {
            const result = await fetch("http://localhost:5100/subject/getSubject")
            if(result.status === 200){
                 data = await result.json()
            //    console.log(data)
            }else{
                data = await result.json()
                return alert(result.message)
            }
            
            Subjects = data.subjects
            const select = document.getElementById("select_subject")
            let i = 0
            while (i < Subjects.length) {
                let option = document.createElement("option")
                option.value = Subjects[i]._id
                option.innerText = Subjects[i].name
                select.appendChild(option)
                i++
            }
            return
        } catch (error) {
            console.log(error)
          return  alert(error.message)
        }
    }
    showSubjects()

    const button3 = document.getElementById("btn3")

    const selectHandelChange = (target,key) => {
        marksDetails[key] =  target.value
        console.log(marksDetails)
    }

    const AddMarks = async () => {
        try {
            const data = {
                marks:document.getElementById("marks").value,
                student:marksDetails.student,
                subject:marksDetails.subject,
                totalMarks:100
            }


            if(!data.marks) {return alert("Please Enter Marks")}
            const Options = {
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(data)
            }

            let result = await fetch("http://localhost:5100/marks/",Options)
            if(result.status === 200){
                result = await result.json()
                
            }else{
                result = await result.json()
                return alert(result.message)
            }
        
            const urlToOpen = 'http://localhost:5100/view/index.html';

            window.open(urlToOpen, '_self');
        } catch (error) {
            console.log(error)
            console.log("ddddd")
            return alert(error.message)
        }
    }
    button3.addEventListener("click", AddMarks)