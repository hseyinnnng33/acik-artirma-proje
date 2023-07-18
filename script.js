const girisBtn = document.querySelector(".oyna")
const girisEkran = document.querySelector(".giris")
const oyun = document.querySelector(".oyunEkrani")

girisBtn.addEventListener("click", function(){
    girisEkran.classList.add("silEkran")
    oyun.classList.add("active")
})

function tumPara(deger){
    return ""+ deger.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&.')
}

const urunler = [
    {
        resim: "resimler/resim (1).jpg",
        urunisimi: "Luna und Endymion",
        urunAciklama: "Luna und Endymion (1770-1780)",
        fiyat: "200000",
        oncekiDeger: "150000"
    },
    {
        resim: "resimler/resim10.jpg",
        urunisimi: "A New Pair Of Shoes",
        urunAciklama: "Vincenzo Capobianchi (Italian, 1836 - 1928)",
        fiyat: "400000",
        oncekiDeger: "300000"
    },
    {
        resim: "resimler/resim2.jpg",
        urunisimi: "Svanhvide",
        urunAciklama: "Fritz Thomsen (Danish, 1819 - 1891)",
        fiyat: "500000",
        oncekiDeger: "400000"
    },
    {
        resim: "resimler/resim9.jpg",
        urunisimi: "Ribbons And Laces For Very Pretty Faces",
        urunAciklama: "Edmund Blair Leighton (English, 1853 - 1922)",
        fiyat: "700000",
        oncekiDeger: "550000"
    },
    {
        resim: "resimler/resim8.jpg",
        urunisimi: "In the merry month of May",
        urunAciklama: "Samuel Ehrhart (American, 1862-1937)",
        fiyat: "850000",
        oncekiDeger: "620000"
    },
    {
        resim: "resimler/resim7.jpg",
        urunisimi: "The Water Carriers",
        urunAciklama: "Daniel Ridgway Knight (American, 1839 - 1924)",
        fiyat: "750000",
        oncekiDeger: "350200"
    },
    {
        resim: "resimler/resim6.jpg",
        urunisimi: "L’église de la Trinité",
        urunAciklama: "Louis Béroud (French, 1852 /1930)",
        fiyat: "2100000",
        oncekiDeger: "1500000"
    },
    {
        resim: "resimler/resim5.jpg",
        urunisimi: "Allegory of the Peace under Stadholder Willem II",
        urunAciklama: "Adriaen Van Nieulandt (Dutch, 1587-1658)",
        fiyat: "900000",
        oncekiDeger: "700000"
    },
    {
        resim: "resimler/resim4.jpg",
        urunisimi: "Young Mother Gazing at Her Child",
        urunAciklama: "William Bouguereau (French, 1825-1905)",
        fiyat: "4000000",
        oncekiDeger: "2200000"
    },
    {
        resim: "resimler/resim3.jpg",
        urunisimi: "Mona Lisa",
        urunAciklama: "Leonardo da Vinci (1503)",
        fiyat: "50000000",
        oncekiDeger: "40000000"
    },
    {
        resim: "resimler/resim11.jpg",
        urunisimi: "1.Bayezid'in Esir Oldugu Resim",
        urunAciklama: "(Stanisław Chlebowski, 1878)",
        fiyat: "2000000",
        oncekiDeger: "1500000"
    },
    {
        resim: "resimler/resim12.png",
        urunisimi: "Atina Okulu",
        urunAciklama: "Raphael (1483 - 1520)",
        fiyat: "20000000",
        oncekiDeger: "15200100"
    },
    {
        resim: "resimler/resim13.jpg",
        urunisimi: " Uyuyan Çingene",
        urunAciklama: "Henri Rousseau (1897)",
        fiyat: "19000000",
        oncekiDeger: "18200100"
    },
    {
        resim: "resimler/resim14.jpg",
        urunisimi: " Türk sultanına mektubu yazan Zaporojya Kazakları",
        urunAciklama: "İlya Repin",
        fiyat: "9000000",
        oncekiDeger: "5500200"
    },
    {
        resim: "resimler/resim14.jpg",
        urunisimi: " Türk sultanına mektubu yazan Zaporojya Kazakları",
        urunAciklama: "İlya Repin",
        fiyat: "9000000",
        oncekiDeger: "5500200"
    },
    {
        resim: "resimler/resim15.jpg",
        urunisimi: "Gece",
        urunAciklama: "Luca Giordano",
        fiyat: "25000000",
        oncekiDeger: "19000000"
    },
    {
        resim: "resimler/resim16.jpg",
        urunisimi: "Halka Yol Gösteren Özgürlük",
        urunAciklama: "Victor Delacroix",
        fiyat: "40000000",
        oncekiDeger: "29000000"
    },
]

const icerik = document.querySelector(".oyunEkrani")

let data = [...urunler]

function formatCurrency(value) {
    let formattedValue = value.replace(/[^\d]/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.') || '0';
    let lastThreeDigits = formattedValue.slice(-3);
    let integerPart = formattedValue.slice(0, -3);
    formattedValue = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + lastThreeDigits;
    return formattedValue;
}

function ilkGoster(){
    
    if(data.length === 0){
        data = [...urunler]
    }

    const randomData = Math.floor(Math.random() * data.length);
    const random = data.splice(randomData, 1)[0]

    if(data.length === 0){
        data = [...urunler]
    }

    icerik.innerHTML = `
    <h2 class="urunAdi">${random.urunisimi}</h2>
        <div class="resimler">
            <img src="${random.resim}" class="resim">

                <div class="fiyat">
                    <span class="fiyatTeklif" data-target ="${random.fiyat}">${random.fiyat}$</span>
                </div>

        </div>
        <p style="font-size: 16px; font-weight: 600;">Önceki Degeri: ${tumPara(Number(random.oncekiDeger))} $</p>
        <h2 class="urunAciklama">${random.urunAciklama}</h2>
        <div class="inputAlani bir">
        <input type="text" class="input" id="input" placeholder="$0" oninput="formatCurrency(this)">
            <button class="btn">
                <i class="fa-solid fa-hammer"></i>
            </button>
        </div>

        <div class="iki">
            <button class="devam" style="color: #fff; font-size: 20px;">
                Sonraki
            </button>
        </div>
    `

    const inputField = document.querySelector(".input");
    inputField.addEventListener("input", function () {
        this.value = formatCurrency(this.value);
    });



    const teklif = icerik.querySelector(".fiyat");
    const para = icerik.querySelector(".fiyatTeklif");
    para.textContent = "0";

    const btn1 = document.querySelector(".btn");

    btn1.addEventListener("click", function(){
    let input = document.querySelector(".input");
    let degerInput = parseFloat(input.value);
    
    if(isNaN(degerInput) || degerInput === ""){
        alert("Boş deger girilemez")
        return;
    }
    else{
        gosterPara();
        let gosterEkran1 = document.querySelector(".bir");
        gosterEkran1.classList.add("active")
        
        let gosterEkran = document.querySelector(".iki");
        
        setTimeout(() => {
            gosterEkran1.classList.add("active")
            gosterEkran.classList.add("active")
        }, 5000);
    }
})


    const gosterBtn = document.querySelector(".devam");
    gosterBtn.addEventListener("click", function () {
        ilkGoster();
    });
}

ilkGoster()

function gosterPara(){
    
    let teklif = icerik.querySelector(".fiyat");
    
    let para = icerik.querySelector(".fiyatTeklif");
    para.textContent = "0";
    function paraGoster(){
        teklif.classList.add("active")

        const target = Number(para.getAttribute("data-target"))
        const deger = Number(para.textContent)

        let input = document.querySelector("#input");
        let degerInput = parseFloat(input.value.replace(/[^\d]/g, ''));
        console.log(degerInput)

        
        
        if (Math.abs(degerInput - target) <= 100000) {
            setTimeout(() => {
                para.innerHTML = "İhaleyi Kazandınız";
                teklif.style.backgroundColor = "#31b540";
                para.style.color = "#fff"
            }, 4000);
        }
        else{
            setTimeout(() => {
                para.innerHTML = "İhaleyi Kaybettiniz";
                teklif.style.backgroundColor = "#e72f4c";
                para.style.color = "#fff"
            }, 4000);
        }
        
        const artis = target / 400;
        const toplam = deger + artis;
        
        if(deger < target){
            para.innerHTML = `${Math.ceil(toplam)}`;
            setTimeout(paraGoster, 1)
        }
        else{
            para.innerHTML = `${tumPara(target)} $`;
        }
    }
    paraGoster()
}

let gosterBtn = document.querySelector(".devam");

gosterBtn.addEventListener("click", function(){  
    ilkGoster();
})

window.addEventListener("keyup", function(e){
    if(e.key === "Enter"){
        gosterPara();
        let gosterEkran1 = document.querySelector(".bir");
        gosterEkran1.classList.add("active")
        
        let gosterEkran = document.querySelector(".iki");
        
        setTimeout(() => {
            gosterEkran1.classList.add("active")
            gosterEkran.classList.add("active")
        }, 5000);
    }
})