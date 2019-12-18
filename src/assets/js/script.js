import React from 'react';
import { functionTypeAnnotation } from '@babel/types';

// #region KK

const helloWorld =
    `
.o88b.  .d88b.  d8888b. d88888b   db    db d8888b.
d8P  Y8 .8P  Y8. 88   8D 88'        8b  d8' 88  8D
8P      88    88 88   88 88ooooo     8bd8'  88oodD'
8b      88    88 88   88 88         .dPYb.  88  
Y8b  d8  8b  d8' 88  .8D 88.       .8P  Y8. 88     
  Y88P'   Y88P'  Y8888D' Y88888P   YP    YP 88    
`;

console.log(helloWorld);

// #endregion

// #region NavBarUser - components

export const toggleMegaphone = () => {
    const megaphone = document.getElementById('megaphone');

    megaphone.classList.toggle('active');
}

export const toggleHamburguer = () => {
    const hamb = document.getElementById('nav-hamburguer');

    hamb.classList.toggle('open');
}

export const toggleAside = () => {
    const aside = document.getElementById('aside-desktop');
    const hidden = document.getElementById('hidden');
    const darkModal = document.getElementById('dark-modal');

    aside.classList.toggle('aside-show');
    hidden.classList.toggle('aside-show');
    darkModal.classList.toggle('show');
}
// #endregion

// começo js dúvidas

// export const toggleItem = () => {
//     var accItem = document.getElementsByClassName('accordionItem');
//     var accHD = document.getElementsByClassName('accordionItemHeading');

//     for (var i = 0; i < accHD.length; i++) {
//         accHD[i].addEventListener('click', toggleItem, false);
//     }

//     var itemClass = this.parentNode.className;
//     for (i = 0; i < accItem.length; i++) {
//         accItem[i].className = 'accordionItem close';
//     }
//     if (itemClass == 'accordionItem close') {
//         this.parentNode.className = 'accordionItem open';
//     }
// }
// final js dúvidas