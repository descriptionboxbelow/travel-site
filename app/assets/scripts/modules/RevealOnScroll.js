import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';


class RevealOnScroll {
  constructor(els, offset) {
    // itemsToReveal property should point to the DOM element that we want to reveal
    // selecture "feature-item" class using jQuery
      this.itemsToReveal = els;
      this.hideInitialy();
      this.offsetPercentage = offset;
      this.createWaypoint();
  }
  hideInitialy(){
    this.itemsToReveal.addClass("reveal-item");
  }
  createWaypoint(){
    var that = this;
    // We create one waypoint for each item.
    // we store those 4 items into property itemsToReveal
    this.itemsToReveal.each(function () {
      var currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function () {
          $(currentItem).addClass("reveal-item--is-visible");
        },
        offset: that.offsetPercentage
      });
    });
  }
}

export default RevealOnScroll;
