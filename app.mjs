// import scrape from 'website-scraper'; // only as ESM, no CommonJS
// // const scrape = require('website-scraper'); // CommonJS only
// const options = {
//   urls: ['https://massive-number-496753.framer.app/'],
//   directory: './opium'
// };

// // with async/await
// // const result = await scrape(options);

// // with promise
// scrape(options).then((result) => {});


import scrape from 'website-scraper';
import PuppeteerPlugin from 'website-scraper-puppeteer';

await scrape({
    urls: ['https://massive-number-496753.framer.app/'],
    directory: './opium',
    plugins: [
        new PuppeteerPlugin({
            launchOptions: { headless: false }, /* optional */
            scrollToBottom: { timeout: 10000, viewportN: 20 }, /* optional */
            blockNavigation: false, /* optional */
            isMobile: false, /* optional */
            defaultViewport: null
        }),
    ],
});
