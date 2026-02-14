const message = `Dear Tamtan,\n Happy Valentine's Day! On this special day, i want you to know how much you mean to me. You bring joy, comfort, and inspiration into my life, and I feel truly blessed to have you.\n May this day be filled with laughter, sweet memories, and the promise of many more beautiful days together. \n Most of all, I want to say it simply and sincerely: I love you, today and always.\n With all my heart,\n Your boyfie ayya`;
function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}