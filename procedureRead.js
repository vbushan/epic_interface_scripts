var requestURL = "https://open-ic.epic.com/FHIR/api/FHIR/DSTU2/Procedure?patient=Tbt3KuCY0B5PSrJvCu2j-PlK.aiHsu2xUjUM8bWpetXoB";

requestURL = requestURL;
request = new XMLHttpRequest();
request.open('GET', requestURL);
request.setRequestHeader("Accept", "application/json");
request.send();



function Procedure(name, performedTime) {
    this.name = name;
    this.performedTime = performedTime;

}

request.onload = function () {


    resp_data = request.response;
    resp_data = JSON.parse(resp_data);
    console.log(resp_data);
    procs = []
    for (let i = 0; i < resp_data['entry'].length; i++) {
        resp = resp_data["entry"][i]["resource"]
        procs.push(new Procedure(resp["code"]["text"], resp["performedDateTime"]));

    }
    console.log(procs)

}