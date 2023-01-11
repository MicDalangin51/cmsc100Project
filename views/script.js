import { createPost } from '../src/api_call_functions.js';
import jquery from 'jquery';

document.addEventListener("click", function() {
    clickCreate();
})

function clickCreate() {
    var title = document.getElementById("input_title").textContent
    var author = document.getElementById("input_author").textContent
    var content = document.getElementById("input_content").textContent
    createPost('http://127.0.0.1:8080', title, author, content)
}

function show()
{
    var xmlhttp=new jquery.XMLHttpRequest();
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
        document.getElementById('yourmodal').innerHTML=xmlhttp.responseText;
        }
    }
 xmlhttp.open("GET","/showmodalroute",true);
 xmlhttp.send();
} 

document.getElementById("test").addEventListener("click", function() {
    alert('Heyy!');
});

function greet(){
    alert('Hello there');
}