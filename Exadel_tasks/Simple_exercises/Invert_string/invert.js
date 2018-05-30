var str = "exercise";
var invertStr = "";
var charArray = str.split('');
var strLength = str.length;
for (var i = strLength - 1; i > -1; i--) 
{
    invertStr = invertStr + charArray[i];
}
console.log(' output : ' + invertStr );