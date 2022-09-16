var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }


  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍX
  if(matchFunc(startEl)) resultSet.push(startEl);
  //recorrer los hijos

  for (let i = 0; i < startEl.children.length; i++) {
    let result = traverseDomAndCollectElements(matchFunc, startEl.children[i])
    resultSet = [ ...resultSet , ...result];
  };

return resultSet;

}

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if(selector[0] === '#') return 'id';
  if(selector[0] === '.') return 'class';
  if(selector[0] !== '.' && selector.includes('.')) return 'tag.class';
  else return 'tag';
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  
  var matchFunction = function(dato){
  
    if (selectorType === "id") {
        return dato.id && (('#' + dato.id.toLowerCase()) === selector.toLowerCase());   
   
  } else if (selectorType === "class") {
        let nombreclase = selector.slice(1); //saca el primer punto
        let clasescheck = dato.className.toLowerCase();
  
        let arraydeClases = clasescheck.split(' ')
        return (arraydeClases.includes(nombreclase.toLowerCase()));

  } else if (selectorType === "tag.class") {

       /*  let TAGclase = selector.toLowerCase().split('.');
        let clases = dato.className.toLowerCase().split(' ');

        if (dato.tagName.toLowerCase() === TAGclase[0] && clases.includes(TAGclase[1])) {return true;}
        else return false;  */ 

        let [tagBuscada, classBuscada] = selector.split('.');
        return matchFunctionMaker(tagBuscada)(dato) && matchFunctionMaker('.' + classBuscada)(dato);

  } else if (selectorType === "tag") {
    return dato.tagName && (dato.tagName.toLowerCase() === selector.toLowerCase())
  }
}
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
