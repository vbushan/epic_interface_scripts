var requestURL = "https://open-ic.epic.com/FHIR/api/FHIR/DSTU2/Patient/Tbt3KuCY0B5PSrJvCu2j-PlK.aiHsu2xUjUM8bWpetXoB";

requestURL = requestURL;
request = new XMLHttpRequest();
request.open('GET', requestURL);
request.setRequestHeader("Accept", "application/json");
request.send();



request.onload = function () {

    let resp_data = request.response;
    resp_data = JSON.parse(resp_data);
    console.log(resp_data);
}