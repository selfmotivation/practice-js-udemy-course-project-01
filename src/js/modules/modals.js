export const modals = () => {
  const bindModal = (triggerSelector, modalSelector, closeSelector) => {
    const triggers = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);

    triggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();
        }

        showModal(modal);
      });
    });

    close.addEventListener('click', () => {
      closeModal(modal);
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    })
  }

  const fixBodyPosition = () => {
    document.body.classList.toggle('modal-open');
  }

  const showModal = modal => {
    modal.style.display = 'block';
    fixBodyPosition();
  }

  const closeModal = modal => {
    modal.style.display = 'none';
    fixBodyPosition();
  }

  const showModalByTime = (selector, time) => {
    setTimeout(() => {
      showModal(document.querySelector(selector));
    }, time);
  }

  bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
  bindModal('.phone_link', '.popup', '.popup .popup_close');

  showModalByTime('.popup', 60000);
};