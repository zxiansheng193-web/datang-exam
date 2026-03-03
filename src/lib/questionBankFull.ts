// 完整题库（包含主观题）
// 题型：1-单选，2-多选，3-判断，4-填空，5-简答，6-情景，7-案例
export interface Question {
  type: number;
  question: string;
  options?: string[];
  answer: string | string[];
  score: number;
  explanation?: string;
  blanks?: string[];
}

export interface QuestionBank {
  [key: string]: Question[];
}

export const questionBankFull: QuestionBank = {
  // ========== 前台接待顾问 ==========
  reception: [
    // 单选题（35题，每题2分，共70分）
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
    { type: 1, question: "客户要求查看更换下来的旧件，服务顾问应（ ）。", options: ["拒绝客户", "主动展示并解释", "说已扔掉", "敷衍客户"], answer: "B", score: 2, explanation: "让客户了解更换是服务的一部分。" },
    { type: 1, question: "关于客户满意度调查，服务顾问的态度应该是（ ）。", options: ["无所谓", "积极重视，认真对待", "应付了事", "反感"], answer: "B", score: 2, explanation: "满意度调查是改进服务的依据。" },
    { type: 1, question: "服务顾问在交车时，应该向客户说明（ ）。", options: ["什么也不说", "维修项目和注意事项", "催促客户赶紧走", "只说收多少钱"], answer: "B", score: 2, explanation: "交车说明确保客户了解维修情况。" },
    { type: 1, question: "客户对维修时间有特殊要求，服务顾问应（ ）。", options: ["一律答应", "根据实际能力合理安排，无法满足时提前说明", "直接拒绝", "拖延时间"], answer: "B", score: 2, explanation: "合理承诺，管理客户期望。" },
    { type: 1, question: "关于维修检测设备，服务顾问应如何向客户介绍？（ ）", options: ["说设备很贵", "说明设备的功能和检测的价值", "让客户自己去猜", "不提及"], answer: "B", score: 2, explanation: "专业解释设备价值，增强客户信任。" },
    { type: 1, question: "客户提出质疑：你们这里为什么比4S店便宜？服务顾问应如何回应？（ ）", options: ["因为我们技术不行", "我们有性价比优势，技术同样专业", "4S店都是骗人的", "不知道"], answer: "B", score: 2, explanation: "突出性价比，不贬低对手。" },
    { type: 1, question: "关于车辆年检服务，服务顾问的职责是（ ）。", options: ["什么也不做", "告知客户年检流程和要求", "自己去检", "随便说"], answer: "B", score: 2, explanation: "服务顾问应提供相关信息和建议。" },
    { type: 1, question: "服务顾问在工作时间应该（ ）。", options: ["随意离开", "坚守岗位，专注服务", "玩手机", "聊天"], answer: "B", score: 2, explanation: "工作时间内应专注服务。" },
    { type: 1, question: "客户对服务顾问的服务表示满意，应该（ ）。", options: ["无视", "感谢客户，欢迎下次光临", "骄傲自满", "置之不理"], answer: "B", score: 2, explanation: "感谢客户是基本的礼仪。" },
    { type: 1, question: "关于紧急救援服务，服务顾问需要确认的信息不包括（ ）。", options: ["车辆位置", "故障情况", "客户职业", "联系方式"], answer: "C", score: 2, explanation: "客户职业不是救援必需信息。" },
    { type: 1, question: "服务顾问在工作遇到困难时，应该（ ）。", options: ["放弃", "寻求帮助，学习提升", "抱怨", "逃避"], answer: "B", score: 2, explanation: "积极寻求帮助和学习。" },
    { type: 1, question: "老客户到店，服务顾问的正确做法是（ ）。", options: ["和新客户一样对待", "主动问候，称呼客户姓名，提及上次维修情况", "假装不认识", "简单打招呼"], answer: "B", score: 2, explanation: "老客户关系维护很重要。" },
    { type: 1, question: "客户询问是否可以赊账（先修后付），服务顾问应（ ）。", options: ["直接答应", "告知公司规定，建议支付定金", "嘲笑客户", "直接拒绝不解释"], answer: "B", score: 2, explanation: "按规定办事，但要礼貌。" },
    { type: 1, question: "关于车辆检测报告，服务顾问应该（ ）。", options: ["自己留着", "向客户解释检测结果和建议", "给客户不看", "随便给谁看"], answer: "B", score: 2, explanation: "检测结果需要向客户解释。" },
    { type: 1, question: "客户对配件来源有疑问，服务顾问应（ ）。", options: ["回避问题", "说明配件渠道，保证质量", "说秘密", "不理会"], answer: "B", score: 2, explanation: "透明化配件信息。" },
    { type: 1, question: "服务顾问下班前最重要的工作是（ ）。", options: ["赶紧回家", "整理客户档案，确认未完成工单，做好交接", "玩手机", "聊天"], answer: "B", score: 2, explanation: "下班前整理工作是专业要求。" },

    // 多选题（6题，每题4分，共24分）
    { type: 2, question: "服务顾问在进行环车检查（接车预检）时，必须包含的项目有（ ）。", options: ["检查车辆外观有无划痕、凹陷", "检查内饰、仪表盘报警灯状态及里程数", "检查备胎及随车工具是否齐全", "检查油、液、电是否正常", "邀请客户共同确认并将结果记录在接车单上"], answer: "ABDE", score: 4, explanation: "C项备胎及工具检查通常在定期保养或特定维修时才做，日常快速接车可选项非必须。" },
    { type: 2, question: "服务顾问应具备的基本素质包括（ ）。", options: ["良好的沟通能力", "专业的汽车知识", "优秀的销售技巧", "良好的服务意识", "较强的学习能力"], answer: "ABCD", score: 4, explanation: "服务顾问需要综合素质。" },
    { type: 2, question: "以下哪些属于客户投诉的主要原因？（ ）", options: ["维修质量不佳", "服务态度不好", "价格不透明", "等待时间过长", "沟通不畅"], answer: "ABCDE", score: 4, explanation: "这些都是常见的投诉原因。" },
    { type: 2, question: "服务顾问在接待事故车时需要注意（ ）。", options: ["查看保单信息", "协助客户报案", "拍照留存证据", "告知理赔流程", "未经定损不得拆车"], answer: "ABCE", score: 4, explanation: "事故车接待需要专业处理。" },
    { type: 2, question: "服务顾问在回访客户时应该询问的内容包括（ ）。", options: ["车辆使用是否正常", "对维修服务是否满意", "下次保养时间", "有无其他需求", "客户家庭情况"], answer: "ABCD", score: 4, explanation: "回访应聚焦服务质量和车辆情况。" },
    { type: 2, question: "建立客户档案时需要记录的信息包括（ ）。", options: ["客户基本信息（姓名、电话、地址）", "车辆信息（车型、车架号、车牌）", "维修历史记录", "客户偏好和备注", "客户身份证号码和银行账户"], answer: "ABCD", score: 4, explanation: "客户档案应记录必要信息，但不涉及敏感隐私。" },

    // 判断题（5题，每题2分，共10分）
    { type: 3, question: "只要客户口头同意，就可以立即进行增项维修，不需要补签字。", options: ["对", "错"], answer: "错", score: 2, explanation: "必须书面签字确认" },
    { type: 3, question: "服务顾问可以随意查看客户的个人信息。", options: ["对", "错"], answer: "错", score: 2, explanation: "需要保护客户隐私" },
    { type: 3, question: "客户投诉时，服务顾问应该耐心倾听，积极处理。", options: ["对", "错"], answer: "对", score: 2, explanation: "正确处理投诉" },
    { type: 3, question: "维修价格可以临时增加，不需要告知客户。", options: ["对", "错"], answer: "错", score: 2, explanation: "价格必须透明" },
    { type: 3, question: "服务顾问在交车时应该向客户介绍维修项目和注意事项。", options: ["对", "错"], answer: "对", score: 2, explanation: "交车说明很重要" },

    // 填空题（2题，每题2分，共4分）
    { type: 4, question: "标准化的维修接待流程包括：预约→迎接→____→制单确认→维修跟进→质检→____→跟踪回访。", blanks: ["环车检查", "交车结算"], answer: ["环车检查", "交车结算"], score: 2, explanation: "完整的接待流程" },
    { type: 4, question: "服务顾问在环车检查时需要检查车辆外观、内饰、____、油水电等项目。", blanks: ["仪表盘"], answer: ["仪表盘"], score: 2, explanation: "环车检查的重要项目" },

    // 简答题（2题，每题3分，共6分）
    { type: 5, question: "请简述当客户对维修费用有异议时，服务顾问应该如何妥善处理？", answer: "处理客户对维修费用的异议，服务顾问应：①耐心倾听客户的意见和顾虑；②详细解释费用构成的各项内容（工时、材料、检测等）；③说明维修工作的价值和专业性；④如有必要，提供详细的结算单和维修项目说明；⑤在保证质量的前提下，是否有可替代方案；⑥始终保持专业和礼貌的态度，避免与客户争执；⑦无法达成一致时，可以请上级主管协调。", score: 3, explanation: "" },
    { type: 5, question: "简述服务顾问在交车环节应该做哪些工作？", answer: "交车环节服务顾问应该：①确认维修项目全部完成；②清洗车辆；③准备好结算单、旧件等；④主动招呼客户；⑤展示维修成果，解释维修项目和更换配件；⑥陪同客户验车；⑦解释结算单，说明费用明细；⑧介绍保养注意事项；⑨提醒下次保养时间；⑩感谢客户，欢迎下次光临。", score: 3, explanation: "" },

    // 情景题（2题，每题6分，共12分）
    { type: 6, question: "情景题：一位客户早上9点将车送来维修，承诺下午3点取车。下午2:50客户准时到店，但维修师傅说配件还没到，需要再等2小时。客户非常生气，要求投诉。作为服务顾问，你应该如何处理这种情况？", answer: "处理步骤：①立即道歉，承认失误，安抚客户情绪；②了解具体情况，确认配件到达时间；③给出明确解决方案：如免费提供代步车、上门取车、赠送优惠券等；④如客户同意等待，提供舒适的休息环境和饮品；⑤安排专人跟进配件到货进度；⑥维修完成后，立即通知客户；⑦交付时再次道歉，表示感谢；⑧后续跟进客户满意度；⑨反思内部流程，避免类似情况再次发生。", score: 6, explanation: "" },
    { type: 6, question: "情景题：客户李先生的车维修完成，第二天打电话投诉说车辆在高速公路上突然熄火，非常危险，要求退钱。经检查发现是维修师傅未紧固某根线束导致的虚接。作为服务顾问，你应该如何处理这种严重投诉？", answer: "处理步骤：①立即安抚客户情绪，确保客户人身安全；②诚恳道歉，承认是我们的责任失误；③安排拖车或协助客户安全转移车辆；④免费维修，承担所有费用；⑤提供合理的补偿方案（代步车使用、保养券、现金补偿等）；⑥内部调查，对责任人进行培训或处理；⑦维修完成后进行多项检测，确保安全；⑧交车时陪同试驾，让客户放心；⑨后续定期回访，关注客户车辆状态；⑩完善维修质检流程，杜绝类似安全隐患。", score: 6, explanation: "" },
  ],

  // ========== 汽修工 ==========
  mechanic: [
    // 单选题（40题，每题2分，共80分）
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
    { type: 1, question: "关于发动机润滑系统，机油泵的作用是（ ）。", options: ["储存机油", "将机油输送到各摩擦表面", "过滤机油", "冷却机油"], answer: "B", score: 2, explanation: "机油泵输送润滑油" },
    { type: 1, question: "汽车悬挂系统中，减震器损坏会导致（ ）。", options: ["车身晃动，颠簸加剧", "方向盘发抖", "轮胎偏磨", "转向沉重"], answer: "A", score: 2, explanation: "减震器影响行驶平稳性" },
    { type: 1, question: "发动机供油系统中，喷油嘴堵塞会导致（ ）。", options: ["发动机功率下降，运转不稳", "油耗增加", "机油消耗增加", "散热不良"], answer: "A", score: 2, explanation: "喷油嘴堵塞影响供油" },
    { type: 1, question: "关于汽车电路，保险丝的作用是（ ）。", options: ["稳定电压", "过载保护，防止电路烧毁", "增强电流", "储存电能"], answer: "B", score: 2, explanation: "保险丝保护电路" },
    { type: 1, question: "发动机水温过高的主要原因不包括（ ）。", options: ["节温器故障", "冷却液不足", "散热器堵塞", "空调制冷"], answer: "D", score: 2, explanation: "空调与水温无关" },
    { type: 1, question: "汽车轮胎花纹深度小于多少毫米时应更换？（ ）", options: ["1.6mm", "5mm", "10mm", "20mm"], answer: "A", score: 2, explanation: "轮胎磨损极限" },
    { type: 1, question: "发动机配气相位中，气门重叠角是指（ ）。", options: ["进气门和排气门同时打开的角度", "进气门提前打开的角度", "排气门延迟关闭的角度", "气门持续开启的角度"], answer: "A", score: 2, explanation: "重叠角是进排气门同时开启" },
    { type: 1, question: "关于汽车离合器，分离轴承磨损会导致（ ）。", options: ["离合器打滑", "分离不彻底，异响", "换挡困难", "发动机异响"], answer: "B", score: 2, explanation: "分离轴承影响离合器分离" },
    { type: 1, question: "发动机积碳过多的危害不包括（ ）。", options: ["动力下降", "油耗增加", "排放超标", "轮胎磨损"], answer: "D", score: 2, explanation: "积碳不影响轮胎" },
    { type: 1, question: "汽车万向节（传动轴接头）损坏会导致（ ）。", options: ["行驶中有异响", "刹车失灵", "空调不制冷", "电瓶不充电"], answer: "A", score: 2, explanation: "万向节损坏产生异响" },
    { type: 1, question: "关于发动机冷却液，不同颜色的冷却液（ ）。", options: ["可以混用", "不能混用，必须使用相同类型", "混用效果更好", "颜色无关紧要"], answer: "B", score: 2, explanation: "不同冷却液化学成分不同" },
    { type: 1, question: "使用诊断仪读取故障码后，清除故障码的正确时机是（ ）。", options: ["读取后立即清除", "维修完成后确认故障已排除时清除", "交车前清除", "不清除"], answer: "B", score: 2, explanation: "故障排除后才能清除" },
    { type: 1, question: "发动机气缸压力过低的原因不包括（ ）。", options: ["活塞环磨损", "气门密封不严", "缸盖垫损坏", "进气不足"], answer: "D", score: 2, explanation: "进气不足不会直接导致气缸压力低" },
    { type: 1, question: "关于汽车轮胎，子午线轮胎的优点是（ ）。", options: ["耐磨性好，滚动阻力小", "价格便宜", "可修补次数多", "所有路况都适用"], answer: "A", score: 2, explanation: "子午线轮胎性能优势" },
    { type: 1, question: "发动机燃油压力过低会导致（ ）。", options: ["喷油不足，动力下降", "混合气过浓", "油耗降低", "排放达标"], answer: "A", score: 2, explanation: "燃油压力不足影响供油" },
    { type: 1, question: "关于汽车氧传感器，其作用是（ ）。", options: ["测量进气量", "检测排气中的氧含量，调节空燃比", "控制点火正时", "测量冷却液温度"], answer: "B", score: 2, explanation: "氧传感器调节空燃比" },
    { type: 1, question: "汽车空调系统制冷剂泄漏的常见检查方法是（ ）。", options: ["观察法", "电子检漏仪或荧光检漏", "触摸法", "听声音"], answer: "B", score: 2, explanation: "专业检漏方法" },
    { type: 1, question: "发动机节气门脏污会导致（ ）。", options: ["怠速不稳，加速无力", "油耗降低", "排放达标", "冷启动困难"], answer: "A", score: 2, explanation: "节气门脏污影响进气" },
    { type: 1, question: "关于汽车刹车系统，刹车盘磨损极限标准一般为（ ）。", options: ["不限", "磨损至极限标记或厚度小于2mm", "磨损一半就需要更换", "肉眼可见"], answer: "B", score: 2, explanation: "刹车盘磨损标准" },
    { type: 1, question: "发动机曲轴轴向间隙过大会导致（ ）。", options: ["前后窜动，异响", "机油压力高", "动力增强", "噪音降低"], answer: "A", score: 2, explanation: "轴向间隙大导致窜动" },
    { type: 1, question: "关于汽车电路检测，万用表测量电阻时（ ）。", options: ["可以带电测量", "必须断电测量", "随便怎么测", "不需要调零"], answer: "B", score: 2, explanation: "测电阻必须断电" },
    { type: 1, question: "发动机气门间隙过大，会导致（ ）。", options: ["气门开启不足，充气效率下降", "气门开启过度", "气门关闭不严", "正时错乱"], answer: "A", score: 2, explanation: "气门间隙影响进气效率" },

    // 多选题（6题，每题4分，共24分）
    { type: 2, question: "车轮螺母的正确紧固方法包括（ ）。", options: ["使用对角线顺序分次拧紧", "一次性拧紧到规定力矩", "车辆落地后再进行最终紧固", "使用扭力扳手确保力矩准确", "更换轮胎后行驶一段距离应复检扭矩"], answer: "ACDE", score: 4, explanation: "正确的轮胎紧固方法" },
    { type: 2, question: "发动机润滑不良的常见原因有（ ）。", options: ["机油不足", "机油泵故障", "机油变质", "机油粘度不当", "油道堵塞"], answer: "ABCDE", score: 4, explanation: "多种原因导致润滑不良" },
    { type: 2, question: "汽车制动系统维护保养的项目包括（ ）。", options: ["检查刹车片厚度", "检查刹车盘磨损", "更换制动液", "检查刹车管路", "测试刹车性能"], answer: "ABCDE", score: 4, explanation: "制动系统全面保养" },
    { type: 2, question: "发动机常见故障现象包括（ ）。", options: ["无法启动", "怠速不稳", "动力不足", "油耗过高", "异响"], answer: "ABCDE", score: 4, explanation: "常见发动机故障" },
    { type: 2, question: "汽车空调系统制冷不良的原因有（ ）。", options: ["制冷剂不足或泄漏", "冷凝器散热不良", "压缩机故障", "膨胀阀堵塞", "鼓风机故障"], answer: "ABCDE", score: 4, explanation: "空调制冷问题多方面原因" },
    { type: 2, question: "使用诊断仪进行故障诊断时，应该（ ）。", options: ["先读取故障码", "直接清除故障码", "分析数据流", "结合故障现象分析", "清除故障码后再试车验证"], answer: "ACDE", score: 4, explanation: "正确的诊断流程" },

    // 判断题（5题，每题2分，共10分）
    { type: 3, question: "所有车型的车轮螺栓拧紧力矩都是统一的，可以使用同一扭矩值。", options: ["对", "错"], answer: "错", score: 2, explanation: "不同车型扭矩不同" },
    { type: 3, question: "发动机机油更换时，必须同时更换机油滤清器。", options: ["对", "错"], answer: "对", score: 2, explanation: "机油滤清器应同时更换" },
    { type: 3, question: "汽车轮胎可以任意调换位置，不需要注意花纹方向。", options: ["对", "错"], answer: "错", score: 2, explanation: "有方向轮胎不能随意调换" },
    { type: 3, question: "发动机正时皮带或链条断裂会导致严重损坏。", options: ["对", "错"], answer: "对", score: 2, explanation: "正时断裂会导致气门损坏" },
    { type: 3, question: "制动液具有吸湿性，需要定期更换。", options: ["对", "错"], answer: "对", score: 2, explanation: "制动液吸湿会影响性能" },

    // 填空题（2题，每题2分，共4分）
    { type: 4, question: "发动机冷却系统包括____、____、____等主要部件。", blanks: ["散热器", "水泵", "节温器"], answer: ["散热器", "水泵", "节温器"], score: 2, explanation: "冷却系统组成" },
    { type: 4, question: "四轮定位主要包括____、____、____等参数。", blanks: ["前束角", "外倾角", "主销后倾角"], answer: ["前束角", "外倾角", "主销后倾角"], score: 2, explanation: "四轮定位主要参数" },

    // 简答题（2题，每题3分，共6分）
    { type: 5, question: "简述如何检查判断发动机正时皮带是否需要更换。", answer: "①查看厂家规定里程（一般6-10万公里）；②检查皮带表面有无裂纹、磨损、老化、缺齿；③检查皮带张力是否合适；④检查张紧轮转动是否平顺，有无异响；⑤如已达到规定里程或发现上述问题，必须更换。", score: 3, explanation: "" },
    { type: 5, question: "简述汽车制动系统故障排查的基本流程。", answer: "①询问客户故障现象和发生条件；②检查制动液液位和状态；③检查刹车片和刹车盘磨损情况；④检查制动管路是否泄漏；⑤检查刹车助力器工作是否正常；⑥检查ABS系统是否有故障码；⑦路试检查制动性能和有无异响；⑧根据检查结果确定故障原因并进行维修。", score: 3, explanation: "" },

    // 情景题（2题，每题6分，共12分）
    { type: 6, question: "情景题：一辆行驶了8万公里的轿车，客户反映发动机怠速不稳，仪表盘故障灯亮。你作为维修技师，请描述完整的诊断流程。", answer: "诊断流程：①询问客户故障发生的频率和条件；②使用诊断仪读取故障码和数据流；③重点检查怠速控制阀、节气门、喷油嘴、火花塞等；④检查进气系统是否漏气；⑤测量气缸压力；⑥检查燃油压力；⑦检查点火正时；⑧根据检查结果确定故障原因，如节气门脏污需清洗，火花塞老化需更换；⑨维修后清除故障码，路试验证；⑩向客户说明维修项目和保养建议。", score: 6, explanation: "" },
    { type: 6, question: "情景题：客户王女士的车在高速公路上行驶时突然失去动力，拖回店内检查。初步诊断是变速箱内部故障，需要拆解变速箱进行大修。你作为主修技师，需要制定详细的维修方案和流程。请描述你的工作步骤。", answer: "维修流程：①与客户详细沟通故障发生经过，告知可能原因和维修范围；②与前台配合，向客户说明维修费用、时间和质保期；③拆解前清洁变速箱外部；④按照技术手册规范拆解变速箱，逐一检查齿轮、离合器片、油泵、阀体等；⑤拍照记录损坏部位，更换受损配件；⑥清洗所有零件，检查轴承、油封等；⑦按照规范顺序组装，注意扭矩和标记；⑧加注专用变速箱油；⑨连接诊断仪，检查换挡逻辑和油压；⑩路试验证换挡平顺性和动力输出；⑪交车前进行最终检查；⑫向客户说明维修情况和保养注意事项。", score: 6, explanation: "" },
  ],

  // ========== 库房管理员 ==========
  storekeeper: [
    // 单选题（35题，每题2分，共70分）
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
    { type: 1, question: "配件代用（非原厂配件）使用时必须注意（ ）。", options: ["价格越低越好", "确保质量和规格符合要求，经批准后方可使用", "随便用", "谁推荐谁负责"], answer: "B", score: 2, explanation: "代用配件需严格审核" },
    { type: 1, question: "关于配件供应商管理，以下哪项不正确？（ ）", options: ["定期评估供应商表现", "建立合格供应商名录", "只和一家供应商合作", "保持多元化供应渠道"], answer: "C", score: 2, explanation: "供应商管理策略" },
    { type: 1, question: "配件盘点差异处理时，应（ ）。", options: ["直接修改账目", "查明原因，报批后调整", "忽略不计", "自行处理"], answer: "B", score: 2, explanation: "盘点差异处理规范" },
    { type: 1, question: "库房消防安全的主要措施不包括（ ）。", options: ["配置灭火器材", "定期检查电路", "禁止吸烟", "堆放所有杂物"], answer: "D", score: 2, explanation: "消防安全规范" },
    { type: 1, question: "配件调拨（不同仓库间调配）时应做到（ ）。", options: ["口头通知即可", "办理调拨单据，双方确认", "随便调", "不用记录"], answer: "B", score: 2, explanation: "调拨必须有单据" },
    { type: 1, question: "关于配件条码管理，以下说法正确的是（ ）。", options: ["条码无意义", "提高工作效率，减少差错", "增加成本", "可有可无"], answer: "B", score: 2, explanation: "条码管理的优势" },
    { type: 1, question: "配件到货验收时，应检查的项目不包括（ ）。", options: ["数量、规格、外观", "包装完整性", "送货人员的着装", "合格证等证件"], answer: "C", score: 2, explanation: "验收应关注配件本身" },
    { type: 1, question: "库房管理人员交接班时，应做到（ ）。", options: ["口头说一下", "填写交接记录，明确库存状态和注意事项", "不用交接", "谁在谁负责"], answer: "B", score: 2, explanation: "交接班规范" },
    { type: 1, question: "配件报废处理时，需要的手续不包括（ ）。", options: ["填写报废申请单", "注明报废原因和数量", "拍照留存", "不需要任何手续"], answer: "D", score: 2, explanation: "报废需规范流程" },
    { type: 1, question: "关于配件账务管理，正确的做法是（ ）。", options: ["只在月底记账", "及时、准确、完整记录所有出入库", "只记数量", "只记金额"], answer: "B", score: 2, explanation: "账务管理规范" },
    { type: 1, question: "配件需求预测主要依据（ ）。", options: ["个人喜好", "历史销售数据、季节因素、市场趋势", "供应商建议", "领导指示"], answer: "B", score: 2, explanation: "需求预测的科学依据" },
    { type: 1, question: "关于配件的存放，正确的做法是（ ）。", options: ["随意堆放", "按类别、规格、使用频率分区存放", "放地上就行", "只要能找到就行"], answer: "B", score: 2, explanation: "规范存放提高效率" },
    { type: 1, question: "库房盘点的方式包括（ ）。", options: ["只盘点大件配件", "定期盘点、循环盘点、抽样盘点", "随便看看", "只盘点贵重配件"], answer: "B", score: 2, explanation: "多种盘点方式" },
    { type: 1, question: "配件出库时发现质量有问题，应该（ ）。", options: ["直接出库", "拒出库，通知采购和质检", "勉强出库", "自己处理"], answer: "B", score: 2, explanation: "质量把关" },
    { type: 1, question: "关于配件的摆放高度，正确的做法是（ ）。", options: ["越高越好", "符合人体工程学，便于存取和安全", "堆到天花板", "放在地上"], answer: "B", score: 2, explanation: "安全存放原则" },
    { type: 1, question: "库房照明应该（ ）。", options: ["越暗越好", "明亮充足，便于识别", "无所谓", "节省成本越暗越好"], answer: "B", score: 2, explanation: "照明要求" },
    { type: 1, question: "关于配件的防护包装，以下说法正确的是（ ）。", options: ["不需要包装", "根据配件特性进行适当防护", "所有配件都要用塑料袋", "包装浪费钱"], answer: "B", score: 2, explanation: "防护包装的重要性" },

    // 多选题（6题，每题4分，共24分）
    { type: 2, question: "配件入库验收的主要内容有（ ）。", options: ["核对送货单与实物是否一致", "检查配件外观有无破损、变形", "核对配件编码和规格是否正确", "检查随附的合格证、说明书等", "确认保质期是否合格"], answer: "ABCDE", score: 4, explanation: "入库验收全面检查" },
    { type: 2, question: "库房管理的重点工作包括（ ）。", options: ["入库验收", "库存保管", "出库配送", "定期盘点", "账务管理"], answer: "ABCDE", score: 4, explanation: "库房管理全面工作" },
    { type: 2, question: "导致库存差异的常见原因有（ ）。", options: ["出入库记录错误", "盗窃或丢失", "验收不准确", "盘点错误", "自然损耗"], answer: "ABCDE", score: 4, explanation: "库存差异多方面原因" },
    { type: 2, question: "提高库存周转率的措施包括（ ）。", options: ["优化采购计划", "控制呆滞库存", "促进销售", "及时处理滞销品", "提高预测准确性"], answer: "ABCDE", score: 4, explanation: "提高周转率多管齐下" },
    { type: 2, question: "库房安全管理的要点包括（ ）。", options: ["消防安全", "防盗防损", "人员安全", "配件安全", "数据安全"], answer: "ABCDE", score: 4, explanation: "库房安全全面管理" },
    { type: 2, question: "降低库存成本的方法包括（ ）。", options: ["科学设定安全库存", "优化采购计划", "及时处理呆滞品", "提高预测准确性", "加强供应商合作"], answer: "ABCDE", score: 4, explanation: "多管齐下降低成本" },

    // 判断题（5题，每题2分，共10分）
    { type: 3, question: "库房管理只需保证配件数量准确，不需要关注配件质量。", options: ["对", "错"], answer: "错", score: 2, explanation: "质量和数量同样重要" },
    { type: 3, question: "配件可以随意堆放，不需要分类管理。", options: ["对", "错"], answer: "错", score: 2, explanation: "需要分类规范存放" },
    { type: 3, question: "盘点只是为了核对数量，与质量无关。", options: ["对", "错"], answer: "错", score: 2, explanation: "盘点包括数量和质量" },
    { type: 3, question: "呆滞配件长期占用资金和空间，应该积极处理。", options: ["对", "错"], answer: "对", score: 2, explanation: "呆滞配件应及时处理" },
    { type: 3, question: "库房管理只需要一个人就能完成所有工作。", options: ["对", "错"], answer: "错", score: 2, explanation: "需要团队协作" },

    // 填空题（2题，每题2分，共4分）
    { type: 4, question: "库房管理中，保证____、____、____三相符是最基本的要求。", blanks: ["账", "卡", "物"], answer: ["账", "卡", "物"], score: 2, explanation: "库房管理基础要求" },
    { type: 4, question: "配件入库验收流程包括：核对单据→检查外包装→____→检查外观→检查证件→____。", blanks: ["开箱核对实物", "签字入库"], answer: ["开箱核对实物", "签字入库"], score: 2, explanation: "入库验收流程" },

    // 简答题（2题，每题3分，共6分）
    { type: 5, question: "简述配件入库验收的标准流程。", answer: "①核对送货单与采购订单是否一致；②检查外包装是否完好；③开箱核对实物数量、型号、编码；④检查配件外观有无损坏；⑤检查随附合格证等；⑥确认无异常后签字入库，并及时录入系统；⑦如有异常，及时联系采购处理。", score: 3, explanation: "" },
    { type: 5, question: "简述如何有效降低库存成本。", answer: "①科学设定安全库存，避免过量囤积；②优化采购计划，提高预测准确性；③严格执行先进先出，减少呆滞；④定期分析库存结构，及时处理滞销品；⑤建立与供应商的良好合作关系，争取优惠价格；⑥利用信息化系统提高管理效率，减少差错；⑦加强内部管理，控制损耗。", score: 3, explanation: "" },

    // 情景题（2题，每题6分，共12分）
    { type: 6, question: "情景题：月底盘点发现某型号刹车片账面库存50个，实际只有40个，少了10个。作为库房管理员，你应该如何处理这种情况？", answer: "处理流程：①立即停止该配件出库，保护现场；②仔细核对出入库记录，查找原因（可能是出库未记账、记账错误、验收错误、盗窃等）；③盘点相关配件，确认是否只有此配件有问题；④调查相关人员，了解情况；⑤填写盘点差异报告，说明情况和可能原因；⑥报请领导审批后调整账目；⑦如发现管理漏洞，立即整改；⑧如涉及盗窃，按公司规定处理；⑨总结教训，完善管理制度，防止再次发生。", score: 6, explanation: "" },
    { type: 6, question: "情景题：周五下午4点，维修车间紧急需要一批发电机配件进行抢修，但该配件库存不足。你了解到A供应商有现货但价格较高，B供应商价格便宜但需要3天到货。此时维修主管非常着急，要求你马上解决。作为库房管理员，你应该如何处理？", answer: "处理流程：①立即核实所需配件的具体型号、数量和参数；②向维修主管说明情况：A供应商有现货但价格高，B供应商便宜但需要3天；③如情况紧急，优先从A供应商采购少量应急，同时从B供应商订购备用；④按审批流程快速采购，确保手续合规；⑤协调物流，争取最快时间到货；⑥配件到货后立即通知车间验收、领用；⑦后续补充完善采购单据，确保账目清晰；⑧总结这次应急采购的经验，优化应急配件储备；⑨与供应商建立紧急供货机制，缩短响应时间。", score: 6, explanation: "" },
  ],
};

// 随机抽取题目函数（确保至少包含2道主观题）
export function getRandomQuestions(role: string, count: number = 45): Question[] {
  const allQuestions = questionBankFull[role] || [];

  if (allQuestions.length <= count) {
    return allQuestions;
  }

  // 分离主观题（type 5,6,7）和客观题（type 1,2,3,4）
  const subjectiveQuestions = allQuestions.filter(q => [5, 6, 7].includes(q.type));
  const objectiveQuestions = allQuestions.filter(q => ![5, 6, 7].includes(q.type));

  // 确保主观题至少有2道，否则使用全部主观题
  const subjectiveCount = Math.min(2, subjectiveQuestions.length);

  // 随机抽取主观题
  const shuffledSubjective = [...subjectiveQuestions];
  for (let i = shuffledSubjective.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledSubjective[i], shuffledSubjective[j]] = [shuffledSubjective[j], shuffledSubjective[i]];
  }
  const selectedSubjective = shuffledSubjective.slice(0, subjectiveCount);

  // 随机抽取客观题，补足到count题
  const remainingCount = count - subjectiveCount;
  const shuffledObjective = [...objectiveQuestions];
  for (let i = shuffledObjective.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledObjective[i], shuffledObjective[j]] = [shuffledObjective[j], shuffledObjective[i]];
  }
  const selectedObjective = shuffledObjective.slice(0, remainingCount);

  // 合并并再次打乱顺序
  const result = [...selectedSubjective, ...selectedObjective];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}
