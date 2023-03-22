const myData = {
    name: "Asif Abir",
    gender: "Male",
    country: "Bangladesh",
    dob: "10th-Sep-1987",
    mobile: "01955517560",
    skills: ["JS", "React", "Node.JS", "Express.JS", "MongoDB"],
    father: () => {
        return "Md. Akbar Ali";
    },
    address: {
        houseNo: 9,
        street: "Sher-E-Bangla Road",
        city: "Dhaka",
        thana: "Hazaribagh",
        zipCode: 1209
    }
}

console.log(myData.name, myData.gender, myData.skills[1], myData.father(), myData.address.city);
