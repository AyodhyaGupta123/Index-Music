
const container = ["Andhra Pradesh",
"Arunachal Pradesh",
"Assam",
"Bihar",
"Chhattisgarh",
"Goa",
"Gujarat",
"Haryana",
"Himachal Pradesh",
"Jharkhand",
"Karnataka",
"Kerala",
"Madhya Pradesh",
"Maharashtra",
"Manipur",
"Meghalaya",
"Mizoram",
"Nagaland",
"Odisha",
"Punjab",
"Rajasthan",
"Sikkim",
"Tamil Nadu",
"Telangana",
"Tripura",
"Uttar Pradesh",
"Uttarakhand",
"West Bengal"
];

function print(usernames){
    var container = "";
    usernames.forEach(function (name){
        container += `<h3 class="text-lg text-zinc-600 tracking-tight px-5 py-4">${name}</h3>`;
    });

    document.querySelector(".scrollercustom").innerHTML = container;
}

print(names);

var input = document.querySelector(".input");

input.addEventListener("input", function() {
    var ans = names.filter(function(name) {
        return name.toLowercase().startsWith(input.value.toLowerCase());

    });
    print(ans);
});