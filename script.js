let sign_B = document.querySelector('#sign');
let login_B = document.querySelector('#login');
let sign_P = document.querySelector('#signPage');



sign_B.addEventListener("click",() => {
    sign_P.classList.toggle('hidden');
    sign_P.classList.add('flex');
    document.body.classList.add('from-[#a8ff78]', 'to-[#78ffd6]');
    document.body.classList.remove('from-[#00c6ff]', 'to-[#0072ff]');    
})

login_B.addEventListener("click",() => {
    sign_P.classList.toggle('hidden');
    document.body.classList.remove('from-[#a8ff78]', 'to-[#78ffd6]');
    document.body.classList.add('from-[#00c6ff]', 'to-[#0072ff]'); 
})



