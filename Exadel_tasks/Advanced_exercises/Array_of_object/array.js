var objectData = [
    { id: 1, name: "dog", parentId: null },
    { id: 2, name: "Buddy", parentId: 1 },
    { id: 3, name: "Daisy", parentId: 1 },
    { id: 4, name: "cat", parentId: null },
    { id: 5, name: "Smokey", parentId: 4 },
    { id: 6, name: "Oscar", parentId: 4 }
]


if( objectData ){
    otherObject={};
    countNull=null;
    var tname = "";
    for(i of objectData){
        debugger;
        if(i.parentId == null){
            countNull++;
            otherObject[i.name]= new Array();
            tname = i.name;
        }else{
            var innerArr = {
                name : i.name
            };
            otherObject[tname].push(innerArr);
        }
    }
    console.log(countNull);
    console.log(otherObject);
}