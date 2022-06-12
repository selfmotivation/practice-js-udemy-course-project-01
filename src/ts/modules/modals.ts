export const modals = (): void => {
  const bindModal = (triggerSelector: string, modalSelector: string, closeSelector: string): void => {
    const triggers: NodeList = document.querySelectorAll(triggerSelector);
    const modal: Node = document.querySelector(modalSelector);
    const close: Node = document.querySelector(closeSelector);

    triggers.forEach((trigger: Node) => {
      trigger.addEventListener('click', (e): void => {
        if (e.target) {
          e.preventDefault();
        }

        showModal(modal);
      });
    });

    close.addEventListener('click', (): void => {
      closeModal(modal);
    });

    document.addEventListener('keydown', (e): void => {
      if (e.key === 'Escape') {
        closeModal(modal);
      }
    })

    modal.addEventListener('click', (e): void => {
      if (e.target === modal) {
        closeModal(modal);
      }
    })
  }
  
  const closeModal = (modal: any): void => {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
  }

  const showModal = (modal: any): void => {
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

  showModalByTime('.popup', 5000);
};