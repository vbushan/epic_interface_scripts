conditionURL = "https://open-ic.epic.com/FHIR/api/FHIR/DSTU2/Condition?patient=Tbt3KuCY0B5PSrJvCu2j-PlK.aiHsu2xUjUM8bWpetXoB";


//requestURL = "https://open-ic.epic.com/FHIR/api/FHIR/DSTU2/DiagnosticReport?patient=Tbt3KuCY0B5PSrJvCu2j-PlK.aiHsu2xUjUM8bWpetXoB";

requestURL = conditionURL;
request = new XMLHttpRequest();
request.open('GET', requestURL);
request.setRequestHeader("Accept", "application/json");
request.send();


function Condition(name, dateRecorderd, onsetDateTime, verificationStatus, severity) {
    this.name = name;
    this.dataRecorded = dateRecorderd;
    this.onsetDateTime = onsetDateTime;
    this.verificationStatus = verificationStatus;
    this.severity = severity;
}

request.onload = function () {

    let resp_data = request.response;
    resp_data = JSON.parse(resp_data);
    console.log(resp_data);

    conditions = []
    for (let i = 0; i < resp_data["entry"].length; i++) {
        res = resp_data["entry"][i]["resource"]


        conditions.push(new Condition(res["code"]["text"], res["dateRecorded"], res["onsetDateTime"], res["verificationStatus"], res["severity"]));

    }

    console.log(conditions);
}


