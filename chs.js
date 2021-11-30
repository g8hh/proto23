/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "Kid": "孩子",
    "Quit daydreaming": "别做白日梦了",
    "∥LOCKED∥": "∥未解锁∥",
    "|Dojo, training area|": "|道场、训练区|",
    "Accessory": "配饰",
    "Autosave": "自动保存",
    "Body": "身体",
    "CLR": "清理",
    "Clear": "清理",
    "BG Color": "背景色",
    "BG presets": "背景预设",
    "delete the save": "删除存档",
    "Destroy gradients": "取消渐变",
    "night": "夜间",
    "Location": "位置",
    "LOADING": "加载中",
    "Legs": "腿部",
    "Head": "头部",
    "Shield": "护盾",
    "WEP": "武器",
    "Weapon": "武器",
    "White": "白色",
    "special": "特殊",
    "settings": "设置",
    "save": "保存",
    "Resume the fight": "返回战斗",
    "R Arm": "右胳膊",
    "L Arm": "左胳膊",
    "R hand": "右手",
    "L hand": "左手",
    "Message log limit": "消息日志上限",
    "Nothing": "什么都没有",
    "Nothing here yet": "这里什么都没有",
    "OTHER": "其它",
    "Pause next battle": "暂停下一场战斗",
    "USE": "使用",
    "　stop combatlog　": "　停止战斗日志　",
    "　new": "　新",
    "\"<= Get up\"": "\"<= 起床\"",
    "\"Easiest\"": "\“最简单”",
    "\"Easy\"": "\"简单\"",
    "\"Normal\"": "\"正常\"",
    "\"Select the difficulty\"": "\"选择难度\"",
    "\"You are fighting training dummies\"": "\"你在和训练假人战斗\"",
    "(body": "(身体",
    "(R hand": "(右手",
    "|Your Home, Bed|": "|你的家，床|",
    "Monday": "周一",
    "load": "加载",
    "grey": "灰色",
    "hit chance": "命中率",
    "lvl:1 'Evil'": "等级:1 '邪恶'",
    "lvl:1 'Nobody'": "等级:1 '没人'",
    "m e s s a g e　　　l o g": "消息日志",
    "game not saved!": "游戏未保存！",
    "freeze messagelog　": "冻结消息日志",
    "FOD": "食物",
    "WPN": "武器",
    "(L hand": "(左手",
    "": "",
    "A Stick": "一根棍子",
    "Cure Grass": "治愈草",
    "EQP": "装备",
    "Game Saved": "游戏已保存",
    "Grab your stuff and get to it": "拿起你的东西，开始吧",
    "lvl:1 'Evil ♀'": "等级:1 '邪恶♀'",
    "New item obtained": "获得新物品",
    "saved...": "已保存...",
    "Wooden dummy": "木制假人",
    "Wooden dummy ->": "木制假人 ->",
    "Wooden dummy missed": "木假人未命中",
    "You": "你",
    "You ->": "你 ->",
    "You have training to complete": "您需要完成训练",
    "You missed": "你未命中",
    "\"A Stick\"": "\"一根棍子\"",
    "Class": "类型",
    "Club/Hammer, Blunt": "球杆/锤子，钝器",
    "Club/Hammer": "球杆/锤",
    "Medicine/Tool": "医药/工具",
    "Deletes": "删除",
    "health": "健康",
    "Herb with minor healing properties. Has to be processed before use. Can somewhat speed up recovery of tiny cuts and bruises if applied directly": "具有轻微治疗作用的草本植物。 使用前必须进行处理。 如果直接使用，可以在一定程度上加快微小伤口和瘀伤的恢复",
    "L arm": "左胳膊",
    "permanently": "永久",
    "R arm": "右胳膊",
    "Rarity": "稀有度",
    "Throw away": "丢弃",
    "Restores": "恢复",
    "Your favorite weapon!": "你最喜欢的武器！",
    "All": "全部",
    "Armor": "护甲",
    "Comestibles": "杂货",
    "Filter": "过滤",
    "Materials/Other": "材料/其他",
    "Weapons": "武器",
    "CRIT!": "暴击!",
    "(head": "(头部",
    "head": "头部",
    "lvl:1 'Evil ♂'": "等级:1 '邪恶♂'",
    "Material/Misc": "材料/杂项",
    "You have been knocked out...": "你被淘汰了...",
    "Looking at this fills you with bad memories": "看着这让你充满了不好的回忆",
    "Death Badge": "死亡徽章",
    "Awarded by fate for dying. Congratulations": "因死亡而被命运授予。 恭喜",
    "\"<= Go outside\"": "\"<= 出门\"",
    "\"Crash down and take a nap\"": "\“崩溃并小睡一会儿\”",
    "\"Examine basement door\"": "\"检查地下室门\"",
    "\"Examine Fireplace\"": "\"检查壁炉\"",
    "\"Examine your bag\"": "\"检查你的包\"",
    "\"Examine your hidden stash\"": "\"检查你隐藏的藏匿处\"",
    "|Your Home|": "|你的家|",
    "Foggy": "有雾",
    "Great way to pass time": "打发时间的好方法",
    "Sunny": "晴天",
    "Wednesday": "周三",
    "Your humble abode. You can rest here.": "你卑微的居所。 你可以在这里休息。",
    "\"<= Step away\"": "\"<= 走开\"",
    "\"Idea paper\"": "\"想法纸\"",
    "\"Retrieve spare firewood. You have a feeling you'll need it\"": "\"取回备用木柴。你有一种感觉，你会需要它\"",
    "\"Toss a stick into the fireplace\"": "\"把一根棍子扔进壁炉\"",
    "|Your Home, Fireplace|": "|你的家，壁炉|",
    "Bandana": "头巾",
    "Better take this with you": "最好随身携带这个",
    "Bread": "面包",
    "Comfy fireplace. You can warm up here if you light it up": "舒适的壁炉。 如果你点亮它，你可以在这里暖和",
    "Egg": "鸡蛋",
    "It's locked": "它是锁着的",
    "Milk": "牛奶",
    "Rice": "大米",
    "Something you've forgotten to grab before. There's a pack of food and some junk idea paper.": "以前忘记拿的东西。 有一包食物和一些垃圾想法纸。",
    "Wooden Sword": "木剑",
    "Water": "水",
    "\"Property Deed\"": "\“财产契约\”",
    "\"Throw a stick into the fireplace\"": "\"把一根棍子扔进壁炉\"",
    "\"Throw some firewood into the fireplace\"": "\"往壁炉里扔些柴火\"",
    "Comfy fireplace. You'll need fire if you want to get some cooking done": "舒适的壁炉。 如果你想完成一些烹饪，你需要火",
    "Firewood": "柴火",
    "Grab the contents": "抓取内容",
    "Woven Wallet": "编织钱包",
    "You have some lying around nearby": "你附近有一些",
    "You reach for a small red box which you keep your valuables in, it is time to take it out": "你伸手去拿一个红色的小盒子，里面放着贵重物品，是时候把它拿出来了",
    "You notice the fire flickering slightly": "你注意到火光在微微闪烁",
    "\"Famine\"": "\“饥荒\”",
    "Allows you to list and examine your possessions": "允许您列出和检查您的财产",
    "Book": "书",
    "Clean rice grains. Healthy and delicious when cooked, but awful to eat in dry state": "米粒洗净。 煮熟后健康美味，但在干燥状态下食用很糟糕",
    "Cloudy": "多云",
    "Drizzle": "细雨",
    "energy": "能量",
    "Food": "食物",
    "Food(": "食物(",
    "Never": "从不",
    "NEW PERK UNLOCKED": "新特权解锁",
    "New Skill Unlocked!": "新技能解锁！",
    "Night": "夜晚",
    "Overcast": "阴",
    "perishable": "易腐烂的",
    "Power potion for your bones": "为您的骨骼提供强力药水",
    "Rain": "雨天",
    "Read": "阅读",
    "Regular drinkable water": "普通饮用水",
    "Simple loaf of bread, baked with care. It's crunchy and smells nice": "简单的面包，小心烘烤。 它很脆，闻起来很香",
    "Simple long sword carved from light wood. Easy to handle and is suitable as amateurish training weapon": "用轻木雕刻而成的简单长剑。 易于操作，适合作为业余训练武器",
    "skills": "技能",
    "Sword": "剑",
    "Sword, Blunt": "剑、钝器",
    "Thin cloth bandana. It protects your face from sweat": "薄布头巾。 它可以保护你的脸免受汗水的侵害",
    "This is your personal wallet, you received it as a gift": "这是你的个人钱包，你收到了它作为礼物",
    "This old looking legal document indentifies you as a sole owner of this broken down hut you live in. It was passed down to you by your ancestors, you speculate": "这份看起来很旧的法律文件表明您是您居住的这座破房子的唯一所有者。您推测，这是您的祖先传给您的",
    "Thursday": "周四",
    "Tiny scrap of paper with information. You wrote it yourself to remember things.": "带有信息的小纸片。 你自己写的来记住事情。",
    "Tried": "尝试",
    "Whole chicken egg, very nutritious": "全蛋，非常有营养",
    "You can feel coinage inside": "你可以感觉到里面的硬币",
    "You took a sip": "你啜了一口",
    "\"=> Check the Message Board\"": "\"=> 查看留言板\"",
    "\"=> Approach the cat\"": "\"=> 接近猫\"",
    "\"=> Enter Dojo\"": "\"=> 进入道场\"",
    "\"=> Enter Southern forest\"": "\"=> 进入南方森林\"",
    "\"=> Enter Western Woods\"": "\"=> 进入西部森林\"",
    "\"=> Food stand\"": "\"=> 食品摊\"",
    "\"=> Go home\"": "\"=> 回家\"",
    "The rain feels surprisingly refreshing": "下雨的感觉出奇的清爽",
    "Village Center": "村中心",
    "Your clothes get soaked": "你的衣服湿透了 ",
    "\"=> Shady Kid\"": "\"=> 阴暗的孩子\"",
    "You have a feeling it might rain soon": "你有一种感觉可能很快就会下雨",
    "\"<= Go back\"": "\"<= 回去\"",
    "Bun with red beans added to it, resulting in rich flavour": "包子里加了红豆，味道浓郁",
    "\"<= Return\"": "\"<= 返回\"",
    "\"Pet the cat\"": "\"宠物猫\"",
    "Red Bean Bun": "红豆包",
    "Stormy": "暴风雨",
    "Street Merchant Ran: Welcome! What would you like?": "街头小贩冉：欢迎光临！ 你要什么？",
    "There is a cat.": "有一只猫。",
    "Village Center, Cat": "村中心，猫",
    "\"Explore the posts\"": "\“探索帖子\”",
    "Village Center, Street Food Stand": "村中心，街头小吃摊",
    "This is an advertisement for woven straw baskets": "这是一个编织草篮的广告",
    "Message Board": "留言板",
    "Village Center, Message Board": "村中心、留言板",
    "You can find jobs or other stuff here": "你可以在这里找到工作或其他东西",
    "\"Instructor: You got beaten up by an inanimated dummy?! Pay attention to your condition!\"": "\"教官：你被一个无生命的假人殴打了？！注意你的情况！\"",
    "|Dojo, lobby|": "|道场，大厅|",
    "Item Acquired": "物品获得",
    "This is an advertisement for carpentery supplies": "这是木工用品的广告",
    "Gate Guard: \"It is too dangerous for you to leave at this moment. Come back when you train a bit\"": "门卫：“你这个时候离开太危险了，训练一下再回来。”",
    "Gate Guard: \"Nothing for you to do there. Scram!\"": "门卫：\“在那里你无事可做。快滚！\”",
    "Lunar Phase": "月相",
    "Last Quarter Moon": "上弦月",
    "A single penny, outdated form of currency. For some reason it's still in circulation": "一分钱，过时的货币形式。 由于某种原因它仍在流通",
    "Dime": "一毛钱",
    "It will take you about": "它会花费大约",
    "minutes to finish": "分钟就可以完成",
    "Nickel": "镍",
    "Penny": "一分钱",
    "Quarter": "25美分硬币",
    "Round copper dime. Still shiny": "圆形铜币。 依旧闪亮",
    "Small nickel, outdated form of currency. It was worth much more in the past": "小镍币，过时的货币形式。 过去更值钱",
    "Very large coin, made of copper. Not much worth as money, but collected and used by poor blacksmiths for resmelting into tools": "非常大的硬币，由铜制成。 不值钱，但被贫穷的铁匠收集并用于重新熔炼成工具",
    "You are reading": "你在阅读",
    "A tiny useless stone, found everywhere. Can be thrown to create distraction": "一块无用的小石头，随处可见。 可以扔来分散注意力",
    "Bring money next time": "下次带钱来",
    "Hey, I've got some good stuff for you": "嘿，我有一些好东西给你",
    "Pebble": "卵石",
    "Piece of old stale bread covered in mold. Takes courage to eat": "一块被霉菌覆盖的陈旧面包。 吃东西需要勇气",
    "Spoiled Bread": "变质的面包",
    "Sorry you can't afford that!": "对不起，你买不起！",
    "Village Center, Child Trader": "村中心，儿童商人",
    "Training dummy": "训练假人",
    "Training dummy ->": "训练假人 ->",
    "You dry up": "你太渴了",
    "You passed out...": "你昏过去了...",
    "legs": "腿部",
    "\"Sleeping\"": "\“睡眠\”",
    "The rest of Body": "身体的其余部分",
    "Unremarkable someone trying to find his purpose in life": "一个不起眼的人试图找到他的人生目标",
    "You can't read while sleeping": "你不能在睡觉时阅读",
    "Ability to go by without any sustenance": "能够在没有任何食物的情况下通过",
    "Alphabetically": "按字母顺序",
    "by Amount": "按数量",
    "by Levels": "按等级",
    "by Type": "按类型",
    "EXP Gain +1%": "经验增益 +1%",
    "Export As File": "导出为文件",
    "Export As Text": "导出为文本",
    "Famine": "饥荒",
    "Import As Text": "通过文本导入",
    "Increases health gain during sleep": "增加睡眠期间的健康收益",
    "Increases lower energy effectiveness bonus": "增加较低的能量效率奖励",
    "Load File": "从文件加载",
    "LVL": "等级",
    "Nobody": "没有人",
    "Perks unlocked": "特权解锁",
    "S k i l l　　l i s t": "技能列表",
    "\"Bandana\"": "\“头巾\”",
    "\"Wooden Sword\"": "\"木剑\"",
    "(legs": "(腿部",
    "Dusk": "黄昏",
    "Friday": "周五",
    "Sleeping": "睡眠",
    "This is an advertisement for smithing orders": "这是铁匠铺的广告",
    "Yes": "是",
    "\"Fighting\"": "\“战斗\”",
    "\"Pain Resistance\"": "\"抗痛性\"",
    "Skill": "技能",
    "Starry Night": "星夜",
    "Saturday": "周六",
    "You put one in your mouth...": "你把一颗放进嘴里...",
    " died": " 死亡了",
    " missed": " 未命中",
    "'Fighting'": "'战斗'",
    "Apple": "苹果",
    "Area cleared": "区域已清理",
    "It is too dangerous to read right now": "现在读书太危险了",
    "Juicy red fruit. Makes a fine breakfast if you have nothing else...": "多汁的红色水果。 如果你没有别的东西，做一顿美味的早餐......",
    "kills": "杀死",
    "lvl:2 'Nobody'": "等级:2 '没人'",
    "\"Instructor: Nice job kid! Here's the reward for completing the course\"": "\"教官：干得好！这是完成课程的奖励\"",
    "\"Instructor: Great job kid! Here's the reward for completing the course\"": "\"教官：干得好！这是完成课程的奖励\"",
    "\"Instructor: Nice work kid! Here's the reward for completing the course\"": "\"教官：干得好！这是完成课程的奖励\"",
    "Strand Of Straw": "稻草绳",
    "\"Sandals\"": "\“凉鞋\”",
    "Cheap unremarkable sandals made from light leather. Aren't even that comfortable to wear": "由轻质皮革制成的廉价平底凉鞋。 穿起来也不是很舒服",
    "Sandals": "凉鞋",
    "This fell out of a dummy when you punched it to death": "当你一拳打死它时，它从一个假人身上掉了下来",
    "You lost consciousness...": "你失去了知觉……",
    "You threw Clay Milk Cap into the distance": "你把粘土奶盖扔到远处",
    "Clay Milk Cap": "粘土奶盖",
    "Milk caps made from packed clay. Children like to play with these": "用粘土制成的奶盖。 孩子们喜欢玩这些",
    "Sunday": "周日",
    "The surroundings are flourishing with life, nothing bad can happen": "周围生机勃勃，没有什么不好的事情发生",
    "This is an advertisement for herbal medicine": "这是中草药的广告",
    "Training dummy died": "训练假人死了",
    "You hit Wooden dummy for": "你击中了木制人偶",
    "You hit Straw dummy for": "你击中了稻草人偶",
    "You hit Training dummy for": "你击中了训练假人",
    "'Pain Resistance'": "'抗痛'",
    "'Sword Mastery'": "'剑术精通'",
    "\"Stop reading\"": "\"停止阅读\"",
    "damage": "伤害",
    "Linen Vest": "亚麻背心",
    "New Title Earned!": "获得新称号！",
    "Training dummy missed": "训练假人未命中",
    "Wood Splint": "木夹板",
    "You're already reading": "你已经在阅读了",
    "Wooden dummy died": "木制假人死了",
    "\"Initiate\"": "\"开始\"",
    "\"Instructor: Good job kid! Here's the reward for completing the course\"": "\"教官：干得好！这是完成课程的奖励\"",
    "\"Instructor: Your training is over for today, you did well. As a reward, select one of these skill manuals to practice. The better your understanding, the stronger you will be in battle\"": "“教官：今天的训练结束了，你做得很好。作为奖励，选择这些技能手册之一进行练习。你的理解越好，你在战斗中就越强大”",
    "\"Practitioner Skillbook (Axes)\"": "\"修行者技能书（斧）\"",
    "\"Practitioner Skillbook (Hammers)\"": "\"修行者技能书（锤）\"",
    "\"Practitioner Skillbook (Knives)\"": "\"修行者技能书（刀）\"",
    "\"Practitioner Skillbook (Martial)\"": "\"修行者技能书（武术）\"",
    "\"Practitioner Skillbook (Spears)\"": "\"修行者技能书（矛）\"",
    "\"Practitioner Skillbook (Swords)\"": "\"修行者技能书（剑）\"",
    "\"Destroy more dummies\"": "\“摧毁更多的假人\”",
    "\"Dojo infoboard\"": "\"道场信息板\"",
    "\"Grab a serving of free food\"": "\“拿一份免费食物\”",
    "\"Instructor: Back already?\"": "\"指导员：回来了吗？\"",
    "\"Level Advancement\"": "\"等级提升\"",
    "\"Turn in dojo gear\"": "\“打开道场齿轮\”",
    "\"Pamphlet\"": "\“小册子\”",
    "P Skillbook (Swords": "P 技能书（剑",
    "Paper Boy: Hey, this is for you!": "纸男孩：嘿，这是给你的！",
    "\"<= Return back into lobby\"": "\"<= 返回大厅 \"",
    "\"Claim your rewards!\"": "\“领取你的奖励！\”",
    "\"Get stronger!\"": "\“变强！\”",
    "\"Get your grub at the canteen!\"": "\“去食堂拿你的食物！\”",
    "\"Gluttony\"": "\“暴食\”",
    "\"Graduate!\"": "\"毕业了！\"",
    "\"Instructor: If you put effort into training you will get rewards as long as you are still a disciple of this hall. After every 5 levels you reach, come here and recieve your share! You might get something really useful if you continue to improve your skills\"": "\"教官：只要你努力修炼，只要你还是本堂弟子，就会得到奖励。每升5级，就来这里领取一份吧！继续练下去，说不定会得到真正有用的东西提高你的技能\"",
    "\"Instructor: You can return whatever you punched off of dummies and get coin for it, it's dojo's equipment after all. Or you can keep and use for it yourself, the choice is yours\"": "\"教官：你打出的假人什么的都可以退还给它，它毕竟是道场的装备。或者你可以自己保留和使用，选择权在你手中\"",
    "\"Measure your power!\"": "\“衡量你的力量！\”",
    "\"Return the rags\"": "v",
    "*Chow*": "* 周 *",
    "|Dojo, Infoboard|": "| 道场，信息板 |",
    "A little dry but, that will do": "有点干，但没关系",
    "Punch as many as you want": "打多少你想打多少",
    "Pieces of broken training dummies are scattered on the floor": "破碎的训练假人碎片散落在地板上",
    "Useful information regarding dojo is written here. What will you read?": "有关 道场 的有用信息写在此处。 你会读什么？",
    "You notice other dojo disciples diligently train": "你注意到其他道场弟子努力训练",
    "Physical Strength": "体力",
    "Power rank": "力量段位",
    "Speed": "速度",
    "This is you": "这是你",
    "This was shoved onto you by someone on the streets. Store names, discount prices, hot items... An entire wall of advertisements in tiny letters, to fit as much of it as possible on this piece of paper. It is a good idea to memorize the addresses": "这是街上有人推给你的。 商店名称、折扣价、热门商品……一整面小字母的广告墙，在这张纸上尽可能多地放上广告。 记住地址是个好主意",
    "'Literacy'": "'识字'",
    "\"Linen Vest\"": "\"亚麻背心\"",
    "\"Literacy\"": "\"识字\"",
    "\"Sword M\"": "\"剑术精通\"",
    "A small chipped piece of wood. Not very useful by itself": "一小块碎木头。 本身不是很有用",
    "Agility": "敏捷",
    "Allows for faster attacks and multihit combos": "允许更快的攻击和多重连击",
    "Current EXP Gain": "当前经验增益",
    "Determines hit/dodge rate": "决定命中率/闪避率",
    "Determines magic damage dealt and received": "决定造成和受到的魔法伤害",
    "Determines physical damage dealt and received": "决定造成和受到的物理伤害",
    "Empty space": "空的空间",
    "Energy Consumption Rate": "能源消耗率",
    "Energy Effectiveness": "能源效率",
    "Energy meter": "能量表",
    "Entry level practitioner skillbook about sword combat": "剑战入门级练功书",
    "EXP Gain Potential": "经验获得潜力",
    "Experience": "经验",
    "Fight dummies provided by dojo to improve your physique and weapon skills! Destroy them and grab their stuff, or vanquish thousands for a special reward! The doors of our dojo is open for everyone willing to lead the path of a warrio": "对抗道场提供的假人，提升你的体质和武器技能！ 摧毁他们并抢走他们的东西，或者征服数千人以获得特殊奖励！ 我们道场的大门向所有愿意引领勇士之路的人敞开",
    "Growth Potential": "成长潜力",
    "hours to finish": "小时去完成",
    "Influences the effectiveness of your actions, eat a lot to keep it full": "影响你行动的有效性，多吃以保持饱腹感",
    "\"Book\"": "\"书\"",
    "\"Meditation\"": "\“冥想\”",
    "Furniture": "家具",
    "Book which you've already read. It doesn't contain any new useful information": "你已经读过的书。 它不包含任何新的有用信息",
    "Current": "当前",
    "Furniture Acquired": "收购家具",
    "Health": "健康",
    "Mental acuity": "精神敏锐度",
    "owned": "拥有",
    "no": "否",
    "Physical and combat experience. You'll have to work hard to achieve new heights": "体力和战斗经验。 你必须努力工作才能达到新的高度",
    "Physical health points, needed to stay alive. You will probably die if it reaches 0": "维持生命所需的身体健康点数。 如果它达到0你可能会死",
    "Scrawny": "骨瘦如柴",
    "Use to add to the furniture list": "用于添加到家具列表",
    "You feel terrible. You might want to eat something or you'll end up being nothing more than a skeleton": "你觉得很可怕。 你可能想吃点东西，否则你最终只会成为一具骷髅",
    "Your power position in this realm. The lower the number the stronger you are": "你在这个领域的权力地位。 数字越小你越强",
    "Ability to fight using swords": "使用剑进行战斗的能力",
    "Ability to perform better in a fight": "在战斗中表现更好的能力",
    "Fighting": "战斗",
    "Ability to tolerate physical harm": "身体承受伤害的能力",
    "Gluttony": "暴食",
    "Improves reading speed": "提高阅读速度",
    "Literacy": "识字",
    "Mastery of eating": "掌握饮食",
    "SAT +5, HP +5, Gluttony EXP Gain +3%, New Title": "SAT +5，生命值 +5，暴食经验增益 + 3%，新称号",
    "Pain Resistance": "抗痛性",
    "Meditation": "冥想",
    "Slightly decreases damage received": "小幅减少受到的伤害",
    "Slightly increases attack power when holding a sword": "持剑时稍微增加攻击力",
    "Slightly increases overall attack power": "小幅提升整体攻击力",
    "Sword M lvl: ": "剑术精通 等级:",
    "Sword Mastery": "剑术精通",
    "The rest of Mind": "心灵的休息",
    "Understanding of meaning behind texts": "理解文本背后的意义",
    "\"Boiled Egg\"": "\“水煮蛋\”",
    "\"Boiled Rice\"": "\ “煮好的饭 \”",
    "\"Low-grade Healing Powder\"": "\"下品疗伤粉\"",
    "\"Straw Pendant\"": "\"稻草吊坠\"",
    "assemble": "工艺",
    "New blueprint unlocked": "新蓝图解锁",
    "! Get in time for your weekly menu!": "！ 及时了解您的每周菜单！",
    "\"Give it a try\"": "\“试一试\”",
    "As long as you keep gaining experience and train hard, dojo will provide you with gifts and money! Don't miss out!": "只要你不断积累经验并努力训练，道场就会为你提供礼物和金钱！ 不要错过！",
    "Boiled Rice": "煮好的饭",
    "Boiled Egg": "水煮蛋",
    "Fight dummies provided by dojo to improve your physique and weapon skills! Destroy them and grab their stuff, or vanquish thousands for a special reward! The doors of our dojo is open for everyone willing to lead the path of a warrior": "对抗道场提供的假人，提升你的体质和武器技能！ 摧毁他们并抢走他们的东西，或者征服数千人以获得特殊奖励！ 我们道场的大门向所有愿意引领勇士之路的人敞开",
    "Free Meals": "免费餐点",
    "Indestructable Dummy": "坚不可摧的假人",
    "Low-grade Healing Powder": "低品疗愈粉",
    "Our generous dojo provides": "我们慷慨的道场提供",
    "Straw Pendant": "稻草吊坠",
    "to every attending low-class disciple every": "给每一个在读的低阶弟子",
    "to measure the power of your fist!": "来衡量你拳头的力量！",
    "Try out punching this": "试试打这个",
    "When you are confident in your skills, try your fist at fighting powerful golems! How much beating can you withstand?": "当您对自己的技能充满信心时，请尝试与强大的傀儡战斗！ 你能承受多大的打击？",
    "\"Instructor: There's nothing I can take from you\"": "\"教官：我不能从你这里拿走什么\"",
    "\"Furniture list\"": "\"家具清单\"",
    "A \"bed\" made from several layers of straw placed onto each other. Extremely itchy and isn't much better from sleeping on a rock": "由相互叠放的几层稻草制成的“床”。 非常痒，睡在石头上也好不了多少",
    "Comfy fireplace. You can light it up for various useful means, or just to warm up": "舒适的壁炉。 你可以用各种有用的方式点亮它，或者只是为了热身",
    "Fireplace": "壁炉",
    "Furniture Owned": "自有家具",
    "Home rating": "房屋评级",
    "Straw Bedding": "稻草被褥",
    "'Gluttony'": "'暴食'",
    "This is an advertisement for bottled water": "这是瓶装水的广告",
    "Bandage": "绷带",
    "Hands": "手部",
    "Simple handwraps": "简单的裹手",
    "Perfect for morning runs": "晨跑的完美选择",
    "Dojo Pants": "道场裤",
    "\"Death\"": "\“死亡\”",
    "\"Bandage\"": "\“绷带\”",
    "Ability to cling to your fate": "把握命运的能力",
    "Death": "死亡",
    "Reduces energy loss on death": "减少死亡时的能量损失",
    "\"Aspiring Ronin\"": "\"有抱负的浪人\"",
    "\"Civilian\"": "\“平民\”",
    "1, AGL +1, New Title": "1、敏捷 +1、新称号",
    "Aspiring Ronin": "有抱负的浪人",
    "He's made of wood": "他是木头做的",
    "lvl:4 'Aspiring Ronin'": "",
    "Sword M": "剑术精通",
    "Wooden Knife": "木刀",
    "Watching swordplay of elder swordmasters always fascinated you, yet even trying to hold the sword properly is apparently extremely difficult. You are not the type to give up though": "看老剑客的剑法总是让你着迷，但即便是想要好好握剑，显然也是极其困难的。 你不是那种会放弃的人",
    "Lost kid's toy. The relic of many playground battles": "丢了孩子的玩具。 许多游乐场战斗的遗迹",
    "You'll feel chilly without sleeves": "不穿袖子会觉得冷",
    "He's made of straw": "他是稻草做的",
    "Knife": "刀",
    "'Knife Mastery'": "'刀法精通'",
    "\"Dojo Pants\"": "\"道场裤\"",
    "\"Knife M\"": "\"刀法精通\"",
    "\"Knife Mastery\"": "\"刀法精通\"",
    "\"Small Wood Bundle\"": "\"小木捆\"",
    "\"Starving Child\"": "\“饥饿的孩子\”",
    "\"Wooden Knife\"": "\"木刀\"",
    "Knife, Blunt": "刀, 钝的",
    "Equipment/Accessories": "装备/配饰",
    "Materials/Misc.": "材料/杂项",
    "Medicine/Tools": "医药/工具",
    "Nearby firesource": "附近火源",
    "output": "产出",
    "Prick": "刺",
    "reagents required": "所需试剂",
    "Small Wood Bundle": "小木捆",
    "Steamed Rice": "蒸米饭",
    "tools needed": "需要的工具",
    "You found it fun to make little holes in plant leaves and look through them at the Sun. You think this could be morbidly useful in a fight": "你发现在植物叶子上打小洞并透过它们看太阳很有趣。 你认为这在战斗中可能非常有用",
    "TPE": "类型",
    "Straw Kasa": "草帽",
    "You're too busy fighting": "你太忙于战斗了",
    "A Sando-gasa is made by weaving straw together. Great for boys who are too embarrassed to use a parasol": "Sando-gasa是用稻草编织而成的。 非常适合那些不好意思使用遮阳伞的男孩",
    "to max energy": "达到最大能量",
    "You made this yourself!": "这是你自己做的！",
    "Ability to fight using knives and daggers": "使用刀和匕首进行战斗的能力",
    "Knife Mastery": "刀法精通",
    "Slightly increases attack power when holding a knife": "持刀时稍微增加攻击力",
    "1, New Title": "1, 新称号",
    "10, HP +5, New Title": "10, 生命值 +5, 新称号",
    "2, EXP Gain +1%": "2, 经验增益 +1%",
    "2%, AGL +1": "2%, 敏捷 +1",
    "5, HP +5": "5, 生命值 +5",
    "5, HP +5, Gluttony EXP Gain +3%, New Title": "5、生命值+5、暴食经验增加+3%、新称号",
    "Finely crushed cure grass. Used as a base to make weak medicine": "细碎的治疗草。 用作基剂制成弱药",
    "Type of dry wood, prepared for easy burning. Useful at camps or during winter": "干木类型，易于燃烧。 在营地或冬季有用",
    "\"Accept\"": "\"同意\"",
    "\"Instructor: For all your stuff I can fetch you 2": "\"指导员：你所有的东西我都可以给你拿来 2",
    "\"Instructor: This is a good start, congratulations! Keep working hard!\"": "\"指导员：这是一个好的开始，恭喜！继续努力！\"",
    "\"Level 5 reward\"": "\"5级奖励\"",
    "2 Items returned back to dojo": "2 物品退回道场",
    "copper. How does that sound?\"": "铜。 听上去怎么样？\”",
    "Hit! Your approximate hand strength is measured in": "打！ 你大概的手部力量是用",
    "Low-grade Spirit Pill": "下品灵丹",
    "Punch! Your approximate hand strength is measured in": "冲！ 你大概的手部力量是用",
    "Slap! Your approximate hand strength is measured in": "拍击！ 你大概的手部力量是用",
    "Wham! Your approximate hand strength is measured in": "哇！ 你大概的手部力量是用",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "MED": "药",
    "MAT": "材料",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "???: ": "???: ",
    "/ dodge chance: ": "/ 闪避几率：",
    "Critical chance: ": "暴击几率: ",
    "INT: ": "智力: ",
    "hp: ": "生命值: ",
    "SPD: ": "速度: ",
    "rank: ": "段位: ",
    "STR: ": "力量: ",
    "Straw dummy": "稻草人偶",
    "exp: ": "经验: ",
    "AGL: ": "敏捷: ",
    "Area: Somewhere ": "地区：某处 ",
    "Area: Training Grounds ": "区域：训练场",
    "Last save: ": "上次保存 ",
    "Class: ": "类型: ",
    "Rarity: ": "稀有度: ",
    "DEF: ": "防御: ",
    "lvl: ": "等级: ",
    "There is a cat. Pets: ": "有一只猫。 宠物：",
    "　exp: ": "　经验: ",
    "Famine lvl: ": "饥荒等级：",
    "Leveled Up: ": "升级：",
    "Rank: ": "段位: ",
    "Sleeping lvl: ": "睡眠等级：",
    "| AGL +": "| 敏捷 +",
    "| HP +": "| 生命值 +",
    "| INT +": "| 智力 +",
    "EXP: ": "经验: ",
    "Leveled Up ": "升级 ",
    "STR +": "力量 +",
    "Sword Mastery EXP gain +": "剑精通经验获得+",
    "Literacy EXP gain +": "读写经验增益 +",
    "AGL +": "敏捷 +",
    "EXP Gain +": "经验增益 +",
    "Fighting lvl: ": "战斗等级: ",
    "Gluttony lvl: ": "暴食等级：",
    "HP +": "生命值 +",
    "INT +": "智力 +",
    "Literacy lvl: ": "识字等级：",
    "Meditation lvl: ": "冥想等级：",
    "Pain Resistance lvl: ": "抗痛等级：",
    "SAT +": "SAT +",
    "Perk lvl ": "特权等级 ",
    "SPD +": "速度 +",
    "Death lvl: ": "死亡等级: ",
    "Knife M lvl: ": "刀法精通等级：",
    "Sword M lvl: ": "剑术精通等级: ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "OFF": "关闭",
    " Throwing Damage": " 投掷伤害",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^x(\d+)$/,
    /^\/ (\d+)$/,
    /^([\d\.]+)\/([\d\.]+)\/([\d\.]+) ([\d\.]+)\:([\d\.]+)$/,
    /^([\d\.]+)\/([\d\.]+)\/([\d\.]+) ([\d\.]+)\:([\d\.]+)\:([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^\-([\d\.,]+)\/([\d\.,]+)$/,
    /^([\d\.,]+)\/(.+)$/,
    /^([\d\.,]+)\/([\d\.,]+)\/([\d\.,]+) ([\d\.,]+):([\d\.,]+)  $/,
    /^([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^lvl:(.+) \'Evil (.+)\'$/, '等级:$1 \'邪恶$2\''],
    [/^lvl:(.+) \'Aspiring Ronin\'$/, '等级:$1 \'有抱负的浪人\''],
    [/^lvl:(.+) \'Starving Child\'$/, '等级:$1 \'饥饿的孩子\''],
    [/^lvl:(.+) \'Prick\'$/, '等级:$1 \'刺\''],
    [/^lvl:(.+) \'Civilian\'$/, '等级:$1 \'平民\''],
    [/^lvl:(.+) \'Scrawny\'$/, '等级:$1 \'骨瘦如柴\''],
    [/^lvl:(.+) \'Initiate\'$/, '等级:$1 \'开始\''],
    [/^lvl:(.+) \'Nobody\'$/, '等级:$1 \'没有人\''],
    [/^Restored (.+) hp$/, '恢复 $1 生命值'],
    [/^Restored (.+) energy$/, '恢复 $1 能量'],
    [/^energy: (.+) eff: (.+)$/, '能量：$1 效率：$2'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^lvl ([\d\.]+)$/, '等级 $1'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^(\d+) Royal points$/, '$1 皇家点数'],
    [/^Cost: (\d+) RP$/, '成本：$1 皇家点数'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);