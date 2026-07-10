// Keep the timeline data in the repository so the portfolio does not depend
// on a mutable Google Sheet or on the TimelineJS "latest" embed endpoint.
var timelineData = {
    title: {
        text: {
            headline: "Xue Liangliang",
            text: "A personal timeline"
        },
        media: { url: "img/xll.jpg" }
    },
    events: [
        {
            start_date: { year: 1980, month: 10 },
            text: { headline: "Big Bang", text: "\"I\" formed as a live entity." },
            background: { color: "#182033" }
        },
        {
            start_date: { year: 1981, month: 6, day: 25 },
            text: { headline: "Where was I born?", text: "I was born in Binhai County, Yancheng, Jiangsu, China." },
            media: { url: "img/birthday.jpg" }
        },
        {
            start_date: { year: 1981, month: 10, day: 3 },
            text: { headline: "First Photo in Life", text: "100 days old." },
            media: { url: "img/xll.png" },
            background: { url: "img/birthday.jpg" }
        },
        {
            start_date: { year: 1987, month: 9, day: 1 },
            text: { headline: "First Day in School", text: "I didn't take a photo that day, so I borrowed my elder son's first-day-at-school photo. :-)" },
            media: { url: "img/first_day_of_school.jpg" }
        },
        {
            start_date: { year: 1989, month: 7, day: 7 },
            text: { headline: "Move to Yancheng", text: "I moved to Yancheng with my parents and made many new friends." },
            media: { url: "img/yanchengyixiao.jpg" }
        },
        {
            start_date: { year: 1989, month: 9, day: 1 },
            end_date: { year: 1993, month: 7, day: 7 },
            text: { headline: "Primary School in Yancheng", text: "I studied at Yancheng No. 1 Primary School." },
            media: { url: "img/yanchengyixiao.jpg" }
        },
        {
            start_date: { year: 1993, month: 9, day: 1 },
            end_date: { year: 1998, month: 10, day: 23 },
            text: { headline: "Middle School", text: "I studied at Yancheng Middle School, which has a beautiful campus." },
            media: { url: "img/yanzhong1.jpg" }
        },
        {
            start_date: { year: 1998, month: 10, day: 28 },
            text: { headline: "Arrival in Singapore", text: "I was selected by Singapore MOE, received an MOE scholarship, and moved to Singapore to continue my studies." },
            media: { url: "img/singapore.jpg" }
        },
        {
            start_date: { year: 2000, month: 7, day: 7 },
            end_date: { year: 2004, month: 7, day: 7 },
            text: { headline: "NTU", text: "I earned my Bachelor of Computer Engineering at NTU." },
            media: { url: "img/NTU3.jpg" },
            background: { url: "img/NTU.jpg" }
        },
        {
            start_date: { year: 2004, month: 7, day: 27 },
            end_date: { year: 2007, month: 7, day: 19 },
            text: { headline: "First Job", text: "I started as a product developer at LGA Telecom Pte Ltd, focusing mainly on the open-source PABX system Asterisk." },
            media: { url: "img/xll.jpg" }
        },
        {
            start_date: { year: 2006, month: 1 },
            end_date: { year: 2007, month: 12 },
            text: { headline: "NUS", text: "I pursued a Master of Computer Science at NUS." },
            media: { url: "img/NUS2.jpg" },
            background: { url: "img/NUS.jpg" }
        },
        {
            start_date: { year: 2006, month: 4, day: 4 },
            text: { headline: "I am a married man", text: "I married Cai Deqin." },
            media: { url: "img/Marriage.jpg" }
        },
        {
            start_date: { year: 2007, month: 3, day: 7 },
            text: { headline: "I am a father", text: "My elder son was born." },
            media: { url: "img/son1.JPG" }
        },
        {
            start_date: { year: 2007, month: 7, day: 12 },
            end_date: { year: 2013, month: 11, day: 30 },
            text: { headline: "IT Consultant", text: "I started my second job as an IT consultant at THS Mobile Data Exchange Pte Ltd." },
            media: { url: "img/xll.jpg" }
        },
        {
            start_date: { year: 2008, month: 4, day: 18 },
            text: { headline: "Son started to walk", text: "My elder son's first steps." },
            media: { url: "https://www.youtube.com/watch?v=ttZaptX6ufA" }
        },
        {
            start_date: { year: 2010, month: 4, day: 12 },
            text: { headline: "Father ^2", text: "My younger son was born. Double happiness, double responsibility." },
            media: { url: "img/son2.JPG" }
        },
        {
            start_date: { year: 2013, month: 12, day: 3 },
            end_date: { year: 2017 },
            text: { headline: "Popular e-Learning Pte Ltd", text: "In 2013, I joined Popular e-Learning, the educational-technology R&D and content-development division of Popular Holdings Ltd." },
            media: { url: "https://www.youtube.com/watch?v=6z0rnUDQZ6o" }
        },
        {
            start_date: { year: 2015, month: 8 },
            end_date: { year: 2017, month: 8 },
            text: { headline: "NUS Again!", text: "I returned to NUS for a second master's degree in Technology Management, meeting new friends and exploring new domains." },
            media: { url: "img/NUS3.jpg" },
            background: { url: "img/NUS.jpg" }
        },
        {
            start_date: { year: 2017 },
            end_date: { year: 2081 },
            text: { headline: "Where am I going?", text: "What kind of person will I be?" },
            background: { url: "img/sea.jpg" }
        }
    ]
};
