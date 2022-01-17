
// open M-T-subnav
let usd = document.getElementsByClassName('usd-subnav');
let english = document.getElementsByClassName('english-subnav');
let user = document.getElementsByClassName('user-subnav');



function openMTSubNav(type,element) {
    switch (type) {
        case 'usd' :
            for (let i = 0; i < usd.length; i++) {
                usd[i].classList.toggle('show');
            };
            element.classList.toggle('opacity-7');
            break;

        case 'english' :
            for (let i = 0; i < english.length; i++) {
                english[i].classList.toggle('show');
            };
            element.classList.toggle('opacity-7');
            break;
        case 'user' :
            for (let i = 0; i <user.length ; i++) {
                user[i].classList.toggle('show');
            };
            element.classList.toggle('opacity-7');
            break;
                   

    };
    
}


// respnsive main ///


var screenWidth = screen.width
let 




