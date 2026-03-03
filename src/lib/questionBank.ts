// 题型：1-单选，2-多选，3-判断，4-填空，5-简答，6-情景，7-案例
export interface Question {
  type: number;
  question: string;
  options?: string[];
  answer: string | string[];
  score: number;
  explanation?: string;
  blanks?: string[];
  subjectiveScore?: number; // 主观题得分（人工评分）
}

// 导入完整题库
export const { questionBankFull } = require('./questionBankFull');

// 从完整题库中随机抽取
export function getQuestionsForExam(role: string, count: number = 45): Question[] {
  const { getRandomQuestions } = require('./questionBankFull');
  return getRandomQuestions(role, count);
}

export interface QuestionBank {
  [key: string]: Question[];
}

export const questionBank: QuestionBank = {
  // ========== 前台接待顾问 ==========
  reception: [
    // 单选题（20题，每题2分，共40分）
    { type: 1, question: "客户车辆进入维修工位前，服务顾问必须完成的第一步是（ ）。", options: ["立即开具施工单", "安装三件套（方向盘套、座套、脚垫）并进行环车检查", "询问客户是否需要饮料", "直接将车开上举升机"], answer: "B", score: 2, explanation: "安全防护和环检是第一步，确认车辆原状。" },
    { type: 1, question: "在接车问诊环节，了解客户故障描述后，服务顾问的首要任务是（ ）。", options: ["承诺客户马上能修好", "根据望、闻、问、切的方法进行初步核实与确认", "直接建议客户大修发动机", "告知客户这车质量不好"], answer: "B", score: 2, explanation: "使用专业方法核实故障。" },
    { type: 1, question: "关于事故车接待，以下哪种说法是正确的？（ ）", options: ["客户必须去保险公司定损点维修，不能自行选择", "服务顾问应协助客户查看保单，指导报案，并告知理赔流程", "只要客户同意维修，不需要保险公司定损就可以拆车", "事故车维修只需报价，无需进行环车检查"], answer: "B", score: 2, explanation: "服务顾问是理赔协助者，不是决策者。" },
    { type: 1, question: "当维修过程中发现增项（如额外故障），服务顾问正确的做法是（ ）。", options: ["先维修后通知客户，以免客户等待", "立即停止施工，联系客户，获取书面或录音授权后再继续施工", "直接免费赠送客户，以换取好评", "等交车时再告诉客户"], answer: "B", score: 2, explanation: "尊重客户知情权，避免后期纠纷。" },
    { type: 1, question: "在与客户进行故障诊断沟通时，关于使用专业术语，正确的做法是（ ）。", options: ["大量使用英文缩写，体现专业性", "用通俗易懂的语言解释故障现象及原因，避免故弄玄虚", "告诉客户说了你也不懂", "必须把诊断仪读取的数据流全部读给客户听"], answer: "B", score: 2, explanation: "沟通的要点是让客户听懂。" },
    { type: 1, question: "客户对维修工时费提出异议：就换个机油，工时费怎么这么贵？标准的回应方式是（ ）。", options: ["这是公司规定的，我也没办法。", "虽然看起来快，但包含了全车21项检测和专业设备的使用，确保您的安全。", "那给您打个折吧。", "嫌贵您可以去路边摊。"], answer: "B", score: 2, explanation: "将工时转化为价值，解释专业流程的价值。" },
    { type: 1, question: "车辆预检时，发现左后转向灯不亮，但在问诊时客户未提及。服务顾问应（ ）。", options: ["装作没看见", "记录在预检单上，并告知客户，征询是否本次维修", "直接免费帮客户换好", "告诉客户这是小问题，不用管"], answer: "B", score: 2, explanation: "发现隐性问题并转化为商机，体现专业和诚信。" },
    { type: 1, question: "在保险公司未到场的情况下，接待事故车进行拆解定损，服务顾问应特别注意（ ）。", options: ["只修外观可见部分", "拍照留存拆解前、拆解中、损坏配件的照片，以备核损", "催促客户赶紧签字维修", "将旧件直接扔掉"], answer: "B", score: 2, explanation: "证据链是理赔的关键。" },
    { type: 1, question: "交车结算时，客户提出车辆有些地方没洗干净，这时服务顾问应（ ）。", options: ["反驳客户说洗得很干净", "无视客户抱怨，催着交钱", "立即道歉，并安排重新清洁，同时复检车辆", "告知客户洗车工下班了"], answer: "C", score: 2, explanation: "交车是服务的最后一步，必须完美。" },
    { type: 1, question: "关于主动预约客户，以下哪项不是预约时必需确认的信息？（ ）", options: ["客户姓名和车牌号", "行驶里程和上次维修时间", "客户的身份证号码", "客户的需求和故障描述"], answer: "C", score: 2, explanation: "身份证号是结算开票时才必需，预约时主要是车和需求。" },
    { type: 1, question: "客户投诉维修后故障仍未解决，服务顾问首先应该（ ）。", options: ["推给维修工", "记录客户投诉，安排重新检测，并给出明确解决方案", "告知客户这是正常的", "建议客户换车"], answer: "B", score: 2, explanation: "积极处理投诉，重新检测是第一步。" },
    { type: 1, question: "服务顾问在接待时，关于客户隐私保护，以下哪项做法是正确的？（ ）", options: ["客户手机号可以随意分享", "客户信息只能在工作中使用，不得外泄", "客户地址可以公开", "客户身份证可以拍照发朋友圈"], answer: "B", score: 2, explanation: "保护客户隐私是法律要求。" },
    { type: 1, question: "关于维修质保期，服务顾问正确的解释是（ ）。", options: ["所有项目质保期都是3个月", "根据维修项目和厂家规定而定，一般零件3个月或5000公里", "质保期越长越好", "质保期没有任何意义"], answer: "B", score: 2, explanation: "质保期要依据具体情况。" },
    { type: 1, question: "客户要求更换原厂配件，但报价后嫌贵，服务顾问应（ ）。", options: ["直接更换副厂件", "解释原厂配件的质量和保修优势，尊重客户选择", "欺骗客户说这也是原厂件", "强推原厂件"], answer: "B", score: 2, explanation: "诚实告知，尊重客户选择。" },
    { type: 1, question: "服务顾问在与客户沟通时，以下哪种行为是合适的？（ ）", options: ["接听电话时长时间让客户等待", "专心倾听，不打断客户", "边玩手机边听客户说", "心不在焉地听"], answer: "B", score: 2, explanation: "专心倾听是沟通的基础。" },
    { type: 1, question: "客户询问维修进度，服务顾问应该（ ）。", options: ["敷衍了事", "及时查看，准确告知", "直接说不知道", "拖延不回复"], answer: "B", score: 2, explanation: "及时准确回应客户询问。" },
    { type: 1, question: "关于车辆保养周期，服务顾问应依据什么来告知客户？（ ）", options: ["随便说一个", "根据厂家保养手册和实际情况", "看客户心情", "按照别人的车"], answer: "B", score: 2, explanation: "依据厂家标准和实际车况。" },
    { type: 1, question: "服务顾问在记录客户需求时，应该（ ）。", options: ["只记重点", "详细完整记录", "只记大概", "不记录"], answer: "B", score: 2, explanation: "详细记录避免遗漏和纠纷。" },
    { type: 1, question: "客户带小孩来维修店，服务顾问应（ ）。", options: ["禁止小孩进入", "安排休息区域，注意安全", "忽视小孩", "责怪客户"], answer: "B", score: 2, explanation: "人性化管理，确保安全。" },
    { type: 1, question: "关于维修报价，服务顾问应该做到（ ）。", options: ["报低价吸引客户", "透明清晰，逐项说明", "模糊报价", "临时加价"], answer: "B", score: 2, explanation: "透明报价是诚信经营的基础。" },

    // 多选题（5题，每题4分，共20分）
    { type: 2, question: "服务顾问在进行环车检查（接车预检）时，必须包含的项目有（ ）。", options: ["检查车辆外观有无划痕、凹陷", "检查内饰、仪表盘报警灯状态及里程数", "检查备胎及随车工具是否齐全", "检查油、液、电是否正常", "邀请客户共同确认并将结果记录在接车单上"], answer: "ABDE", score: 4, explanation: "C项备胎及工具检查通常在定期保养或特定维修时才做，日常快速接车可选项非必须。" },
    { type: 2, question: "服务顾问应具备的基本素质包括（ ）。", options: ["良好的沟通能力", "专业的汽车知识", "优秀的销售技巧", "良好的服务意识", "较强的学习能力"], answer: "ABCD", score: 4, explanation: "服务顾问需要综合素质。" },
    { type: 2, question: "以下哪些属于客户投诉的主要原因？（ ）", options: ["维修质量不佳", "服务态度不好", "价格不透明", "等待时间过长", "沟通不畅"], answer: "ABCDE", score: 4, explanation: "这些都是常见的投诉原因。" },
    { type: 2, question: "服务顾问在接待事故车时需要注意（ ）。", options: ["查看保单信息", "协助客户报案", "拍照留存证据", "告知理赔流程", "未经定损不得拆车"], answer: "ABCE", score: 4, explanation: "事故车接待需要专业处理。" },
    { type: 2, question: "服务顾问在回访客户时应该询问的内容包括（ ）。", options: ["车辆使用是否正常", "对维修服务是否满意", "下次保养时间", "有无其他需求", "客户家庭情况"], answer: "ABCD", score: 4, explanation: "回访应聚焦服务质量和车辆情况。" },

    // 判断题（15题，每题2分，共30分）
    { type: 3, question: "只要客户口头同意，就可以立即进行增项维修，不需要补签字。", options: ["对", "错"], answer: "错", score: 2, explanation: "必须书面签字确认" },
    { type: 3, question: "服务顾问可以随意查看客户的个人信息。", options: ["对", "错"], answer: "错", score: 2, explanation: "需要保护客户隐私" },
    { type: 3, question: "客户投诉时，服务顾问应该耐心倾听，积极处理。", options: ["对", "错"], answer: "对", score: 2, explanation: "正确处理投诉" },
    { type: 3, question: "维修价格可以临时增加，不需要告知客户。", options: ["对", "错"], answer: "错", score: 2, explanation: "价格必须透明" },
    { type: 3, question: "服务顾问在交车时应该向客户介绍维修项目和注意事项。", options: ["对", "错"], answer: "对", score: 2, explanation: "交车说明很重要" },
    { type: 3, question: "环车检查时，发现车身划痕不需要告诉客户。", options: ["对", "错"], answer: "错", score: 2, explanation: "必须告知客户" },
    { type: 3, question: "服务顾问可以代替客户做所有维修决定。", options: ["对", "错"], answer: "错", score: 2, explanation: "尊重客户选择权" },
    { type: 3, question: "客户到店后，服务顾问应该主动迎接并自我介绍。", options: ["对", "错"], answer: "对", score: 2, explanation: "主动迎接是基本礼仪" },
    { type: 3, question: "维修完成后，不需要清洗车辆。", options: ["对", "错"], answer: "错", score: 2, explanation: "清洗车辆是服务的一部分" },
    { type: 3, question: "服务顾问应该记住常来客户的姓名和车辆信息。", options: ["对", "错"], answer: "对", score: 2, explanation: "记住客户信息提升服务体验" },
    { type: 3, question: "预约可以提高工作效率和客户满意度。", options: ["对", "错"], answer: "对", score: 2, explanation: "预约的重要性" },
    { type: 3, question: "客户付款时，服务顾问应该明确告知费用明细。", options: ["对", "错"], answer: "对", score: 2, explanation: "费用透明" },
    { type: 3, question: "遇到无法解决的技术问题时，服务顾问应该请教技术人员。", options: ["对", "错"], answer: "对", score: 2, explanation: "不懂就问，提升专业" },
    { type: 3, question: "维修完成后，旧配件可以扔掉，不需要给客户看。", options: ["对", "错"], answer: "错", score: 2, explanation: "客户有权查看旧配件" },
    { type: 3, question: "服务顾问在接电话时应该礼貌用语。", options: ["对", "错"], answer: "对", score: 2, explanation: "电话礼仪" },

    // 填空题（5题，每题2分，共10分）
    { type: 4, question: "标准化的维修接待流程包括：预约→迎接→____→制单确认→维修跟进→质检→____→跟踪回访。", blanks: ["环车检查", "交车结算"], answer: ["环车检查", "交车结算"], score: 2, explanation: "完整的接待流程" },
    { type: 4, question: "服务顾问在环车检查时需要检查车辆外观、内饰、____、油水电等项目。", blanks: ["仪表盘"], answer: ["仪表盘"], score: 2, explanation: "环车检查的重要项目" },
    { type: 4, question: "三件套是指方向盘套、____和脚垫。", blanks: ["座套"], answer: ["座套"], score: 2, explanation: "防护三件套" },
    { type: 4, question: "服务顾问在问诊时主要使用望、闻、问、____四种方法。", blanks: ["切"], answer: ["切"], score: 2, explanation: "问诊四法" },
    { type: 4, question: "客户投诉处理原则是耐心倾听、____、及时解决。", blanks: ["记录"], answer: ["记录"], score: 2, explanation: "投诉处理原则" },
  ],

  // ========== 汽修工 ==========
  mechanic: [
    // 单选题（20题，每题2分，共40分）
    { type: 1, question: "家用轿车轮胎的标准胎压范围通常为（ ）。", options: ["1.0-1.5bar", "2.2-2.5bar", "3.0-3.5bar", "4.0-4.5bar"], answer: "B", score: 2, explanation: "标准胎压范围" },
    { type: 1, question: "发动机气缸盖螺栓的紧固顺序一般为（ ）。", options: ["从两端向中间交叉拧紧", "从中间向两端交叉拧紧", "任意顺序", "顺时针依次拧紧"], answer: "B", score: 2, explanation: "防止缸盖变形" },
    { type: 1, question: "汽车制动液一般建议更换周期为（ ）。", options: ["6个月", "1年或2万公里", "5年或10万公里", "终身不换"], answer: "B", score: 2, explanation: "制动液具有吸湿性" },
    { type: 1, question: "发动机机油更换周期一般建议为（ ）。", options: ["3个月或5000公里", "6个月或1万公里", "2年或5万公里", "终身不换"], answer: "A", score: 2, explanation: "定期更换保持润滑" },
    { type: 1, question: "关于发动机冷却系统，节温器的作用是（ ）。", options: ["降低水温", "控制冷却液循环路径，调节水温", "增加水温", "储存冷却液"], answer: "B", score: 2, explanation: "节温器调节冷却温度" },
    { type: 1, question: "火花塞的间隙过大，会导致（ ）。", options: ["点火困难，动力下降", "点火过早", "火花过弱", "油耗降低"], answer: "A", score: 2, explanation: "间隙影响点火性能" },
    { type: 1, question: "四轮定位中，外倾角主要影响（ ）。", options: ["方向盘回正", "轮胎偏磨和直线行驶稳定性", "刹车效果", "转向轻便性"], answer: "B", score: 2, explanation: "外倾角影响轮胎磨损" },
    { type: 1, question: "发动机曲轴主轴颈与主轴承的配合间隙过小，会导致（ ）。", options: ["机油压力降低", "抱轴，发动机损坏", "异响", "油耗增加"], answer: "B", score: 2, explanation: "间隙过小会导致润滑不良" },
    { type: 1, question: "关于汽车空调系统，制冷剂（冷媒）过少会导致（ ）。", options: ["制冷效果差，压缩机频繁启停", "制冷效果太好", "系统压力过高", "制热效果差"], answer: "A", score: 2, explanation: "制冷剂不足影响制冷" },
    { type: 1, question: "发动机排气管冒蓝烟，通常是因为（ ）。", options: ["混合气过稀", "烧机油（活塞环或气门油封磨损）", "混合气过浓", "点火正时过早"], answer: "B", score: 2, explanation: "蓝烟表明烧机油" },
    { type: 1, question: "汽车制动跑偏的主要原因是（ ）。", options: ["轮胎气压过低", "左右制动力不均", "悬挂太软", "车速过快"], answer: "B", score: 2, explanation: "制动力不均导致跑偏" },
    { type: 1, question: "发动机点火提前角过大，会导致（ ）。", options: ["发动机过热，爆震", "动力下降", "油耗增加", "怠速不稳"], answer: "A", score: 2, explanation: "点火过早导致爆震" },
    { type: 1, question: "关于变速箱油，自动变速箱油（ATF）可以（ ）。", options: ["手动变速箱也可用", "只能用于自动变速箱，不可混用", "任何车都通用", "用水代替"], answer: "B", score: 2, explanation: "不同变速箱油不能混用" },
    { type: 1, question: "汽车发电机的作用是（ ）。", options: ["启动发动机", "向全车用电设备供电并向蓄电池充电", "调节电压", "储存电能"], answer: "B", score: 2, explanation: "发电机发电和充电" },
    { type: 1, question: "发动机活塞环的主要作用不包括（ ）。", options: ["密封气缸", "刮油", "布油", "散热"], answer: "D", score: 2, explanation: "活塞环主要起密封和布油作用" },
    { type: 1, question: "关于汽车转向系统，助力泵油过少会导致（ ）。", options: ["转向助力失效或沉重", "方向盘自动回正", "转向过轻", "异响"], answer: "A", score: 2, explanation: "助力油不足影响转向" },
    { type: 1, question: "发动机气缸磨损最严重的部位通常在（ ）。", options: ["气缸顶部", "气缸中部（活塞上止点第一道环附近）", "气缸底部", "所有部位均匀磨损"], answer: "B", score: 2, explanation: "上止点处磨损最大" },
    { type: 1, question: "汽车电瓶（蓄电池）的使用寿命一般为（ ）。", options: ["1-2年", "3-5年", "10年以上", "终身"], answer: "B", score: 2, explanation: "电瓶正常使用寿命" },
    { type: 1, question: "发动机正时皮带或链条断裂，会导致（ ）。", options: ["发动机无法启动，气门损坏", "发动机过热", "动力下降", "油耗增加"], answer: "A", score: 2, explanation: "正时断裂会导致气门损坏" },
    { type: 1, question: "汽车ABS防抱死系统的核心作用是（ ）。", options: ["缩短制动距离", "防止紧急制动时车轮抱死，保持转向控制", "降低轮胎磨损", "增加刹车噪音"], answer: "B", score: 2, explanation: "ABS保持转向能力" },

    // 多选题（5题，每题4分，共20分）
    { type: 2, question: "车轮螺母的正确紧固方法包括（ ）。", options: ["使用对角线顺序分次拧紧", "一次性拧紧到规定力矩", "车辆落地后再进行最终紧固", "使用扭力扳手确保力矩准确", "更换轮胎后行驶一段距离应复检扭矩"], answer: "ACDE", score: 4, explanation: "正确的轮胎紧固方法" },
    { type: 2, question: "发动机润滑不良的常见原因有（ ）。", options: ["机油不足", "机油泵故障", "机油变质", "机油粘度不当", "油道堵塞"], answer: "ABCDE", score: 4, explanation: "多种原因导致润滑不良" },
    { type: 2, question: "汽车制动系统维护保养的项目包括（ ）。", options: ["检查刹车片厚度", "检查刹车盘磨损", "更换制动液", "检查刹车管路", "测试刹车性能"], answer: "ABCDE", score: 4, explanation: "制动系统全面保养" },
    { type: 2, question: "发动机常见故障现象包括（ ）。", options: ["无法启动", "怠速不稳", "动力不足", "油耗过高", "异响"], answer: "ABCDE", score: 4, explanation: "常见发动机故障" },
    { type: 2, question: "汽车空调系统制冷不良的原因有（ ）。", options: ["制冷剂不足或泄漏", "冷凝器散热不良", "压缩机故障", "膨胀阀堵塞", "鼓风机故障"], answer: "ABCDE", score: 4, explanation: "空调制冷问题多方面原因" },

    // 判断题（15题，每题2分，共30分）
    { type: 3, question: "所有车型的车轮螺栓拧紧力矩都是统一的，可以使用同一扭矩值。", options: ["对", "错"], answer: "错", score: 2, explanation: "不同车型扭矩不同" },
    { type: 3, question: "发动机机油更换时，必须同时更换机油滤清器。", options: ["对", "错"], answer: "对", score: 2, explanation: "机油滤清器应同时更换" },
    { type: 3, question: "汽车轮胎可以任意调换位置，不需要注意花纹方向。", options: ["对", "错"], answer: "错", score: 2, explanation: "有方向轮胎不能随意调换" },
    { type: 3, question: "发动机正时皮带或链条断裂会导致严重损坏。", options: ["对", "错"], answer: "对", score: 2, explanation: "正时断裂会导致气门损坏" },
    { type: 3, question: "制动液具有吸湿性，需要定期更换。", options: ["对", "错"], answer: "对", score: 2, explanation: "制动液吸湿会影响性能" },
    { type: 3, question: "发动机水温过高时，应该立即熄火。", options: ["对", "错"], answer: "错", score: 2, explanation: "应怠速运转降温" },
    { type: 3, question: "轮胎气压过高或过低都不利于安全。", options: ["对", "错"], answer: "对", score: 2, explanation: "轮胎气压要适中" },
    { type: 3, question: "空调系统制冷剂可以随意添加，不需要专业设备。", options: ["对", "错"], answer: "错", score: 2, explanation: "需要专业设备" },
    { type: 3, question: "发动机积碳会降低燃油经济性。", options: ["对", "错"], answer: "对", score: 2, explanation: "积碳增加油耗" },
    { type: 3, question: "刹车片磨损到极限时会有报警声音。", options: ["对", "错"], answer: "对", score: 2, explanation: "刹车片有报警装置" },
    { type: 3, question: "四轮定位可以解决方向盘不正的问题。", options: ["对", "错"], answer: "对", score: 2, explanation: "定位可调整方向盘" },
    { type: 3, question: "汽车发电机不工作会导致电瓶亏电。", options: ["对", "错"], answer: "对", score: 2, explanation: "发电机给电瓶充电" },
    { type: 3, question: "发动机异响可以忽视，不影响使用。", options: ["对", "错"], answer: "错", score: 2, explanation: "异响需要检查" },
    { type: 3, question: "减震器漏油需要更换。", options: ["对", "错"], answer: "对", score: 2, explanation: "漏油减震器失效" },
    { type: 3, question: "电瓶电量不足时可以用推车启动手动挡车辆。", options: ["对", "错"], answer: "对", score: 2, explanation: "推车启动可行" },

    // 填空题（5题，每题2分，共10分）
    { type: 4, question: "发动机冷却系统包括____、____、____等主要部件。", blanks: ["散热器", "水泵", "节温器"], answer: ["散热器", "水泵", "节温器"], score: 2, explanation: "冷却系统组成" },
    { type: 4, question: "四轮定位主要包括____、____、____等参数。", blanks: ["前束角", "外倾角", "主销后倾角"], answer: ["前束角", "外倾角", "主销后倾角"], score: 2, explanation: "四轮定位主要参数" },
    { type: 4, question: "发动机润滑系统的主要作用是润滑、冷却、____和密封。", blanks: ["清洁"], answer: ["清洁"], score: 2, explanation: "润滑系统作用" },
    { type: 4, question: "汽车制动系统由制动器、____、____和控制装置组成。", blanks: ["传动装置", "制动主缸"], answer: ["传动装置", "制动主缸"], score: 2, explanation: "制动系统组成" },
    { type: 4, question: "汽车底盘包括传动系、行驶系、____和转向系。", blanks: ["制动系"], answer: ["制动系"], score: 2, explanation: "底盘组成" },
  ],

  // ========== 库房管理员 ==========
  storekeeper: [
    // 单选题（20题，每题2分，共40分）
    { type: 1, question: "配件入库时，发现实物与送货单不符，正确的做法是（ ）。", options: ["直接入库，下次再调整", "拒收并在单据上注明实际数量，及时联系采购处理", "先入库再查找原因", "私自扣下多余配件"], answer: "B", score: 2, explanation: "入库验收规范" },
    { type: 1, question: "库房管理的核心目标是（ ）。", options: ["配件越多越好", "保证账、卡、物三相符，快速准确供应", "降低成本至上", "任何配件都能快速找到"], answer: "B", score: 2, explanation: "库房管理的核心" },
    { type: 1, question: "易损件（如刹车片、滤清器等）的库存策略应该是（ ）。", options: ["零库存", "保持适量安全库存，避免缺货", "大量囤积", "按需采购不备货"], answer: "B", score: 2, explanation: "易损件需有安全库存" },
    { type: 1, question: "关于配件先进先出（FIFO）原则，以下说法正确的是（ ）。", options: ["所有配件都适用", "主要适用于有保质期或易老化的配件", "只适用于易损件", "不需要遵守"], answer: "B", score: 2, explanation: "FIFO适用于有保质期的配件" },
    { type: 1, question: "配件盘点的主要目的是（ ）。", options: ["清点数量", "核对账实是否相符，发现问题并及时处理", "清理仓库", "整理货架"], answer: "B", score: 2, explanation: "盘点的真正目的" },
    { type: 1, question: "呆滞配件（长期不动销的配件）的处理方式不包括（ ）。", options: ["分析原因，优化采购", "打折促销", "长期占用货架", "申请报废"], answer: "C", score: 2, explanation: "呆滞配件应积极处理" },
    { type: 1, question: "配件出库时，必须做到（ ）。", options: ["先出库后记账", "凭单据出库，先进先出，及时记账", "谁要就给谁", "只记数量"], answer: "B", score: 2, explanation: "出库规范" },
    { type: 1, question: "危险品配件（如蓄电池、油漆等）的存放要求是（ ）。", options: ["与其他配件混放", "单独存放，通风良好，远离火源", "随便放置", "放在角落"], answer: "B", score: 2, explanation: "危险品存放规范" },
    { type: 1, question: "配件编码（OE码）的作用是（ ）。", options: ["提高价格", "唯一标识配件型号规格", "便于管理", "美观好看"], answer: "B", score: 2, explanation: "配件编码的意义" },
    { type: 1, question: "库存周转率的计算公式是（ ）。", options: ["库存数量/销售数量", "出库金额/平均库存金额", "采购金额/库存金额", "销售数量/采购数量"], answer: "B", score: 2, explanation: "周转率计算" },
    { type: 1, question: "配件质量问题退货时，应保留的证据不包括（ ）。", options: ["质量问题照片", "购买记录", "配件实物", "采购人员个人信息"], answer: "D", score: 2, explanation: "退货需保留有效证据" },
    { type: 1, question: "库房5S管理的核心要素包括（ ）。", options: ["整理、整顿、清扫、清洁、素养", "进货、出货、盘点、采购、退货", "数量、质量、价格、保质期、供应商", "货架、标签、单据、电脑、软件"], answer: "A", score: 2, explanation: "5S管理内容" },
    { type: 1, question: "配件库存预警系统的作用是（ ）。", options: ["增加库存", "提示库存不足或过多，优化采购", "减少工作量", "美观"], answer: "B", score: 2, explanation: "预警系统的作用" },
    { type: 1, question: "关于配件安全库存，以下说法正确的是（ ）。", options: ["安全库存越高越好", "根据销售规律和供货周期科学设定", "不需要安全库存", "安全库存等于平均销量"], answer: "B", score: 2, explanation: "安全库存应科学设定" },
    { type: 1, question: "配件存放时，标签应包含的信息不包括（ ）。", options: ["配件名称", "配件编码", "采购人员姓名", "规格型号"], answer: "C", score: 2, explanation: "标签应包含配件信息" },
    { type: 1, question: "库房温湿度控制的主要目的是（ ）。", options: ["节能", "防止配件老化、锈蚀、变质", "增加工作舒适度", "美观"], answer: "B", score: 2, explanation: "温湿度控制的重要性" },
    { type: 1, question: "配件采购单审核时，应重点关注（ ）。", options: ["采购人员的性别", "配件需求是否合理，价格是否合适，供应商是否可靠", "采购单的格式", "采购时间"], answer: "B", score: 2, explanation: "采购审核要点" },
    { type: 1, question: "关于配件保质期，以下做法正确的是（ ）。", options: ["保质期过了也能用", "严格执行先进先出，过期配件及时报废处理", "保质期只是参考", "不关注保质期"], answer: "B", score: 2, explanation: "保质期管理规范" },
    { type: 1, question: "配件退货流程不包括（ ）。", options: ["确认退货原因", "填写退货单", "联系供应商", "直接扔掉"], answer: "D", score: 2, explanation: "退货必须规范流程" },
    { type: 1, question: "库房布局设计时应考虑（ ）。", options: ["如何最大化利用空间", "如何提高工作效率，便于存取", "如何美观", "如何降低成本"], answer: "B", score: 2, explanation: "布局设计的原则" },

    // 多选题（5题，每题4分，共20分）
    { type: 2, question: "配件入库验收的主要内容有（ ）。", options: ["核对送货单与实物是否一致", "检查配件外观有无破损、变形", "核对配件编码和规格是否正确", "检查随附的合格证、说明书等", "确认保质期是否合格"], answer: "ABCDE", score: 4, explanation: "入库验收全面检查" },
    { type: 2, question: "库房管理的重点工作包括（ ）。", options: ["入库验收", "库存保管", "出库配送", "定期盘点", "账务管理"], answer: "ABCDE", score: 4, explanation: "库房管理全面工作" },
    { type: 2, question: "导致库存差异的常见原因有（ ）。", options: ["出入库记录错误", "盗窃或丢失", "验收不准确", "盘点错误", "自然损耗"], answer: "ABCDE", score: 4, explanation: "库存差异多方面原因" },
    { type: 2, question: "提高库存周转率的措施包括（ ）。", options: ["优化采购计划", "控制呆滞库存", "促进销售", "及时处理滞销品", "提高预测准确性"], answer: "ABCDE", score: 4, explanation: "提高周转率多管齐下" },
    { type: 2, question: "库房安全管理的要点包括（ ）。", options: ["消防安全", "防盗防损", "人员安全", "配件安全", "数据安全"], answer: "ABCDE", score: 4, explanation: "库房安全全面管理" },

    // 判断题（15题，每题2分，共30分）
    { type: 3, question: "库房管理只需保证配件数量准确，不需要关注配件质量。", options: ["对", "错"], answer: "错", score: 2, explanation: "质量和数量同样重要" },
    { type: 3, question: "配件可以随意堆放，不需要分类管理。", options: ["对", "错"], answer: "错", score: 2, explanation: "需要分类规范存放" },
    { type: 3, question: "盘点只是为了核对数量，与质量无关。", options: ["对", "错"], answer: "错", score: 2, explanation: "盘点包括数量和质量" },
    { type: 3, question: "呆滞配件长期占用资金和空间，应该积极处理。", options: ["对", "错"], answer: "对", score: 2, explanation: "呆滞配件应及时处理" },
    { type: 3, question: "库房管理只需要一个人就能完成所有工作。", options: ["对", "错"], answer: "错", score: 2, explanation: "需要团队协作" },
    { type: 3, question: "危险品可以和普通配件混放。", options: ["对", "错"], answer: "错", score: 2, explanation: "危险品需单独存放" },
    { type: 3, question: "配件入库后可以随时修改账目。", options: ["对", "错"], answer: "错", score: 2, explanation: "账目修改需审批" },
    { type: 3, question: "先进先出原则适用于所有配件。", options: ["对", "错"], answer: "错", score: 2, explanation: "主要适用于有保质期的配件" },
    { type: 3, question: "库存周转率越高越好。", options: ["对", "错"], answer: "对", score: 2, explanation: "高周转率表示库存管理良好" },
    { type: 3, question: "库房消防安全非常重要。", options: ["对", "错"], answer: "对", score: 2, explanation: "消防是安全第一" },
    { type: 3, question: "配件出库时不需要检查配件质量。", options: ["对", "错"], answer: "错", score: 2, explanation: "出库也应检查" },
    { type: 3, question: "呆滞库存不影响库房运营。", options: ["对", "错"], answer: "错", score: 2, explanation: "呆滞库存占用资金" },
    { type: 3, question: "盘点可以一年做一次。", options: ["对", "错"], answer: "对", score: 2, explanation: "年度盘点是基本要求" },
    { type: 3, question: "配件采购只需要看价格。", options: ["对", "错"], answer: "错", score: 2, explanation: "采购要综合考虑" },
    { type: 3, question: "库房温湿度不需要控制。", options: ["对", "错"], answer: "错", score: 2, explanation: "温湿度影响配件质量" },

    // 填空题（5题，每题2分，共10分）
    { type: 4, question: "库房管理中，保证____、____、____三相符是最基本的要求。", blanks: ["账", "卡", "物"], answer: ["账", "卡", "物"], score: 2, explanation: "库房管理基础要求" },
    { type: 4, question: "配件入库验收流程包括：核对单据→检查外包装→____→检查外观→检查证件→____。", blanks: ["开箱核对实物", "签字入库"], answer: ["开箱核对实物", "签字入库"], score: 2, explanation: "入库验收流程" },
    { type: 4, question: "库存控制的主要目标是降低库存成本，同时____配件供应。", blanks: ["保证"], answer: ["保证"], score: 2, explanation: "库存控制目标" },
    { type: 4, question: "5S管理的五个要素是整理、整顿、清扫、____、素养。", blanks: ["清洁"], answer: ["清洁"], score: 2, explanation: "5S要素" },
    { type: 4, question: "先进先出原则主要适用于____配件的管理。", blanks: ["有保质期"], answer: ["有保质期"], score: 2, explanation: "FIFO适用范围" },
  ],
};

export const roleNames: { [key: string]: string } = {
  reception: "前台接待顾问",
  mechanic: "汽修工",
  storekeeper: "库房管理员",
};
