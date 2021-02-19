// jloads.js
jlogs('exist?', 'jloads');

/**
 *
 * @param cfg
 * @returns {jloads}
 */
var jloads = function (cfg) {
    var f = 'jloads';

    // SETTINGS
    this.cfg = {};
    if (isEmpty(cfg)) cfg = {};

    if (isEmpty(cfg.area))
        this.cfg.area = document;
    else
        this.cfg.area = cfg.area;

    if (isEmpty(cfg.selector))
        this.cfg.selector = "body";
    else
        this.cfg.selector = cfg.selector;

    if (isEmpty(cfg.exist))
        this.cfg.exist = false;
    else
        this.cfg.exist = cfg.exist;

    var success = null;
    if (isEmpty(cfg.success)) {
        success = function (data) {
            console.log(f, ' loaded ', data);
        };
    } else {
        success = cfg.success;
    }

    var error = null;
    if (isEmpty(cfg.error)) {
        error = function (data) {
            console.error(f, ' !loaded ', data);
        };
    } else {
        error = cfg.error;
    }

    if (isEmpty(cfg.jloads)) {
        this.jloads = new Load({
            target: this.cfg.selector,
            success: success,
            error: error,
        });
    } else {
        this.jloads = cfg.jloads;
    }

    // PRIVATE
    var self = this;

    self.selector = function (selector) {
        self.cfg.selector = selector;
        return self;
    }


    self.mapFunction = map;


    self.form = function (json, success, error) {
        var f = 'jloads.form';

        jlogs(' jloads.form', ' json ', json, Object.keys(json).length, Object.keys(json)[0]);

        // var elem = document.querySelectorAll(i)[0] || document.querySelectorAll(i) || document.body;
        // jlogs('jloads.form selectorEvent1 ', ' elem ', elem, !isEmpty(elem));

        // var jloads = new Load(selector, success, error);

        jlogs('jloads.form Object.keys(json).length', Object.keys(json).length);

        if (Object.keys(json).length === 1) {

            var selector_event = Object.keys(json)[0];
            var se = selector_event.split(":", 2);
            var selector = se[0];
            var event = se[1];
            var targets = json[selector_event];
            jlogs('jloads.form selector event targets', selector, event, targets);

            onSelector(selector, function (select, element) {
                jlogs(f, 'elem wait DOMContentLoaded select element', select, element);
                selectorEventTarget(selector, event, targets, success, error);
            });

            // document.addEventListener("DOMContentLoaded", function(event) {
            //     jlogs(f, 'elem wait DOMContentLoaded selector event', selector, event);
            //     selectorEventTarget(selector, event, targets, success, error);
            // });

        } else {
            for (var selector in json) {
                var event = json[selector];
                // selectorEvent1(jloads, selector, event, self.mapFunction, success, error)
            }
        }
        // success(json);

        // return jloads;
    }

    self.obj = function (url, success, error) {
        var f = 'jloads.obj';

        if (typeof url === 'string') {
            try {
                // base64 in url
                if (url.length > 2) {
                    return loadJson(url, success);
                }
                // success(json, url);
                // return json;
            } catch (e) {
                //jlogs(f, ' ERROR elem ', elem);
                jlogs(f, ' ERROR e ', e);
                return error(e, url);
            }
        }
        return null;
    }


    self.file = function (json) {
        var f = 'jloads.file';

        // jlogs(' jloadsFile', ' json ', json, Object.keys(json).length, Object.keys(json)[0]);
        var url = Object.keys(json)[0];
        jlogs(f, ' url ', url);

        if (Object.keys(json).length === 1) {


            var success1 = function () {
                var jloads2 = new Load({
                    target: "head",
                    success: success,
                    error: error,
                    //replace: 1,
                });

                var f = 'jloads.file';
                // jlogs(f, ' success json[url]', json[url]);
                // TODO: sprawdzic czy nie powniny ladowac sie inne targety, a nie tylko domyslny: head
                for (var i in json[url]) {
                    var url2 = json[url][i];

                    jlogs(f, ' success url2', url2);
                    jloads2.setUrl(url2);
                    jloads2.setMap(mapFunction);
                    jloads2.run();
                }
            }

            var jloads1 = new Load({
                target: "head",
                success: success,
                error: error,
                //replace: 1,
            });

            // var funcName = getFunctionName(url, self.mapFunction, 'self.file');
            // jlogs(f, ' funcName ', funcName, url);
            // jloads1[funcName](url);
            jloads1.setUrl(url);
            jloads1.setMap(self.mapFunction);
            jloads1.run();
        }
        return self;
    }


    self.event = function (json) {
        var f = 'jloads.event';

        jlogs(f, ' json ', json, Object.keys(json).length, Object.keys(json)[0]);

        if (Object.keys(json).length === 1) {
            var selector = Object.keys(json)[0];
            var event = json[selector];
            selectorEvent(self.jloads, selector, event, self.mapFunction, success, error)
        } else {
            for (var selector in json) {
                var event = json[selector];
                selectorEvent(self.jloads, selector, event, self.mapFunction, success, error)
            }
        }

        return self;
    }

    self.target = function (json) {
        var f = 'jloads.target';

        jlogs(f, ' json ', json, Object.keys(json).length, Object.keys(json)[0]);

        // var elem = document.querySelectorAll(i)[0] || document.querySelectorAll(i) || document.body;
        // jlogs('jloadsTarget getOne ', ' elem ', elem, !isEmpty(elem));

        // var i = Object.keys(json)[0];
        // jlogs(f, ' i ', i);
        jlogs(f, ' json ', json);

        // if (Object.keys(json).length === 1) {
        //     getOne(self.jloads, json[i], i, self.mapFunction, success, error)
        // } else {
        for (var i in json) {
            //var object = json[i];
            //getOne(self.jloads, object, i, self.mapFunction, success, error);
            getOne(new Load({
                    json: json[i],
                    mapFunction: self.mapFunction,
                    url: json[i],
                    target: i,
                    success: success,
                    error: error,
                    replace: 1,
                })
            );
        }
        // }
        // success(json);

        return self;
    }
    // Load files by path in url bar, similar such event loading, check if url value is changed
    self.url = function (json) {
        var f = 'jloads.url';

        jlogs(f, ' json ', json, Object.keys(json).length, Object.keys(json)[0]);

        // var elem = document.querySelectorAll(i)[0] || document.querySelectorAll(i) || document.body;
        // jlogs('jloadsTarget getOne ', ' elem ', elem, !isEmpty(elem));

        var i = Object.keys(json)[0];
        jlogs(f, ' getOne ', ' i ', i);

        // Dynamic loading
        document.addEventListener("DOMContentLoaded", function (event) {
            //check if exist hash, if yes, than execute below
            urlLoad(self, json, success, error);
        });

        // function hashHandler(){
        //     this.oldHash = window.location.hash;
        //     this.Check;
        //
        //     var that = this;
        //     var detect = function(){
        //         if(that.oldHash!=window.location.hash){
        //             alert("HASH CHANGED - new has" + window.location.hash);
        //             that.oldHash = window.location.hash;
        //         }
        //     };
        //     this.Check = setInterval(function(){ detect() }, 100);
        // }
        //
        // var hashDetection = new hashHandler();
        // window.addEventListener('locationchange', function(){
        //     console.log('location changed!');
        // })
        // if (Object.keys(json).length === 1) {
        window.addEventListener('popstate', function (event) {
            // Log the state data to the console
            console.log(f, window.location.hash);
            console.log(f, self.jloads);
            urlLoad(self, json, success, error);
            // getOne(self.jloads, json[i], i, self.mapFunction, success, error)

        });
        // } else {

        // }
        // success(json);

        return self;
    }

    return self;
};
