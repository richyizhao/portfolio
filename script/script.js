let inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("click", function () {
    let tabId = this.id;
    scrollToID(tabId);
  });
});

function scrollToID(tab) {
  switch(tab) {
    case "tab1":
      targetElement = document.querySelector("#home");
      break;
    case "tab2":
      targetElement = document.querySelector("#projects");
      break;
    case "tab3":
      targetElement = document.querySelector("#skills");
      break;
    case "tab4":
      targetElement = document.querySelector("#contact");
      break;
    default: 
      console.log(tab);
      return;
  }
  if(targetElement) {
    const offset = 100;
    const elementTop = targetElement.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementTop - offset,
      behavior: "smooth",
    });
  }
}
