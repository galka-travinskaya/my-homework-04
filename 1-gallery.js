import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{S as t}from"./assets/vendor-CgTBfC_f.js";const r=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/flower-4202821__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/flower-4202821_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/flower-4202822__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/flower-4202822_1280.jpg",description:"Aerial Beach View"}],a=document.querySelector(".gallery");if(a){const i=r.map(({preview:o,original:e,description:p})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${e}">
            <img
              class="gallery-image"
              src="${o}"
              alt="${p}"
            />
          </a>
        </li>`).join("");a.innerHTML=i,new t(".gallery a",{captionsData:"alt",captionDelay:250})}
//# sourceMappingURL=1-gallery.js.map
