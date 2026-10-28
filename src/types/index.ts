export type SchoolCategory = '非偏遠' | '偏遠' | '特偏';
export type SchoolScale = '中校' | '小校';

export interface YearMetric {
  year: '113年' | '114年' | '115年';
  englishC: number; // 英語待加強率 %
  englishCCount?: number; // 英語待加強人數
  listeningC: number; // 英語聽力待加強率 %
  englishA: number; // 英語精熟率 %
  mathC: number; // 數學待加強率 %
  mathCCount?: number; // 數學待加強人數
  mathA: number; // 數學精熟率 %
}

export interface TeacherStats {
  mathNonSpecialistRate?: number; // 數學非專長授課節數比 %
  mathNonSpecialistNotes?: string;
  mathSubstituteRate?: number; // 數學代理節數比 %
  englishNonSpecialistRate?: number; // 英語非專長授課節數比 %
  englishSubstituteRate?: number; // 英語代理節數比 %
  englishSpecialistFull?: boolean; // 英語是否皆為正式具專長教師
}

export interface EarlyWarningCohort {
  grade8EnglishFailRate?: number; // 202605 八年級未通過率 %
  grade7EnglishFailRate?: number; // 該屆七年級時英語未通過率 %
  grade8MathFailRate?: number; // 202605 八年級未通過率 %
  grade7MathFailRate?: number; // 該屆七年級時數學未通過率 %
  warningNotes?: string;
}

export interface SchoolData {
  id: string;
  name: string;
  category: SchoolCategory;
  scale: SchoolScale;
  candidateCount115: number; // 115年會考人數
  // Metrics by year
  history: YearMetric[];
  // 3-year averages
  threeYearAvg: {
    englishC: number;
    listeningC: number;
    englishA: number;
    mathC: number;
    mathA: number;
  };
  // 115 Counts
  counts115: {
    englishC: number;
    mathC: number;
  };
  // Ministry of Education Focus Pattern (教育部關注樣態)
  ministryFocus: {
    inListReason: string; // 列入名單
    threeYearTrend: string; // 三年趨勢
    problemPattern: string; // 問題樣態
    dataHighlights: string; // 數據重點
    ministryReportNotes: string; // 教育部報告指出
  };
  // Teacher Structure
  teacherStats: TeacherStats;
  // Learning Support & Cohort
  supportCoverageGrade9?: string; // 九年級受輔涵蓋狀況
  earlyWarning?: EarlyWarningCohort;
  isPassionSchool?: boolean; // 是否為PASSION計畫學校
  // Expected School Concrete Responses (期待學校報告中具體回應)
  expectedResponses: {
    tag: string;
    content: string;
  }[];
}

export interface CountyOverviewStats {
  examYear: string;
  englishC: { county: number; national: number; diff: number };
  listeningC: { county: number; national: number; diff: number };
  mathC: { county: number; national: number; diff: number };
  englishA: { county: number; national: number; diff: number };
  mathA: { county: number; national: number; diff: number };
  ruralRatio: { county: number; national: number };
  smallSchoolAvg3Yr: { englishC: number; mathC: number };
  focusSchoolsTeacherMathNonSpecialist: number;
  otherSchoolsTeacherMathNonSpecialist: number;
  supportCoverageOverall: { english: number; math: number; launchRate: number };
  correlationStudy: {
    byTestedDenominator: { english: number; math: number; desc: string };
    byGradeDenominator: { english: number; math: number; desc: string };
    grade8IdentificationRate: { english: number; math: number; desc: string };
    grade9ActualSupportRate: number;
  };
}

export interface IssueRecommendation {
  id: number;
  title: string;
  category: string;
  currentStatus: string;
  schoolGuidance: string;
  evidence: string[];
  actionPillars: {
    title: string;
    details: string;
    targetRole: '教務處' | '教學組/領域社群' | '輔導室/學扶任課' | '任課教師';
  }[];
}
