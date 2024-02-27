let bannerList = [
    {
        imgUrl: "https://cms-contents.pharmeasy.in/banner/93051e0bc77-MEGA20_App.jpg",
    },
    {
        imgUrl: "https://cms-contents.pharmeasy.in/banner/dc5281c821e-GRAND1000_App.jpg",
    },
    {
        imgUrl: "https://cms-contents.pharmeasy.in/banner/86df3a0dc37-HP.jpg",
    },
];

let newLaunchesList = [
    {
        name: "Kotex Overnight Period Panties - Medium / Large Size, Pack Of 2 Panties",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/W66447/kotex-overnight-period-panties-medium-large-size-pack-of-2-panties-2-1652778799.jpg?dim=1024x0",
        mrp: 95,
        discount: 15,
    },
    {
        name: "Pharmeasy Posture Corrector - Corrects Bad Posture - Eases Neck, Back & Shoulder Pain - Small",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/G63237/pharmeasy-posture-corrector-corrects-bad-posture-eases-neck-back-shoulder-pain-small-2-1656420762.jpg?dim=1024x0",
        mrp: 999,
        discount: 50,
    },
    {
        name: "Sugar Pop Nourishing Lip Balm - 02 Cherry",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/T31617/sugar-pop-nourishing-lip-balm-02-cherry-2-1653658203.jpg?dim=320x320&dpr=1&q=100",
        mrp: 149,
        discount: 5,
    },
    {
        name: "Manforce Epic Desire Super Thin Premium Condoms, Silk Chocolate Flavor, Disposable Pouch (3 Counts)",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/G89746/manforce-epic-desire-super-thin-premium-condoms-silk-chocolate-flavor-disposable-pouch-3-counts-6.1-1652957426.jpg?dim=1024x0",
        mrp: 80,
        discount: 15,
    },
    {
        name: "Kellogg'S Froot Loops Original 285g Box",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/E65383/kelloggs-froot-loops-original-285g-box-2-1644845403.jpg?dim=1024x0",
        mrp: 185,
        discount: 0,
    },
    {
        name: "Lacto Calamine Aloe Vera Gel With Vitamin E And Glycerin No Parabens, No Sulphates",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/U05418/lacto-calamine-aloe-vera-gel-with-vitamin-e-and-glycerin-no-parabens-no-sulphates-2-1649248955.jpg?dim=1024x0",
        mrp: 240,
        discount: 25,
    },
    {
        name: "Lacto Calamine Aloe Vera Gel With Vitamin E And Glycerin No Parabens, No Sulphates",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/U05418/lacto-calamine-aloe-vera-gel-with-vitamin-e-and-glycerin-no-parabens-no-sulphates-2-1649248955.jpg?dim=1024x0",
        mrp: 240,
        discount: 25,
    },
];

let bannerContainer = document.querySelector(".banner");
createOfferList(bannerList,  bannerContainer)

let newLaunchesContainer = document.querySelector(".new-launches > .products-cards");
createProductList(newLaunchesList,  newLaunchesContainer)

function createProductList(list, container){
    list.forEach(function (el) {
        let div = document.createElement("div");
        let div2 = document.createElement("div");
        let img = document.createElement("img");
        let name = document.createElement("h4");
        let mrp = document.createElement("p");
        let price = document.createElement("h4");

        img.setAttribute("src", el.imgUrl);
        name.innerText = el.name;
        name.setAttribute("class","name");
        mrp.innerHTML = "MRP <span>₹" + el.mrp + "</span>";
        let p = (el.mrp / 100) * (100 - el.discount);
        p = (Math.round(p * 100) / 100).toFixed(2);
        price.innerHTML = "₹" + p + "<span>" + el.discount + "% OFF";
        div2.append(name, mrp, price);
        div.append(img, div2);
        container.append(div);
    })
}
function  createOfferList(list,  container){
    list.forEach(function (el){
        let img = document.createElement("img");
        img.setAttribute("src", el.imgUrl);
        container.append(img);
    })
}