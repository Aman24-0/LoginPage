let sign_B = document.querySelector('#sign');
let login_B = document.querySelector('#login');
let log_P = document.querySelector('#logPage');
let sign_P = document.querySelector('#signPage');



sign_B.addEventListener("click",() => {
    log_P.classList.remove("fade-in", "show");
    log_P.classList.add("fade-out", "hide");

    setTimeout( ()=>{
        sign_P.classList.toggle('hidden');
        sign_P.classList.add('flex');
    }, 800);

    setTimeout( ()=> {

        sign_P.classList.add("fade-in", "show");
        sign_P.classList.remove("fade-out", "hide");

          document.body.classList.add('from-[#a8ff78]', 'to-[#78ffd6]');
          document.body.classList.remove('from-[#00c6ff]', 'to-[#0072ff]');
    }, 1000);
})

login_B.addEventListener("click",() => {
    sign_P.classList.remove("fade-in", "show");
    sign_P.classList.add("fade-out", "hide");

    setTimeout( ()=>{  
        sign_P.classList.toggle('hidden');
        sign_P.classList.remove('flex');
    }, 800);

    setTimeout( ()=> {

        log_P.classList.add("fade-in", "show");
        log_P.classList.remove("fade-out", "hide");
          
        document.body.classList.remove('from-[#a8ff78]', 'to-[#78ffd6]');
        document.body.classList.add('from-[#00c6ff]', 'to-[#0072ff]');
    }, 1000);
})



