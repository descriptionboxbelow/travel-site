// 1/2 import Modal.js from its location
import Modal from './modules/Modal';
import MobileMenu from './modules/MobileMenu';
import StickyHeader from './modules/StickyHeader';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

// 2/2 create a new instance of the Modal class
var modal = new Modal();
var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");
var stickyHeader = new StickyHeader();
