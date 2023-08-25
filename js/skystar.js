// poem
var words=[
    '但愿颐斋寿金石，岁岁年年作生日',
    '从今把定春风笑，且作人间长寿仙',
    '一阳生后逢生日，日渐舒长寿更长',
    '阖部奏笙箫，祝寿处、愿与山齐',
    '生来即胜白花芳，日洒金光满院香',
    '馀生事事无心绪，直向清凉度岁年',
    '岁岁春无事，相逢总玉颜',
    '朱颜长似，头上花枝，岁岁年年',
    '高风轻借便，一鹗看横飞',
    '万户春风为子寿，坐看沧海起扬尘',
    '请歌诗雅祝遐龄，永如松柏如山阜',
    '岁岁年年，共欢同乐，嘉庆与时新',
    '幸愿一生同草树，年年岁岁乐于斯',
    '上天垂光兮熙予以青春，今日何日兮共此良辰',
    '一愿世清平，二愿身强健；三愿临老头，数与君相见',
    '感君生日遥称寿，祝我余年老不枯',
    '休惊岁岁年年貌，且对朝朝暮暮人',
    '今年见，明年重见，春色如人面',
    '从今把定春风笑，且作人间长寿仙',
    '谁能共迟暮，对酒惜芳辰',
    '一岁一礼，一寸欢喜',
    '且以喜乐，且以永日',
    '旦逢良辰，顺颂时宜',
    '愿如梁上燕，岁岁常相见',
    '但愿颐斋寿金石，岁岁年年作生日',
    '随分人问富贵，不妨游戏千龄',
    '愿从今后八千年，长似今年，长似今年',
    '遥叩芳辰，生辰吉乐',
    '如花似叶，岁岁年年，共占春风',
    '日日是好日，时时是好时',
    '惟有八月二十七，吉星垂照最希奇'
];
function randomNum(min,max){
    var num = (Math.random()*(max-min+1)+min).toFixed(2);
    return num;
}
function init(){
    let container = document.querySelector('.container');
    let f = document.createDocumentFragment();
    words.forEach(w=>{
    let word_box = document.createElement('div');
    let word = document.createElement('div');
        word.innerText = w;
        word.classList.add('word');
        word.style.color = '#BAABDA';
        word.style.fontFamily = '楷体';
        word.style.fontSize = '20px'
        word_box.classList.add('word-box');
        word_box.style.setProperty("--margin-top",randomNum(-40,20)+'vh');
        word_box.style.setProperty("--margin-left",randomNum(6,35)+'vw');
        word_box.style.setProperty("--animation-duration",randomNum(8,20)+'s');
        word_box.style.setProperty("--animation-delay",randomNum(-20,0)+'s');
        
        word_box.appendChild(word);
        f.appendChild(word_box);


    })
    container.appendChild(f);
}
window.addEventListener('load',init);
let textone = document.querySelector('.textone').querySelector('h1');
      let text = document.querySelector('.text').querySelector('h1');
      setTimeout(function(){
        textone.innerHTML = '祝你生日快乐，日日开心。';
          textone.style.color = '#E8F9FD';
          textone.style.fontFamily = '楷体'
          text.innerHTML = '';
      },28000)


 
