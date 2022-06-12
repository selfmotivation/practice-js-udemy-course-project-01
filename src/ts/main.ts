import "./slider";
import { modals } from './modules/modals';
import { tabs } from "./modules/tabs";
import { forms } from "./modules/forms";

window.addEventListener('DOMContentLoaded', () => {
  modals();
  tabs({
    headerSelector: '.glazing_slider',
    tabSelector: '.glazing_block',
    contentSelector: '.glazing_content',
    activeClass: 'active',
    displayState: 'block'
  });
  tabs({
    headerSelector: '.decoration_slider',
    tabSelector: '.no_click',
    contentSelector: '.decoration_content > div > div',
    activeClass: 'after_click',
    displayState: 'block'
  });
  tabs({
    headerSelector: '.balcon_icons',
    tabSelector: '.balcon_icons_img',
    contentSelector: '.big_img > img',
    activeClass: 'do_image_more',
    displayState: 'inline-block'
  });
  forms();
})