observationReadURL = "https://open-ic.epic.com/FHIR/api/FHIR/DSTU2/Observation?patient=Tbt3KuCY0B5PSrJvCu2j-PlK.aiHsu2xUjUM8bWpetXoB&code=718-7";

requestURL = observationReadURL;
request = new XMLHttpRequest();
request.open('GET', requestURL);
request.setRequestHeader("Accept", "application/json");
request.send();



function Observation(name, valueQuantity, interpretation, issued) {
    this.name = name;
    this.valueQuantity = valueQuantity;
    this.interpretation = interpretation;
    this.issued = issued;

}


request.onload = function () {

    let resp_data = request.response;
    resp_data = JSON.parse(resp_data);
    console.log(resp_data);

    observations = []
    for (let i = 0; i < resp_data["entry"].length; i++) {
        resp = resp_data["entry"][i]["resource"];
        console.log(resp)
        observations.push(new Observation(resp["code"]["text"], resp["valueQuantity"]["value"] + " " + resp["valueQuantity"]["unit"], resp["interpretation"], resp["issued"]));

    }
    console.log(observations)

}