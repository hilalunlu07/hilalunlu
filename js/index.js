var json = { title: "Ürün Geri Bildirim Anketi", showProgressBar: "top", pages: [
    {questions: [
        { type: "matrix", name: "Quality", title: "Lütfen aşağıdaki ifadeler üzerinde hemfikirdiyseniz veya katılmıyorsanız belirtiniz.",
            columns: [{ value: 1, text: "Kesinlikle Katılmıyorum" },
                { value: 2, text: "Katılmıyorum" },
                { value: 3, text: "Olumsuz" },
                { value: 4, text: "Katılıyorum" },
                { value: 5, text: "Kesinlikle Katılıyorum" }],
            rows: [{ value: "affordable", text: "Ürün uygun fiyatlı" },
                { value: "does what it claims", text: "Ürün iddia ettiği şeyi yapar" },
                { value: "better then others", text: "Ürün, piyasadaki diğer ürünlerden daha iyidir" },
                { value: "easy to use", text: "Ürünün kullanımı kolaydır" }]},
        { type: "rating", name: "satisfaction", title: "Ürünle ne kadar memnunsunuz?",
            mininumRateDescription: "Memnun Değilim", maximumRateDescription: "Kesinlikle Memnunum" },
        { type: "rating", name: "recommend friends", visibleIf: "{satisfaction} > 3",
            title: "Ürünü bir arkadaşınıza veya iş arkadaşınıza tavsiye etme olasılığınız nedir?",
            mininumRateDescription: "Tavsiye etmem", maximumRateDescription: "Tavsiye ederim" },
        { type: "comment", name: "suggestions", title:"Sizi ürünle daha ne memnun edecektir?", }
    ]},
    {questions: [
        { type: "radiogroup", name: "price to competitors",
            title: "Rakiplerimize kıyasla, Ürünün",
            choices: ["Daha ucuz "," Aynı fiyatlandırılmış "," Daha pahalı "," Emin değilim"]},
        { type: "radiogroup", name: "price", title: "Mevcut fiyatımızın ürünümüzden yararlandığını hissediyor musunuz?",
            choices: ["Doğru | Evet, fiyat doğru",
                "düşük | Hayır, fiyatınız ürününüz için çok düşük",
                "yüksek | Hayır, fiyatınız ürününüz için çok yüksek "]},
        { type: "multipletext", name: "pricelimit", title: "Nedir...",
            items: [{ name: "mostamount", title: "Bizim gibi bir ürün için ödeyeceğin en fazla tutar" },
                { name: "leastamount", title: "En az ödeme yaparsan rahat hissedeceksin" }]}
    ]},
    { questions: [
        { type: "text", name: "email",
            title: "Anketimize katıldığınız için teşekkür ederiz. Anketiniz neredeyse tamamlanmıştır, lütfen çizimimize katılmak istiyorsanız aşağıdaki kutuya e-posta adresinizi girin ve ardından 'Gönder' düğmesine basın."}
    ]}
]};

Survey.defaultBootstrapCss.navigationButton = "btn btn-primary";
Survey.Survey.cssType = "bootstrap";

var model = new Survey.Model(json);

$("#surveyElement").Survey({model:model});