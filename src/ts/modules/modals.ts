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

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        closeModal(modal);
      }
    })

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    })
  }
  
  const closeModal = modal => {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
  }

  const showModal = modal => {
    modal.style.display = 'block';
    document.body.classList.add('modal-open');
  }

  const showModalByTime = (selector, time) => {
    setTimeout(() => {
      showModal(document.querySelector(selector));
    }, time);
  }

  bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
  bindModal('.phone_link', '.popup', '.popup .popup_close');

  showModalByTime('.popup', 5000);
};