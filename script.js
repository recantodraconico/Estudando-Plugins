const note = document.getElementById("notepad");
const saveBtn = document.getElementById("save");
const clearBtn = document.getElementById("clear");

note.value = localStorage.getItem("owlbear-notepad") || "";

saveBtn.onclick = () => {
  localStorage.setItem("owlbear-notepad", note.value);
  alert("Notas salvas!");
};

clearBtn.onclick = () => {
  if (confirm("Deseja limpar o bloco de notas?")) {
    note.value = "";
    localStorage.removeItem("owlbear-notepad");
  }
};
