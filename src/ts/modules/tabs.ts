"use strict";

type TabsParams = {
  headerSelector: string;
  tabSelector: string;
  contentSelector: string;
  activeClass: string;
}

export const tabs = (tabsParams: TabsParams): void => {
  const header: Node = document.querySelector(tabsParams.headerSelector);
  const tabs: NodeListOf<HTMLElement> = document.querySelectorAll(tabsParams.tabSelector);
  const content: NodeListOf<HTMLElement> = document.querySelectorAll(tabsParams.contentSelector);

  const hideTabContent = (): void => {
    content.forEach((contentItem) => {
      contentItem.style.display = 'none';
    });

    tabs.forEach((tab): void => {
      tab.classList.remove(tabsParams.activeClass);
    });
  }

  const showTabContent = ((i: number = 0): void => {
    content[i].style.display = 'block';
    tabs[i].classList.add(tabsParams.activeClass);
  });

  hideTabContent();
  showTabContent();

  header.addEventListener('click', (event): void => {
    const target: any = event.target;

    if (target &&
        (target.classList.contains(tabsParams.tabSelector.replace(/\./, "")) ||
        target.parentElement.classList.contains(tabsParams.tabSelector.replace(/\./, "")))) {
          tabs.forEach((tab, index): void => {
            if (target === tab || target.parentElement === tab) {
              hideTabContent();
              showTabContent(index);
            }
          });
        }
  });
}