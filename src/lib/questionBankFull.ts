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
    { type: 1, question: "客户车辆进入维修工位前，服务顾问必须完成的第一步是（ ）。", options: ["安装三件套（方向盘套、座套、脚垫）并进行环车检查","询问客户是否需要饮料","直接将车开上举升机","立即开具施工单"], answer: "A", score: 2, explanation: "安全防护和环检是第一步，确认车辆原状。" },
    { type: 1, question: "在接车问诊环节，了解客户故障描述后，服务顾问的首要任务是（ ）。", options: ["承诺客户马上能修好","直接建议客户大修发动机","告知客户这车质量不好","根据望、闻、问、切的方法进行初步核实与确认"], answer: "D", score: 2, explanation: "使用专业方法核实故障。" },
    { type: 1, question: "关于事故车接待，以下哪种说法是正确的？（ ）", options: ["服务顾问应协助客户查看保单，指导报案，并告知理赔流程","客户必须去保险公司定损点维修，不能自行选择","事故车维修只需报价，无需进行环车检查","只要客户同意维修，不需要保险公司定损就可以拆车"], answer: "A", score: 2, explanation: "服务顾问是理赔协助者，不是决策者。" },
    { type: 1, question: "当维修过程中发现增项（如额外故障），服务顾问正确的做法是（ ）。", options: ["先维修后通知客户，以免客户等待","直接免费赠送客户，以换取好评","等交车时再告诉客户","立即停止施工，联系客户，获取书面或录音授权后再继续施工"], answer: "D", score: 2, explanation: "尊重客户知情权，避免后期纠纷。" },
    { type: 1, question: "在与客户进行故障诊断沟通时，关于使用专业术语，正确的做法是（ ）。", options: ["大量使用英文缩写，体现专业性","用通俗易懂的语言解释故障现象及原因，避免故弄玄虚","必须把诊断仪读取的数据流全部读给客户听","告诉客户说了你也不懂"], answer: "B", score: 2, explanation: "沟通的要点是让客户听懂。" },
    { type: 1, question: "客户对维修工时费提出异议：就换个机油，工时费怎么这么贵？标准的回应方式是（ ）。", options: ["虽然看起来快，但包含了全车21项检测和专业设备的使用，确保您的安全。","嫌贵您可以去路边摊。","那给您打个折吧。","这是公司规定的，我也没办法。"], answer: "A", score: 2, explanation: "将工时转化为价值，解释专业流程的价值。" },
    { type: 1, question: "车辆预检时，发现左后转向灯不亮，但在问诊时客户未提及。服务顾问应（ ）。", options: ["装作没看见","告诉客户这是小问题，不用管","直接免费帮客户换好","记录在预检单上，并告知客户，征询是否本次维修"], answer: "D", score: 2, explanation: "发现隐性问题并转化为商机，体现专业和诚信。" },
    { type: 1, question: "在保险公司未到场的情况下，接待事故车进行拆解定损，服务顾问应特别注意（ ）。", options: ["将旧件直接扔掉","催促客户赶紧签字维修","只修外观可见部分","拍照留存拆解前、拆解中、损坏配件的照片，以备核损"], answer: "D", score: 2, explanation: "证据链是理赔的关键。" },
    { type: 1, question: "交车结算时，客户提出车辆有些地方没洗干净，这时服务顾问应（ ）。", options: ["立即道歉，并安排重新清洁，同时复检车辆","告知客户洗车工下班了","无视客户抱怨，催着交钱","反驳客户说洗得很干净"], answer: "A", score: 2, explanation: "交车是服务的最后一步，必须完美。" },
    { type: 1, question: "关于主动预约客户，以下哪项不是预约时必需确认的信息？（ ）", options: ["客户的身份证号码","行驶里程和上次维修时间","客户的需求和故障描述","客户姓名和车牌号"], answer: "A", score: 2, explanation: "身份证号是结算开票时才必需，预约时主要是车和需求。" },
    { type: 1, question: "客户投诉维修后故障仍未解决，服务顾问首先应该（ ）。", options: ["推给维修工","记录客户投诉，安排重新检测，并给出明确解决方案","建议客户换车","告知客户这是正常的"], answer: "B", score: 2, explanation: "积极处理投诉，重新检测是第一步。" },
    { type: 1, question: "服务顾问在接待时，关于客户隐私保护，以下哪项做法是正确的？（ ）", options: ["客户地址可以公开","客户信息只能在工作中使用，不得外泄","客户身份证可以拍照发朋友圈","客户手机号可以随意分享"], answer: "B", score: 2, explanation: "保护客户隐私是法律要求。" },
    { type: 1, question: "关于维修质保期，服务顾问正确的解释是（ ）。", options: ["质保期越长越好","质保期没有任何意义","所有项目质保期都是3个月","根据维修项目和厂家规定而定，一般零件3个月或5000公里"], answer: "D", score: 2, explanation: "质保期要依据具体情况。" },
    { type: 1, question: "客户要求更换原厂配件，但报价后嫌贵，服务顾问应（ ）。", options: ["欺骗客户说这也是原厂件","直接更换副厂件","强推原厂件","解释原厂配件的质量和保修优势，尊重客户选择"], answer: "D", score: 2, explanation: "诚实告知，尊重客户选择。" },
    { type: 1, question: "服务顾问在与客户沟通时，以下哪种行为是合适的？（ ）", options: ["专心倾听，不打断客户","心不在焉地听","接听电话时长时间让客户等待","边玩手机边听客户说"], answer: "A", score: 2, explanation: "专心倾听是沟通的基础。" },
    { type: 1, question: "客户询问维修进度，服务顾问应该（ ）。", options: ["敷衍了事","拖延不回复","及时查看，准确告知","直接说不知道"], answer: "C", score: 2, explanation: "及时准确回应客户询问。" },
    { type: 1, question: "关于车辆保养周期，服务顾问应依据什么来告知客户？（ ）", options: ["按照别人的车","根据厂家保养手册和实际情况","看客户心情","随便说一个"], answer: "B", score: 2, explanation: "依据厂家标准和实际车况。" },
    { type: 1, question: "服务顾问在记录客户需求时，应该（ ）。", options: ["只记重点","只记大概","详细完整记录","不记录"], answer: "C", score: 2, explanation: "详细记录避免遗漏和纠纷。" },
    { type: 1, question: "客户带小孩来维修店，服务顾问应（ ）。", options: ["禁止小孩进入","安排休息区域，注意安全","忽视小孩","责怪客户"], answer: "B", score: 2, explanation: "人性化管理，确保安全。" },
    { type: 1, question: "关于维修报价，服务顾问应该做到（ ）。", options: ["临时加价","报低价吸引客户","透明清晰，逐项说明","模糊报价"], answer: "C", score: 2, explanation: "透明报价是诚信经营的基础。" },
    { type: 1, question: "客户要求查看更换下来的旧件，服务顾问应（ ）。", options: ["主动展示并解释","拒绝客户","敷衍客户","说已扔掉"], answer: "A", score: 2, explanation: "让客户了解更换是服务的一部分。" },
    { type: 1, question: "关于客户满意度调查，服务顾问的态度应该是（ ）。", options: ["积极重视，认真对待","应付了事","反感","无所谓"], answer: "A", score: 2, explanation: "满意度调查是改进服务的依据。" },
    { type: 1, question: "服务顾问在交车时，应该向客户说明（ ）。", options: ["维修项目和注意事项","什么也不说","催促客户赶紧走","只说收多少钱"], answer: "A", score: 2, explanation: "交车说明确保客户了解维修情况。" },
    { type: 1, question: "客户对维修时间有特殊要求，服务顾问应（ ）。", options: ["拖延时间","一律答应","根据实际能力合理安排，无法满足时提前说明","直接拒绝"], answer: "C", score: 2, explanation: "合理承诺，管理客户期望。" },
    { type: 1, question: "关于维修检测设备，服务顾问应如何向客户介绍？（ ）", options: ["不提及","说明设备的功能和检测的价值","让客户自己去猜","说设备很贵"], answer: "B", score: 2, explanation: "专业解释设备价值，增强客户信任。" },
    { type: 1, question: "客户提出质疑：你们这里为什么比4S店便宜？服务顾问应如何回应？（ ）", options: ["我们有性价比优势，技术同样专业","4S店都是骗人的","因为我们技术不行","不知道"], answer: "A", score: 2, explanation: "突出性价比，不贬低对手。" },
    { type: 1, question: "关于车辆年检服务，服务顾问的职责是（ ）。", options: ["随便说","什么也不做","告知客户年检流程和要求","自己去检"], answer: "C", score: 2, explanation: "服务顾问应提供相关信息和建议。" },
    { type: 1, question: "服务顾问在工作时间应该（ ）。", options: ["坚守岗位，专注服务","玩手机","随意离开","聊天"], answer: "A", score: 2, explanation: "工作时间内应专注服务。" },
    { type: 1, question: "客户对服务顾问的服务表示满意，应该（ ）。", options: ["无视","置之不理","骄傲自满","感谢客户，欢迎下次光临"], answer: "D", score: 2, explanation: "感谢客户是基本的礼仪。" },
    { type: 1, question: "关于紧急救援服务，服务顾问需要确认的信息不包括（ ）。", options: ["客户职业","车辆位置","故障情况","联系方式"], answer: "A", score: 2, explanation: "客户职业不是救援必需信息。" },
    { type: 1, question: "服务顾问在工作遇到困难时，应该（ ）。", options: ["逃避","寻求帮助，学习提升","放弃","抱怨"], answer: "B", score: 2, explanation: "积极寻求帮助和学习。" },
    { type: 1, question: "老客户到店，服务顾问的正确做法是（ ）。", options: ["主动问候，称呼客户姓名，提及上次维修情况","简单打招呼","和新客户一样对待","假装不认识"], answer: "A", score: 2, explanation: "老客户关系维护很重要。" },
    { type: 1, question: "客户询问是否可以赊账（先修后付），服务顾问应（ ）。", options: ["直接答应","嘲笑客户","直接拒绝不解释","告知公司规定，建议支付定金"], answer: "D", score: 2, explanation: "按规定办事，但要礼貌。" },
    { type: 1, question: "关于车辆检测报告，服务顾问应该（ ）。", options: ["向客户解释检测结果和建议","随便给谁看","给客户不看","自己留着"], answer: "A", score: 2, explanation: "检测结果需要向客户解释。" },
    { type: 1, question: "客户对配件来源有疑问，服务顾问应（ ）。", options: ["回避问题","说明配件渠道，保证质量","不理会","说秘密"], answer: "B", score: 2, explanation: "透明化配件信息。" },
    { type: 1, question: "服务顾问下班前最重要的工作是（ ）。", options: ["玩手机","整理客户档案，确认未完成工单，做好交接","聊天","赶紧回家"], answer: "B", score: 2, explanation: "下班前整理工作是专业要求。" },

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
    { type: 1, question: "家用轿车轮胎的标准胎压范围通常为（ ）。", options: ["2.2-2.5bar","1.0-1.5bar","3.0-3.5bar","4.0-4.5bar"], answer: "A", score: 2, explanation: "标准胎压范围" },
    { type: 1, question: "发动机气缸盖螺栓的紧固顺序一般为（ ）。", options: ["顺时针依次拧紧","从中间向两端交叉拧紧","从两端向中间交叉拧紧","任意顺序"], answer: "B", score: 2, explanation: "防止缸盖变形" },
    { type: 1, question: "汽车制动液一般建议更换周期为（ ）。", options: ["6个月","5年或10万公里","终身不换","1年或2万公里"], answer: "D", score: 2, explanation: "制动液具有吸湿性" },
    { type: 1, question: "发动机机油更换周期一般建议为（ ）。", options: ["6个月或1万公里","2年或5万公里","终身不换","3个月或5000公里"], answer: "D", score: 2, explanation: "定期更换保持润滑" },
    { type: 1, question: "关于发动机冷却系统，节温器的作用是（ ）。", options: ["储存冷却液","降低水温","控制冷却液循环路径，调节水温","增加水温"], answer: "C", score: 2, explanation: "节温器调节冷却温度" },
    { type: 1, question: "火花塞的间隙过大，会导致（ ）。", options: ["点火过早","点火困难，动力下降","火花过弱","油耗降低"], answer: "B", score: 2, explanation: "间隙影响点火性能" },
    { type: 1, question: "四轮定位中，外倾角主要影响（ ）。", options: ["方向盘回正","刹车效果","转向轻便性","轮胎偏磨和直线行驶稳定性"], answer: "D", score: 2, explanation: "外倾角影响轮胎磨损" },
    { type: 1, question: "发动机曲轴主轴颈与主轴承的配合间隙过小，会导致（ ）。", options: ["抱轴，发动机损坏","异响","机油压力降低","油耗增加"], answer: "A", score: 2, explanation: "间隙过小会导致润滑不良" },
    { type: 1, question: "关于汽车空调系统，制冷剂（冷媒）过少会导致（ ）。", options: ["制冷效果差，压缩机频繁启停","制热效果差","制冷效果太好","系统压力过高"], answer: "A", score: 2, explanation: "制冷剂不足影响制冷" },
    { type: 1, question: "发动机排气管冒蓝烟，通常是因为（ ）。", options: ["烧机油（活塞环或气门油封磨损）","点火正时过早","混合气过稀","混合气过浓"], answer: "A", score: 2, explanation: "蓝烟表明烧机油" },
    { type: 1, question: "汽车制动跑偏的主要原因是（ ）。", options: ["左右制动力不均","车速过快","悬挂太软","轮胎气压过低"], answer: "A", score: 2, explanation: "制动力不均导致跑偏" },
    { type: 1, question: "发动机点火提前角过大，会导致（ ）。", options: ["动力下降","怠速不稳","油耗增加","发动机过热，爆震"], answer: "D", score: 2, explanation: "点火过早导致爆震" },
    { type: 1, question: "关于变速箱油，自动变速箱油（ATF）可以（ ）。", options: ["手动变速箱也可用","用水代替","只能用于自动变速箱，不可混用","任何车都通用"], answer: "C", score: 2, explanation: "不同变速箱油不能混用" },
    { type: 1, question: "汽车发电机的作用是（ ）。", options: ["储存电能","调节电压","向全车用电设备供电并向蓄电池充电","启动发动机"], answer: "C", score: 2, explanation: "发电机发电和充电" },
    { type: 1, question: "发动机活塞环的主要作用不包括（ ）。", options: ["布油","散热","刮油","密封气缸"], answer: "B", score: 2, explanation: "活塞环主要起密封和布油作用" },
    { type: 1, question: "关于汽车转向系统，助力泵油过少会导致（ ）。", options: ["方向盘自动回正","异响","转向助力失效或沉重","转向过轻"], answer: "C", score: 2, explanation: "助力油不足影响转向" },
    { type: 1, question: "发动机气缸磨损最严重的部位通常在（ ）。", options: ["气缸顶部","气缸底部","所有部位均匀磨损","气缸中部（活塞上止点第一道环附近）"], answer: "D", score: 2, explanation: "上止点处磨损最大" },
    { type: 1, question: "汽车电瓶（蓄电池）的使用寿命一般为（ ）。", options: ["10年以上","3-5年","1-2年","终身"], answer: "B", score: 2, explanation: "电瓶正常使用寿命" },
    { type: 1, question: "发动机正时皮带或链条断裂，会导致（ ）。", options: ["动力下降","油耗增加","发动机无法启动，气门损坏","发动机过热"], answer: "C", score: 2, explanation: "正时断裂会导致气门损坏" },
    { type: 1, question: "汽车ABS防抱死系统的核心作用是（ ）。", options: ["降低轮胎磨损","防止紧急制动时车轮抱死，保持转向控制","缩短制动距离","增加刹车噪音"], answer: "B", score: 2, explanation: "ABS保持转向能力" },
    { type: 1, question: "关于发动机润滑系统，机油泵的作用是（ ）。", options: ["将机油输送到各摩擦表面","储存机油","冷却机油","过滤机油"], answer: "A", score: 2, explanation: "机油泵输送润滑油" },
    { type: 1, question: "汽车悬挂系统中，减震器损坏会导致（ ）。", options: ["转向沉重","车身晃动，颠簸加剧","方向盘发抖","轮胎偏磨"], answer: "B", score: 2, explanation: "减震器影响行驶平稳性" },
    { type: 1, question: "发动机供油系统中，喷油嘴堵塞会导致（ ）。", options: ["发动机功率下降，运转不稳","散热不良","油耗增加","机油消耗增加"], answer: "A", score: 2, explanation: "喷油嘴堵塞影响供油" },
    { type: 1, question: "关于汽车电路，保险丝的作用是（ ）。", options: ["过载保护，防止电路烧毁","稳定电压","增强电流","储存电能"], answer: "A", score: 2, explanation: "保险丝保护电路" },
    { type: 1, question: "发动机水温过高的主要原因不包括（ ）。", options: ["节温器故障","散热器堵塞","空调制冷","冷却液不足"], answer: "C", score: 2, explanation: "空调与水温无关" },
    { type: 1, question: "汽车轮胎花纹深度小于多少毫米时应更换？（ ）", options: ["5mm","1.6mm","20mm","10mm"], answer: "B", score: 2, explanation: "轮胎磨损极限" },
    { type: 1, question: "发动机配气相位中，气门重叠角是指（ ）。", options: ["排气门延迟关闭的角度","气门持续开启的角度","进气门提前打开的角度","进气门和排气门同时打开的角度"], answer: "D", score: 2, explanation: "重叠角是进排气门同时开启" },
    { type: 1, question: "关于汽车离合器，分离轴承磨损会导致（ ）。", options: ["换挡困难","发动机异响","分离不彻底，异响","离合器打滑"], answer: "C", score: 2, explanation: "分离轴承影响离合器分离" },
    { type: 1, question: "发动机积碳过多的危害不包括（ ）。", options: ["动力下降","油耗增加","排放超标","轮胎磨损"], answer: "D", score: 2, explanation: "积碳不影响轮胎" },
    { type: 1, question: "汽车万向节（传动轴接头）损坏会导致（ ）。", options: ["刹车失灵","空调不制冷","电瓶不充电","行驶中有异响"], answer: "D", score: 2, explanation: "万向节损坏产生异响" },
    { type: 1, question: "关于发动机冷却液，不同颜色的冷却液（ ）。", options: ["不能混用，必须使用相同类型","可以混用","混用效果更好","颜色无关紧要"], answer: "A", score: 2, explanation: "不同冷却液化学成分不同" },
    { type: 1, question: "使用诊断仪读取故障码后，清除故障码的正确时机是（ ）。", options: ["交车前清除","读取后立即清除","不清除","维修完成后确认故障已排除时清除"], answer: "D", score: 2, explanation: "故障排除后才能清除" },
    { type: 1, question: "发动机气缸压力过低的原因不包括（ ）。", options: ["活塞环磨损","进气不足","缸盖垫损坏","气门密封不严"], answer: "B", score: 2, explanation: "进气不足不会直接导致气缸压力低" },
    { type: 1, question: "关于汽车轮胎，子午线轮胎的优点是（ ）。", options: ["所有路况都适用","可修补次数多","价格便宜","耐磨性好，滚动阻力小"], answer: "D", score: 2, explanation: "子午线轮胎性能优势" },
    { type: 1, question: "发动机燃油压力过低会导致（ ）。", options: ["喷油不足，动力下降","混合气过浓","油耗降低","排放达标"], answer: "A", score: 2, explanation: "燃油压力不足影响供油" },
    { type: 1, question: "关于汽车氧传感器，其作用是（ ）。", options: ["检测排气中的氧含量，调节空燃比","控制点火正时","测量冷却液温度","测量进气量"], answer: "A", score: 2, explanation: "氧传感器调节空燃比" },
    { type: 1, question: "汽车空调系统制冷剂泄漏的常见检查方法是（ ）。", options: ["触摸法","观察法","电子检漏仪或荧光检漏","听声音"], answer: "C", score: 2, explanation: "专业检漏方法" },
    { type: 1, question: "发动机节气门脏污会导致（ ）。", options: ["怠速不稳，加速无力","排放达标","油耗降低","冷启动困难"], answer: "A", score: 2, explanation: "节气门脏污影响进气" },
    { type: 1, question: "关于汽车刹车系统，刹车盘磨损极限标准一般为（ ）。", options: ["不限","磨损至极限标记或厚度小于2mm","磨损一半就需要更换","肉眼可见"], answer: "B", score: 2, explanation: "刹车盘磨损标准" },
    { type: 1, question: "发动机曲轴轴向间隙过大会导致（ ）。", options: ["动力增强","机油压力高","前后窜动，异响","噪音降低"], answer: "C", score: 2, explanation: "轴向间隙大导致窜动" },
    { type: 1, question: "关于汽车电路检测，万用表测量电阻时（ ）。", options: ["可以带电测量","不需要调零","必须断电测量","随便怎么测"], answer: "C", score: 2, explanation: "测电阻必须断电" },
    { type: 1, question: "发动机气门间隙过大，会导致（ ）。", options: ["气门开启过度","正时错乱","气门关闭不严","气门开启不足，充气效率下降"], answer: "D", score: 2, explanation: "气门间隙影响进气效率" },

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
,

    // 从Word文档导入的题目
    { type: 3, question: "所有车型的车轮螺栓拧紧力矩都是统一的，可以使用同一扭矩值。", options: ["对","错"], answer: "错", score: 2, explanation: "不同车型螺栓规格不同，力矩也不同" },
    { type: 3, question: "轮胎气压过高或过低都不会影响车辆的行驶安全性，只会影响舒适性。", options: ["对","错"], answer: "错", score: 2, explanation: "胎压异常会影响安全性" },
    { type: 3, question: "空气悬挂系统的正常压力一般在0.6-0.8Mpa之间。", options: ["对","错"], answer: "对", score: 2, explanation: "空气悬挂标准压力" },
    { type: 3, question: "更换轮胎后，不需要对车轮螺母进行复紧检查。", options: ["对","错"], answer: "错", score: 2, explanation: "必须复检扭矩" },
    { type: 3, question: "发动机的正时皮带或链条如果出现故障，不会影响发动机正常工作。", options: ["对","错"], answer: "错", score: 2, explanation: "正时故障会导致气门损坏" },
    { type: 3, question: "汽车四轮定位不准确会导致轮胎异常磨损。", options: ["对","错"], answer: "对", score: 2, explanation: "定位失准导致偏磨" },
    { type: 3, question: "制动液可以随意混用不同品牌和型号的产品。", options: ["对","错"], answer: "错", score: 2, explanation: "制动液不能混用" },
    { type: 3, question: "在紧固气缸盖螺栓时，可以按照任意顺序一次性拧紧到规定扭矩。", options: ["对","错"], answer: "错", score: 2, explanation: "必须按顺序分次拧紧" },
    { type: 3, question: "氧传感器的作用是检测发动机的机油压力。", options: ["对","错"], answer: "错", score: 2, explanation: "氧传感器检测排气氧含量" },
    { type: 3, question: "新能源汽车维修作业前，必须进行高压断电操作并等待足够放电时间。", options: ["对","错"], answer: "对", score: 2, explanation: "高压安全操作要求" },
    { type: 3, question: "发动机机油液位过高会导致机油压力过高，加剧发动机磨损。", options: ["对","错"], answer: "对", score: 2, explanation: "机油过多会增加压力" },
    { type: 3, question: "汽车空调系统中，制冷剂不足会导致空调制冷效果变差。", options: ["对","错"], answer: "对", score: 2, explanation: "制冷剂不足影响制冷" },
    { type: 3, question: "更换火花塞时，不需要考虑火花塞的间隙，直接安装即可。", options: ["对","错"], answer: "错", score: 2, explanation: "火花塞间隙很重要" },
    { type: 3, question: "手动变速器的齿轮油可以终身不换。", options: ["对","错"], answer: "错", score: 2, explanation: "齿轮油需要定期更换" },
    { type: 3, question: "汽车蓄电池的正常电压在空载时应在12.6V左右。", options: ["对","错"], answer: "对", score: 2, explanation: "蓄电池标准电压" },
    { type: 3, question: "制动盘表面有轻微划痕，无需处理，不影响制动效果。", options: ["对","错"], answer: "错", score: 2, explanation: "划痕会影响制动" },
    { type: 3, question: "电动助力转向系统（EPS）故障时，车辆将无法转向。", options: ["对","错"], answer: "错", score: 2, explanation: "EPS故障后仍有机械转向" },
    { type: 3, question: "燃油滤清器的作用是过滤燃油中的杂质，防止堵塞喷油嘴。", options: ["对","错"], answer: "对", score: 2, explanation: "燃油滤清器的作用" },
    { type: 3, question: "汽车尾气排放超标，一定是氧传感器故障导致的。", options: ["对","错"], answer: "错", score: 2, explanation: "排放超标有多种原因" },
    { type: 3, question: "维修新能源汽车时，佩戴绝缘手套即可，无需其他防护措施。", options: ["对","错"], answer: "错", score: 2, explanation: "需要全套防护措施" },
    { type: 3, question: "空气滤芯堵塞会导致发动机进气不足，动力下降。", options: ["对","错"], answer: "对", score: 2, explanation: "滤芯堵塞影响进气" },
    { type: 3, question: "汽车的减震器漏油后，不影响车辆行驶，无需更换。", options: ["对","错"], answer: "错", score: 2, explanation: "减震器漏油需要更换" },
    { type: 3, question: "自动变速器油的颜色变为黑色，说明油液变质，需要更换。", options: ["对","错"], answer: "对", score: 2, explanation: "ATF变黑说明变质" },
    { type: 3, question: "发动机的节气门积碳会导致怠速不稳、加速无力。", options: ["对","错"], answer: "对", score: 2, explanation: "节气门脏污影响性能" },
    { type: 3, question: "汽车的转向拉杆球头松动，会导致转向跑偏。", options: ["对","错"], answer: "对", score: 2, explanation: "球头松动影响转向" },
    { type: 3, question: "制动分泵卡滞会导致制动拖滞，车辆行驶阻力增大。", options: ["对","错"], answer: "对", score: 2, explanation: "分泵卡滞导致拖滞" },
    { type: 3, question: "汽车的发电机故障，会导致蓄电池无法充电，车辆无法正常行驶。", options: ["对","错"], answer: "对", score: 2, explanation: "发电机故障无法充电" },
    { type: 3, question: "更换发动机正时链条时，不需要对正时，直接安装即可。", options: ["对","错"], answer: "错", score: 2, explanation: "正时必须对准" },
    { type: 3, question: "汽车的空调滤芯堵塞，会导致空调出风量变小，异味产生。", options: ["对","错"], answer: "对", score: 2, explanation: "空调滤芯堵塞影响出风" },
    { type: 3, question: "新能源汽车的高压电池包可以随意拆卸，无需专业工具。", options: ["对","错"], answer: "错", score: 2, explanation: "高压电池需要专业工具" },
    { type: 1, question: "某车型维修手册规定车轮螺母拧紧力矩为120N·m，冬季时应控制在（ ）。", options: ["80-90N·m","90-100N·m","120-130N·m","140-150N·m"], answer: "B", score: 2, explanation: "冬季适当降低防断裂" },
    { type: 1, question: "发动机机油的标号中，5W-30的\"W\"代表（ ）。", options: ["冬季","夏季","粘度","等级"], answer: "A", score: 2, explanation: "W代表Winter冬季" },
    { type: 1, question: "汽车空调系统中，冷凝器的作用是（ ）。", options: ["产生制冷量","冷却制冷剂蒸汽","过滤制冷剂","压缩制冷剂"], answer: "B", score: 2, explanation: "冷凝器冷却蒸汽" },
    { type: 1, question: "火花塞的间隙一般调整为（ ）。", options: ["0.3-0.5mm","0.6-0.8mm","1.0-1.2mm","1.5-2.0mm"], answer: "C", score: 2, explanation: "火花塞标准间隙" },
    { type: 1, question: "手动变速器齿轮油的更换周期一般为（ ）。", options: ["2万公里","4-6万公里","10万公里","终身免维护"], answer: "B", score: 2, explanation: "齿轮油更换周期" },
    { type: 1, question: "汽车蓄电池亏电的主要原因不包括（ ）。", options: ["发电机故障","灯光未关闭","蓄电池老化","机油量不足"], answer: "D", score: 2, explanation: "机油与蓄电池无关" },
    { type: 1, question: "制动片的磨损极限一般为（ ）。", options: ["1mm","2mm","3mm","4mm"], answer: "B", score: 2, explanation: "刹车片磨损极限" },
    { type: 1, question: "电动助力转向系统（EPS）的动力来源是（ ）。", options: ["发动机","蓄电池","发电机","液压泵"], answer: "B", score: 2, explanation: "EPS使用电池供电" },
    { type: 1, question: "燃油滤清器安装在（ ）。", options: ["燃油箱内","燃油管路中","发动机缸体上","进气歧管上"], answer: "B", score: 2, explanation: "燃油滤清器位置" },
    { type: 1, question: "下列哪种故障会导致发动机怠速不稳？（ ）", options: ["空气滤芯堵塞","火花塞间隙过大","燃油压力过低","以上都是"], answer: "D", score: 2, explanation: "都可能影响怠速" },
    { type: 1, question: "新能源汽车的高压电池包冷却方式主要为（ ）。", options: ["自然冷却","强制风冷","液冷","以上都是"], answer: "D", score: 2, explanation: "多种冷却方式" },
    { type: 1, question: "汽车的主减速器的作用是（ ）。", options: ["改变传动方向","降低转速、增大扭矩","实现无级变速","传递动力"], answer: "B", score: 2, explanation: "主减速器的作用" },
    { type: 1, question: "进气歧管的作用是（ ）。", options: ["过滤空气","将空气分配到各气缸","冷却空气","压缩空气"], answer: "B", score: 2, explanation: "进气歧管分配空气" },
    { type: 1, question: "下列哪种情况会导致汽车油耗增加？（ ）", options: ["轮胎气压过高","空气滤芯堵塞","火花塞工作正常","氧传感器正常"], answer: "B", score: 2, explanation: "滤芯堵塞增加油耗" },
    { type: 1, question: "汽车的ABS系统的作用是（ ）。", options: ["增大制动力","防止车轮抱死","缩短制动距离","提高行驶速度"], answer: "B", score: 2, explanation: "ABS防止抱死" },
    { type: 1, question: "更换制动液时，正确的操作是（ ）。", options: ["直接添加新制动液","先放掉旧制动液，再添加新制动液","新旧制动液混合使用","无需放气直接添加"], answer: "B", score: 2, explanation: "必须先放旧液" },
    { type: 1, question: "空气滤芯的更换周期一般为（ ）。", options: ["5000公里","10000-20000公里","30000公里","50000公里"], answer: "B", score: 2, explanation: "空滤更换周期" },
    { type: 1, question: "汽车减震器的作用是（ ）。", options: ["支撑车身","减少车身震动","传递动力","转向导向"], answer: "B", score: 2, explanation: "减震器减少震动" },
    { type: 1, question: "自动变速器油的更换周期一般为（ ）。", options: ["2万公里","4-6万公里","10万公里","终身免维护"], answer: "B", score: 2, explanation: "ATF更换周期" },
    { type: 1, question: "使用扭力扳手时，正确的操作是（ ）。", options: ["用力过猛超过设定值","达到设定值后继续加力","匀速平稳施力，听到\"咔哒\"声即停","作为普通扳手松卸螺栓"], answer: "C", score: 2, explanation: "扭力扳手正确用法" },
    { type: 1, question: "发动机机油压力过低故障的原因可能不包括（ ）。", options: ["机油量不足","机油泵磨损","机油粘度过大","主轴瓦间隙过大"], answer: "C", score: 2, explanation: "粘度过大会导致压力高" },
    { type: 1, question: "下列哪项不是故障诊断的常用方法？（ ）", options: ["直观诊断法","仪器诊断法","自诊断法","猜测更换法"], answer: "D", score: 2, explanation: "猜测不是诊断方法" },
    { type: 1, question: "转向沉重故障的可能原因不包括（ ）。", options: ["轮胎气压不足","转向助力泵压力不足","前悬架下球节卡滞","轮胎花纹过深"], answer: "D", score: 2, explanation: "花纹过深不是原因" },
    { type: 1, question: "关于螺栓紧固，以下说法正确的是（ ）。", options: ["所有螺栓都可以涂螺纹锁固胶","关键部件螺栓必须使用扭力扳手按规定力矩紧固","旧螺栓可以反复使用无需检查","力矩越大越好"], answer: "B", score: 2, explanation: "必须按力矩紧固" },
    { type: 2, question: "发动机机油的主要作用包括（ ）。", options: ["润滑","冷却","清洁","密封","防锈"], answer: "ABCDE", score: 4, explanation: "机油的五大作用" },
    { type: 2, question: "汽车空调系统的组成部件包括（ ）。", options: ["压缩机","冷凝器","蒸发器","膨胀阀","干燥瓶"], answer: "ABCDE", score: 4, explanation: "空调系统五大件" },
    { type: 2, question: "导致发动机无法启动的可能原因有（ ）。", options: ["蓄电池亏电","火花塞故障","燃油泵故障","点火线圈故障","空气滤芯堵塞"], answer: "ABCD", score: 4, explanation: "空气滤芯不会导致无法启动" },
    { type: 2, question: "汽车制动系统的组成部件包括（ ）。", options: ["制动踏板","制动总泵","制动分泵","刹车片","制动盘"], answer: "ABCDE", score: 4, explanation: "制动系统组成" },
    { type: 2, question: "新能源汽车维修时的安全防护措施包括（ ）。", options: ["佩戴绝缘手套","穿绝缘鞋","使用绝缘工具","断开高压电源","佩戴护目镜"], answer: "ABCDE", score: 4, explanation: "高压维修全套防护" },
    { type: 2, question: "汽车故障诊断中，通过\"闻\"（嗅觉）可以初步判断的故障有（ ）。", options: ["电路烧焦味（线路短路）","离合器片烧损味","发动机机油泄漏","制动片过热异味","冷却液泄漏的甜味"], answer: "ABDE", score: 4, explanation: "机油泄漏主要靠看" },
    { type: 2, question: "关于轮胎维护的正确做法有（ ）。", options: ["定期检查轮胎气压","检查轮胎磨损指示线","不同规格轮胎可同轴混用","发现轮胎龟裂及时处理","每2万公里进行轮胎换位"], answer: "ABDE", score: 4, explanation: "同轴轮胎规格必须一致" },
    { type: 2, question: "电控发动机的传感器包括（ ）。", options: ["空气流量传感器","水温传感器","氧传感器","曲轴位置传感器","爆震传感器"], answer: "ABCDE", score: 4, explanation: "发动机主要传感器" },
    { type: 2, question: "车轮螺母的正确紧固方法包括（ ）。", options: ["使用对角线顺序分次拧紧","一次性拧紧到规定力矩","车辆落地后再进行最终紧固","使用扭力扳手确保力矩准确","更换轮胎后行驶一段距离应复检扭矩"], answer: "ACDE", score: 4, explanation: "不能一次性拧紧" },
    { type: 2, question: "发动机冷却系统的组成部件包括（ ）。", options: ["散热器","水泵","节温器","冷却风扇","机油冷却器（部分车型）"], answer: "ABCDE", score: 4, explanation: "冷却系统组成" }
  ],
// ========== 库房管理员 ==========
  storekeeper: [
    // 单选题（35题，每题2分，共70分）
    { type: 1, question: "配件入库时，发现实物与送货单不符，正确的做法是（ ）。", options: ["私自扣下多余配件","先入库再查找原因","直接入库，下次再调整","拒收并在单据上注明实际数量，及时联系采购处理"], answer: "D", score: 2, explanation: "入库验收规范" },
    { type: 1, question: "库房管理的核心目标是（ ）。", options: ["保证账、卡、物三相符，快速准确供应","配件越多越好","降低成本至上","任何配件都能快速找到"], answer: "A", score: 2, explanation: "库房管理的核心" },
    { type: 1, question: "易损件（如刹车片、滤清器等）的库存策略应该是（ ）。", options: ["零库存","按需采购不备货","保持适量安全库存，避免缺货","大量囤积"], answer: "C", score: 2, explanation: "易损件需有安全库存" },
    { type: 1, question: "关于配件先进先出（FIFO）原则，以下说法正确的是（ ）。", options: ["只适用于易损件","主要适用于有保质期或易老化的配件","不需要遵守","所有配件都适用"], answer: "B", score: 2, explanation: "FIFO适用于有保质期的配件" },
    { type: 1, question: "配件盘点的主要目的是（ ）。", options: ["清点数量","清理仓库","核对账实是否相符，发现问题并及时处理","整理货架"], answer: "C", score: 2, explanation: "盘点的真正目的" },
    { type: 1, question: "呆滞配件（长期不动销的配件）的处理方式不包括（ ）。", options: ["分析原因，优化采购","打折促销","申请报废","长期占用货架"], answer: "D", score: 2, explanation: "呆滞配件应积极处理" },
    { type: 1, question: "配件出库时，必须做到（ ）。", options: ["凭单据出库，先进先出，及时记账","只记数量","先出库后记账","谁要就给谁"], answer: "A", score: 2, explanation: "出库规范" },
    { type: 1, question: "危险品配件（如蓄电池、油漆等）的存放要求是（ ）。", options: ["与其他配件混放","单独存放，通风良好，远离火源","随便放置","放在角落"], answer: "B", score: 2, explanation: "危险品存放规范" },
    { type: 1, question: "配件编码（OE码）的作用是（ ）。", options: ["美观好看","便于管理","提高价格","唯一标识配件型号规格"], answer: "D", score: 2, explanation: "配件编码的意义" },
    { type: 1, question: "库存周转率的计算公式是（ ）。", options: ["出库金额/平均库存金额","库存数量/销售数量","销售数量/采购数量","采购金额/库存金额"], answer: "A", score: 2, explanation: "周转率计算" },
    { type: 1, question: "配件质量问题退货时，应保留的证据不包括（ ）。", options: ["采购人员个人信息","配件实物","购买记录","质量问题照片"], answer: "A", score: 2, explanation: "退货需保留有效证据" },
    { type: 1, question: "库房5S管理的核心要素包括（ ）。", options: ["整理、整顿、清扫、清洁、素养","货架、标签、单据、电脑、软件","数量、质量、价格、保质期、供应商","进货、出货、盘点、采购、退货"], answer: "A", score: 2, explanation: "5S管理内容" },
    { type: 1, question: "配件库存预警系统的作用是（ ）。", options: ["提示库存不足或过多，优化采购","美观","增加库存","减少工作量"], answer: "A", score: 2, explanation: "预警系统的作用" },
    { type: 1, question: "关于配件安全库存，以下说法正确的是（ ）。", options: ["根据销售规律和供货周期科学设定","安全库存等于平均销量","安全库存越高越好","不需要安全库存"], answer: "A", score: 2, explanation: "安全库存应科学设定" },
    { type: 1, question: "配件存放时，标签应包含的信息不包括（ ）。", options: ["配件编码","配件名称","规格型号","采购人员姓名"], answer: "D", score: 2, explanation: "标签应包含配件信息" },
    { type: 1, question: "库房温湿度控制的主要目的是（ ）。", options: ["节能","美观","防止配件老化、锈蚀、变质","增加工作舒适度"], answer: "C", score: 2, explanation: "温湿度控制的重要性" },
    { type: 1, question: "配件采购单审核时，应重点关注（ ）。", options: ["采购人员的性别","采购单的格式","配件需求是否合理，价格是否合适，供应商是否可靠","采购时间"], answer: "C", score: 2, explanation: "采购审核要点" },
    { type: 1, question: "关于配件保质期，以下做法正确的是（ ）。", options: ["保质期只是参考","保质期过了也能用","不关注保质期","严格执行先进先出，过期配件及时报废处理"], answer: "D", score: 2, explanation: "保质期管理规范" },
    { type: 1, question: "配件退货流程不包括（ ）。", options: ["联系供应商","填写退货单","直接扔掉","确认退货原因"], answer: "C", score: 2, explanation: "退货必须规范流程" },
    { type: 1, question: "库房布局设计时应考虑（ ）。", options: ["如何降低成本","如何美观","如何提高工作效率，便于存取","如何最大化利用空间"], answer: "C", score: 2, explanation: "布局设计的原则" },
    { type: 1, question: "配件代用（非原厂配件）使用时必须注意（ ）。", options: ["价格越低越好","确保质量和规格符合要求，经批准后方可使用","谁推荐谁负责","随便用"], answer: "B", score: 2, explanation: "代用配件需严格审核" },
    { type: 1, question: "关于配件供应商管理，以下哪项不正确？（ ）", options: ["建立合格供应商名录","保持多元化供应渠道","只和一家供应商合作","定期评估供应商表现"], answer: "C", score: 2, explanation: "供应商管理策略" },
    { type: 1, question: "配件盘点差异处理时，应（ ）。", options: ["自行处理","查明原因，报批后调整","忽略不计","直接修改账目"], answer: "B", score: 2, explanation: "盘点差异处理规范" },
    { type: 1, question: "库房消防安全的主要措施不包括（ ）。", options: ["配置灭火器材","堆放所有杂物","禁止吸烟","定期检查电路"], answer: "B", score: 2, explanation: "消防安全规范" },
    { type: 1, question: "配件调拨（不同仓库间调配）时应做到（ ）。", options: ["办理调拨单据，双方确认","口头通知即可","随便调","不用记录"], answer: "A", score: 2, explanation: "调拨必须有单据" },
    { type: 1, question: "关于配件条码管理，以下说法正确的是（ ）。", options: ["提高工作效率，减少差错","增加成本","条码无意义","可有可无"], answer: "A", score: 2, explanation: "条码管理的优势" },
    { type: 1, question: "配件到货验收时，应检查的项目不包括（ ）。", options: ["包装完整性","送货人员的着装","合格证等证件","数量、规格、外观"], answer: "B", score: 2, explanation: "验收应关注配件本身" },
    { type: 1, question: "库房管理人员交接班时，应做到（ ）。", options: ["不用交接","口头说一下","谁在谁负责","填写交接记录，明确库存状态和注意事项"], answer: "D", score: 2, explanation: "交接班规范" },
    { type: 1, question: "配件报废处理时，需要的手续不包括（ ）。", options: ["注明报废原因和数量","拍照留存","填写报废申请单","不需要任何手续"], answer: "D", score: 2, explanation: "报废需规范流程" },
    { type: 1, question: "关于配件账务管理，正确的做法是（ ）。", options: ["只记数量","只记金额","只在月底记账","及时、准确、完整记录所有出入库"], answer: "D", score: 2, explanation: "账务管理规范" },
    { type: 1, question: "配件需求预测主要依据（ ）。", options: ["供应商建议","领导指示","个人喜好","历史销售数据、季节因素、市场趋势"], answer: "D", score: 2, explanation: "需求预测的科学依据" },
    { type: 1, question: "关于配件的存放，正确的做法是（ ）。", options: ["放地上就行","按类别、规格、使用频率分区存放","随意堆放","只要能找到就行"], answer: "B", score: 2, explanation: "规范存放提高效率" },
    { type: 1, question: "库房盘点的方式包括（ ）。", options: ["只盘点贵重配件","只盘点大件配件","定期盘点、循环盘点、抽样盘点","随便看看"], answer: "C", score: 2, explanation: "多种盘点方式" },
    { type: 1, question: "配件出库时发现质量有问题，应该（ ）。", options: ["直接出库","自己处理","拒出库，通知采购和质检","勉强出库"], answer: "C", score: 2, explanation: "质量把关" },
    { type: 1, question: "关于配件的摆放高度，正确的做法是（ ）。", options: ["符合人体工程学，便于存取和安全","越高越好","放在地上","堆到天花板"], answer: "A", score: 2, explanation: "安全存放原则" },
    { type: 1, question: "库房照明应该（ ）。", options: ["越暗越好","无所谓","节省成本越暗越好","明亮充足，便于识别"], answer: "D", score: 2, explanation: "照明要求" },
    { type: 1, question: "关于配件的防护包装，以下说法正确的是（ ）。", options: ["根据配件特性进行适当防护","包装浪费钱","不需要包装","所有配件都要用塑料袋"], answer: "A", score: 2, explanation: "防护包装的重要性" },

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
