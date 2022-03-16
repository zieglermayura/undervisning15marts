(function () {
  window.addEventListener("load", () => {


    console.log("Index.js was invoked");
    const h1Element = document.getElementById("title");  
    console.log(h1Element.innerText)
    h1Element.innerText = "Her er en ny title"

    const h3Elements = document.getElementsByTagName("h3")
    console.log(h3Elements)

    const specificH3 = document.querySelector(".container h3")
    console.log (specificH3.innerText)

  });
})();

function clicked () {
  const pElement = document.querySelector(".a-random-class")
  console.log(pElement.style.color = "red")
}