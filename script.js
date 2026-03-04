


const elements = document.querySelectorAll('.circle');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

elements.forEach(el => observer.observe(el));


// モーダルウィンドウ

const buttonOpens = document.querySelectorAll(".modalOpen");
const buttonCloses = document.querySelectorAll(".modalClose");
const modal = document.querySelectorAll(".modal");



buttonOpens.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.nextElementSibling;
    modal.style.display = "block";  //モーダルを開く
  });
});


buttonCloses.forEach((button) => {
button.addEventListener("click", () => {
  const modal = button.closest(".modal");
  modal.style.display = "none";  //モーダルを閉じる
});
});


document.addEventListener("click", (e) => {
  // console.log(e.target);
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
  }

})
