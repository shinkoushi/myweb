// Slider Produk Promo

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

// Search Box
function search() {

    let filter = document.getElementById('find').value.toUpperCase();
    let item = document.querySelectorAll('.product-card,.card-baju,.card-celana,.card-sepatu');
    let l = document.getElementsByTagName('h2');

    for (var i = 0; i <= l.length; i++) {
        let a = item[i].getElementsByTagName('h2')[0];
        let value = a.innerHTML || a.innerText || a.textContent;
        if (value.toUpperCase().indexOf(filter) > -1) {
            item[i].style.display = "";
        }
        else {
            item[i].style.display = "none";
        }
        console.log({

        });
    }
}

// RESPONSIVE UNTUK TAMPILAN MOBILE
const menuMobile = document.querySelector('nav ul');
function showMenu() {
    menuMobile.classList.add('show-nav-ul');
}

function hideMenu() {
    menuMobile.classList.remove('show-nav-ul');
}


//Pop Up Produk Promo
let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.product .product-card').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});

//Pop Up Produk Baju
let preveiwContainer2 = document.querySelector('.products-preview');
let previewBox2 = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.product-baju .card-baju').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer2.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox2.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});


//Pop Up Produk Celana
let preveiwContainer3 = document.querySelector('.products-preview');
let previewBox3 = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.product-celana .card-celana').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer3.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox3.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});

//Pop Up Produk Celana
let preveiwContainer4 = document.querySelector('.products-preview');
let previewBox4 = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.product-sepatu .card-sepatu').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer4.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox4.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});


//css scroll animation (promo)
const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entery) =>{
      console.log(entery)
      if (entery.isIntersecting){
          entery.target.classList.add('show');
      }else{
          entery.target.classList.remove('show');
      }
  });
});

const hiddenElements2 = document.querySelectorAll('.product-container');
hiddenElements2.forEach((el) => observer2.observe(el));


//css scroll animation (baju)
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entery) =>{
      console.log(entery)
      if (entery.isIntersecting){
          entery.target.classList.add('show');
      }else{
          entery.target.classList.remove('show');
      }
  });
});

const hiddenElements = document.querySelectorAll('.card-baju');
hiddenElements.forEach((el) => observer.observe(el));

//css scroll animation (celana)
const observer3 = new IntersectionObserver((entries) => {
  entries.forEach((entery) =>{
      console.log(entery)
      if (entery.isIntersecting){
          entery.target.classList.add('show-celana');
      }else{
          entery.target.classList.remove('show-celana');
      }
  });
});

const hiddenElements3 = document.querySelectorAll('.card-celana');
hiddenElements3.forEach((el) => observer3.observe(el));


//css scroll animation (sepatu)
const observer4 = new IntersectionObserver((entries) => {
  entries.forEach((entery) =>{
      console.log(entery)
      if (entery.isIntersecting){
          entery.target.classList.add('show-sepatu');
      }else{
          entery.target.classList.remove('show-sepatu');
      }
  });
});

const hiddenElements4 = document.querySelectorAll('.card-sepatu');
hiddenElements4.forEach((el) => observer4.observe(el));

