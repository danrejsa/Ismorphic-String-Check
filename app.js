const string1 = document.querySelector("#string1");
const string2 = document.querySelector("#string2");
const submitBtn = document.querySelector("#submit");
const display = document.querySelector(".display");

const isomorphic = (str1, str2) => {
  if (str1.length !== str2.length || str1 == "" || str2 == "") {
    alert("please input strings (text) of the same length into the box!");
    return false;
  }
  let map = {};
  for (let i = 0; i < str1.length; i++) {
    if (!map[str1[i]]) {
        map[str1[i]] = str2[i];
    } else if (map[str1[i]] !== str2[i]) {
        //console.log("Both strings differ in maaping at index " + i);
        display.style.background = "red";
        display.textContent = ` FALSE !
        ${str1} and ${str2} are NOT Isomorphic!!`;
      return false;
    }
  }
        display.style.background = "green";
        display.textContent = `TRUE !
${str1} and ${str2} are Isomorphic!! `;
  return true;
};

const startApp = () => {
  let x = string1.value;
  let y = string2.value;
  console.log(isomorphic(x, y));
};

submitBtn.addEventListener("click", startApp);
