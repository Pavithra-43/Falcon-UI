var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "200",
        "ok": "200",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1073",
        "ok": "1073",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1480",
        "ok": "1480",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1098",
        "ok": "1098",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "51",
        "ok": "51",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1090",
        "ok": "1090",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1097",
        "ok": "1097",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1112",
        "ok": "1112",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1430",
        "ok": "1430",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 196,
    "percentage": 98
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.942",
        "ok": "1.942",
        "ko": "-"
    }
},
contents: {
"req_post--soap-v1-c-7e45d": {
        type: "REQUEST",
        name: "POST /soap/v1/calculateTax",
path: "POST /soap/v1/calculateTax",
pathFormatted: "req_post--soap-v1-c-7e45d",
stats: {
    "name": "POST /soap/v1/calculateTax",
    "numberOfRequests": {
        "total": "200",
        "ok": "200",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1073",
        "ok": "1073",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1480",
        "ok": "1480",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1098",
        "ok": "1098",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "51",
        "ok": "51",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1090",
        "ok": "1090",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1097",
        "ok": "1097",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1112",
        "ok": "1112",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1430",
        "ok": "1430",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 196,
    "percentage": 98
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.942",
        "ok": "1.942",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
