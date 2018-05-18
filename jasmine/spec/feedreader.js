/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('AllFeeds variable are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('URL defined and is not empty', function() {
            allFeeds.forEach(function(Feed) {
                //Checks if URL is defined
                expect(Feed.url).toBeDefined();
                //Checks if URL is not empty 
                expect(Feed.url).not.toBe('');
            });
        });
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('Name defined and is not empty', function() {
            allFeeds.forEach(function(Feed) {
                //Checks if name is defined
                expect(Feed.name).toBeDefined();
                //Check if it is not empty 
                expect(Feed.name).not.toBe('');
            });
        });
    });
    /* TODO: Write a new test suite named "The menu" */
    describe('Menu', function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('Menu element is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('Menu changes visibility when menu icon is clicked', function() {
            //defines variable to be checked when the icon is clicked 
            let menuIcon = $('.menu-icon-link');
            //Checks if menu  hidden is false when the user clicked at first time
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            //Checks if menu-hidden is true when clicked at second time
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });
        it('There is at least a single entry element within the feed container', function() {
            let entryElement = $('.entry');
            expect(entryElement.length).toBeGreaterThan(0);

        });
    });
    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded      
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        //Define tow variables to save the previous URL and the new URL then check if the tow URLs are identical or no
        let oldURL;
        let newURL;
        beforeEach(function(done) {
            oldURL = $('.entry-link').attr('href');
            loadFeed(1, done);
        });
        it('When a new feed is loaded by the loadFeed function the content changes', function(done) {
            newURL = $('.entry-link').attr('href');
            expect(newURL).not.toBe(oldURL);
            done();
        });
    });
}());