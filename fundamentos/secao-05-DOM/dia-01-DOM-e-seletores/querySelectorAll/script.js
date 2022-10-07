// queries retornam uma NodeList
// getElements retornam uma HTMLColletion

const colors = [
    {
      color: "red"
    },
    {
      color: "blue"
    },
    {
      color: "green"
    },
    {
      color: "red"
    },
    {
      color: "blue"
    },
    {
      color: "green"
    },
    {
      color: "red"
    },
    {
      color: "blue"
    },
    {
      color: "green"
    },
    {
      color: "red"
    }

]

const paragraphs = document.querySelectorAll("#paragraph");
for (let i = 0; i < paragraphs.length; i += 1) {
    paragraphs[i].style.color = colors[i].color;
}
