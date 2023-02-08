import projectData from './data.js';

document.querySelector('.feature__grid-container').innerHTML = projectData.map(
  (data) => `
    <div class="feature__box ${data.class}">
    <div>
      <img src="${data.img}" alt="" class="feature__box__img">
    </div>
    <div class="feature__box__content">
      <h3 class="feature__box__content__h3">
        ${data.speakerName}
      </h3>
      <p class="feature__box__content__p1">
        ${data.p1}
      </p>
      <p class="feature__box__content__p2">
        ${data.p2}
      </p>
    </div>
  </div>
    `,
)
  .join('');