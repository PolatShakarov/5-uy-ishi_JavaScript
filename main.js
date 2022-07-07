var userName = prompt("\n\n\n<<<TURIZM XIZMATIGA XUSH KELIBSIZ>>>\n\n\nISMINGIZNI KIRITING...")
var traveler = prompt(`\n\n ASSALOMU ALEYKUM ${userName}\n\nSAYOHATGA CHIQISH XARAJATLAR RO'YXATI TAQDIM ETAMIZ\nBorish va kelish samolyot narxi: 500$\nMehmonxona to'lovi: $250\nMuzey va ko'ngilochar joylar uchun: €120\nUMMUMIY XARAJAT: 8317489:SO'M GA TENG\n\n\nMAVJUD PULINGIZNI SO'MDA KIRITING...`)
var money = 8317489

if (traveler >= money) {
    alert("<<<<<<<NATIJA KONSOLGA CHIQDI>>>>>>>")
    console.log(`HURMATLI ${userName},sizning pulingiz yetadi va`,traveler-money,":so'm ortib qoladi\n\n<<<OQ YO'L>>>");
}
else if (traveler < money) {
    alert(`HURMATLI ${userName}, NATIJA KONSOLGA CHIQDI`);
    console.log("UMMUMIY XARAJAT: 8317489:SO'M GA TENG \nAFSUSKI SIZGA", money-traveler,":SO'M YETMAY QOLDI");
}