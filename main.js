function saveData(){
  let email = document.getElementById('email').value;
  let text = document.getElementById('text').value;

  let blob = new Blob([text],
    {
      type: "text/plain; charset=utf-8"
    });

    saveAs(blob, email+".txt");
}

saveData()