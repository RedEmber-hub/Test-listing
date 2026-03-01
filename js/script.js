document.addEventListener('DOMContentLoaded', function () {
  const cardsContainer = document.querySelector('.cards-container');

  let data = [
    {
      id: 1,
      article: 4607,
      title: 'Угловая бежевая кухня на заказ с матовыми фасадами в современном стиле «Нарцисс»',
      tags: ['ПВХ', 'Эмаль', 'Пластик', 'Массив'],
      minPrice: 515700,
      runningMeter: 30000,
      likesCount: 57,
      isLiked: false,
    },
    {
      id: 2,
      article: 4607,
      title: 'Угловая бежевая кухня на заказ с матовыми фасадами в современном стиле «Нарцисс»',
      tags: ['ПВХ', 'Эмаль', 'Пластик', 'Массив'],
      minPrice: 515700,
      runningMeter: 30000,
      likesCount: 57,
      isLiked: false,
    },
    {
      id: 3,
      article: 4607,
      title: 'Угловая бежевая кухня на заказ с матовыми фасадами в современном стиле «Нарцисс»',
      tags: ['ПВХ', 'Эмаль', 'Пластик', 'Массив'],
      minPrice: 515700,
      runningMeter: 30000,
      likesCount: 57,
      isLiked: false,
    },
    {
      id: 4,
      article: 4607,
      title: 'Угловая бежевая кухня на заказ с матовыми фасадами в современном стиле «Нарцисс»',
      tags: ['ПВХ', 'Эмаль', 'Пластик', 'Массив'],
      minPrice: 515700,
      runningMeter: 30000,
      likesCount: 57,
      isLiked: false,
    },
    {
      id: 5,
      article: 4607,
      title: 'Угловая бежевая кухня на заказ с матовыми фасадами в современном стиле «Нарцисс»',
      tags: ['ПВХ', 'Эмаль', 'Пластик', 'Массив'],
      minPrice: 515700,
      runningMeter: 30000,
      likesCount: 57,
      isLiked: false,
    },
    {
      id: 6,
      article: 4607,
      title: 'Угловая бежевая кухня на заказ с матовыми фасадами в современном стиле «Нарцисс»',
      tags: ['ПВХ', 'Эмаль', 'Пластик', 'Массив'],
      minPrice: 515700,
      runningMeter: 30000,
      likesCount: 57,
      isLiked: false,
    },
  ];

  renderCards(data);
  initSliders();

  cardsContainer.addEventListener('click', (event) => {
    const likeBtn = event.target.closest('.like-button');
    if (!likeBtn) return;

    const cardElement = likeBtn.closest('.card');
    const cardId = Number(cardElement.dataset.id);

    const cardIndex = data.findIndex((c) => c.id === cardId);
    if (cardIndex === -1) return;

    data[cardIndex] = toggleLike(data[cardIndex]);
    updateCardDOM(cardElement, data[cardIndex]);
  });

  function renderCards(cards) {
    cardsContainer.innerHTML = cards.map(createCardHTML).join('');
  }

  function createCardHTML(value) {
    return `
      <article class="card" data-id="${value.id}">
        <div class="card__header">

          <section id="mySlider-${value.id}" class="splide" aria-label="Slider">
            <div class="splide__track">
              <ul class="splide__list">
                <li class="splide__slide"><img src="./img/kitchen.png" alt="Кухня 1" /></li>
                <li class="splide__slide"><img src="./img/kitchen.png" alt="Кухня 2" /></li>
                <li class="splide__slide"><img src="./img/kitchen.png" alt="Кухня 3" /></li>
                <li class="splide__slide"><img src="./img/kitchen.png" alt="Кухня 3" /></li>
                <li class="splide__slide"><img src="./img/kitchen.png" alt="Кухня 3" /></li>
                <li class="splide__slide"><img src="./img/kitchen.png" alt="Кухня 3" /></li>
              </ul>
            </div>
          </section>

          <button class="card__zoom"><img src="./icons/zoom.svg" alt="Увеличить" /></button>

          <div class="card__hover-overlay">
            <p class="card__hover-overlay-description">Описание товара</p>
          </div>
        </div>

        <div class="card__content">
          <div class="card__info">
            <p class="card__info-article text-medium grey">Артикул — ${value.article}</p>
            <p class="card__info-description text-semibold black">${value.title}</p>
          </div>

          <div class="card__material">
            <p class="card__material-title text-medium grey">Варианты материалов</p>
            <div class="card__material-options">
              ${value.tags
                .map(
                  (tag) => `
                <label class="card__material-option">
                  <input type="checkbox" class="card__material-checkbox" />
                  <span class="card__material-name text-medium">${tag}</span>
                </label>
              `
                )
                .join('')}
            </div>
          </div>

          <div class="card__purchase">
            <div class="card__price">
              <span class="card__price-title text-medium grey">Цена от</span>
              <span class="card__price-value text-semibold black">${value.minPrice.toLocaleString()} ₽</span>
              <span class="card__price-metr text-medium grey">Погонный метр от — <span class="card__price-metr-value text-bold black">${value.runningMeter.toLocaleString()} ₽</span></span>
            </div>
            <div class="card__purchase-button">
              <button class="order-button">Заказать</button>
            </div>
          </div>

          <div class="card__actions-bar">
            <div class="card__line"></div>
            <div class="card__button-link">
              <div class="card__actions">
                <button class="like-button ${value.isLiked ? 'is-liked' : ''}">
                  <svg class="icon icon-like" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </button>
                <span class="card__like-label text-bold black">${value.likesCount}</span>
              </div>

              <a class="card__calc" href="/calc" target="_blank">
                <span class="card__calc-text text-medium grey">Рассчитать стоимость</span>
                <img class="card__calc-icon" src="./icons/arrow.svg" alt="Иконка расчёта"/>
              </a>
            </div>
          </div>
        </div>
      </article>
    `;
  }

  function updateCardDOM(cardElement, cardData) {
    const likeBtn = cardElement.querySelector('.like-button');
    const likeLabel = cardElement.querySelector('.card__like-label');

    likeLabel.textContent = cardData.likesCount;

    if (cardData.isLiked) {
      likeBtn.classList.add('is-liked');
    } else {
      likeBtn.classList.remove('is-liked');
    }
  }

  function initSliders() {
    document.querySelectorAll('.splide').forEach((el) => {
      new Splide(el, {
        pagination: true,
        arrows: true,
      }).mount();
    });
  }

  function toggleLike(card) {
    const nextIsLiked = !card.isLiked;
    return {
      ...card,
      isLiked: nextIsLiked,
      likesCount: nextIsLiked ? card.likesCount + 1 : Math.max(0, card.likesCount - 1),
    };
  }
});
