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

    function dateParts(date) {
        var source = date && date.data ? date.data : date;
        if (!source || !source.year) {
            return null;
        }
        var detail = [];
        if (source.month) {
            detail.push(String(source.month).padStart(2, '0'));
        }
        if (source.day) {
            detail.push(String(source.day).padStart(2, '0'));
        }
        return {
            year: String(source.year),
            detail: detail.join('-')
        };
    }

    function addDate(parent, startDate, endDate) {
        var start = dateParts(startDate);
        var end = dateParts(endDate);
        var time = document.createElement('time');

        function fullDate(date) {
            return date ? date.year + (date.detail ? ' ' + date.detail : '') : '';
        }

        if (end) {
            addText(time, 'span', 'timeline-mobile__range', fullDate(start) + ' ~ ' + fullDate(end));
        } else {
            addText(time, 'span', 'timeline-mobile__year', start ? start.year : '');
            if (start && start.detail) {
                addText(time, 'span', 'timeline-mobile__date', start.detail);
            }
        }
        parent.appendChild(time);
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
        addDate(card, event.start_date, event.end_date);

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
