var person = {  
    name: "Javascript",  
    getName: function() {  
      return this.name;  
    }  
  }  
  var GetName = person.getName;  
  var Get_Name = GetName.bind(website);  
  console.log(GetName());  