
window.onload=function(){
    document.getElementById('cart').onclick=function()
    {
    // console.log(logo);
    window.location.href="./cart.html";
    }
    let loginForm = document.querySelector('.login-form-container');

    document.querySelector('#login').onclick = () =>{
    loginForm.classList.toggle('active');
    }

    document.querySelector('#close-login-btn').onclick = () =>{
    loginForm.classList.remove('active');
    }
    

    //Product details 
    const Bname=document.getElementsByClassName("name");
    for(let i=0;i<Bname.length;i++)
    {
    // console.log(Bname[i]);
    Bname[i].onclick=function(){
        window.location.href="./productDetails.html";
        
        
        
    }
    }


}