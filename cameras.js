const cameras = [
    {
        "name": "I-71 at I-75",
        "url": "https://itscameras.dot.state.oh.us/images/artimis/CCTV035a-L.jpg",
        "city": "Cincinnati",
    },
    {
        "name": "I-75 at 3rd St",
        "url": "https://itscameras.dot.state.oh.us/images/artimis/CCTV022.jpg",
        "city": "Cincinnati",
    },
    {
        "name": "I-71 at Gilbert Ave",
        "url": "https://itscameras.dot.state.oh.us/images/artimis/CCTV_I-71-Gilbert.jpg",
        "city": "Cincinnati",
    },
    {
        "name": "I-471 SB just S of Ky Rt 8",
        "url": "http://www.trimarc.org/images/milestone/CCTV_06_471_0045.jpg",
        "city": "Cincinnati",
    },
    {
        "name": "I-75 at North of Mitchell Ave",
        "url": "https://itscameras.dot.state.oh.us/images/artimis/CCTV014a.jpg",
        "city": "Cincinnati",
    },
    {
        "name": "I-75 at SR-562 (Norwood Lateral)",
        "url": "https://itscameras.dot.state.oh.us/images/artimis/I-75_at_SR-562.jpg",
        "city": "Cincinnati",
    },
    {
        "name": "I-75 SB at N of Galbraith Rd",
        "url": "https://itscameras.dot.state.oh.us/images/artimis/CCTV008a-L.jpg",
        "city": "Cincinnati",
    },
    {
        "name": "I-75 at N of Union Centre Blvd",
        "url": "https://itscameras.dot.state.oh.us/images/cincinnati/I-75_at_Union_Centre_Blvd.jpg",
        "city": "Cincinnati",
    },
    {
        "name": "I-71 at SR-562 (Norwood Lateral)",
        "url": "https://itscameras.dot.state.oh.us/images/artimis/CCTV079a.jpg",
        "city": "Cincinnati",
    },
    {
        "name": "I-71 at I-471 (Van Meter St)",
        "url": "https://itscameras.dot.state.oh.us/images/artimis/CCTV037a.jpg",
        "city": "Cincinnati",
    },
    {
        "name": "I-71 at McGregor Ave",
        "url": "https://itscameras.dot.state.oh.us/images/artimis/CCTV087a.jpg",
        "city": "Cincinnati",
    },
    {
        "name": "I-74 at Montana Ave",
        "url": "https://itscameras.dot.state.oh.us/images/artimis/CCTV142.jpg",
        "city": "Cincinnati",
    },
    {
        "name": "I-275 at East of Kellogg Ave",
        "url": "https://itscameras.dot.state.oh.us/images/artimis/CCTV4110-5.jpg",
        "city": "Cincinnati",
    },
    {
        "name": "I-71 at Montgomery Rd (Kenwood)",
        "url": "https://itscameras.dot.state.oh.us/images/artimis/CCTV074a.jpg",
        "city": "Cincinnati",
    },
    {
        "name": "Colerain Ave at Springdale Rd",
        "url": "https://itscameras.dot.state.oh.us/images/artimis/Colerain_Ave_at_Springdale.jpg",
        "city": "Cincinnati",
    },
    {
        "name": "I-71/I-75 at N of Buttermilk Pike",
        "url": "http://www.trimarc.org/images/milestone/CCTV_06_75_1868.jpg",
        "city": "Cincinnati",
    },
    {
        "name": "I-75 at N of Hopple St",
        "url": "https://itscameras.dot.state.oh.us/images/artimis/I-75_N_of_Hopple.jpg",
        "city": "Cincinnati",
    },
    {
        "name": "I-75 at N of Paddock Rd",
        "url": "https://itscameras.dot.state.oh.us/images/artimis/CCTV010a-L.jpg",
        "city": "Cincinnati",
    },
    {
        "name": "SR-126 at E of Plainfield Rd",
        "url": "https://itscameras.dot.state.oh.us/images/artimis/CCTV4159.jpg",
        "city": "Cincinnati",
    },
    {
        "name": "I-75 SB Butler county rest area",
        "url": "https://itscameras.dot.state.oh.us/images/rest_area/I-75_Butler_SB.jpg",
        "city": "Cincinnati",
    },
    {
        "name": "I-71 at SR-741/Kings Mills Rd",
        "url": "https://itscameras.dot.state.oh.us/images/artimis/CCTV092a.jpg",
        "city": "Cincinnati",
    },
    {
        "name": "Mason Montgomery Rd & Parkway Dr",
        "url": "https://itscameras.dot.state.oh.us/images/artimis/FEMM167.jpg",
        "city": "Cincinnati",
    },
    {
        "name": "I-71 at Deerfield Rd",
        "url": "https://itscameras.dot.state.oh.us/images/artimis/CCTV071a.jpg",
        "city": "Cincinnati",
    },
    {
        "name": "I-71 at Red Bank Rd",
        "url": "https://itscameras.dot.state.oh.us/images/artimis/CCTV077a-L.jpg",
        "city": "Cincinnati",
    },
    {
        "name": "I-71 at Montgomery Rd",
        "url": "https://itscameras.dot.state.oh.us/images/artimis/CCTV083a.jpg",
        "city": "Cincinnati",
    },
    {
        "name": "SR-125 at Five Mile Rd, Looking South",
        "url": "https://itscameras.dot.state.oh.us/images/artimis/SR-125_Five_Mile_South.jpg",
        "city": "Cincinnati",
    },
    {
        "name": "I-275 at Barg Salt Run Rd",
        "url": "https://itscameras.dot.state.oh.us/images/artimis/CCTV4153.jpg",
        "city": "Cincinnati",
    },
    {
        "name": "Colerain Ave at SR-126 WB Ramp",
        "url": "https://itscameras.dot.state.oh.us/images/artimis/Colerain_Ave_at_SR-126_WB.jpg",
        "city": "Cincinnati",
    },
    {
        "name": "I-275 at US-50 Underpass (E of OH/IN Line)",
        "url": "https://itscameras.dot.state.oh.us/images/artimis/CCTV062.jpg",
        "city": "Cincinnati",
    },
    {
        "name": "I-71/I-75 at Burlington Pike",
        "url": "http://www.trimarc.org/images/milestone/CCTV_06_75_1812.jpg",
        "city": "Cincinnati",
    },
];

module.exports = cameras;