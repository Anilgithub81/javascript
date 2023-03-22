function Emp(id,name) {  
    this.id = id;   
    this.name = name;  
  }  
  function PermanentEmp(id,name) {  
   Emp.call(this,id,name);  
  }  
  console.log(new PermanentEmp(1 , "anil ").name); 