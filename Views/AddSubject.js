const button2 = document.getElementById("btn2");
const AddSubject = async () => {
  try {
    const data = {
      name: document.getElementById("subName").value,
    };

    console.log(data);
    if (!data.name) return alert("Please Enter Subject Name");

    let Options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    let res = await fetch("http://localhost:5100/subject/insert", Options);
    if (res.status === 200) {
      res = await res.json();
    } else {
      res = await res.json();
      return alert(res.message);
    }
    const urlToOpen = "http://localhost:5100/view/index.html";

    window.open(urlToOpen, "_self");
  } catch (error) {
    console.log(error);
    return alert(error.message);
  }
};

button2.addEventListener("click", AddSubject);
