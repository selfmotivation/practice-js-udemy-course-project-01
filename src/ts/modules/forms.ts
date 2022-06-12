export const forms = (): void => {
  const allForms: NodeListOf<HTMLFormElement> = document.querySelectorAll('form');
  const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('input');
  const phoneInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[name="user_phone"]');

  phoneInputs.forEach((phoneInput: HTMLInputElement): void => {
    phoneInput.addEventListener('input', (): void => {
      phoneInput.value = phoneInput.value.replace(/\D/, '');
    });
  });

  type statusMessage = {
    loading: string,
    success: string,
    failure: string
  };

  const status: statusMessage = {
    loading: 'Загрузка',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так'
  };

  const postData = async (url: string, data: BodyInit): Promise<string> => {
    document.querySelector('.status').textContent = status.loading;
    
    const result = await fetch(url, {
      method: 'POST',
      body: data,
    });

    return await result.text();
  };

  const clearInputs = (): void => {
    inputs.forEach((input: HTMLInputElement): void => {
      input.value = '';
    });
  }

  allForms.forEach((form: HTMLFormElement): void => {
    form.addEventListener('submit', (event): void => {
      event.preventDefault();

      const statusMessage: HTMLDivElement = document.createElement('div');
      statusMessage.classList.add('status');
      form.appendChild(statusMessage);

      const formData: FormData = new FormData(form);

      postData('assets/server.php', formData)
        .then((result: string): void => {
          console.log(result);
          statusMessage.textContent = status.success;
        })
        .catch((): void => {
          statusMessage.textContent = status.failure;
        })
        .finally((): void => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove();
          }, 5000);
        });
    });
  });
}