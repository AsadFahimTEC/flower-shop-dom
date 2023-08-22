// common function call to get innerText with id and text
function test(params){
    setText('info1', 'Bangladesh');
    const sum = toNumber('input1');
    console.log(sum);
    }
    
    function test2(params){
    setText('info2', 'Bangladesh');
    const sum2 = toNumber('input1');
    console.log(sum2);
    }
    
    function test3(params){
    setText('info3', 'Bangladesh');
    }
    
    // common function call with innerText
    function setText(id, text){
        document.getElementById(id).innerText = text;
    }
    
    // function call to convert input into number and return value
    function toNumber(id){
    const result = document.getElementById(id).value;
    return parseInt(result);
    }