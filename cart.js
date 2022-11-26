var books=[];
var b=document.querySelectorAll('.price span');
// console.log(b);
Array.from(b).forEach((s)=>{
    s.addEventListener("click",addbook);
});

if(sessionStorage.getItem('books')!=""){
    var bb=JSON.parse(sessionStorage.getItem('books'));
    console.log(bb);
    books=bb;
}

function addbook(e){
    var p=e.target.parentElement;
    var bk=p.parentElement.children[1].innerText;
    console.log(bk);
    var price=p.innerText.substring(2);
    console.log();
    var book={
        Name:bk,
        price:price
    }
    books.push(book);
    sessionStorage.setItem('books',JSON.stringify(books));
}

