/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('should have a url that is a string and is not empty', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.url).toBeDefined();
                expect(typeof feed.url).toBe('string');
                expect(feed.url.length).not.toBe(0);
            });
        })

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('should have a name that is a string and is not empty', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.name).toBeDefined();
                expect(typeof feed.name).toBe('string');
                expect(feed.url.length).not.toBe(0);
            });
        })
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function () {
        /* TODO: Write a test that ensures the menu element is
       * hidden by default. You'll have to analyze the HTML and
       * the CSS to determine how we're performing the
       * hiding/showing of the menu element.
       */
        var body = document.querySelector('body');
        var menuIcon = document.getElementsByClassName('menu-icon-link')[0];
        let icon = $('.menu-icon-link');
        let links = $('.feed-list').children();

        it('should be hidden by default', function () {
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });

        /* TODO: Write a test that ensures the menu changes
        * visibility when the menu icon is clicked. This test
        * should have two expectations: does the menu display when
        * clicked and does it hide when clicked again.
        */


        it('visibilty should be changeable when burger icon is clicked', function () {

            spyOn(icon, 'click');
            icon.trigger('click');
            expect(body.classList.contains('menu-hidden')).toBe(false);
            icon.trigger('click');
            expect(body.classList.contains('menu-hidden')).toBe(true);

        });


        it('should be hidden when a feed is clicked', function () {
            spyOn(links, 'click');
            expect(body.classList.contains('menu-hidden')).toBe(true);
            links.trigger('click');
            expect(body.classList.contains('menu-hidden')).toBe(true);
        })

    });


    /* TODO: Write a new test suite named "Initial Entries" */

    describe('Initial Entries', function () {
        let feed = $('.feed');


        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            })
        })


        /* TODO: Write a test that ensures when the loadFeed
        * function is called and completes its work, there is at least
        * a single .entry element within the .feed container.
        * Remember, loadFeed() is asynchronous so this test will require
        * the use of Jasmine's beforeEach and asynchronous done() function.
        */


        it('should have atleast one entry', function (done) {
            expect(feed.children().length).toBeGreaterThan(0);
            done();
        })

    })


    describe('New Feed Selection', function () {
         /* TODO: Write a new test suite named "New Feed Selection" */
        var feed = $('.feed');
        var firstFeed;

        beforeEach(function (done) {
            loadFeed(0, function () {
              firstFeed = feed.html();  
            })

            loadFeed(2, function (){
                done()
            })
        })




            /* TODO: Write a test that ensures when a new feed is loaded
            * by the loadFeed function that the content actually changes.
            * Remember, loadFeed() is asynchronous.
            */



        it('should have a new feed once a feed link is clicked', function (done) {
            expect(feed.html() === firstFeed).toBe(false);
            done()
        })
    }) 




}());
