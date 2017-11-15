import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScrool from 'jquery-smooth-scroll';

class StickyHeader {
  constructor() {
    this.siteHeader = $(".site-header");
    // property that saves the selection (using jQuery) of our trigger element of choice
    this.headerTriggerElement = $(".large-hero__title");
    this.createHeaderWaypoint();
    // we are creating a new property for our constructor
    // it is a collection of all our actual page section elements
    this.pageSections = $(".page-section");
    this.headerLinks = $(".primary-nav a");
    this.createPageSectionWaypoints();
    this.addSmoothScrolling();
  }
  // create a new method to enable smooth scrolling
  addSmoothScrolling() {
    this.headerLinks.smoothScroll();
  }

  createHeaderWaypoint() {
    // solving this' scope issue with var "that"
    var that = this;
    new Waypoint({
      element: this.headerTriggerElement[0],
      // handler -> what happens when element gets to the top of viewport?
      handler: function(direction) {
        if (direction == "down") {
          that.siteHeader.addClass("site-header--dark");
        } else {
          that.siteHeader.removeClass("site-header--dark");
        }
      }
    });
  }

  createPageSectionWaypoints() {
    var that = this;
    // accessing the pageSections property, then using jQuery's "each()" method to loop thru it
    this.pageSections.each(function() {
      var currentPageSection = this;
      new Waypoint({
        // set element property to page section DIV we are currently looped to
        element: currentPageSection,
        handler: function(direction) {
          if (direction === "down") {
            // extract the custom data attribute
            var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
            // here we should reset things by removing this class from any and all header links
            that.headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "18%"
      });

      new Waypoint({
        // set element property to page section DIV we are currently looped to
        element: currentPageSection,
        handler: function(direction) {
          if (direction === "up") {
            // extract the custom data attribute
            var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
            // here we should reset things by removing this class from any and all header links
            that.headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "-30%"
      });
    });
  }
}

export default StickyHeader;
