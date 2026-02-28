document.addEventListener('DOMContentLoaded', function () {
  const cardsContainer = document.querySelector('.cards-container');

  let data = [
    {
      id: 1,
      article: 1,
      title: 'заголовок',
      tags: ['ПВХ', 'Эмаль'],
      minPrice: 15315315,
      runningMeter: 878,
      likesCount: 54,
      isLiked: false,
    },
    {
      id: 2,
      article: 2,
      title: 'заголовок',
      tags: ['ПВХ', 'Эмаль'],
      minPrice: 15315315,
      runningMeter: 878,
      likesCount: 54,
      isLiked: false,
    },
    {
      id: 3,
      article: 2,
      title: 'заголовок',
      tags: ['ПВХ', 'Эмаль'],
      minPrice: 15315315,
      runningMeter: 878,
      likesCount: 54,
      isLiked: false,
    },
    {
      id: 4,
      article: 2,
      title: 'заголовок',
      tags: ['ПВХ', 'Эмаль'],
      minPrice: 15315315,
      runningMeter: 878,
      likesCount: 54,
      isLiked: false,
    },
    {
      id: 5,
      article: 2,
      title: 'заголовок',
      tags: ['ПВХ', 'Эмаль'],
      minPrice: 15315315,
      runningMeter: 878,
      likesCount: 54,
      isLiked: false,
    },
    {
      id: 6,
      article: 2,
      title: 'заголовок',
      tags: ['ПВХ', 'Эмаль'],
      minPrice: 15315315,
      runningMeter: 878,
      likesCount: 54,
      isLiked: false,
    },
  ];

  renderCards(data);
  initSliders(data);

  cardsContainer.addEventListener('click', (event) => {
    const likeBtn = event.target.closest('.like-button');
    if (!likeBtn) return;

    const cardElement = likeBtn.closest('.card');
    const cardId = Number(cardElement.dataset.id);

    data = updateCardById(data, cardId, toggleLike);

    renderCards(data);
    initSliders(data);
  });

  function renderCards(cards) {
    const cardsHTML = cards
      .map(
        (value) => `
      <article class="card">
        <div class="card__header">
          <section id="mySlider" class="splide" aria-label="Splide Basic HTML Example">
            <div class="splide__track">
              <ul class="splide__list">
                <li class="splide__slide">
                  <img src="./img/kitchen.png" alt="Кухня 1" />
                </li>
                <li class="splide__slide">
                  <img src="./img/kitchen.png" alt="Кухня 2" />
                </li>
                <li class="splide__slide">
                  <img src="./img/kitchen.png" alt="Кухня 3" />
                </li>
                <li class="splide__slide">
                  <img src="./img/kitchen.png" alt="Кухня 4" />
                </li>
                <li class="splide__slide">
                  <img src="./img/kitchen.png" alt="Кухня 5" />
                </li>
                <li class="splide__slide">
                  <img src="./img/kitchen.png" alt="Кухня 6" />
                </li>
              </ul>
            </div>
          </section>

          <button class="card__zoom"><img src="" alt="" /></button>

          <div class="card__hover-overlay">
            <p class="card__hover-overlay-description">Описание товара</p>
          </div>
        </div>

        <div class="card__content">
          <div class="card__info">
            <p class="card__info-article text-medium grey">Артикул — ${value.article}</p>
            <p class="card__info-description text-semibold black">
              ${value.title}
            </p>
          </div>

          <div class="card__material">
            <p class="card__material-title text-medium grey">Варианты материалов</p>

            <div class="card__material-options">
              <label class="card__material-option">
                <input type="checkbox" class="card__material-checkbox" />
                <span class="card__material-name white">ПВХ</span>
              </label>
              <label class="card__material-option">
                <input type="checkbox" class="card__material-checkbox" />
                <span class="card__material-name text-medium grey">Эмаль</span>
              </label>
              <label class="card__material-option">
                <input type="checkbox" class="card__material-checkbox" />
                <span class="card__material-name text-medium grey">Пластик</span>
              </label>
              <label class="card__material-option">
                <input type="checkbox" class="card__material-checkbox" />
                <span class="card__material-name text-medium grey">Массив</span>
              </label>
            </div>
          </div>

          <div class="card__purchase">
            <div class="card__price">
              <span class="card__price-title text-medium grey">Цена от</span>
              <span class="card__price-value text-semibold black">515 700 ₽</span>
              <span class="card__price-metr text-medium grey"
                >Погонный метр от — <span class="card__price-metr-value text-bold black">30 000 ₽</span></span
              >
            </div>

            <div class="card__purchase-button">
              <button class="order-button">Заказать</button>
            </div>
          </div>

          <div class="card__actions-bar">
            <div class="card__line"></div>

            <div class="card__button-link">
              <div class="card__actions">
                <button class="like-button">
                  <img src="./icons/like.svg" alt="" />
                </button>
                <span class="card__like-label text-bold black">57</span>
              </div>

              <a class="card__calc" href="/calc" target="_blank">
                <span class="card__calc-text text-medium grey">Рассчитать стоимость</span>
                <img class="card__calc-icon" src="./icons/arrow.svg" alt="Иконка расчёта стоимости" />
              </a>
            </div>
          </div>
        </div>
      </article>
    `
      )
      .join('');

    cardsContainer.innerHTML = cardsHTML;
  }

  function initSliders(cards) {
    cards.forEach((value) => {
      const el = document.querySelector(`#mySlider-${value.id}`);
      if (!el) return;

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

  function updateCardById(cards, id, updater) {
    return cards.map((card) => (card.id === id ? updater(card) : card));
  }
});
