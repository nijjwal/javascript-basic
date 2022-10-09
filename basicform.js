const users=[
    {name: 'Kyle', age:20},
    {name: 'Joey', age:25},
    {name: 'Jim'},
    {name: 'John', age:72}

];

users.forEach((user)=>{
    printUser(user)
});


function printUser(user){
    if(user.age!=null){
        console.log(user.age + 5);
    }
}

//button # 1 starts 
const button = document.getElementById('btn');
const input = document.getElementById('textElement');

button.addEventListener('click', ()=>{
    document.getElementById('inputElement').innerText = 'You entered: ' + input.value;
    localStorage.setItem('userInput', input.value);

    document.cookie = 'name=John; expires=' + new Date(2020, 0, 1).toUTCString;

    //clear existing table when ext btn is clicked
    document.getElementById('newContent').innerText = '';
})
//button # 2 ends


//button # 2 starts
const btn2 = document.getElementById('btn2');

btn2.addEventListener('click', ()=>{

    if(localStorage.getItem('userInput') == null  
    || localStorage.getItem('userInput') === ''){
        document.getElementById('newContent').innerText = 'Please enter EXT number first!';
    }else{
        var table = `
        <table border=1px>
            <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>EXT</th>
            </tr>
    
            <tr>
            <td>BOA</td>
            <td>Maria Anders</td>
            <td>${localStorage.getItem('userInput')}</td>
            </tr>
    
        </table>
        `;

        document.getElementById('newContent').innerHTML = table;
    }
    
});
//button # 2 ends

