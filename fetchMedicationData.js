medicationReadURL = "https://open-ic.epic.com/FHIR/api/FHIR/DSTU2/MedicationOrder?patient=Tbt3KuCY0B5PSrJvCu2j-PlK.aiHsu2xUjUM8bWpetXoB";

requestURL = medicationReadURL;
request = new XMLHttpRequest();
request.open('GET', requestURL);
request.setRequestHeader("Accept", "application/json");
request.send();



function Medication(name, dosage, status, prescriber) {
    this.name = name;
    this.dosage = dosage;
    this.status = status;
    this.prescriber = prescriber;
}

request.onload = function () {

    let resp_data = request.response;
    resp_data = JSON.parse(resp_data);
    console.log(resp_data);


    medications = []
    for (let i = 0; i < resp_data["entry"].length; i++) {
        res = resp_data["entry"][i]["resource"]
        //console.log(res)
        medications.push(new Medication(res["medicationReference"]["display"], res["dosageInstruction"], res["status"], res["prescriber"]["display"]))

    }

    console.log(medications)
}
