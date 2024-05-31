let arr = [];
let counter = 0;
const mapArr = (info) => {
  const onLoad = document.querySelector("#showElements");
  const divEle = document.createElement("div");
  divEle.classList.add("taskInfo");

  const spanEle = document.createElement("span");
  spanEle.textContent = info.task;

  const inputBox = document.createElement("input");
  inputBox.className = "chkBox";
  inputBox.type = "checkbox";
  inputBox.value = info.id;
  inputBox.checked = info.check;
  inputBox.addEventListener("click", (res) => {
    if (arr[res.target.value].check == false) {
      arr[res.target.value].check = true;
    } else {
      arr[res.target.value].check = false;
    }
  });
  const btn = document.createElement("button");
  btn.className = "deleteBtn";
  btn.textContent = "❌";
  btn.value = info.id;
  btn.addEventListener("click", (e) => {
    divEle.remove();
    arr.splice(inputBox.value, 1);
  });
  divEle.appendChild(inputBox);
  divEle.appendChild(spanEle);
  divEle.appendChild(btn);

  onLoad.insertBefore(divEle, onLoad.firstChild);
};

// const removeTask=async(e)=>{

// }
const addTask = async () => {
  const inputBox = document.querySelector("#addItem");

  inputBox.addEventListener("keydown", (res) => {
    if (res.key == "Enter" && res.target.value.length > 0) {
      arr.push({ task: res.target.value, check: false, id: counter });
      const info = { task: res.target.value, check: false, id: counter };
      mapArr(info);
      inputBox.value = "";
      counter++;
    }
  });
};

const addTaskOnClick = async () => {
  const btn = document.querySelector("#taskBtn");
  btn.addEventListener("click", (e) => {
    const inputBox = document.querySelector("#addItem");
    if (inputBox.value.length > 0) {
      arr.push({ task: inputBox.value, check: false, id: counter });
      const info = { task: inputBox.value, check: false, id: counter };
      mapArr(info);
      inputBox.value = "";
      counter++;
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  addTask();
  addTaskOnClick();
});

const allTask = document.querySelector("#all");
allTask.addEventListener("click", () => {
  const onLoad = document.querySelector("#showElements");
  onLoad.innerHTML = "";
  arr.map((res) => {
    mapArr(res);
  });
});

const completedTask = document.querySelector("#completed");
completedTask.addEventListener("click", () => {
  const onLoad = document.querySelector("#showElements");
  onLoad.innerHTML = "";
  arr.map((res) => {
    if (res.check == true) {
      mapArr(res);
    }
  });
});

const incompletedTask = document.querySelector("#incomplete");
incompletedTask.addEventListener("click", () => {
  const onLoad = document.querySelector("#showElements");
  onLoad.innerHTML = "";
  arr.map((res) => {
    if (res.check == false) {
      mapArr(res);
    }
  });
});
