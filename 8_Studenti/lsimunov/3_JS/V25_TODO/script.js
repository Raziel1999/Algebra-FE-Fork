(
  function(){

    function Todo() {

      var addButton = document.querySelector ("#input-add");
      var input = document.querySelector("#input-text");
      var list = document.querySelector("ul");

      function addListItem(){

        var text = input.value;

        if(text.trim().length !==0){

         var newItem = createListItem(text);
          list.appendChild(newItem);
          input.value = "";

          console.log(text);
        }else{
          alert("Please enter todo!");
        }

      }

      function createListItem(text){
        
        var listItem = document.createElement("li");
        var div = document.createElement("div");
        var intDiv = document.createElement("div");
        intDiv.classList.add("li-container-int");
        intDiv.innerText = text;
        addCheckBox(intDiv);
        listItem.appendChild(intDiv);
        
        return listItem;

      }

      function addCheckBox(){
        var checkBox = document.createElement("input");
        checkBox.setAttribute("type","checkBox");
        item.insertBefore(checkBox,item.firstChild);
      }

    this.addListeners = function(){
      addButton.addEventListener("click", addListItem)
    }

    }

  var todo = new Todo ();
  Todo.prototype.init = function() {
    this.addListeners();
  }


  window.addEventListener("load", todo.init());

  //document.addEventListener("DOMContentLoaded", ...);

})();