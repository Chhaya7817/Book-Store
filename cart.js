var books=[];
var b=document.querySelectorAll('.price span');

// console.log(b);
Array.from(b).forEach((s)=>{
    
    s.addEventListener("click",addbook);

});

if(sessionStorage.getItem('books')!=""){
    var bb=JSON.parse(sessionStorage.getItem('books'));
    console.log(bb);
    bb.forEach((bbb)=>{
        books.push(bbb);
    })
}


function addbook(e){

    
    var p=e.target.parentElement;
    var bk=p.parentElement.children[1].innerText;
    console.log(bk);
    var price=p.innerText.substring(2);
    var book={
        Name:bk,
        price:price
    }
    console.log(books);
    alert("book added to the cart");
    books.push(book);
    sessionStorage.setItem('books',JSON.stringify(books));

}

