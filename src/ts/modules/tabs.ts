export const tabs = (headerSelector: string, tabSelector: string, contentSelector: string, activeClass: string): void => {
  const header: Node = document.querySelector(headerSelector);
  const tabs: NodeListOf<HTMLElement> = document.querySelectorAll(tabSelector);
  const content: NodeListOf<HTMLElement> = document.querySelectorAll(contentSelector);

  const hideTabContent = (): void => {
    content.forEach((contentItem) => {
      contentItem.style.display = 'none';
    });

    tabs.forEach((tab): void => {
      tab.classList.remove(activeClass);
    });
  }

  const showTabContent = ((i: number = 0): void => {
    content[i].style.display = 'block';
    tabs[i].classList.add(activeClass);
  });

  hideTabContent();
  showTabContent();

  header.addEventListener('click', (event): void => {
    const target: any = event.target;

    if (target &&
        (target.classList.contains(tabSelector.replace(/\./, "")) ||
        target.parentElement.classList.contains(tabSelector.replace(/\./, "")))) {
          tabs.forEach((tab, index): void => {
            if (target === tab || target.parentElement === tab) {
              hideTabContent();
              showTabContent(index);
            }
          });
        }
  });
}