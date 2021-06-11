const closedface=document.querySelector('.closed');
const openface=document.querySelector('.open');


// AddEvent listener
closedface.addEventListener('click',() =>{
    if (openface.classList.contains('open')){
        openface.classList.add('active');
        closedface.classList.remove('active');
        document.getElementById("demo1").innerHTML="I'm closed";
    }
    });
openface.addEventListener('click',() =>{
    if (closedface.classList.contains('closed')){
        closedface.classList.add('active');
        openface.classList.remove('active');
        document.getElementById("demo2").innerHTML="look at me😉";
    }
});


// const closedface=document.querySelector('.closed');
// const openface=document.querySelector('.open');


// // AddEvent listener
// closedface.addEventListener('click',() =>{
//     if (openface.classList.contains('open')){
//         openface.classList.add('active');
//         closedface.classList.remove('active');
//     }
//     });
// openface.addEventListener('click',() =>{
//     if (closedface.classList.contains('closed')){
//         closedface.classList.add('active');
//         openface.classList.remove('active');
//     }
// });