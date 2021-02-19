// get-target.js
jlogs('exist?', 'getTarget');

/**
 *
 * @param selector
 * @param callback
 * @returns {HTMLHeadElement}
 */
function onSelector(selector, callback) {
    var f = 'onSelector';

    jlogs(f, 'selector typeof', selector, typeof selector);

    if (typeof selector === 'string') {

        var elem = document.querySelectorAll(selector)[0] || document.querySelectorAll(selector);
        // var elem = document.querySelectorAll(selector)[0] || document.querySelectorAll(selector) || document.getElementsByTagName('head')[0] || document.body;
        jlogs(f, ' elem ', elem);

        if (!isEmpty(elem)) {
            return callback(selector, elem);
        } else {
            // if (i === 'head') {
            //     loadContentByUrls(jloads, object, mapFunction, success, error);
            //     success(jloads.getTarget());
            // } else if (i === 'body') {
            //     jlogs(f, ' wait for body i ', i);
            //     jlogs(f, ' wait for body target ', jloads.getTarget());
            //     document.addEventListener("DOMContentLoaded", function () {
            //         ReadyHtml(object, i, mapFunction, success, error);
            //     });
            // } else {
            //     jlogs(f, ' wait for element i ', i);
            //     jlogs(f, ' wait for element target ', jloads.getTarget());
            //
            //     try {
            //         // set up the mutation observer
            //         var observer = new MutationObserver(function (mutations, me) {
            //             // `mutations` is an array of mutations that occurred
            //             // `me` is the MutationObserver instance
            //             // var canvas = document.getElementById('my-canvas');
            //             var canvas = document.querySelectorAll(i)[0] || document.querySelectorAll(i)
            //             if (canvas) {
            //                 // callback executed when canvas was found
            //                 ReadyHtml(object, i, mapFunction, success, error);
            //                 me.disconnect(); // stop observing
            //                 return;
            //             }
            //         });
            //
            //         // start observing
            //         observer.observe(document, {
            //             childList: true,
            //             subtree: true
            //         });
            //
            //     } catch (e) {
            //         //jlogs(f, ' ERROR elem ', elem);
            //         jlogs(f, ' getOne ERROR e ', e);
            //         error(e);
            //     }
            // }
            waitFor(selector, 40, function (selector) {
                var elem = document.querySelectorAll(selector)[0] || document.querySelectorAll(selector);
                // var elem = document.querySelectorAll(i)[0] || document.querySelectorAll(i);
                jlogs('onSelector waitFor selector', selector);
                jlogs('onSelector waitFor document.querySelectorAll', document.querySelectorAll(selector));
                return callback(selector, elem);
            });
            return callback(selector, elem);
        }

    } else {

        jlogs(f, 'elem NOT', selector);
        selector = 'body';
        // var elem = document.querySelectorAll(selector)[0] || document.querySelectorAll(selector);
        // document.addEventListener("DOMContentLoaded", function () {
        //     var elem = document.body;
        //     jlogs(f, 'elem NOT DOMContentLoaded', selector);
        //     callback(selector, elem);
        // });
        // waitFor(selector, 40, function (selector) {
        //     var elem = document.body;
        //     // var elem = document.querySelectorAll(i)[0] || document.querySelectorAll(i);
        //     console.log('onSelector waitFor selector', selector);
        // });


        document.addEventListener("DOMContentLoaded", function(event) {
            var elem = document.body;
            jlogs(f, 'elem NOT DOMContentLoaded selector', selector, elem);
            jlogs(f, 'elem NOT DOMContentLoaded elem',  elem);
            callback(selector, elem);
        });

    }
}
