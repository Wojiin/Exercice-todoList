/* On attribue countSpan aux éléments .count*/
const countSpan = document.querySelector(".count");
/* On défini une variable qui donnera à afficher sa valeur à countSpan */
count = 1;
countSpan.textContent = count;

/* On sélectionne l'élément ( méthode querySelector) qui a comme attribut l'identifiant btn et on l'attribue comme valeur à la constante addBtn*/
const addBtn = document.querySelector("#btn");

/*On observe l'évènement ( méthode addEventListener) "click" sur addBtn pour déclencher la fonction addTask */
addBtn.addEventListener("click", addTask);

/* On sélectionne l'élément avec la class=todoCard et on lui donne comme valeur la constante taskCard*/
const taskCard = document.querySelector(".todoCard");

/* On sélectionne l'élément avec l'identifiant todoCards et on lui donne comme valeur la constante taskContainer*/
const tasksContainer = document.querySelector("#todoCards");

/* On sélectionne l'élément avec l'attribut class=delBtn et on lui donne comme valeur la constante delBtn*/
const delBtn = document.querySelector(".delBtn");

/* On observe l'évènement "click" sur la constante delBtn pour appeler la fonction argumentée DeleteTask par le biais d'une fonction callback (function())
 (la fonction callback permet d'argumenter une fonction appelée via addEventListener)*/
delBtn.addEventListener("click", function () {
  deleteTask(taskCard);
});

/* On défini la fonction addTask*/
function addTask() {
  /* On incrémente le compteur et on le met à jour*/
  count++;
  countSpan.textContent = count;
  /* On crée la constante newTask qui est une copie ( cloneNode(true)) de taskCard*/
  const newTask = taskCard.cloneNode(true);

  /*On crée la constante newDelBtn dont la valeur est l'élément de class=delBtn contenu dans newTask*/
  const newDelBtn = newTask.querySelector(".delBtn");

  /*On crée la constante newTextArea dont la valeur est l'élément de class=task contenu dans newTask*/
  const newTextArea = newTask.querySelector(".task");

  /* const.value permet de toujours pointer vers le même objet (comme référencé)
 tout en permettant de changer ses propriétés, ici le texte " New Task"*/
  newTextArea.value = "New Task";

  /*appendChild permet de créer un nouvel emplacement (noeud) à la suite de la liste des enfants de tasksContainer,
   ici newTask*/
  tasksContainer.appendChild(newTask);
  /*On active la suppression de newTask en cliquant sur la poubelle */
  newDelBtn.addEventListener("click", function () {
    deleteTask(newTask);
  });

  tasksContainer.appendChild(newTask);
  updateCount();
  count++;
  countDisplay.textContent = count;
}
/* Permet de supprimer l'élément avec l'attribut class=task dans lequel est contenue l'icone trashbin dont l'évènement "click" a été observé */
function deleteTask(task) {
  /*décrémente le count*/
  count--;
  countSpan.textContent = count;
  task.remove();
}
