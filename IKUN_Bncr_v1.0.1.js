/**作者
 * @author 薛定谔的大灰机
 * @name IKUN
 * @origin 大灰机
 * @version 1.0.1
 * @description 发送IKUN语录和表情包
 * @platform tgBot qq ssh HumanTG wxQianxun wxXyo
 * @rule (鸡你太美|坤坤|ikun|IKUN|小黑子|小黑粉|真爱粉|你干嘛|纯路人|人民网)(.*)$
 * @admin false
 * @disable false
 */

const request = require('request');
const path = require('path');
const fs = require('fs');
const { randomUUID } = require('crypto');

module.exports = async s => {
    let jpgURL = `http://api.caonm.net/api/kun/k.php`,
        open = false;
    ["tgBot", "HumanTG"].includes(s.getFrom()) && (jpgURL = await writeToJpg(jpgURL)), open = true;   /* 存储图片 */
    await s.delMsg(s.getMsgId())
    await s.reply({
        type: 'image',
        path: jpgURL,
        msg: ikun_yvlu(),
    });
    open && fs.unlinkSync(jpgURL);
};

async function writeToJpg(url) {
    const paths = path.join(process.cwd(), `BncrData/public/${randomUUID().split('-').join('') + '.png'}`);
    return new Promise((resolve, reject) => {
        let stream = request(url).pipe(
            fs.createWriteStream(paths)
        );
        stream.on('finish', () => {
            resolve(paths);
        });
    });
};

function ikun_yvlu() {
    msg = [
        //0
        "向阳花木易为春，听说你爱蔡徐坤。",
        //1
        "千军万马是ikun，ikun永远爱坤坤。",
        //2
        "待我ikun更强大，定帮坤哥赢天下。",
        //3
        "两耳不闻窗外事，一心只为蔡徐坤。",
        //4
        "追梦少年不失眠，未来可期蔡徐坤。",
        //5
        "向阳花木每逢春，ikun一直爱坤坤。",
        //6
        "落红飞雪漫纷纷，心头只有蔡徐坤。",
        //7
        "披荆斩棘，护坤为王。",

        //8
        "披金成王，伴坤远航，我们ikun不惹事也不怕事。",
        //9
        "破天下定风云，我们ikun并肩行。",
        //10
        "狮子座为王，蔡徐坤为皇。",
        //11
        "向阳花木易为春，听说你爱蔡徐坤。",
        //12
        "山外青山楼外楼，唱跳rap打篮球。",
        //13
        "梳中分，背带裤。我是ikun你记住。",

        //14
        "拜托你们膳待我的男骸亿点点好吗，就亿点点，真的很好玩吗？",
        //15
        "你们是不是人啊！道歉会不会！你们黑牠黑得那么爽，骂牠骂得那么爽，整天TM没有任何一个人会给牠道歉。你们这样会毁了他的前途，毁了牠的一生！！",
        //16
        "荔枝，你让我拿什么荔枝啊？我爱的那个牠都被你们这样对待了，还让我怎么荔枝，啊？看着牠被你们骂得狗血淋头我还坐视不管这就叫荔枝了吗？！",
        //17
        "笑死，你就这么几个表情包，啊？你除了这个表情包你发点新的过来啊，都看腻了好不好，小辣鸡。",
        //18
        "私生饭黑粉你们犯法了知道吗，牠很累的，被警察半夜敲门是什么滋味，被私生饭装跟踪器是什么滋味。",
        //19
        "告诉你蔡徐坤身上一根毛拔下来都比你好看，都比你有用，都比你有才华，都比你有颜值，都比你有能力。",
        //20
        "蔡徐坤到底怎么得罪你们了，为什么要这样对侍他。他真的很好，ikun不是不敢惹事，而是因为他告诉我们无论这个世界怎样我们要永远善良。蔡徐坤是我们ikun的底线，请大家放下偏见去看这个男孩。",
        //21
        "我庆幸我比流言蜚语更早认识蔡徐坤。未曾谋面的也终将会相遇。披金成王，伴坤远航！蔡徐坤值得",
        //22
        "蔡徐坤真的很不容易！千万不要回黑，既然不能让玩梗的人闭嘴，那我们就尽力将这件事情冷处理，不要被有心人利用。",
        //23
        "你们只把他当热度和玩笑，把别人的痛苦建立在自己的快乐之上，你们愧疚吗？",
        //24
        "蔡徐坤这一生很难，也遇到过很多困难，他都克服了，有我们这群默默的守护着他，你们这群黑粉就别想黑他。",
        //25
        "他拿姜拿到手软，你打字打到手软，所以这就是区别。你有什么资格黑他?",
        //26
        "评论区好下头，ikun们越是这个时候越要冷静！坤哥好不容易从那段暗无天日的时光熬出来。",
        //27
        "作为一名ikun真的已经麻木了 ，解释没用，去反驳得到的只会是一堆表情包， 根本没人会站在你这边，这个世界充满恶意，坤坤到底怎么得罪你们了，为什么这样对侍他。",
        //28
        "鸡那么美你怎么不去娶鸡呢？你那么喜欢说篮球篮球，嫁给篮球得了，把篮球剪个洞套你头上。你会写歌吗？你会作曲吗？你会唱歌吗？啊？你连台都上不去吧，上了台就要尿裤子了吧。",
        //29
        "你黑蔡徐坤，我们只解释不回黑，不是因为我们不敢，而是牠告诉我们，无论这个世界怎么样，我们永远要善良。但是我们给你好好说话，你不要以为我们好说话，爱鲲不惹事，也从来不怕事。",
        //30
        "大家好，我是一名爱鲲，我今天想说的是，你们可不可以不要再黑蔡徐坤了，蔡徐坤真的很努力，牠发高烧发到七八十度，都坚持练舞四五个小时，牠真的很努力，你们可以去试着了解一下牠，你们也会爱上牠的，你们也会粉上牠的，不要再玩四字梗好吗，我求求你们这些黑粉，好玩吗？",

        //31
        "一个篮球梗用四五年也是好笑，人家只是篮球爱好者。 我想说​不爱请别伤​​！有时人要换位思考，如果你是他，那你会有什么感受？ 每个人的眼光不一样，你可能会不喜欢他，但是不能去黑，侮辱他，这是人最鸡本的善良！​",
        //32
        "纯路​​，不过我还是要说两句。《刑法》第246条：故意散布贬损他人人格，破坏他人名誉，本罪在犯罪客观方面表现为行为人实施捏造并散布某种虚构的事实，足以贬损他人人格、名誉，判处时长两年半有期练习，并上缴全部个人所得动图！",
        //33
        "你们真的要逼死他么？早上刚得到坤坤被骂的消息，一下子有点恍惚。看着B站的讨伐声，不知道为什么，有点累。想到这么一个优秀的青年突然沦落到这步田地，我的情绪再也控制不住了，整个人蒙在被子里，偷偷的笑出了声​",
        //34
        "作为一名外国人，我真的很喜欢中国文化，为此我努力学习中文，想要更深入地了解中国文化，在我学习中文的过程中，有一位中国偶像深深影响着我，记得第一次看到他在屏幕中舞动的身影，黑白相间的服装吸引着我的目光，双手交叉传递的篮球狠狠触碰这我的心，至此我坚定了自己学习中文的目标，也许在我的不断努力下，我一定能见到他本人吧，噢对了，我第一个学习的中文单词就是他的名字--蔡徐坤，为了不让偶像对称呼我感到为难，我第一个学会用中文写的就是我自己的名字，只为了能像他更好的介绍我自己。加油，坤坤！我会一直追赶你的脚步！你的粉丝---尼甘·马·艾由​",
        //35
        "烂梗一直刷是吧，这次真的挺心疼蔡徐坤，其实他长得蛮好看演技也挺不错的，只因一个片段就被全网黑，哎哟何必呢，搞不懂干嘛要这样，反正就觉得很可怜，作为路人我觉得适可而止吧。​",
        //36
        "至于吗 把人家都搞成那样……玩梗不玩人，你这都不理解吗。看看坤坤被你们黑成什么样子了，生日也不放过他？我本来以为你是真心祝kun蛋辰快乐的，没想到还是黑子。​",
        //37
        "我不是很明白，他真的只是一个二十多岁的小伙子，他有自己的梦想，也在用自己的方式不断地努力，一心希望把最好的作品呈现给众人，可总有一些人不仅忽视了这些，而且还要对他不断地中伤恶言相向。是否越善良越容易被伤害？这是我第一次怀疑这个世界，世态炎凉，一切似乎都太险恶太残酷了。坤坤，请不要再这样了，我心里真的好痛好痛，这个黑暗的世界不适合你，我希望你能去天堂",
        //38
        "蔡虚坤发烧62度坚持上台，双腿粉碎性骨折仍练习踢踏舞，每日练习40个小时，大小便失禁仍不去医院，累得高位截瘫还练舞，喉咙肿大30多倍坚持练发音，有全国300亿粉丝却不骄傲，每个2月29、30日慈善义演，将获得的20万亿美元捐给瑞士上不起学的孩子，为了慈善事业每天献出两大桶血，这些你们能做到吗？",

        //39
        "有一天，熊大熊二趁着光头强不在家，叫上动物们.来光头强家搬点东西到森林吃火锅，熊大搬着煤气罐看着忙碌的动物们，唯独吉吉国王在那无所事事，熊大默默地放下手中的煤气罐叫到“吉你抬煤”！​",
        //40
        "一天，纪晓岚，和珅，一起去抬东西，抬完之后，和珅感觉累的不行。纪晓岚却非常轻松，和珅很疑惑，问到:“纪你抬没？”",
        //41
        "去文具店买笔，正准备把笔捆起来，老板娘不让捆，我问:啥笔才需捆？老板娘撕掉条形码说:撕了码的才需捆。但我不解，继续问:那么挨捆的都是撕了码的吗？老板娘说:对，撕了码的才需捆，挨捆的都是撕了码的！”​",
        //42
        "通过纣王的不懈努力妲己终于怀孕了，不幸的是，有一天妲己散步的时候被一块石头绊倒了，栽了下去，流产了，纣王看到崩溃地大喊：己你胎没！己你石栽使胎没！！！​",
        //43
        "有一天小吉和一群人去山洞，发现山洞有个尸体，就和其他人抬出去了。回家后，其他人都死了，爷爷问：“吉你抬没？”小吉摇了摇头。这时小吉的身上变绿了，爷爷说：“不好，是绿尸寒警告！”​",
        //44
        "近日，一位名叫苏珊的美国女科学家发现了人类已知最小的太阳黑子，国际天文学会决定将该黑子以发现者的名字命名为“小黑子苏珊”。​",
        //45
        "我要赶紧告诉大家，现在网上有一个骗局，只要你付两千块钱就可以得到一个苹果手机，但是他们只会寄给你一台魅族手机，简称寄你台魅​",
        //46
        "鸡的体内有一种基因叫做酶，在极端环境之下这种基因酶变就会激活，和体内的另一种酶进行转变，会让公鸡拟变出肽类酶，这种现象在科学角度上被称为“基拟肽酶”",
        //47
        "有个农民在家摘菜的时候发现菜的须根上有个不认识的昆虫，于是去问昆虫学家，那个昆虫学家也不认识。后来昆虫学家说：＂既然这只昆虫喜欢呆在菜的须根上，就叫它菜须昆吧。＂​",
        //48
        "线粒体内膜的嵴上有许多排列规则的颗粒，称为线粒体基粒，每个基粒间隔相距约10nm。基粒又称偶联因子1，实际是ATP合酶，线粒体内膜的嵴上有许多排列规则的颗粒，称为线粒体基粒，每个基粒间隔相距约10nm。基粒又称偶联因子1，实际是ATP合酶，是一个多组分的复合物。这些酶隐匿在嵴上，我们将这种现象称为“嵴匿肽酶”。",
        //49
        "​双盘吸​​在被其感染的僵尸蜗牛触角内不断跳跃，发出鲜艳的颜色，来模仿毛毛虫，吸引小鸟吃掉蜗牛，以此进入鸟体内继续繁殖。这种拟态方法叫做攻击型拟态魅惑，简称击拟态魅。​",
        //50
        "一小伙子在公交车上不小心撞到了一名孕妇，连忙抱歉道：“挤你胎没？” 该孕妇回答：“哦，baby” 小伙说：“挤你实在是太霉” 他看着孕妇，脸微微的红了。他低下头小声的说：“迎面走来的你让我如此蠢蠢欲动”",
        //51
        "2333年，科学家在一次高能对撞实验中意外得到了一种全新的粒子，该粒子处于激发态时与一般粒子带有的普朗克能量不同，科学家将这种全新状态称为逆态，同时粒子会影响周围的动物的思维，致使该动物莫名跳动。因其的​相对原子质​​与镁类似，于是被称作激逆态镁。​",
        //52
        "1942年6月6日，德军在进攻苏联时，发现一种威力巨大的榴弹炮，据德军不可靠情报，这种武器是由小尼古拉黑椰子斯基制造，德军对这种武器极为恐惧，于是给她起名--“​小黑​​苏制66榴”​",
        //53
        "美国德克萨斯州的一座小镇上近来经常发生离奇的枪击案，枪手使用消音手枪一到深夜就开始疯狂的射击汽车的轮胎就连摩托车也不放过！小镇的居民也苦不堪言，没有了汽车出行就成了最大的问题，于是小镇居民终于向当地警方报了警！就在报警后的当晚，警方成功击毙了一名身穿背带裤梳着中分的女子还缴获消音P92手枪一把和若干9毫米子弹。最后德克萨斯州警方将这次离奇的枪击案命名为“击你胎没”事件最后结案！​",
        //54
        "去年去了趟昆明，发现了一种菜，因为昆明的优越天气，所以菜依靠昆明的天气多盛产于此，人们叫这种菜为菜需昆，这种菜又叫芥菜，和昆明肥沃的土壤相结合，称为荠泥太美，因为昆明人有效率的种植施肥，所以荠菜的茎罕见的高，后来被记录为率施罕茎高",
        //55
        "基泥肽酶是一种在常温下十分稳定的物质，不会因为外界环境改变而发生反应，但是在特殊条件下，也就是在基场条件下，用催化剂异长白甙的环境下，用一种叫做镧球的金属微粒轰击反应物，此时基泥肽酶的内部结构会遭到破坏，里面的泥酐麻化学键会被破坏，于是形成一种新的化学分子，我们把它叫做基泥拾哉式肽酶，并且外观也会发生变形，变成荔枝状球体，又因为新生成的基泥拾哉式肽酶上面有少部分未反应的黑色基泥肽酶，表现为​小黑​​附着，我们把这一现象叫做荔枝小黑子现象。​",
        //56
        "在狗熊岭的冬天，小动物们正在准备过年，大家都很忙碌，只有吉吉国王一直游手好闲，熊大非常生气，于是放下了扛着的煤气罐，对吉吉国王说：吉你抬煤！吉吉国王不愿意抬煤，于是熊大让它去山洞取荔枝，吉吉国王在去山洞的半路上遇到了光头强，它急中生智朝光头强脚底下扔了一根被虫子钻了黑子的树枝，光头强立刻滑倒在地，吉吉国王高兴地说：小黑子树枝溜溜溜！吉吉国王在路上看到了一颗绿色的宝石，它捡了起来，原来是前年难得一见的绿石罕，吉吉国王立马忘掉了拿荔枝的事情，高兴地跑了回去，熊大看到吉吉国王手中没有荔枝，问它荔枝在哪，吉吉国王问：荔枝?你让我那什么荔枝啊?熊大被气得面红耳赤，这时熊二拿了一块饼来安慰熊大，问：熊大你食不食油饼?",
        //57
        "那天我玩匹配，选了狄仁杰打下路，看到中路的小乔皮肤很好看，就顺口夸了句。 结果跟着我的辅助蔡文姬不干了，一直围着我跳舞。 “我的皮肤也超可爱的，也夸夸我嘛！” 我看了下她的名字，猜测她可能是个抠脚大汉，所以一直没理她。 她就开启唐僧模式，一边跳舞放技能特效，一边嘟嘟囔囔的。 之后小乔来游走抓死了对面，我发了个干得漂亮。 蔡文姬又不干的，围着我不断放技能，晃的我眼睛疼，把球打来打去，到处都是。 我忍不住说她了两句。 “你能不能好好玩游戏啊，别一直乱丢球，选个蔡文姬还带闪现？一直跳舞，一直嘟囔个没完，当自己是说唱歌手吗？” “人家就想让你夸我一句嘛！” 然后就委屈的不出声了。 不一会对面诸葛亮来抓下路，有个光头闪现把我踢到墙上，我秒解控往后退，却被阴影中浮现的阿珂刺成了残血。 而此刻，蔡文姬还在一旁踢球，大招也在刚才显摆时放掉了！ 我不得已放出闪现，却已经被诸葛亮大招连上了死亡之线。 我看了眼蔡文姬的位置，绝望的骂了句脏话。 然而就在那道死亡光波冲到眼前时，蔡文姬从我身后闪现到了我身前，挡住了那个死亡一击。 然后转眼间被对方三个歹徒群殴致死。 她闪着漂亮的彩光倒在了我身前，而我则残血跑回塔下，捡回了狗命。 “对不起，我刚才不该说你的。” 我感觉她刚刚一定很伤心，说不定都被我说哭了，内心充满了愧疚。 她说。 “我也很漂亮对吧？” “夸夸我好吗？” 我内心一软，含泪打下了四个字——“姬 你太美。​",
        //58
        "老师您好，对于您的观点我有几点疑惑，酯铟铌钛镁中的镁在其中显+2价，但​激铌钛​​中的镁却显+3价，是因为它和销黑子反应产生了变价反应吗？但通过方程式得知酯铟铌钛镁和销黑子反应生成的激铌钛镁和锠、銚、rap，中的rap是气体，显然是不成立的，如果加入催化剂香精碱钰也不能加速反应，同理，香炽酪钒和釉鋲也不行，那是为什么呢？是因为销黑子中含有大量的锂酯吗？​",
        //59
        "唐僧师徒四人经过女儿国时，守卫：只有女人才能进。随后三个徒弟都变成女人进去了，八戒说师傅怎么办？只见唐僧悄悄的跟那守卫说了一会，那守卫便放他进去，后来八戒问唐僧说了什么，唐僧：我会唱跳，rap，篮球​",
        //60
        "蔡徐村，这原本是一个祥和宁静的村子，突然有一天，一个叫苏珊的女孩儿把​鸡病​毒带了过来。从此所有村民都变得行为怪异，对篮球十分敏感。见到没有感染的人就会上前攻击传播病毒。原本正常的人也会变得跟他们一样。科学家们捕捉了一个样本带回基地研究，发现他们嘴中一直念叨四个字:鸡你太美​",
        //61
        "宋仲​基和李晨一个离婚 ，一个分手了，也就是说他们的太太都离开他们了，所以，也就是传说中的基李太没？",
        //62
        "这种生物学名叫：亚种海鸡 习性在海滩边生活，由于人类的对海滩的大量旅游业发展，常食旅人剩下的油饼，荔枝，鸡脚，树脂等食物。而且拥有极大的药用价值可做成​绿尸​寒去伤风去败火，而且还由于肉质鲜美嫩滑渔民用来使用过只需要捡些树枝起火上搭小黑锅放入荔枝等调料就非常好吃了。而这样的物种还有类似于亚种路鸡身上的纹路像背带裤一样十分可爱",
        //63
        "小蔡似乎是城里人，只有暑假的时候才会来到村里跟我们玩，她应该是没有父母的，因为每次来都是一个不认识的人把她送来，问她她也闭口不谈。她总是说着想去当练习生，至于原因，我想大概是为了找她的父亲吧。我们村子以前闹过坤，搞得人心惶惶，半夜小孩子一哭，外面总能听到篮球声，村长迫不得已把我们村的唯一一个小型篮球场都给拆掉了，有一次我爸去山上砍柴火时，后山那乱坟岗传来了鸡叫，当时没有听清楚，后来我们村长和我们村几个大户人家耗费巨资把后山那个乱坟岗给填了，做了一个篮球场，扔了一个篮球进去，放了两只鸡，然后把篮球场有很高的围墙围住，不允许任何人进去，后来我们村篮球声就消失了，我感觉这都是老一辈的迷信，直到暑假某一天，我和几个小伙伴带着小蔡偷偷去到后山篮球场玩……我依稀记得那时半夜12点，几个小伙伴比谁胆大，＂​你干​嘛，哈哈，哎哟＂。我们几人都吓坏了，其中胆最小的小蔡直接哭了出来，我们几个没法子，就安慰小蔡，谁让她是女孩子呢……我试着安慰小蔡，她也不哭了，小伙伴们商量着要下山，我们都表示同意，走了没几步，这时小刚说“小蔡呢？”我意识到不对，连忙回头看，只见小蔡杵在原地，沉着脸，我上前叫她“喂，小蔡，你怎么了？”我以为她吓着了，还待在原地不敢动弹，就推了她一下... “你干嘛哈哈~哎呦~” 我大惊，“你是...鸡！",
        //64
        "​我是养鸡​的，有一天，肯德基伫我打电话，说要一箱鸡，很急要马上送到，我的员工比较懒，我赶紧去开货车，到了养鸡场，我看见员工在那里歇着，我气的大吼道:鸡你抬没？​",
        //65
        "近日，柳叶刃自然期刊杂志和鸡国皇家医学院基妮肽酶团队发表了最新的研究成果《关于基妮肽酶的发现及作用》:我们经过两年半的不懈努力，从肌肉中大量提取了一种生物酶--基妮肽酶，这种酶，可以保持激发态妮肽酶的性状于稳定态，在此发生复杂的化学反应，由酵素催化分裂妮肽酶从氨基末端（N-terminus） 蛋白质或者肽（外肽酶）它们也广泛分布于整个动植物界，并存在于许多亚细胞中细胞器，特别是在荔枝和虾头的细胞膜表面作为膜组件。基妮肽酶用于基本细胞功能。这些肽酶中有很多是坤酶（ikun of enzyme）。此外，我们发现它和销黑子反应产生了聚变反应，但通过大量实验证实，基妮肽酶和销黑子反应生成的妮肽酶和锠、銚、rap，而且加入催化剂香精碱钰能加速反应，同理，香炽酪钒和釉鋲也可以加速反应但是制备过于繁琐，需要先用绿尸寒精镐（green ​corps​e cold）在石棉网中加热至融化，加入氨钡釿叁与之混合至出现黑绿色气体--基妮肽钡釿。食不食油饼大学全球卫生研究所所长Antoine Flahault也表示，基妮肽酶的发现是人类科技里程碑式的进步。我们将基妮肽酶致力于补充与替代医学当中，强调健康效果，同时记录生物作用机制，造福人类是我们的责任！ ————《柳叶刃 – 全球健康》（The Lancet Global Health）2099年坤年坤月坤日​",
        //66
        "1S2 2S2 2P6 3S2 化学老师在黑板上写下 “同学们这是什么？” “​氢氦锂铍​硼……”同学们纷纷回忆起来 “太慢了同学们太慢了”，化学老师生气了，“不能一下子反应过来，这可达不到高考要求，这个速度卷子可是写不完的” 化学老师清了清嗓子：“记住了同学们一定要记住了，这是基态镁，这是基态镁！”​",
        //67
        "我叫小吉是黄河捞尸，在我们圈子有个忌讳，就是遇到穿背带裤溺水的尸体不能捞。尤其是死亡时长达两年半那种最是邪门，在午夜12点后又唱又跳的甚是恐怖，如果抬了这种尸体，会倒大霉，我们将这种说法称为——忌溺抬霉 有一天我和一群人在河里，发现有个尸体，就和其他人抬出去了，但是大家没有注意到这具尸体穿着背带裤，回家后，其他人家的鸡突然发疯又唱又跳，甚至在半夜两点半的时候还在打篮球，被吵醒的爷爷问小吉：“吉你抬没？”小吉摇了摇头。这时小吉感到一股凉意然后身上变绿了，爷爷说：“不好，是绿尸寒警告！这时那具尸体突然起身拿起小吉的篮球大喊：“鸡你太美！”打起了篮球哟西我这有个差不多的",
        //68
        "有天我误闯女更衣室，顿时惊叫声一片，我急中生智，大喊一声，我喜欢唱，跳，rap，篮球！顿时寂静，大家都放心了",
        //69
        "我是一名地质学家，一天我在台湾的一个叫“四泰寺”的地方出土了一块珍贵的煤炭矿石样本，我欣喜若狂连忙将其寄给了同为地质爱好者的妻子，当她收到包裹时并没有着急打开而是打电话问我给她寄了什么好东西，我回答她说:寄你四泰寺台煤",
        //70
        "小兔对小鸡说： “你知道娃娃鱼身上最珍贵的部位是哪里吗？” 小鸡想了想，恍然大悟说： “鲵肝嘛，哎呦。”​",
        //71
        "孟子来到梁国，见证了大梁城的繁华，又看到梁国乡野饿殍遍地，不禁悲从中来，长长叹息，哀民生之多艰。 带着这种情感，孟子前去面见​梁惠​王，提出了自己施政的种种对策，希望重新以礼规范整个国家，恢复生产、与民休养、制止浪费，孟子说：“以礼治国，则国泰而民安也， 王 道之成，可举目而盼。” 梁惠王环顾四周，看到的尽是阿谀奉承之臣，又想起秦国对大魏河套地区垂涎欲滴，楚国有心再次问鼎中，内忧外患之下，梁惠王悲愤交加，竟然对孟子大吼：“礼治！你让我拿什么礼治！”",
        //72
        "相传华佗帮关羽划骨疗毒的时候，无意间发现关羽额眉间有一颗毒块，华佗为了割掉那颗毒块，索性用针刺戳了关羽的骨肉一下，关羽痛的抬起头来，华佗趁机割掉了毒块。后来世人将此举动称之为：激你抬眉​",
        //73
        "最近我发现有好多幼儿园小朋友想要尝试老干妈，却又怕辣。于是我模拟老干妈发明了一款爱护幼儿的辣酱，我决定称其为拟干妈 爱幼",
    ]
    num = Math.floor(Math.random() * msg.length)
    msg = msg[num]
    // console.log(`NUM：${num}\nMSG：${msg}`)
    // console.log(`NUM：${Math.random()}*${msg.length}=${num}\nMSG：${msg}`)
    return msg
};