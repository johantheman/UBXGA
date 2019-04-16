// JavaScript Document
if(typeof(google_ubx)=="undefined"){google_ubx = {};}
google_ubx.version = "2.0.0";
google_ubx.host = google_ubx.host || "<REPLACE_UBX_API_HOST_URL>";
google_ubx.authKey = google_ubx.authKey || "<REPLACE_UBX_EVENT_AUTH_KEY>";
if (typeof(window.ubxCaptureToConsole)=="undefined"){window.ubxCaptureToConsole=false;}
if (typeof(window.ubxCaptureIdents)=="undefined"){window.ubxCaptureIdents=true;}

//change this to false if you do not want to send individual item purchase event when cart purchase event is sent
google_ubx.sendIndividualItemPurchaseEventWithCartPurchaseEvent = true;

google_ubx.init = function (configObj) {
    google_ubx.host = configObj.ubxHostName;
    google_ubx.authKey = configObj.ubxAuthKey;
};

google_ubx.addProductAttributesToMapper = function (attributesMapper) {
    attributesMapper.push({"googleName":"pr1id", "ubxName":"productID","type":"string"});
    attributesMapper.push({"googleName":"pr1nm", "ubxName":"productName","type":"string"});
    attributesMapper.push({"googleName":"pr1ca", "ubxName":"category","type":"string"});
    attributesMapper.push({"googleName":"pr1va", "ubxName":"color","type":"string"});
    attributesMapper.push({"googleName":"pr1pr", "ubxName":"basePrice","type":"number"});
    attributesMapper.push({"googleName":"pr1qt", "ubxName":"quantity","type":"number"});
    attributesMapper.push({"googleName":"dl", "ubxName":"productURL","type":"string"});
};

google_ubx.googleToUBXPageViewEvent = {};
google_ubx.googleToUBXPageViewEvent.ubxEventType = "ibmpageView";
google_ubx.googleToUBXPageViewEvent.attributesMapper = [];
google_ubx.googleToUBXPageViewEvent.attributesMapper.push({"googleName":"cid", "ubxName":"interactionId","type":"string"});
google_ubx.googleToUBXPageViewEvent.attributesMapper.push({"googleName":"dt", "ubxName":"pageId","type":"string"});
google_ubx.googleToUBXPageViewEvent.attributesMapper.push({"googleName":"dl", "ubxName":"pageURL","type":"string"});

google_ubx.googleToUBXProductViewEvent = {};
google_ubx.googleToUBXProductViewEvent.ubxEventType = "ibmproductView";
google_ubx.googleToUBXProductViewEvent.attributesMapper = [];
google_ubx.googleToUBXProductViewEvent.attributesMapper.push({"googleName":"cid", "ubxName":"interactionId","type":"string"});
google_ubx.addProductAttributesToMapper(google_ubx.googleToUBXProductViewEvent.attributesMapper);

google_ubx.googleToUBXAddToCartEvent = {};
google_ubx.googleToUBXAddToCartEvent.ubxEventType = "cartAdd";
google_ubx.googleToUBXAddToCartEvent.attributesMapper = [];
google_ubx.googleToUBXAddToCartEvent.attributesMapper.push({"googleName":"cid", "ubxName":"interactionId","type":"string"});
google_ubx.googleToUBXAddToCartEvent.attributesMapper.push({"googleName":"cu", "ubxName":"currency","type":"string"});
google_ubx.addProductAttributesToMapper(google_ubx.googleToUBXAddToCartEvent.attributesMapper);

google_ubx.googleToUBXRemoveFromCartEvent = {};
google_ubx.googleToUBXRemoveFromCartEvent.ubxEventType = "cartRemove";
google_ubx.googleToUBXRemoveFromCartEvent.attributesMapper = [];
google_ubx.googleToUBXRemoveFromCartEvent.attributesMapper.push({"googleName":"cid", "ubxName":"interactionId","type":"string"});
google_ubx.addProductAttributesToMapper(google_ubx.googleToUBXRemoveFromCartEvent.attributesMapper);

google_ubx.googleToUBXCartPurchaseEvent = {};
google_ubx.googleToUBXCartPurchaseEvent.ubxEventType = "ibmcartPurchase";
google_ubx.googleToUBXCartPurchaseEvent.attributesMapper = [];
google_ubx.googleToUBXCartPurchaseEvent.attributesMapper.push({"googleName":"ti", "ubxName":"orderID","type":"string"});
google_ubx.googleToUBXCartPurchaseEvent.attributesMapper.push({"googleName":"tr", "ubxName":"orderTotal","type":"number"});
google_ubx.googleToUBXCartPurchaseEvent.attributesMapper.push({"googleName":"tt", "ubxName":"orderTax","type":"number"});
google_ubx.googleToUBXCartPurchaseEvent.attributesMapper.push({"googleName":"ts", "ubxName":"orderShipping","type":"number"});
google_ubx.googleToUBXCartPurchaseEvent.attributesMapper.push({"googleName":"cid", "ubxName":"interactionId","type":"string"});
google_ubx.googleToUBXCartPurchaseEvent.attributesMapper.push({"googleName":"pr<index>qt", "ubxName":"quantity","type":"number"});
google_ubx.googleToUBXCartPurchaseEvent.attributesMapper.push({"googleName":"cu", "ubxName":"currency","type":"string"});

google_ubx.googleToUBXCartPurchaseItemEvent = {};
google_ubx.googleToUBXCartPurchaseItemEvent.ubxEventType = "ibmcartPurchaseItem";
google_ubx.googleToUBXCartPurchaseItemEvent.attributesMapper = [];
google_ubx.googleToUBXCartPurchaseItemEvent.attributesMapper.push({"googleName":"ti", "ubxName":"orderID","type":"string"});
google_ubx.googleToUBXCartPurchaseItemEvent.attributesMapper.push({"googleName":"tr", "ubxName":"orderTotal","type":"number"});
google_ubx.googleToUBXCartPurchaseItemEvent.attributesMapper.push({"googleName":"tt", "ubxName":"orderTax","type":"number"});
google_ubx.googleToUBXCartPurchaseItemEvent.attributesMapper.push({"googleName":"ts", "ubxName":"orderShipping","type":"number"});
google_ubx.googleToUBXCartPurchaseItemEvent.attributesMapper.push({"googleName":"cid", "ubxName":"interactionId","type":"string"});
google_ubx.googleToUBXCartPurchaseItemEvent.attributesMapper.push({"googleName":"cu", "ubxName":"currency","type":"string"});
google_ubx.googleToUBXCartPurchaseItemEvent.attributesMapper.push({"googleName":"pr<index>id", "ubxName":"productID","type":"string"});
google_ubx.googleToUBXCartPurchaseItemEvent.attributesMapper.push({"googleName":"pr<index>nm", "ubxName":"productName","type":"string"});
google_ubx.googleToUBXCartPurchaseItemEvent.attributesMapper.push({"googleName":"pr<index>ca", "ubxName":"category","type":"string"});
google_ubx.googleToUBXCartPurchaseItemEvent.attributesMapper.push({"googleName":"pr<index>va", "ubxName":"color","type":"string"});
google_ubx.googleToUBXCartPurchaseItemEvent.attributesMapper.push({"googleName":"pr<index>pr", "ubxName":"basePrice","type":"number"});
google_ubx.googleToUBXCartPurchaseItemEvent.attributesMapper.push({"googleName":"pr<index>qt", "ubxName":"quantity","type":"number"});

google_ubx.googleToUBXProductReviewEvent = {};
google_ubx.googleToUBXProductReviewEvent.ubxEventType = "wroteReview";
google_ubx.googleToUBXProductReviewEvent.attributesMapper = [];
google_ubx.googleToUBXProductReviewEvent.attributesMapper.push({"googleName":"cid", "ubxName":"interactionId","type":"string"});
google_ubx.googleToUBXProductReviewEvent.attributesMapper.push({"googleName":"ev", "ubxName":"rating","type":"string"});
google_ubx.addProductAttributesToMapper(google_ubx.googleToUBXProductReviewEvent.attributesMapper);

google_ubx.googleToUBXProductRatingEvent = {};
google_ubx.googleToUBXProductRatingEvent.ubxEventType = "providedRating";
google_ubx.googleToUBXProductRatingEvent.attributesMapper = [];
google_ubx.googleToUBXProductRatingEvent.attributesMapper.push({"googleName":"cid", "ubxName":"interactionId","type":"string"});
google_ubx.googleToUBXProductRatingEvent.attributesMapper.push({"googleName":"ev", "ubxName":"rating","type":"string"});
google_ubx.addProductAttributesToMapper(google_ubx.googleToUBXProductRatingEvent.attributesMapper);

google_ubx.googleToUBXVideoEvent = {};
google_ubx.googleToUBXVideoEvent.attributesMapper = [];
google_ubx.googleToUBXVideoEvent.attributesMapper.push({"googleName":"ec", "ubxName":"elementCategory","type":"string"});
google_ubx.googleToUBXVideoEvent.attributesMapper.push({"googleName":"el", "ubxName":"elementId","type":"string"});
google_ubx.googleToUBXVideoEvent.attributesMapper.push({"googleName":"cid", "ubxName":"interactionId","type":"string"});

google_ubx.googleToUBXVideoLaunchedEvent = JSON.parse(JSON.stringify(google_ubx.googleToUBXVideoEvent));
google_ubx.googleToUBXVideoLaunchedEvent.ubxEventType = "ibmelementvideoLaunched";

google_ubx.googleToUBXVideoPausedEvent = JSON.parse(JSON.stringify(google_ubx.googleToUBXVideoEvent));
google_ubx.googleToUBXVideoPausedEvent.ubxEventType = "ibmelementvideoPaused";

google_ubx.googleToUBXVideoPlayedEvent = JSON.parse(JSON.stringify(google_ubx.googleToUBXVideoEvent));
google_ubx.googleToUBXVideoPlayedEvent.ubxEventType = "ibmelementvideoPlayed";

google_ubx.googleToUBXVideoCompletedEvent = JSON.parse(JSON.stringify(google_ubx.googleToUBXVideoEvent));
google_ubx.googleToUBXVideoCompletedEvent.ubxEventType = "ibmelementvideoCompleted";

google_ubx.googleToUBXFormErrorEvent = {};
google_ubx.googleToUBXFormErrorEvent.ubxEventType = "ibmelementFormError";
google_ubx.googleToUBXFormErrorEvent.attributesMapper = [];
google_ubx.googleToUBXFormErrorEvent.attributesMapper.push({"googleName":"ec", "ubxName":"elementCategory","type":"string"});
google_ubx.googleToUBXFormErrorEvent.attributesMapper.push({"googleName":"el", "ubxName":"elementId","type":"string"});
google_ubx.googleToUBXFormErrorEvent.attributesMapper.push({"googleName":"cid", "ubxName":"interactionId","type":"string"});

google_ubx.sendEventFromPayload = function (payload, identifiersMapper, ubxEventType, attributesMapper) {
    if (!payload) {
        console.error("Payload is missing");
        return;
    }

    if (typeof payload !== 'string') {
        console.error("Payload should be a query string. Example: name1=val1&name2=val2");
        return;
    }

    if (window.ubxCaptureToConsole){console.log("Payload: " + payload);}

    var query = payload;
    var result = {};
    query.split("&").forEach(function (part) {
        var item = part.split("=");
        result[item[0]] = decodeURIComponent(item[1]);
    });

    google_ubx.sendEventFromJSONPayload(result, identifiersMapper, ubxEventType, attributesMapper);
};

google_ubx.sendEventFromJSONPayload = function (payloadJson, identifiersMapper, ubxEventType, attributesMapper) {
    if (!payloadJson) {
        console.error("Payload is missing");
        return;
    }

    if (typeof payloadJson !== 'object') {
        console.error("Payload should be a object.");
        return;
    }

    if (window.ubxCaptureToConsole){console.log("Payload JSON: " + JSON.stringify(payloadJson));}
    if (window.ubxCaptureIdents==false){identifiersMapper=null;}

    var eventMapper;
    if (attributesMapper) {
        if (!ubxEventType) {
            console.error("Event type is missing");
            return;
        }
        eventMapper = google_ubx.createEventMapper(ubxEventType, identifiersMapper, attributesMapper);
    } else {
        var eventType;
        if (ubxEventType) {
            eventType = ubxEventType;
        } else if (payloadJson.hasOwnProperty('pa')) {
            eventType = payloadJson['pa'];
        } else if ("pageview" === payloadJson['t']) {
            eventType = payloadJson['t'];
        } else if ("event" === payloadJson['t']) {
            eventType = payloadJson['ea'];
        }

        if (eventType) {
            switch (eventType) {
                case "ibmpageView":
                case "pageview":
                    eventMapper = google_ubx.googleToUBXPageViewEvent;
                    break;
                case "ibmproductView":
                case "detail":
                    eventMapper = google_ubx.googleToUBXProductViewEvent;
                    break;
                case "cartAdd":
                case "add":
                    eventMapper = google_ubx.googleToUBXAddToCartEvent;
                    break;
                case "cartRemove":
                case "remove":
                    eventMapper = google_ubx.googleToUBXRemoveFromCartEvent;
                    break;
                case "ibmcartPurchase":
                case "purchase":
                    eventMapper = google_ubx.googleToUBXCartPurchaseEvent;
                    break;
                case "wroteReview":
                case "review":
                    eventMapper = google_ubx.googleToUBXProductReviewEvent;
                    break;
                case "providedRating":
                case "rate":
                    eventMapper = google_ubx.googleToUBXProductRatingEvent;
                    break;
                case "ibmelementvideoLaunched":
                case "videoLaunched":
                    eventMapper = google_ubx.googleToUBXVideoLaunchedEvent;
                    break;
                case "ibmelementvideoPlayed":
                case "videoPlayed":
                    eventMapper = google_ubx.googleToUBXVideoPlayedEvent;
                    break;
                case "ibmelementvideoPaused":
                case "videoPaused":
                    eventMapper = google_ubx.googleToUBXVideoPausedEvent;
                    break;
                case "ibmelementvideoCompleted":
                case "videoCompleted":
                    eventMapper = google_ubx.googleToUBXVideoCompletedEvent;
                    break;
                case "ibmelementFormError":
                case "formError":
                    eventMapper = google_ubx.googleToUBXFormErrorEvent;
                    break;
                default:
                    console.error("UBX event type " + eventType + " not recognized.");
                    break;
            }
        } else {
            console.error("No UBX event type could be mapped from the payload data.");
            return;
        }
    }

    if (eventMapper) {
        eventMapper = JSON.parse(JSON.stringify(eventMapper));
        eventMapper.identifiersMapper = identifiersMapper;

        var eventObj = google_ubx.mapToUBXEvent(payloadJson, eventMapper);
        if ("ibmcartPurchase" === eventMapper["ubxEventType"] && google_ubx.sendIndividualItemPurchaseEventWithCartPurchaseEvent) {
            var eventList = [];
            eventList.push(eventObj);
            for (var i = 1;; i++) {
                if (payloadJson.hasOwnProperty('pr' + i + 'id') || payloadJson.hasOwnProperty('pr' + i + 'nm')) {
                    var productItemObj = {};
                    var productItemMapper = JSON.parse(JSON.stringify(google_ubx.googleToUBXCartPurchaseItemEvent));
                    productItemMapper.identifiersMapper = identifiersMapper;
                    for (var j = 0; j < productItemMapper.attributesMapper.length; j++) {
                        var googleName = productItemMapper.attributesMapper[j].googleName;
                        productItemMapper.attributesMapper[j].googleName = googleName.replace("<index>", i);
                    }
                    var eventItemObj = google_ubx.mapToUBXEvent(payloadJson, productItemMapper);
                    eventList.push(eventItemObj);
                } else
                    break;
            }

            var batchEvent = {};
            batchEvent.events = eventList;
            batchEvent.identifiers = eventObj.identifiers;
            if (window.ubxCaptureToConsole){console.log("Calling UBX send batch events: " + JSON.stringify(batchEvent));}
            ibm_ubx.sendBatchEvent(batchEvent, google_ubx.host, google_ubx.authKey,"GOOGLEANALYTICS",google_ubx.requestType);
            if ("pageview" === payloadJson['t']){
                eventMapper = google_ubx.googleToUBXPageViewEvent;
                eventObj = google_ubx.mapToUBXEvent(payloadJson, eventMapper);
                ibm_ubx.sendEvent(eventObj, google_ubx.host, google_ubx.authKey,"GOOGLEANALYTICS",google_ubx.requestType);
            }
        } else {
            if (window.ubxCaptureToConsole){console.log("Calling UBX send events: " + JSON.stringify(eventObj));}
            //load event object
            ibm_ubx.sendEvent(eventObj, google_ubx.host, google_ubx.authKey,"GOOGLEANALYTICS",google_ubx.requestType);
            if ("pageview" === payloadJson['t'] && "ibmpageView" !== eventMapper["ubxEventType"]){
                eventMapper = google_ubx.googleToUBXPageViewEvent;
                eventObj = google_ubx.mapToUBXEvent(payloadJson, eventMapper);
                ibm_ubx.sendEvent(eventObj, google_ubx.host, google_ubx.authKey,"GOOGLEANALYTICS",google_ubx.requestType);
            }
        }
    } else {
        console.error("No mapper found to map payload data to UBX event.");
    }
};

/**
 * Maps payload to UBX events and sends them out using UBX batch event format. The eventMapperList should be an array
 * object and each element should have the following properties: ubxEventType, identifiersMapper and attributesMapper.
 * The batch event expects common identifiers for all the events in the same batch. The identifiers of the batch event will
 * come from the event object at the index that's specified by <code>identifiersIndex</code> (0 based)
 *
 * @param payload the event payload
 * @param eventMapperList a list of event mapper object, each element should have the following properties:
 *                          ubxEventType, identifiersMapper and attributesMapper.
 * @param identifiersIndex index of the event object whose identifiers will be used for the ubx batch event identifiers
 */
google_ubx.sendBatchEventFromPayload = function (payload, eventMapperList, identifiersIndex) {
    if (!payload) {
        console.error("Payload is missing");
        return;
    }

    if (typeof payload !== 'string') {
        console.error("Payload should be a query string. Example: name1=val1&name2=val2");
        return;
    }

    if (window.ubxCaptureToConsole){console.log("Payload: " + payload);}

    var query = payload;
    var result = {};
    query.split("&").forEach(function (part) {
        var item = part.split("=");
        result[item[0]] = decodeURIComponent(item[1]);
    });

    google_ubx.sendBatchEventFromJSONPayload(result, eventMapperList, identifiersIndex);
};

/**
 * Maps payload JSON to UBX events and sends them out using UBX batch event format. The eventMapperList should be an array
 * object and each element should have the following properties: ubxEventType, identifiersMapper and attributesMapper.
 * The batch event expects common identifiers for all the events in the same batch. The identifiers of the batch event will
 * come from the event object at the index that's specified by <code>identifiersIndex</code> (0 based)
 *
 * @param payloadJson the event payload JSON
 * @param eventMapperList a list of event mapper object, each element should have the following properties:
 *                          ubxEventType, identifiersMapper and attributesMapper.
 * @param identifiersIndex index of the event object whose identifiers will be used for the ubx batch event identifiers
 */
google_ubx.sendBatchEventFromJSONPayload = function (payloadJson, eventMapperList, identifiersIndex) {
    if (!payloadJson) {
        console.error("Payload is missing");
        return;
    }

    if (typeof payloadJson !== 'object') {
        console.error("Payload should be a object.");
        return;
    }

    if (window.ubxCaptureToConsole){console.log("Payload JSON: " + JSON.stringify(payloadJson));}

    if (!eventMapperList)
    {
        console.error("eventMapperList is missing");
        return;
    }
    else if (!Array.isArray(eventMapperList))
    {
        console.error("eventMapperList is not an array");
        return;
    }

    if (typeof identifiersIndex === 'undefined')
    {
        console.error("identifiersIndex is missing");
        return;
    }
    else if (identifiersIndex<0 || identifiersIndex>=eventMapperList.length)
    {
        console.error("identifiersIndex is not a valid number");
        return;
    }

    try
    {
        var eventList = [];
        for (var i = 0; i < eventMapperList.length; i++)
        {
            var eventMapper = google_ubx.createEventMapper(eventMapperList[i].ubxEventType,
                eventMapperList[i].identifiersMapper,
                eventMapperList[i].attributesMapper);
            if (eventMapper)
            {
                eventMapper = JSON.parse(JSON.stringify(eventMapper));
                eventMapper.identifiersMapper = eventMapperList[i].identifiersMapper;

                var eventObj = google_ubx.mapToUBXEvent(payloadJson, eventMapper);
                eventList.push(eventObj);

            }
            else
            {
                console.error("No mapper found to map payload data to UBX event.");
            }
        }

        if (eventList.length > 0)
        {
            var batchEvent = {};
            batchEvent.events = eventList;
            batchEvent.identifiers = eventList[identifiersIndex].identifiers;
            ibm_ubx.sendBatchEvent(batchEvent, google_ubx.host, google_ubx.authKey,"GOOGLEANALYTICS",google_ubx.requestType);
        }
        else
        {
            console.error("No event mapped to UBX event.");
        }
    }
    catch(err)
    {
        console.error("Exception in sendBatchEventFromJSONPayload(): " + err);
    }
};

google_ubx.mapToUBXEvent = function (payloadJson, googleUBXEventMapperObj) {
    var eventObj = {};
    eventObj.eventCode = googleUBXEventMapperObj.ubxEventType;
    eventObj.identifiers = google_ubx.createFieldArrayObject(payloadJson, googleUBXEventMapperObj.identifiersMapper);
    eventObj.attributes = google_ubx.createFieldArrayObject(payloadJson, googleUBXEventMapperObj.attributesMapper);
    return eventObj;
};

google_ubx.createFieldArrayObject = function (jsonObj, fieldMapper) {
    var arr = [];
    if (fieldMapper) {
        for (var i = 0; i < fieldMapper.length; i++) {
            var fieldName = fieldMapper[i].name;
            var fieldValue = fieldMapper[i].value;
            if (fieldName && fieldValue) {
                arr.push(google_ubx.createNameValueTypeObject(fieldName, fieldValue, fieldMapper[i].type));
            } else {
                var googleName = fieldMapper[i].googleName;
                var ubxName = fieldMapper[i].ubxName;
                var type = fieldMapper[i].type;

                if (ubxName === 'quantity' && googleName === "pr<index>qt") {
                    var totalItemQuantity = 0;
                    for (var j = 1;; j++) {
                        if (jsonObj.hasOwnProperty('pr' + j + 'qt')) {
                            totalItemQuantity = totalItemQuantity + parseInt(jsonObj['pr' + j + 'qt']);
                        } else
                            break;
                    }

                    arr.push(google_ubx.createNameValueTypeObject(ubxName, totalItemQuantity, type));
                } else if (jsonObj.hasOwnProperty(googleName)) {
                    arr.push(google_ubx.createNameValueTypeObject(ubxName, jsonObj[googleName], type));
                }
            }
        }
    }

    return arr;
};

google_ubx.createNameValueTypeObject = function (name, value, type) {
    var obj = {};
    obj.name = name;
    obj.value = value;
    if (type) {
        obj.type = type;
    }
    return obj;
};

google_ubx.createEventMapper = function (ubxEventType, identifiersMapper, attributesMapper) {
    var eventMapper = {};
    eventMapper.ubxEventType = ubxEventType;
    eventMapper.identifiersMapper = identifiersMapper;
    eventMapper.attributesMapper = attributesMapper;
    return eventMapper;
};
