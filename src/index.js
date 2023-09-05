import "./style.css";

const app = document.querySelector("#app");

const section = document.createElement("section");

const image = document.createElement("img");
const imageSrc = document.createAttribute("src");
imageSrc.value =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png";

image.setAttributeNode(imageSrc);

const paragraphe = document.createElement("p");
const paragrapheClass = document.createAttribute("class");
paragrapheClass.value = "text-primary";
const paragrapheText = document.createTextNode("Je suis un paragraphe");

paragraphe.setAttributeNode(paragrapheClass);

const a = document.createElement("a");
const aHref = document.createAttribute("href");
aHref.value = "https://dyma.fr";
const aText = document.createTextNode("Dyma");

a.setAttributeNode(aHref);

const comment = document.createComment("je suis un com");

app.appendChild(section);
section.append(image);

// <!-- beforebegin -->
// <p>
//   <!-- afterbegin -->
//   foo
//   <!-- beforeend -->
// </p>
// <!-- afterend -->

section.insertAdjacentElement("beforeend", paragraphe);
section.insertAdjacentHTML("beforebegin", "Je suis ici");

// section.prepend(paragraphe);
paragraphe.append(paragrapheText, a);
a.appendChild(aText);

// paragraphe.insertBefore(comment, a);

{
  /* <section >
<img
  alt=""
  height="400px"
  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
/>
<p class="text-primary">
  Je suis un paragraphe
  <a href="https://dyma.fr">Dyma</a>
</p>
<input type="text"/>
</section>  */
}
