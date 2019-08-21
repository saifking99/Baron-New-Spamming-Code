const Discord = require('discord.js');
const Baron = new Discord.Client();

    /*/
    - This code was designed by ** Baron **
    - Discord id = "540456059278721024"
    - YouTube = "https://www.youtube.com/c/BaronTube"
    - Github = "https://github.com/Baron010"
    - If u got this code from any place except github, don't delete this message 
    - If u wanna to post this in any discord server please put my ** CopyRight **.
    Happy Spamming :)
    /*/
    Baron.on('ready', () => {
    let spamchannels = ['613736056298274828',"613736146824069140",'613736176033071122','613744572043886599','613744587659542528','613744594735202338'];
    let Rtime = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000 //All copyrights reserved to Baron
    let main = ['**اللهم صلى على سيدنا محمد**','**هل صليت على النبى اليوم**','**إِنَّ اللَّهَ وَمَلائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ يَا أَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ وَسَلِّمُوا تَسْلِيمًا**',
    '**اللهم اني اسالك الهدى والتقى والعفاف والغنى**','**اللَّهُمَّ إنِّي أعُوذُ بكَ مِنَ الهَمِّ والحَزَنِ، والعَجْزِ والكَسَلِ، والبُخْلِ، والجُبْنِ، وضَلَعِ الدَّيْنِ، وغَلَبَةِ الرِّجالِ**','**اللَّهمَّ أحسَنتَ خَلقي فأحسِن خُلُقي**',
    '**وَتُبْ عَلَيْنَا إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ**','**رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِن ذُرِّيَّتِي ۚ رَبَّنَا وَتَقَبَّلْ دُعَاءِ**','**اللهم إني أسألك علماً نافعاً ورزقاً طيباً متقبلاً**',
    '** اللهم إنك عفو كريم تحب العفو فاعف عني**','** اللهم إني أسألك من خير ما سألك منه نبيك محمد صلى الله عليه وسلم ونعوذ بك من شر ما استعاذ منه نبيك محمد صلى الله عليه**',
    '**اللّهم إنّي أسألك يا الله بأنك الواحد الأحد الصمد الذي لم يلد ولم يولد و لم يكن له كفواً أحد أن تغفر لي ذنوبي إنك أنت الغفور الرحيم**'] //All copyrights reserved to Baron
    function getRandomInt(numbers) { //All copyrights reserved to Baron
    return Math.floor(Math.random() * Math.floor(numbers));
    } //All copyrights reserved to Baron
    setInterval(() => {
    function makeid(length) { //All copyrights reserved to Baron
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; //All copyrights reserved to Baron
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) { //All copyrights reserved to Baron
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result; //All copyrights reserved to Baron
    } 
    let Rmain = main[Math.floor(Math.random() * main.length)]; //All copyrights reserved to Baron
    let Rcahnnel = spamchannels[Math.floor(Math.random() * spamchannels.length)];
    let channel = Baron.channels.get(Rcahnnel) //All copyrights reserved to Baron
    channel.send(`${getRandomInt(10000)} ${makeid(5)} ${makeid(10)}\n`+'`'+`${getRandomInt(10000)+getRandomInt(10000)}`+'`'+` ${Rmain}`+`\n${makeid(5)} ${makeid(3)} ${makeid(10)} ${makeid(4)}`)
    }, Rtime); //All copyrights reserved to Baron
    setInterval(() => {
    let Rcahnnel = spamchannels[Math.floor(Math.random() * spamchannels.length)];
    let channel = Baron.channels.get(Rcahnnel)
    channel.send("#daily")
    }, 28800000);
    });
    
Baron.login('token');
