"use strict";

type TabsParams = {
  headerSelector: string;
  tabSelector: string;
  contentSelector: string;
  activeClass: string;
  displayState: string;
}

export const tabs = (tabsParams: TabsParams): void => {
  const { headerSelector, tabSelector, contentSelector, activeClass, displayState } = tabsParams;
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
    content[i].style.display = displayState;
    tabs[i].classList.add(activeClass);
  });

  hideTabContent();
  showTabContent();

  header.addEventListener('click', (event): void => {
    const target = event.target as Element;

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