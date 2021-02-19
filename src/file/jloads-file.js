// jloads-file.js
/**
 *
 * @param json
 * @param success
 * @param error
 * @param mapFunction
 * @returns {Load}
 */
jlogs('exist?', 'jloadsFile');
if (typeof jloadsFile !== 'function') waitForSelector = function (json, success, error, mapFunction) {
    var f = 'jloadsFile';

    //url is URL of external file, success is the code
    //to be called from the file, location is the location to
    //insert the <script> element

    if (typeof success !== 'function' && (typeof success !== 'object' || success === null)) {
        // Configuration
        success = function (data) {
            console.log(f, ' loaded ', data);
        };
    }

    if (typeof error !== 'function' && (typeof error !== 'object' || error === null)) {
        error = function (data) {
            console.error(f, ' !loaded ', data);
        };
    }


    if (typeof mapFunction !== 'object' && typeof map === 'object') {
        // Configuration
        mapFunction = map;
    }
    jlogs(' jloadsFile', ' json ', json, Object.keys(json).length, Object.keys(json)[0]);


    // var elem = document.querySelectorAll(i)[0] || document.querySelectorAll(i) || document.body;
    var url = Object.keys(json)[0];
    jlogs('jloadsFile getOne ', ' url ', url);

    //TODO: target: i, not exist
    var l = new Load({
        target: i,
        success: success,
        error: error,
        //replace: 1,
    });

    console.log(f, "load file:", Object.keys(json), json[url], url);
    if (Object.keys(json).length === 1) {

        //getOne(jloads, json[i], i, mapFunction, success, error)

        l.setUrl(url);
        l.setMap(mapFunction);
        l.run();

        // TODO: moze cos nie dzialac z target lub elementami, dodatkowo spradzic
        for (var i in json[url]) {
            var url2 = json[url][i];
            // getOne(jloads, object, i, mapFunction, success, error)
            var l2 = new Load({
                target: i,
                success: success,
                error: error,
                //replace: 1,
            });
            l2.setUrl(json[url][i]);
            l2.setMap(mapFunction);
            l2.run();
        }

    // } else {
    //     for (var i in json) {
    //         var object = json[i];
    //         getOne(jloads, object, i, mapFunction, success, error)
    //     }
    }
    // success(json);

    return l;
}
