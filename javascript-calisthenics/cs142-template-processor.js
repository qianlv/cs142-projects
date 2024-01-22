function Cs142TemplateProcessor(template) {
  this.template = template;
}

Cs142TemplateProcessor.prototype.fillIn = function fillIn(dictionary) {
  const pattern = /{{2}(\w+)}}/g;
  return this.template.replace(pattern, (match, p1) => {
    // console.log(match, p1);
    if (dictionary[p1]) {
      return dictionary[p1];
    }
    return "";
  });
}

// const template = "My favorite month is {{month}} but not the day {{day}} or the year {{year}}";
// const dateTemplate = new Cs142TemplateProcessor(template);
// const dictionary = { month: "July", day: "1", year: "2016" };
// const str = dateTemplate.fillIn(dictionary);
// console.log(str);