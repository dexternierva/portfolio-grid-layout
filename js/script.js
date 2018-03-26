(function (global) {
    'use strict';

    /**
     * Toggle Responsive Navigation
     * 
     */
    const projectNav = document.querySelector('.filters');
    const filterToggle = document.querySelector('.filter-toggle');
    const sortToggle = document.querySelector('.sort-items-toggle');
    const sortList = document.querySelector('.sort-items-list');

    filterToggle.addEventListener('click', function () {
        projectNav.classList.toggle('filters--open');
        this.classList.toggle('filter-toggle--open');
    });

    sortToggle.addEventListener('click', function () {
        sortList.classList.toggle('sort-items-list--open');
        this.classList.toggle('sort-items-toggle--down');
    });

    /**
     * Projects Masonry Layout
     * 
     */
    function resizeGridItem (item) {
        let grid = document.querySelector('.projects');
        let rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
        let rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
        let rowSpan = Math.ceil((item.querySelector('.project-content').getBoundingClientRect().height+rowGap) / (rowHeight+rowGap));
        item.style.gridRowEnd = "span " + rowSpan;
    }

    function resizeAllGridItems () {
        let allItems = document.querySelectorAll('.project');
        allItems.forEach(function (item) {
            imagesLoaded( item, resizeInstance );
        });
    }

    function resizeInstance(instance) {
        let item = instance.elements[0];
        resizeGridItem(item);
    }

    window.onload = resizeAllGridItems();

    window.addEventListener("resize", resizeAllGridItems);

    /**
     * Mixitup
     * 
     */
    var mixer = mixitup('.projects', {
        animation: {
            duration: 300
        }
    });

}(window));