import { SchoolData, CountyOverviewStats, IssueRecommendation } from '../types';

export const countyStats: CountyOverviewStats = {
  examYear: '115年',
  englishC: { county: 46.15, national: 29.33, diff: 16.82 },
  listeningC: { county: 51.26, national: 33.71, diff: 17.55 },
  mathC: { county: 39.40, national: 25.21, diff: 14.19 },
  englishA: { county: 11.41, national: 23.41, diff: -12.00 },
  mathA: { county: 13.79, national: 24.66, diff: -10.87 },
  ruralRatio: { county: 44.00, national: 22.80 },
  smallSchoolAvg3Yr: { englishC: 72.32, mathC: 68.14 },
  focusSchoolsTeacherMathNonSpecialist: 48.4,
  otherSchoolsTeacherMathNonSpecialist: 33.5,
  supportCoverageOverall: { english: 64.76, math: 68.30, launchRate: 94.40 },
  correlationStudy: {
    byTestedDenominator: {
      english: -0.07,
      math: 0.09,
      desc: '教育部以「受測人數」為分母，校際相關接近 0，無法反映預警效力',
    },
    byGradeDenominator: {
      english: 0.79,
      math: 0.82,
      desc: '縣府改以「全年級學生數」為分母，相關顯著高達 +0.79 與 +0.82，證明篩選測驗可作關鍵預警',
    },
    grade8IdentificationRate: {
      english: 65,
      math: 80,
      desc: '會考待加強學生於八年級時被辨識率：英語約 65%、數學約 80%',
    },
    grade9ActualSupportRate: 50,
  },
};

export const focusSchoolsData: SchoolData[] = [
  {
    id: 'xiulin',
    name: '秀林國中',
    category: '非偏遠',
    scale: '中校',
    candidateCount115: 70,
    history: [
      {
        year: '113年',
        englishC: 87.67,
        englishCCount: 64,
        listeningC: 91.78,
        englishA: 0.00,
        mathC: 87.84,
        mathCCount: 65,
        mathA: 0.00,
      },
      {
        year: '114年',
        englishC: 83.87,
        englishCCount: 52,
        listeningC: 90.32,
        englishA: 0.00,
        mathC: 82.54,
        mathCCount: 52,
        mathA: 0.00,
      },
      {
        year: '115年',
        englishC: 85.51,
        englishCCount: 59,
        listeningC: 86.96,
        englishA: 0.00,
        mathC: 83.82,
        mathCCount: 57,
        mathA: 0.00,
      },
    ],
    threeYearAvg: {
      englishC: 85.68,
      listeningC: 89.69,
      englishA: 0.00,
      mathC: 84.73,
      mathA: 0.00,
    },
    counts115: { englishC: 59, mathC: 57 },
    ministryFocus: {
      inListReason: '英語、數學科連續三年待加強比率超過 50%',
      threeYearTrend: '英語先降後升；數學先降後升（附冊表 3、表 4）',
      problemPattern: '雙科長期偏高',
      dataHighlights:
        '英語、數學三年平均分別為 85.68% 及 84.73%，115 年待加強人數分別為 59 人及 57 人，均為全縣最多；英、數精熟率三年皆為 0。',
      ministryReportNotes:
        '屬非偏遠學校，教育部建議列為差異化診斷對象，並列為「跨科目長期偏高」之深度診斷示例學校。',
    },
    teacherStats: {
      mathNonSpecialistRate: 41.0,
      mathNonSpecialistNotes: '其中 25 節由正式教師非專長授課',
    },
    supportCoverageGrade9: '九年級受輔約占篩選未通過人數六至七成',
    earlyWarning: {
      grade8EnglishFailRate: 66.2,
      grade7EnglishFailRate: 81.6,
      warningNotes: '202605 八年級英語未通過率 66.2% 為全縣最高（七年級時為 81.6%，已見下降趨勢）',
    },
    expectedResponses: [
      {
        tag: '學扶涵蓋',
        content:
          '九年級受輔約占篩選未通過人數六至七成，且英、數待加強人數均為全縣最多。建議學校盤點未受輔學生之原因（時段、交通、家長意願等），訂定九年級未通過學生全數受輔之目標，並說明出席及成長測驗情形。',
      },
      {
        tag: '數學師資',
        content:
          '數學非專長授課節數比 41.0%，其中 25 節由正式教師非專長授課。建議檢視校內配課，優先由數學專長教師任教八、九年級。',
      },
      {
        tag: '英語聽力與 116 年預警',
        content:
          '202605 八年級（116 年會考考生）英語年級未通過率 66.2%，為全縣最高，惟該屆七年級時為 81.6%，已見下降。建議整理該屆英語有效作法並延續至九年級，課堂每週固定安排聽力練習。',
      },
    ],
  },
  {
    id: 'fuyuan',
    name: '富源國中',
    category: '偏遠',
    scale: '小校',
    candidateCount115: 10,
    history: [
      {
        year: '113年',
        englishC: 81.25,
        englishCCount: 13,
        listeningC: 81.25,
        englishA: 0.00,
        mathC: 75.00,
        mathCCount: 12,
        mathA: 0.00,
      },
      {
        year: '114年',
        englishC: 75.00,
        englishCCount: 12,
        listeningC: 81.25,
        englishA: 0.00,
        mathC: 68.75,
        mathCCount: 11,
        mathA: 0.00,
      },
      {
        year: '115年',
        englishC: 90.00,
        englishCCount: 9,
        listeningC: 100.00,
        englishA: 0.00,
        mathC: 100.00,
        mathCCount: 10,
        mathA: 0.00,
      },
    ],
    threeYearAvg: {
      englishC: 82.08,
      listeningC: 87.50,
      englishA: 0.00,
      mathC: 81.25,
      mathA: 0.00,
    },
    counts115: { englishC: 9, mathC: 10 },
    ministryFocus: {
      inListReason: '英語、數學科連續三年待加強比率超過 50%',
      threeYearTrend: '英語先降後升；數學先降後升（附冊表 3、表 4）',
      problemPattern: '雙科長期偏高（小樣本）',
      dataHighlights:
        '115 年英語 90.00%（9 人）、數學 100.00%（10 人）。學校規模小，請同時檢視實際人數與比率。',
      ministryReportNotes:
        '應兼顧小樣本特性及跨科學習弱點；列為「跨科目長期偏高」之深度診斷示例學校。',
    },
    teacherStats: {},
    earlyWarning: {
      grade8EnglishFailRate: 23.8,
      grade7EnglishFailRate: 57.9,
      warningNotes: '同一屆學生英語年級未通過率由七年級 57.9% 顯著降至八年級 23.8%',
    },
    expectedResponses: [
      {
        tag: '延續英語進步',
        content:
          '同一屆學生英語年級未通過率由七年級 57.9% 降至八年級 23.8%，建議整理具體作法並延續至九年級，同時檢視數學是否可比照。',
      },
    ],
  },
  {
    id: 'dongli',
    name: '東里國中',
    category: '偏遠',
    scale: '小校',
    candidateCount115: 10,
    isPassionSchool: true,
    history: [
      {
        year: '113年',
        englishC: 83.33,
        englishCCount: 10,
        listeningC: 100.00,
        englishA: 0.00,
        mathC: 66.67,
        mathCCount: 8,
        mathA: 0.00,
      },
      {
        year: '114年',
        englishC: 66.67,
        englishCCount: 8,
        listeningC: 75.00,
        englishA: 0.00,
        mathC: 66.67,
        mathCCount: 8,
        mathA: 0.00,
      },
      {
        year: '115年',
        englishC: 100.00,
        englishCCount: 9,
        listeningC: 88.89,
        englishA: 0.00,
        mathC: 100.00,
        mathCCount: 9,
        mathA: 0.00,
      },
    ],
    threeYearAvg: {
      englishC: 83.33,
      listeningC: 87.96,
      englishA: 0.00,
      mathC: 77.78,
      mathA: 0.00,
    },
    counts115: { englishC: 9, mathC: 9 },
    ministryFocus: {
      inListReason: '英語、數學科連續三年待加強比率超過 50%',
      threeYearTrend: '英語先降後升；數學先持平後升（附冊表 3、表 4）',
      problemPattern: '雙科長期偏高（小樣本）',
      dataHighlights:
        '115 年英、數待加強比率皆為 100.00%（各 9 人）；英語三年平均 83.33%。學校規模小，請同時檢視實際人數與比率。',
      ministryReportNotes:
        '英語三年平均逾八成，但非三年皆逾八成；應兼顧小樣本特性及跨科學習弱點；列為「跨科目長期偏高」之深度診斷示例學校。',
    },
    teacherStats: {
      englishSpecialistFull: true,
      mathNonSpecialistNotes: '英、數皆由正式具專長教師授課，師資配置完整',
    },
    expectedResponses: [
      {
        tag: 'PASSION 計畫資料對照',
        content:
          '本校參加國立臺灣師範大學 PASSION 計畫，未參加學習扶助，故無篩選及受輔資料。建議以 PASSION 計畫之學生診斷結果、輔導時數及前後測表現，以學生代號逐一說明待加強學生之主要學習弱點與已提供之輔導（勿列姓名），並對照會考英、數結果。',
      },
      {
        tag: '聚焦課堂教學',
        content:
          '英、數皆由正式具專長教師授課，師資配置完整，但 115 年兩科待加強比率皆為 100%。建議說明 PASSION 輔導與正式課堂之分工，並檢視課堂教學及聽力練習安排。',
      },
      {
        tag: '延續 114 年作法',
        content:
          '英語 114 年曾降至 66.67%，建議整理當年度作法（含 PASSION 輔導內容）與 115 年之差異，作為下一屆之參考。',
      },
    ],
  },
  {
    id: 'yudong',
    name: '玉東國中',
    category: '特偏',
    scale: '小校',
    candidateCount115: 14,
    isPassionSchool: true,
    history: [
      {
        year: '113年',
        englishC: 70.00,
        englishCCount: 14,
        listeningC: 75.00,
        englishA: 0.00,
        mathC: 65.00,
        mathCCount: 13,
        mathA: 5.00,
      },
      {
        year: '114年',
        englishC: 87.50,
        englishCCount: 14,
        listeningC: 93.75,
        englishA: 0.00,
        mathC: 81.25,
        mathCCount: 13,
        mathA: 0.00,
      },
      {
        year: '115年',
        englishC: 84.62,
        englishCCount: 11,
        listeningC: 76.92,
        englishA: 0.00,
        mathC: 76.92,
        mathCCount: 10,
        mathA: 0.00,
      },
    ],
    threeYearAvg: {
      englishC: 80.71,
      listeningC: 81.89,
      englishA: 0.00,
      mathC: 74.39,
      mathA: 1.67,
    },
    counts115: { englishC: 11, mathC: 10 },
    ministryFocus: {
      inListReason: '英語、數學科連續三年待加強比率超過 50%',
      threeYearTrend: '英語先升後降；數學先升後降（附冊表 3、表 4）',
      problemPattern: '雙科偏高',
      dataHighlights:
        '英語由 113 年 70.00% 升至 114 年 87.50%，115 年 84.62%；數學由 65.00% 升至 81.25%，115 年 76.92%。',
      ministryReportNotes:
        '英語三年平均 80.71%，屬三年平均逾八成之學校（非三年皆逾八成）；英、數兩科同時列入連續三年偏高名單。',
    },
    teacherStats: {
      mathNonSpecialistRate: 66.7,
      mathNonSpecialistNotes: '數學非專長授課節數比 66.7%，且皆由代理教師授課',
      englishSpecialistFull: true,
    },
    expectedResponses: [
      {
        tag: 'PASSION 計畫資料對照',
        content:
          '本校參加國立臺灣師範大學 PASSION 計畫，未參加學習扶助，故無篩選及受輔資料。建議以 PASSION 計畫之學生診斷結果、輔導時數及前後測表現說明學生學習情形，並對照會考英、數結果。',
      },
      {
        tag: '數學師資',
        content:
          '數學非專長授課節數比 66.7%，且皆由代理教師授課。建議說明 PASSION 輔導與正式課堂之分工。',
      },
      {
        tag: '變化原因與延續作法',
        content:
          '建議說明 114 年兩科同步升高之原因（屆別組成、師資異動或課程安排），以及 115 年略為下降之作法如何延續；英語師資配置完整，可聚焦聽力及課堂教學。',
      },
    ],
  },
  {
    id: 'sanmin',
    name: '三民國中',
    category: '特偏',
    scale: '小校',
    candidateCount115: 35,
    history: [
      {
        year: '113年',
        englishC: 81.58,
        englishCCount: 31,
        listeningC: 86.84,
        englishA: 2.63,
        mathC: 78.95,
        mathCCount: 30,
        mathA: 0.00,
      },
      {
        year: '114年',
        englishC: 63.64,
        englishCCount: 14,
        listeningC: 72.73,
        englishA: 0.00,
        mathC: 72.73,
        mathCCount: 16,
        mathA: 0.00,
      },
      {
        year: '115年',
        englishC: 77.14,
        englishCCount: 27,
        listeningC: 82.86,
        englishA: 2.86,
        mathC: 71.43,
        mathCCount: 25,
        mathA: 0.00,
      },
    ],
    threeYearAvg: {
      englishC: 74.12,
      listeningC: 80.81,
      englishA: 1.83,
      mathC: 74.37,
      mathA: 0.00,
    },
    counts115: { englishC: 27, mathC: 25 },
    ministryFocus: {
      inListReason: '英語、數學科連續三年待加強比率超過 50%',
      threeYearTrend: '英語先降後升；數學逐年下降（附冊表 3、表 4）',
      problemPattern: '雙科偏高；數學逐年下降',
      dataHighlights:
        '數學由 78.95% 逐年降至 71.43%；英語由 81.58% 降至 63.64% 後，115 年回升至 77.14%（27 人）。',
      ministryReportNotes:
        '英語應依各校趨勢持續追蹤；數學雖逐年下降，仍應追蹤其基礎學力支持情形。',
    },
    teacherStats: {
      englishNonSpecialistRate: 50.0,
      englishSubstituteRate: 75.0,
      mathSubstituteRate: 78.9,
      mathNonSpecialistNotes: '英語非專長 50%，英數代理節數比分別高達 75.0% 及 78.9%',
    },
    supportCoverageGrade9: '九年級受輔約占篩選未通過人數九成（全縣前段）',
    earlyWarning: {
      grade8MathFailRate: 69.7,
      grade7MathFailRate: 52.9,
      warningNotes: '同一屆學生數學年級未通過率由七年級 52.9% 攀升至八年級 69.7%（代數擴大）',
    },
    expectedResponses: [
      {
        tag: '扶助品質',
        content:
          '九年級受輔約占篩選未通過人數九成，涵蓋程度為全縣前段，但待加強比率仍逾七成。建議檢視扶助教材、分組及成長測驗結果，由「有受輔」進一步聚焦「達基礎」。',
      },
      {
        tag: '數學提前介入',
        content:
          '數學會考逐年下降，可整理有效作法；惟同一屆學生數學年級未通過率由七年級 52.9% 升至八年級 69.7%，建議數學扶助提前於七年級下學期至八年級加強代數銜接。',
      },
      {
        tag: '師資穩定',
        content:
          '英語非專長授課節數比 50.0%、代理節數比 75.0%，數學代理節數比 78.9%。建議說明代理教師之共備與交接機制，並分析英語 115 年回升是否與師資異動有關。',
      },
    ],
  },
  {
    id: 'pinghe',
    name: '平和國中',
    category: '偏遠',
    scale: '小校',
    candidateCount115: 21,
    history: [
      {
        year: '113年',
        englishC: 71.43,
        englishCCount: 20,
        listeningC: 85.71,
        englishA: 3.57,
        mathC: 64.29,
        mathCCount: 18,
        mathA: 0.00,
      },
      {
        year: '114年',
        englishC: 80.95,
        englishCCount: 17,
        listeningC: 85.71,
        englishA: 0.00,
        mathC: 90.48,
        mathCCount: 19,
        mathA: 0.00,
      },
      {
        year: '115年',
        englishC: 75.00,
        englishCCount: 15,
        listeningC: 85.00,
        englishA: 0.00,
        mathC: 60.00,
        mathCCount: 12,
        mathA: 0.00,
      },
    ],
    threeYearAvg: {
      englishC: 75.79,
      listeningC: 85.47,
      englishA: 1.19,
      mathC: 71.59,
      mathA: 0.00,
    },
    counts115: { englishC: 15, mathC: 12 },
    ministryFocus: {
      inListReason: '英語、數學科連續三年待加強比率超過 50%',
      threeYearTrend: '英語先升後降；數學先升後降（附冊表 3、表 4）',
      problemPattern: '雙科偏高；年度波動大',
      dataHighlights:
        '數學由 64.29% 升至 90.48% 後，115 年降至 60.00%；英語 71.43%、80.95%、75.00%。',
      ministryReportNotes:
        '英語應依各校趨勢持續追蹤；英、數兩科同時列入連續三年偏高名單。',
    },
    teacherStats: {
      mathNonSpecialistRate: 69.2,
      mathNonSpecialistNotes: '數學非專長授課節數比 69.2%，在待關心學校中僅次於新城國中',
    },
    supportCoverageGrade9: '九年級受輔約占篩選未通過人數九成，涵蓋程度高',
    earlyWarning: {
      grade8MathFailRate: 63.2,
      grade7MathFailRate: 29.4,
      grade8EnglishFailRate: 26.3,
      grade7EnglishFailRate: 52.9,
      warningNotes: '同一屆學生數學年級未通過率由七年級 29.4% 暴升至八年級 63.2%（英語則降至 26.3%）',
    },
    expectedResponses: [
      {
        tag: '扶助成效',
        content:
          '九年級受輔約占篩選未通過人數九成，涵蓋程度高。建議說明受輔學生之成長情形，以及 115 年數學明顯改善之作法。',
      },
      {
        tag: '數學預警',
        content:
          '同一屆學生數學年級未通過率由七年級 29.4% 升至八年級 63.2%（英語則由 52.9% 降至 26.3%），116 年數學可能回升，建議及早加強，並分析年度波動與各屆組成之關聯。',
      },
      {
        tag: '數學師資',
        content:
          '數學非專長授課節數比 69.2%，在待關心學校中僅次於新城國中。建議檢視教學支援。',
      },
    ],
  },
  {
    id: 'fuli',
    name: '富里國中',
    category: '偏遠',
    scale: '小校',
    candidateCount115: 28,
    history: [
      {
        year: '113年',
        englishC: 79.17,
        englishCCount: 19,
        listeningC: 62.50,
        englishA: 0.00,
        mathC: 70.83,
        mathCCount: 17,
        mathA: 0.00,
      },
      {
        year: '114年',
        englishC: 58.62,
        englishCCount: 17,
        listeningC: 68.97,
        englishA: 0.00,
        mathC: 51.72,
        mathCCount: 15,
        mathA: 0.00,
      },
      {
        year: '115年',
        englishC: 82.14,
        englishCCount: 23,
        listeningC: 89.29,
        englishA: 0.00,
        mathC: 57.14,
        mathCCount: 16,
        mathA: 0.00,
      },
    ],
    threeYearAvg: {
      englishC: 73.31,
      listeningC: 73.59,
      englishA: 0.00,
      mathC: 59.90,
      mathA: 0.00,
    },
    counts115: { englishC: 23, mathC: 16 },
    ministryFocus: {
      inListReason: '英語、數學科連續三年待加強比率超過 50%',
      threeYearTrend: '英語先降後升；數學先降後升（附冊表 3、表 4）',
      problemPattern: '雙科偏高；英語明顯回升',
      dataHighlights:
        '英語由 114 年 58.62% 回升至 115 年 82.14%，待加強人數 23 人；數學三年平均 59.90%。',
      ministryReportNotes:
        '列為「年度回升」學校，建議依待加強人數、落差形成階段、師資及學習扶助情形進行差異化診斷。',
    },
    teacherStats: {
      mathNonSpecialistRate: 57.9,
      mathNonSpecialistNotes: '主要為正式教師非專長授課，需說明配課原因',
      englishSpecialistFull: true,
    },
    earlyWarning: {
      grade8EnglishFailRate: 56.0,
      warningNotes: '202505 八年級英語未通過率 56.0%，會考待加強 82.1%，約 1/4 學生未被辨識',
    },
    expectedResponses: [
      {
        tag: '英語辨識缺口',
        content:
          '202505 八年級英語篩選年級未通過率 56.0%，會考待加強 82.1%，約四分之一學生未於八年級被辨識。建議檢視提報人數是否足夠，並於九年級補辨識、補受輔。',
      },
      {
        tag: '英語師資完整、聚焦課堂',
        content:
          '英語皆由正式具專長教師授課，115 年英語大幅回升且聽力待加強率升至 89.29%，建議檢視課程與聽力教學安排，以及 114 年較佳作法是否中斷。',
      },
      {
        tag: '數學配課',
        content:
          '數學非專長授課節數比 57.9%，主要為正式教師非專長授課，建議說明配課原因。',
      },
    ],
  },
  {
    id: 'ruisui',
    name: '瑞穗國中',
    category: '偏遠',
    scale: '中校',
    candidateCount115: 45,
    history: [
      {
        year: '113年',
        englishC: 68.66,
        englishCCount: 46,
        listeningC: 77.27,
        englishA: 1.49,
        mathC: 67.16,
        mathCCount: 45,
        mathA: 0.00,
      },
      {
        year: '114年',
        englishC: 71.43,
        englishCCount: 40,
        listeningC: 78.57,
        englishA: 1.79,
        mathC: 67.86,
        mathCCount: 38,
        mathA: 1.79,
      },
      {
        year: '115年',
        englishC: 73.17,
        englishCCount: 30,
        listeningC: 78.05,
        englishA: 0.00,
        mathC: 74.42,
        mathCCount: 32,
        mathA: 0.00,
      },
    ],
    threeYearAvg: {
      englishC: 71.09,
      listeningC: 77.96,
      englishA: 1.09,
      mathC: 69.81,
      mathA: 0.60,
    },
    counts115: { englishC: 30, mathC: 32 },
    ministryFocus: {
      inListReason: '英語、數學科連續三年待加強比率超過 50%',
      threeYearTrend: '英語先升後持平；數學先持平後升（附冊表 3、表 4）',
      problemPattern: '雙科緩步上升',
      dataHighlights:
        '英語由 68.66% 升至 73.17%，數學由 67.16% 升至 74.42%，兩科皆呈上升。',
      ministryReportNotes:
        '英語應依各校趨勢持續追蹤；英、數兩科同時列入連續三年偏高名單。',
    },
    teacherStats: {
      mathNonSpecialistRate: 55.6,
      englishSubstituteRate: 50.0,
      mathNonSpecialistNotes: '數學非專長授課節數比 55.6%，英語代理節數比 50.0%',
    },
    supportCoverageGrade9: '九年級受輔約占篩選未通過人數六至七成',
    expectedResponses: [
      {
        tag: '學扶涵蓋',
        content:
          '九年級受輔約占篩選未通過人數六至七成，相對於兩科緩步上升之趨勢仍有不足。建議盤點未受輔原因，提高涵蓋率，並說明出席及成長情形。',
      },
      {
        tag: '數學師資',
        content:
          '數學非專長授課節數比 55.6%，英語代理節數比 50.0%。建議說明配課與代理教師支持方式。',
      },
      {
        tag: '及早預警',
        content:
          '建議以七、八年級篩選結果建立校內預警名單，於八年級即啟動加強，並說明兩科緩步上升之可能原因。',
      },
    ],
  },
  {
    id: 'xincheng',
    name: '新城國中',
    category: '非偏遠',
    scale: '中校',
    candidateCount115: 56,
    history: [
      {
        year: '113年',
        englishC: 76.12,
        englishCCount: 51,
        listeningC: 74.63,
        englishA: 1.49,
        mathC: 65.67,
        mathCCount: 44,
        mathA: 0.00,
      },
      {
        year: '114年',
        englishC: 79.37,
        englishCCount: 50,
        listeningC: 87.30,
        englishA: 3.17,
        mathC: 71.88,
        mathCCount: 46,
        mathA: 0.00,
      },
      {
        year: '115年',
        englishC: 71.70,
        englishCCount: 38,
        listeningC: 73.58,
        englishA: 1.89,
        mathC: 68.52,
        mathCCount: 37,
        mathA: 3.70,
      },
    ],
    threeYearAvg: {
      englishC: 75.73,
      listeningC: 78.50,
      englishA: 2.18,
      mathC: 68.69,
      mathA: 1.23,
    },
    counts115: { englishC: 38, mathC: 37 },
    ministryFocus: {
      inListReason: '英語、數學科連續三年待加強比率超過 50%',
      threeYearTrend: '英語先升後降；數學先升後降（附冊表 3、表 4）',
      problemPattern: '非偏遠學校雙科持續偏高',
      dataHighlights:
        '英語三年平均 75.73%，數學三年平均 68.69%，雖非偏遠學校，兩科仍持續偏高。',
      ministryReportNotes:
        '教育部指出英語支持對象不宜僅限偏遠學校；列為差異化診斷對象，並列為「非偏遠學校持續偏高」之深度診斷示例學校。',
    },
    teacherStats: {
      mathNonSpecialistRate: 85.2,
      mathSubstituteRate: 85.2,
      mathNonSpecialistNotes: '數學 54 節中有 46 節由非專長代理教師授課（85.2%），為全縣最高！',
    },
    supportCoverageGrade9: '英語待加強約 40 人，惟 114 年 12 月九年級英語受輔僅 2 人！',
    earlyWarning: {
      grade8MathFailRate: 75.4,
      warningNotes: '202605 八年級數學年級未通過率高達 75.4%，亟需提前啟動扶助',
    },
    expectedResponses: [
      {
        tag: '英語受輔偏低',
        content:
          '英語待加強約 40 人，惟 114 年 12 月九年級英語受輔僅 2 人。建議說明開班限制（師資、時段、學生意願），擴大英語扶助。',
      },
      {
        tag: '數學師資',
        content:
          '數學 54 節中有 46 節由非專長代理教師授課（85.2%），為全縣最高。建議說明代理教師之教學支持方式。',
      },
      {
        tag: '116 年預警與評量',
        content:
          '202605 八年級數學年級未通過率 75.4%，建議提前啟動數學扶助；並檢視校內定期評量能否及早反映學生基礎能力弱點。',
      },
    ],
  },
  {
    id: 'meilun',
    name: '美崙國中',
    category: '非偏遠',
    scale: '中校',
    candidateCount115: 84,
    history: [
      {
        year: '113年',
        englishC: 64.81,
        englishCCount: 70,
        listeningC: 71.30,
        englishA: 0.93,
        mathC: 67.89,
        mathCCount: 74,
        mathA: 2.75,
      },
      {
        year: '114年',
        englishC: 65.45,
        englishCCount: 72,
        listeningC: 72.73,
        englishA: 4.55,
        mathC: 62.73,
        mathCCount: 69,
        mathA: 2.73,
      },
      {
        year: '115年',
        englishC: 63.29,
        englishCCount: 50,
        listeningC: 72.15,
        englishA: 5.06,
        mathC: 56.79,
        mathCCount: 46,
        mathA: 2.47,
      },
    ],
    threeYearAvg: {
      englishC: 64.52,
      listeningC: 72.06,
      englishA: 3.51,
      mathC: 62.47,
      mathA: 2.65,
    },
    counts115: { englishC: 50, mathC: 46 },
    ministryFocus: {
      inListReason: '英語、數學科連續三年待加強比率超過 50%',
      threeYearTrend: '英語先持平後降；數學逐年下降（附冊表 3、表 4）',
      problemPattern: '非偏遠學校雙科偏高；數學逐年下降',
      dataHighlights:
        '數學由 67.89% 逐年降至 56.79%；英語約六成五持平（115 年 63.29%，50 人）。',
      ministryReportNotes:
        '屬非偏遠學校，英語三年平均 64.52%；數學雖逐年下降，仍應追蹤其基礎學力支持情形。',
    },
    teacherStats: {
      englishSubstituteRate: 74.1,
      mathSubstituteRate: 78.9,
      mathNonSpecialistNotes: '英語代理節數比 74.1%、數學 78.9%，英數皆以代理教師為主，師資穩定度為明顯風險',
    },
    supportCoverageGrade9: '九年級受輔約占篩選未通過人數九成，涵蓋程度高',
    earlyWarning: {
      grade8EnglishFailRate: 57.6,
      warningNotes: '英語聽力待加強率逾七成，且 202605 八年級英語未通過率達 57.6%',
    },
    expectedResponses: [
      {
        tag: '延續數學作法',
        content:
          '九年級受輔約占篩選未通過人數九成，涵蓋程度高；數學逐年下降，建議整理有效作法，評估延伸至英語科。',
      },
      {
        tag: '師資穩定',
        content:
          '英語代理節數比 74.1%、數學 78.9%，英數皆以代理教師為主，師資穩定度為明顯風險。建議建立代理教師共備與教材傳承機制。',
      },
      {
        tag: '英語聽力與 116 年預警',
        content:
          '英語聽力待加強率逾七成，且 202605 八年級英語年級未通過率 57.6%。建議說明課堂聽力教學安排；校內社群（現以閱讀為主）可增加英語會考作答診斷與聽力共備場次。',
      },
    ],
  },
  {
    id: 'huaren',
    name: '化仁國中',
    category: '非偏遠',
    scale: '中校',
    candidateCount115: 80,
    history: [
      {
        year: '113年',
        englishC: 59.62,
        englishCCount: 62,
        listeningC: 66.67,
        englishA: 5.77,
        mathC: 59.62,
        mathCCount: 62,
        mathA: 4.81,
      },
      {
        year: '114年',
        englishC: 64.84,
        englishCCount: 59,
        listeningC: 76.92,
        englishA: 1.10,
        mathC: 48.35,
        mathCCount: 44,
        mathA: 1.10,
      },
      {
        year: '115年',
        englishC: 78.48,
        englishCCount: 62,
        listeningC: 78.48,
        englishA: 2.53,
        mathC: 53.16,
        mathCCount: 42,
        mathA: 3.80,
      },
    ],
    threeYearAvg: {
      englishC: 67.65,
      listeningC: 74.02,
      englishA: 3.13,
      mathC: 53.71,
      mathA: 3.24,
    },
    counts115: { englishC: 62, mathC: 42 },
    ministryFocus: {
      inListReason: '英語科連續三年待加強比率超過 50%',
      threeYearTrend: '英語逐年上升（附冊表 3、表 4）',
      problemPattern: '非偏遠學校英語逐年上升',
      dataHighlights:
        '英語由 113 年 59.62% 逐年上升至 115 年 78.48%，待加強人數 62 人；數學 115 年 53.16%。',
      ministryReportNotes:
        '列為差異化診斷對象，並列為「非偏遠學校上升」之深度診斷示例學校。',
    },
    teacherStats: {
      englishNonSpecialistRate: 43.8,
      mathNonSpecialistNotes: '英語非專長授課節數比 43.8%（待加強暴增至78.5%）；數學具專長比高達 85.7%（待加強僅53.2%）',
    },
    earlyWarning: {
      grade8MathFailRate: 78.6,
      grade7MathFailRate: 63.2,
      warningNotes: '202605 八年級數學年級未通過率 78.6% 為全縣最高！同一屆由七年級 63.2% 劇增 15.4 個百分點',
    },
    expectedResponses: [
      {
        tag: '英語師資',
        content:
          '英語非專長授課節數比 43.8%，英語待加強由 59.6% 逐年升至 78.5%；數學具專長比 85.7%、待加強 53.2%，兩科對照與師資配置方向一致。建議優先檢視英語配課。',
      },
      {
        tag: '英語轉介與受輔',
        content:
          '建議說明英語篩選未通過學生之轉介、受輔及成長測驗情形，確認扶助是否涵蓋需求。',
      },
      {
        tag: '116 年數學預警',
        content:
          '202605 八年級數學年級未通過率 78.6% 為全縣最高，且同一屆由七年級 63.2% 上升 15.4 個百分點，116 年數學可能回升。建議本學年即及早介入。',
      },
    ],
  },
  {
    id: 'jian',
    name: '吉安國中',
    category: '非偏遠',
    scale: '中校',
    candidateCount115: 75,
    history: [
      {
        year: '113年',
        englishC: 48.61,
        englishCCount: 35,
        listeningC: 63.89,
        englishA: 2.78,
        mathC: 65.28,
        mathCCount: 47,
        mathA: 2.78,
      },
      {
        year: '114年',
        englishC: 64.91,
        englishCCount: 37,
        listeningC: 73.68,
        englishA: 1.75,
        mathC: 64.91,
        mathCCount: 37,
        mathA: 3.51,
      },
      {
        year: '115年',
        englishC: 69.01,
        englishCCount: 49,
        listeningC: 71.83,
        englishA: 1.41,
        mathC: 81.69,
        mathCCount: 58,
        mathA: 0.00,
      },
    ],
    threeYearAvg: {
      englishC: 60.84,
      listeningC: 69.80,
      englishA: 1.98,
      mathC: 70.63,
      mathA: 2.10,
    },
    counts115: { englishC: 49, mathC: 58 },
    ministryFocus: {
      inListReason: '數學科連續三年待加強比率超過 50%',
      threeYearTrend: '數學先持平後升（附冊表 3、表 4）',
      problemPattern: '非偏遠學校數學明顯回升',
      dataHighlights:
        '數學由 114 年 64.91% 上升至 115 年 81.69%，待加強人數 58 人；英語亦由 48.61% 逐年上升至 69.01%。',
      ministryReportNotes:
        '變化幅度與實際人數值得優先檢視；列為差異化診斷對象，並列為「數學明顯回升」之深度診斷示例學校。',
    },
    teacherStats: {
      englishNonSpecialistRate: 40.0,
      englishSubstituteRate: 60.0,
      mathNonSpecialistNotes: '英語非專長授課節數比 40.0%、代理節數比 60.0%，可檢視是否為英語逐年上升之共同成因',
    },
    supportCoverageGrade9: '數學待加強約 61 人，惟 114 年 12 月九年級數學受輔僅 15 人！',
    earlyWarning: {
      grade8EnglishFailRate: 35.7,
      grade7EnglishFailRate: 62.7,
      warningNotes: '同一屆學生英語年級未通過率由七年級 62.7% 降至八年級 35.7%，顯示英語扶助有成效可延續',
    },
    expectedResponses: [
      {
        tag: '數學受輔偏低',
        content:
          '數學待加強約 61 人，惟 114 年 12 月九年級數學受輔僅 15 人，可能與 115 年數學明顯回升有關。建議擴大九年級數學扶助，並說明屆別組成或師資異動之影響。',
      },
      {
        tag: '英語師資',
        content:
          '英語非專長授課節數比 40.0%、代理節數比 60.0%，可檢視是否為英語逐年上升之共同成因。',
      },
      {
        tag: '延續英語進步',
        content:
          '同一屆學生英語年級未通過率由七年級 62.7% 降至八年級 35.7%，建議整理作法並延續至九年級。',
      },
    ],
  },
  {
    id: 'guangfu',
    name: '光復國中',
    category: '偏遠',
    scale: '中校',
    candidateCount115: 66,
    history: [
      {
        year: '113年',
        englishC: 76.47,
        englishCCount: 50,
        listeningC: 76.47,
        englishA: 0.00,
        mathC: 60.78,
        mathCCount: 31,
        mathA: 1.96,
      },
      {
        year: '114年',
        englishC: 50.00,
        englishCCount: 33,
        listeningC: 58.93,
        englishA: 3.57,
        mathC: 53.57,
        mathCCount: 30,
        mathA: 1.79,
      },
      {
        year: '115年',
        englishC: 80.00,
        englishCCount: 53,
        listeningC: 86.15,
        englishA: 1.54,
        mathC: 76.92,
        mathCCount: 50,
        mathA: 1.54,
      },
    ],
    threeYearAvg: {
      englishC: 68.82,
      listeningC: 73.85,
      englishA: 1.70,
      mathC: 63.76,
      mathA: 1.76,
    },
    counts115: { englishC: 53, mathC: 50 },
    ministryFocus: {
      inListReason: '數學科連續三年待加強比率超過 50%',
      threeYearTrend: '數學先降後升（附冊表 3、表 4）',
      problemPattern: '數學明顯回升',
      dataHighlights:
        '數學由 114 年 53.57% 回升至 115 年 76.92%，待加強人數由 30 人增為 50 人；英語亦由 50.00% 回升至 80.00%。',
      ministryReportNotes:
        '變化幅度與實際人數值得優先檢視；列為「年度回升」學校，並列為「數學明顯回升」之深度診斷示例學校。',
    },
    teacherStats: {
      englishSpecialistFull: true,
      mathNonSpecialistNotes: '英語皆由正式具專長教師授課，待加強仍達 80%，需轉化教學模式與聽力共備',
    },
    supportCoverageGrade9: '九年級受輔約占篩選未通過人數六至七成',
    earlyWarning: {
      grade8EnglishFailRate: 49.0,
      grade7EnglishFailRate: 66.7,
      warningNotes: '同一屆學生英語年級未通過率由七年級 66.7% 降至八年級 49.0%，但會考待加強仍高達 80%',
    },
    expectedResponses: [
      {
        tag: '學扶涵蓋',
        content:
          '九年級受輔約占篩選未通過人數六至七成，建議提高涵蓋率，並說明 115 年兩科同步回升之原因。',
      },
      {
        tag: '英語師資完整、聚焦課堂與社群',
        content:
          '英語皆由正式具專長教師授課，待加強仍達 80%。建議「英文新思維共備社群」全年至少安排 2 場會考或 KIDMAP 作答診斷，並加入聽力教學共備。',
      },
      {
        tag: '延續作法',
        content:
          '同一屆學生英語年級未通過率由七年級 66.7% 降至八年級 49.0%；114 年兩科表現較佳，建議整理當年作法是否延續。',
      },
    ],
  },
];

export const eightMajorIssues: IssueRecommendation[] = [
  {
    id: 1,
    title: '待加強比率長期偏高、跨科目，且不限於偏遠學校',
    category: '結構性學力落差',
    currentStatus:
      '115 年英語待加強比率 46.15%、數學 39.40%，分別較全國高 16.84 及 14.13 個百分點。英語 11 校、數學 12 校連續三年超過 50%，其中 10 校兩科同時列入。偏遠學校占全縣 44.00%（全國 22.80%），但待關心學校中英、數各有 4 校屬非偏遠中大型學校（如秀林、新城、美崙、化仁、吉安）；小型學校三年平均英語 72.32%、數學 68.14%。',
    schoolGuidance:
      '依待加強人數、比率及歷年變化進行校內診斷，說明學習落差主要形成階段（國小、七年級、八年級）及跨科共同成因；小校請以學生代號逐一追蹤診斷，避免僅以百分比判斷造成誤判。',
    evidence: [
      '花蓮縣 115 年英語待加強率 46.15%（全國 29.33%，差距 +16.82 個百分點）',
      '花蓮縣 115 年數學待加強率 39.40%（全國 25.21%，差距 +14.19 個百分點）',
      '連續三年英數雙科 C 率破 50% 學校高達 10 所',
      '待關心中英、數各有 4 所為非偏遠中型學校，待加強學生人數居高不下（秀林英 59 人、數 57 人，化仁英 62 人，吉安數 58 人）',
    ],
    actionPillars: [
      {
        title: '分層差異化診斷',
        details: '中校看人數規模（解決大班後段滯留），小校看學生個案歷程（代號個案會議追蹤）。',
        targetRole: '教務處',
      },
      {
        title: '跨科共同成因檢視',
        details: '檢視英數雙低學生的讀題理解能力、課堂專注度與家庭學習支持系統。',
        targetRole: '教學組/領域社群',
      },
      {
        title: '落差階段回溯追溯',
        details: '回查學生國小畢業時之學力起點，確認落差是國小未結清或國中代數/語法斷層。',
        targetRole: '輔導室/學扶任課',
      },
    ],
  },
  {
    id: 2,
    title: '學習扶助之辨識、轉介與追蹤機制',
    category: '學習扶助預警',
    currentStatus:
      '教育部以「受測人數」為分母，八年級篩選未通過率與會考待加強率校際相關接近 0（英語 -0.07、數學 0.09）；縣府改以「全年級學生數」為分母，同一屆相關高達英語 +0.79、數學 +0.82，證明篩選測驗具強大預警價值！但現況有兩大漏接：1. 八年級被辨識率不足（英語僅 65%、數學 80% 待加強學生被抓出）；2. 九年級實際受輔率僅約五成，已辨識者流失嚴重；成長測驗進步率與會考關聯未明。全縣受輔率英語 64.76%、數學 68.30%，開辦率 94.40%。',
    schoolGuidance:
      '逐一清查篩選未通過學生之轉介、實際參與、缺課、退出及前後測成效；九年級啟動補辨識、補受輔；以「年級未通過率」及「受輔涵蓋率」作為校內自我檢核指標。',
    evidence: [
      '縣府改以全年級學生數為分母，相關係數跳升至 0.79（英語）與 0.82（數學）',
      '會考待加強學生於八年級被辨識者：英語 65%、數學 80%',
      '已辨識學生於九年級實際受輔僅約五成，出現龐大輔導斷層',
      '新城英語待加強約 40 人，九年級受輔僅 2 人；吉安數學待加強約 61 人，九年級受輔僅 15 人',
    ],
    actionPillars: [
      {
        title: '建立年級未通過率檢核表',
        details: '不再以班級通報人數自滿，改用「全年級實有人數」作為分母清查未過率。',
        targetRole: '教務處',
      },
      {
        title: '九年級無縫補辨識補受輔',
        details: '針對七、八年級漏接或九年級新落後學生，以形成性評量及導師推薦啟動自辦補測與專班受輔。',
        targetRole: '輔導室/學扶任課',
      },
      {
        title: '清查退出與缺課主因',
        details: '排除技藝教育衝突、交通接送障礙與課後家長意願，由「有受輔」精進為「達基礎」。',
        targetRole: '任課教師',
      },
    ],
  },
  {
    id: 3,
    title: '累積性學力落差與國中小銜接',
    category: '學習進程斷層',
    currentStatus:
      '英語、數學基礎學力具高度累積性。教育部建議整合國小高年級至國中九年級之篩選、成長測驗及形成性評量資料。縣府同一屆追蹤發現，七年級至八年級英語未通過率多數下降，但數學則多數上升！顯示數學落差於八年級進入代數（一元二次方程式、函數、幾何推理）等抽象內容後急遽擴大。',
    schoolGuidance:
      '數學扶助提前於七年級下學期至八年級加強代數銜接；與學區國小建立英、數基礎能力銜接機制與教學交流。',
    evidence: [
      '平和國中同一屆數學未通過率由七年級 29.4% 暴升至八年級 63.2%（劇升 33.8%）',
      '化仁國中同一屆數學未通過率由七年級 63.2% 攀升至八年級 78.6%（升 15.4%）',
      '三民國中數學未通過率由七年級 52.9% 升至八年級 69.7%',
    ],
    actionPillars: [
      {
        title: '七下關鍵期提前介入',
        details: '不等八年級篩選測驗結果，七年級下學期針對一元一次方程式與正負數運算弱點提前補強。',
        targetRole: '教學組/領域社群',
      },
      {
        title: '國中小學區垂直共備',
        details: '與學區國小召開英數銜接會議，對齊國小高年級分數小數運算與英語自然發音/基礎字彙。',
        targetRole: '教務處',
      },
      {
        title: '代數具象化教學鷹架',
        details: '數學課堂多採用具象幾何拼圖、數線模型與生活化情境，降低進入抽象代數時的認知負載。',
        targetRole: '任課教師',
      },
    ],
  },
  {
    id: 4,
    title: '師資結構與教學專業支持',
    category: '師資質量與配課',
    currentStatus:
      '教育部分析全縣層級相關係數有限，但縣府深入 13 所待關心學校分析發現：數學非專長授課節數比高達 48.4%，遠高於其他學校之 33.5%！新城國中數學 54 節中有 46 節由非專長代理教師授課（85.2%）；美崙國中英語代理 74.1%、數學代理 78.9%；平和數學非專長 69.2%；玉東數學非專長 66.7%。非專長與代理高比例造成教學法不熟稔與師資頻繁異動。',
    schoolGuidance:
      '盤點英、數正式與代理教師、專長授課、教師異動及跨校兼課情形，說明代理及非專長授課教師之共備與教學支持方式；優先由專長教師任教八、九年級。',
    evidence: [
      '13 所待關心學校數學非專長授課比 48.4%，對比其他學校 33.5%（差距達 14.9 個百分點）',
      '新城國中數學非專長代理高達 85.2%（46/54節）',
      '美崙國中英數代理比例分別高達 74.1% 與 78.9%',
      '化仁國中強烈對照：英非專長 43.8%（C率 78.5%），數專長 85.7%（C率僅 53.2%）',
    ],
    actionPillars: [
      {
        title: '高年級專長配課優先制',
        details: '檢視校內配課邏輯，嚴格落實由專長正式教師任教面臨會考之八、九年級。',
        targetRole: '教務處',
      },
      {
        title: '代理與非專長專屬陪伴共備',
        details: '指派資深專長教師實施一對一協同備課、提供成熟進度教案與試卷庫，減輕備課孤立感。',
        targetRole: '教學組/領域社群',
      },
      {
        title: '跨校區域巡迴專長輔導',
        details: '針對小型學校引進縣級輔導團到校諮詢，或採數位跨校共備支持偏遠師資。',
        targetRole: '教務處',
      },
    ],
  },
  {
    id: 5,
    title: '英語聽力落差顯著，成為待加強關鍵主因',
    category: '學科關鍵瓶頸',
    currentStatus:
      '115 年全縣英語聽力待加強比率 51.26%，較全國 33.71% 高出 17.55 個百分點，城鄉差距大於英語閱讀與總體表現！更驚人的是，13 所待關心學校之聽力待加強比率全數超過七成（富源 100%、東里 88.9%、富里 89.3%、秀林 87.0%、光復 86.2%）。學生在英語課堂長期缺乏高頻聽力輸入，聽力未過直接拉低整份會考成績。',
    schoolGuidance:
      '說明課堂每週聽力教學時間與具體方式，建立「課堂每週固定聽力練習機制」，並將聽力明確納入學習扶助與平時評量內容。',
    evidence: [
      '全縣英語聽力待加強 51.26%（差距 +17.55 個百分點，為所有指標中落後全國最多項目）',
      '13 所待關心學校聽力待加強率均逾 70%',
      '東里國中英聽 88.89%、富里國中 89.29%、秀林國中 86.96%、光復國中 86.15%',
    ],
    actionPillars: [
      {
        title: '課堂固定聽力常態化（每週至少 20 分鐘）',
        details: '每堂英文課開課前 5~10 分鐘實施會考常態語速對話或聽力微測驗，養成辨音習慣。',
        targetRole: '任課教師',
      },
      {
        title: '聽力教材納入學習扶助',
        details: '改寫傳統學扶純文字紙筆閱讀刷題模式，配發耳機使用會考英聽題庫進行關鍵字辨認。',
        targetRole: '輔導室/學扶任課',
      },
      {
        title: '善用情境口語與生活語料',
        details: '利用酷英（CoolENG）語音聽力單元或日常廣播英語，營造沉浸式聽覺刺激。',
        targetRole: '教學組/領域社群',
      },
    ],
  },
  {
    id: 6,
    title: '校內定期評量與會考標準脫節',
    category: '評量機制與鑑別度',
    currentStatus:
      '113 學年度九年級數學校內不及格率 27.08%，但同屆 114 年會考數學待加強比率高達 39.83%，相差 12.75 個百分點！學校段考往往考記憶題、單一步驟算式，學生校內及格，卻在會考綜合素養長文題型與非選題直接失分，導致學校無法在校內及早敲響警鐘。',
    schoolGuidance:
      '檢視段考試題難易度、雙向細目表、評量範圍、補考及成績判定標準，結合平時形成性評量與篩選測驗結果，建立校內「基礎學力預警名單」。',
    evidence: [
      '113 學年九年級校內不及格率 27.08% vs 114 年會考待加強率 39.83%（相差 12.75 百分點）',
      '學生校內段考及格但會考落入 C 等級，造成「虛假安全感」',
      '定期評量缺乏素養導向與跨單元綜合題，難以預測會考表現',
    ],
    actionPillars: [
      {
        title: '段考試題對標會考細目',
        details: '領域社群審題落實難易度配比（基礎 50%、中等 30%、難 20%），融入圖表素養題。',
        targetRole: '教學組/領域社群',
      },
      {
        title: '建立雙軌基礎學力預警',
        details: '當校內段考成績與篩選測驗不一致時，以較低者納入預警，避免分數失真掩蓋弱點。',
        targetRole: '教務處',
      },
      {
        title: '非選擇題表達與計算訓練',
        details: '數學平時考嚴格要求書寫計算步驟與幾何說明，避免因會考非選空白直接失分。',
        targetRole: '任課教師',
      },
    ],
  },
  {
    id: 7,
    title: '作答診斷（KIDMAP）與迷思概念之教學轉化不足',
    category: '認知診斷與共備轉化',
    currentStatus:
      '教育部與心理測驗中心大力推廣 KIDMAP 作答診斷，能將學生每個作答反應定位在知識結構樹與錯誤迷思概念。然而縣府盤點各校社群資料發現：多數重點學校之教師社群偏向校本特色或跨領域美感課程，極少聚焦於國中教育會考英數試題分析或 KIDMAP 診斷結果轉化！缺乏將診斷結果轉化為客製教材與補強任務的閉環。',
    schoolGuidance:
      '英、數社群全年至少安排 2 場會考或 KIDMAP 作答診斷、學習扶助追蹤場次，並具體說明診斷結果如何轉化為課堂教材調整與補強微任務。',
    evidence: [
      'KIDMAP 能精準標記學生答題軌跡與落點能力值（https://sohofly.github.io/teaching-diagnosis/）',
      '重點學校多數領域社群未將會考數據與 KIDMAP 報告納入固定備課議程',
      '診斷停留在紙本列印，缺乏與課堂例題或晨讀微測驗的連動教材',
    ],
    actionPillars: [
      {
        title: '每學期 2 場 KIDMAP 診斷專題社群',
        details: '由社群召集人下載心測中心答題統計與 KIDMAP 分布，逐題剖析本校學生主要集體盲點。',
        targetRole: '教學組/領域社群',
      },
      {
        title: '錯題迷思概念教具化/模組化',
        details: '針對全校高頻錯題（如負數乘除、相似形比例、英語時態混淆），製作 5 分鐘概念翻轉教材。',
        targetRole: '任課教師',
      },
      {
        title: '學生個人作答畫像反饋',
        details: '透過 KIDMAP 個人診斷圖，讓學生清楚看見自己「已掌握」與「即將突破」的單元，重建信心。',
        targetRole: '輔導室/學扶任課',
      },
    ],
  },
  {
    id: 8,
    title: '數位學習平台之有效使用（重質不重量）',
    category: '數位科技化精準扶助',
    currentStatus:
      'CoolENG 使用時數與英語待加強比率呈正相關 0.49（使用時數高反而C率高，係因多為後段補救班被動刷時數）；因材網與英、數待加強比率相關為 -0.15 及 -0.24。單純考核登入次數或掛機時數無法反映平台效果，甚至造成師生形式主義負擔。',
    schoolGuidance:
      '聚焦數位學習平台之「弱點診斷」、「個別化任務指派」、「教師及時回饋」及「前後測對照」，嚴禁以登入次數或掛機時數作為學習成效指標。',
    evidence: [
      'CoolENG 時數與待加強率正相關 0.49（反映補救需求，非因果反向）',
      '因材網負相關 -0.15/-0.24，顯示適性派題對數學觀念有穩定助益',
      '若缺乏教師引導與回饋，單純自主刷題對低成就學生效果有限',
    ],
    actionPillars: [
      {
        title: '目標導向派題取代時數KPI',
        details: '依據篩選測驗與 KIDMAP 弱點，每週指派 1~2 個具體微單元節點任務，完成即過關。',
        targetRole: '任課教師',
      },
      {
        title: '因材網節點診斷與星空圖自檢',
        details: '利用因材網知識節點路徑，回溯補救國小斷層（例如分數運算未通直接卡住方程式）。',
        targetRole: '輔導室/學扶任課',
      },
      {
        title: '班級後台即時學習儀表板',
        details: '教師在課堂上透過儀表板即時掌握哪些學生卡在同一概念，即刻啟動小組同儕指導。',
        targetRole: '教學組/領域社群',
      },
    ],
  },
];
