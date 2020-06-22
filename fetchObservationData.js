observationReadURL = "https://open-ic.epic.com/FHIR/api/FHIR/DSTU2/Observation?patient=Tbt3KuCY0B5PSrJvCu2j-PlK.aiHsu2xUjUM8bWpetXoB&code=8310-5";

requestURL = observationReadURL;
request = new XMLHttpRequest();
request.open('GET', requestURL);
request.setRequestHeader("Accept", "application/json");
request.send();


function Observation(name, value, effectiveDate) {

    this.name = name;
    this.value = value;
    this.effectiveDate = effectiveDate;


}


request.onload = function () {
    let resp_data = request.response;
    resp_data = JSON.parse(resp_data);
    console.log(resp_data);

    observations = []
    for (let i = 0; i < resp_data["entry"].length; i++) {
        res = resp_data["entry"][i]["resource"];
        observations.push(new Observation(res["code"]["text"], res["valueQuantity"]["value"] + " " + res["valueQuantity"]["code"], res["effectiveDateTime"]));


    }

    console.log(observations);

}
