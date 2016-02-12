
var formArray = [
    {
        tag: "input",
        attributes: {
            name: "login",
            type: "text",
        },
        label: "Login",
    },
    {
        type:"password",
        label:"Password",
        name:"pass"
    },
    {
        type:"fieldset",
        label:"Options",
        items: [
            {
                type:"radio",
                name:"radios",
                value:"opt1"
            },
            {
                type:"radio",
                name:"radios",
                value:"opt2"
            },
            {
                type:"radio",
                name:"radios",
                value:"opt3"
            }
        ]
    },
    {
        type:"submit",
        label:"OK"
    }
];


function createForm() {
    var x = document.createElement("FORM");
    x.setAttribute("id", "myForm");
    document.body.appendChild(x);

    for (var i in formArray) {
        if (formArray[i].type === "fieldset") {
            var input = document.createElement("FIELDSET");
        } else input = document.createElement("INPUT");

        var label = document.createElement("LABEL");
        var labelText = document.createTextNode(formArray[i].label + ": ");
        x.appendChild(label);
        label.appendChild(labelText);
        x.appendChild(input);

        input.setAttribute("name", formArray[i].name);
        input.setAttribute("type", formArray[i].type);

        var y = formArray[i].attributes;
        for (k in y) {
            //console.log(k, y[k]);
            input.setAttribute(k, y[k]);
        }

        var z = formArray[i].items;
            for (j in z) {
                var radioButton = document.createElement("INPUT");
                input.appendChild(radioButton);
                radioButton.setAttribute("name", z[j].name);
                radioButton.setAttribute("type", z[j].type);
                radioButton.setAttribute("value", z[j].value);
        }
    }
}

