const logoImg = document.getElementById("logoImg") 
const slideimg1 = document.getElementById("slide-Img1")
const slideimg2 = document.getElementById("slide-Img2")
const slideimg3 = document.getElementById("slide-Img3")
//primarycolor
const navBgColor = document.getElementById("nav")
const footerBgColor = document.getElementById("footer")
const aboutColor = document.getElementById("aboutheading")
const welcomeNoteColor = document.getElementById("subHead")
const servicesColor = document.getElementById("services")
//secondaryColor
const aboutPara = document.getElementById("para")
const tableBodyColor = document.getElementById("tableBody")
const addressLines1 = document.getElementById("addressLines1")
const addressLines2 = document.getElementById("addressLines2")
const phoneNumberColor = document.getElementById("phoneNumber")
const openHoursTableColor = document.getElementById("openHoursTable")
//aboutinfo from Description
const about = document.getElementById("para")
//shopname
const shopName = document.getElementById("shopName")
//address
const addressLine1 = document.getElementById("addressLine1")
const addressLine2 = document.getElementById("addressLine2")
const city = document.getElementById("city")
const pinCode = document.getElementById("pinCode")
//phonenumber
const phoneNumber = document.getElementById("phoneNumber")
//openinghours
const mondayOpen = document.getElementById("mondayOpen")
const tuesdayOpen = document.getElementById("tuesdayOpen")
const wednesdayOpen = document.getElementById("wednesdayOpen")
const thursdayOpen = document.getElementById("thursdayOpen")
const fridayOpen = document.getElementById("fridayOpen")
const saturdayOpen = document.getElementById("saturdayOpen")
const sundayOpen = document.getElementById("sundayOpen")
//closinghours
const mondayClose = document.getElementById("mondayClose")
const tuesdayClose = document.getElementById("tuesdayClose")
const wednesdayClose = document.getElementById("wednesdayClose")
const thursdayClose = document.getElementById("thursdayClose")
const fridayClose = document.getElementById("fridayClose")
const saturdayClose = document.getElementById("saturdayClose")
const sundayClose = document.getElementById("sundayClose")

let api;
async function getShop(url) {
    const respone = await fetch("https://demo.vshops.fi/api/shop/656de8c76a4b2e672baaea10");
    // method: "GET", headers: {Accept: 'application.json',}, body: data,
    const data = await respone.json()
    api = data;
    showShop(data)
}
getShop("");
function showShop(api) {
    console.log(api)
    //console.log(api.data.theme.slides)
    logoImg.src = api.data.theme.bannerImage;
    //slideimg1.src = api.data.theme.slides[0].image;
    //slideimg2.src = api.data.theme.slides[1].image;
    //slideimg3.src = api.data.theme.slides[2].image;
    /*primaryColor*/
}

async function getAppointment(url) {
    const respone = await fetch("https://demo.vshops.fi/api/foods/656de8c76a4b2e672baaea10");
    // method: "GET", headers: {Accept: 'application.json',}, body: data,
    const data = await respone.json()
    console.log(data)
    showAppointment(data.data)
}
getAppointment("");

function showAppointment(data) {
    console.log(data)
}