import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as t}from"./assets/vendor-CgTBfC_f.js";const e=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/flower-4202821__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/flower-4202821_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/flower-4202822__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/flower-4202822_1280.jpg",description:"Aerial Beach View"}],p=document.querySelector(".gallery"),r=e.map(({preview:a,original:o,description:i})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${o}">
        <img
          class="gallery-image"
          src="${a}"
          alt="${i}"
        />
      </a>
    </li>`).join("");p.innerHTML=r;new t(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});
//# sourceMappingURL=1-gallery.js.map
