(function () {
    var menuToggle = document.querySelector('.menu-toggle');
    var siteMenu = document.querySelector('#site-menu');

    if (menuToggle && siteMenu) {
        menuToggle.addEventListener('click', function () {
            var isOpen = siteMenu.classList.toggle('is-open');
            menuToggle.setAttribute('aria-expanded', String(isOpen));
        });

        siteMenu.addEventListener('click', function (event) {
            if (event.target.closest('a')) {
                siteMenu.classList.remove('is-open');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    var mobileTimeline = document.querySelector('#timeline-mobile');
    if (!mobileTimeline || !window.timelineData) {
        return;
    }

    function dateLabel(date) {
        if (!date || !date.year) {
            return '';
        }
        var parts = [date.year];
        if (date.month) {
            parts.push(String(date.month).padStart(2, '0'));
        }
        if (date.day) {
            parts.push(String(date.day).padStart(2, '0'));
        }
        return parts.join('-');
    }

    function addText(parent, tag, className, value) {
        var element = document.createElement(tag);
        element.className = className;
        element.textContent = value || '';
        parent.appendChild(element);
        return element;
    }

    var title = timelineData.title;
    if (title && title.text) {
        var intro = document.createElement('article');
        intro.className = 'timeline-mobile__intro';
        addText(intro, 'h1', '', title.text.headline);
        addText(intro, 'p', '', title.text.text);
        mobileTimeline.appendChild(intro);
    }

    (timelineData.events || []).forEach(function (event) {
        var card = document.createElement('article');
        card.className = 'timeline-mobile__event';
        var start = dateLabel(event.start_date);
        var end = dateLabel(event.end_date);
        addText(card, 'time', '', end ? start + ' — ' + end : start);

        if (event.text) {
            addText(card, 'h2', '', event.text.headline);
            addText(card, 'p', '', event.text.text);
        }

        if (event.media && event.media.url && !/^https?:\/\//i.test(event.media.url)) {
            var image = document.createElement('img');
            image.src = event.media.url;
            image.alt = event.text && event.text.headline ? event.text.headline : '';
            image.loading = 'lazy';
            card.appendChild(image);
        }
        mobileTimeline.appendChild(card);
    });
}());
