const feedbackForm = document.getElementById("feedbackForm");
const responseDiv = document.getElementById("response");

console.log(feedbackForm);

feedbackForm.addEventListener("submit" , function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    
    const formDataJson = {};
    formData.forEach((value , key) => { 
        formDataJson[key] = value;
    });

    console.log(formDataJson);

    const jsonString = JSON.stringify(formDataJson , null , 2);

    console.log(jsonString);

    responseDiv.innerHTML = `<pre>${jsonString}</pre>`;

    feedbackForm.reset();
});