observationReadURL = "https://open-ic.epic.com/FHIR/api/FHIR/DSTU2/Observation?patient=Tbt3KuCY0B5PSrJvCu2j-PlK.aiHsu2xUjUM8bWpetXoB&code=1975-2";
requestURL = observationReadURL;
request = new XMLHttpRequest();
request.open('GET', requestURL);
request.setRequestHeader("Accept", "application/json");
request.send();



request.onload = function () {

    let resp_data = request.response;
    resp_data = JSON.parse(resp_data);
    console.log(resp_data["entry"][0]["resource"]);
}