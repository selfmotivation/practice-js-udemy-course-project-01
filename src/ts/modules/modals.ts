export const modals = (): void => {
  const bindModal = (triggerSelector: string, modalSelector: string, closeSelector: string, closeClickOverlay = true): void => {
    const triggers: NodeList = document.querySelectorAll(triggerSelector);
    const modal: HTMLElement = document.querySelector(modalSelector);
    const close: HTMLElement = document.querySelector(closeSelector);
    const modals: NodeListOf<HTMLElement> = document.querySelectorAll('[data-modal]');

    triggers.forEach(trigger => {
      trigger.addEventListener('click', (e): void => {
        if (e.target) {
          e.preventDefault();
        }

        closeAllModals(modals);
        showModal(modal);
        console.log(closeClickOverlay);
      });
    });

    close.addEventListener('click', (): void => {
      closeModal(modal);
      closeAllModals(modals);
    });

    document.addEventListener('keydown', (e): void => {
      if (e.key === 'Escape' && modal.style.display === 'block' && closeClickOverlay) {
        closeModal(modal);
        closeAllModals(modals);
      }
    })

    modal.addEventListener('click', (e): void => {
      if (e.target === modal && closeClickOverlay) {
        closeModal(modal);
        closeAllModals(modals);
      }
    })
  }
  
  const closeModal = (modal: HTMLElement): void => {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
  }

  const closeAllModals = (modals: NodeListOf<HTMLElement>): void => {
    modals.forEach(modal => {
      modal.style.display = 'none';
    });
  }

  const showModal = (modal: HTMLElement): void => {
    modal.style.display = 'block';
    document.body.classList.add('modal-open');
  }

  const showModalByTime = (selector: string, time: number) => {
    setTimeout(() => {
      showModal(document.querySelector(selector));
    }, time);
  }

  bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
  bindModal('.phone_link', '.popup', '.popup .popup_close');
  bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
  bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
  bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);

  showModalByTime('.popup', 5000);
};