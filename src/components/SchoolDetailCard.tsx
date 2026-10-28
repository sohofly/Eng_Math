import React, { useState } from 'react';
import { focusSchoolsData, countyStats } from '../data/schoolsData';
import { SchoolData } from '../types';
import { 
  Building2, 
  Users, 
  TrendingUp, 
  TrendingDown, 
  AlertCircle, 
  CheckCircle2, 
  Clock, 
  GraduationCap, 
  UserCheck, 
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  FileCheck
} from 'lucide-react';

interface SchoolDetailCardProps {
  selectedSchoolId: string;
  onSelectSchool: (schoolId: string) => void;
}

export const SchoolDetailCard: React.FC<SchoolDetailCardProps> = ({
  selectedSchoolId,
  onSelectSchool,
}) => {
  const [responseStatuses, setResponseStatuses] = useState<Record<string, 'pending' | 'in_progress' | 'completed'>>({});
  const [schoolNotes, setSchoolNotes] = useState<Record<string, string>>({});

  const currentSchoolIndex = focusSchoolsData.findIndex((s) => s.id === selectedSchoolId);
  const school = currentSchoolIndex !== -1 ? focusSchoolsData[currentSchoolIndex] : focusSchoolsData[0];

  const handlePrevSchool = () => {
    const prevIndex = (currentSchoolIndex - 1 + focusSchoolsData.length) % focusSchoolsData.length;
    onSelectSchool(focusSchoolsData[prevIndex].id);
  };

  const handleNextSchool = () => {
    const nextIndex = (currentSchoolIndex + 1) % focusSchoolsData.length;
    onSelectSchool(focusSchoolsData[nextIndex].id);
  };

  const toggleStatus = (tagKey: string) => {
    const current = responseStatuses[tagKey] || 'pending';
    const next = current === 'pending' ? 'in_progress' : current === 'in_progress' ? 'completed' : 'pending';
    setResponseStatuses((prev) => ({ ...prev, [tagKey]: next }));
  };

  const h113 = school.history.find((h) => h.year === '113年') || school.history[0];
  const h114 = school.history.find((h) => h.year === '114年') || school.history[1];
  const h115 = school.history.find((h) => h.year === '115年') || school.history[2];

  return (
    <div className="space-y-6">
      {/* School Switcher Navigation Strip */}
      <div className="bg-white rounded-xl border border-slate-200 p-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-500 whitespace-nowrap">
              選擇重點學校：
            </span>
            <div className="flex items-center gap-1 overflow-x-auto py-1 scrollbar-none">
              {focusSchoolsData.map((s) => (
                <button
                  key={s.id}
                  onClick={() => onSelectSchool(s.id)}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                    s.id === school.id
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100'
                  }`}
                >
                  {s.name}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-1 self-end sm:self-auto shrink-0">
            <button
              onClick={handlePrevSchool}
              className="p-1.5 rounded-md hover:bg-slate-100 text-slate-600 transition-colors cursor-pointer"
              title="上一所學校"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono text-slate-500">
              {currentSchoolIndex + 1} / {focusSchoolsData.length}
            </span>
            <button
              onClick={handleNextSchool}
              className="p-1.5 rounded-md hover:bg-slate-100 text-slate-600 transition-colors cursor-pointer"
              title="下一所學校"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* School Header Dossier Card */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 md:p-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-slate-100 pb-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-2">
              <span className="font-semibold text-slate-800">{school.category}</span>
              <span aria-hidden="true">·</span>
              <span>{school.scale}</span>
              <span aria-hidden="true">·</span>
              <span>115 年會考考生：{school.candidateCount115} 人</span>
              {school.isPassionSchool && (
                <>
                  <span aria-hidden="true">·</span>
                  <span className="text-purple-700 bg-purple-50 px-2 py-0.5 rounded font-medium">
                    國立臺灣師範大學 PASSION 計畫合作校
                  </span>
                </>
              )}
            </div>

            <div className="flex items-baseline gap-3">
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
                {school.name}
              </h1>
              <span className="text-sm font-medium text-slate-500">
                學力精進深度診斷報告卡
              </span>
            </div>
          </div>

          {/* Quick Metrics Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="p-3 bg-slate-50 rounded-lg text-center">
              <span className="text-[11px] text-slate-500 block">115 英語待加強</span>
              <span className="text-lg font-bold font-mono tabular-nums text-slate-900">
                {h115.englishC.toFixed(2)}%
              </span>
              <span className="text-[10px] text-slate-400 block font-mono">
                {school.counts115.englishC} 人
              </span>
            </div>

            <div className="p-3 bg-slate-50 rounded-lg text-center">
              <span className="text-[11px] text-slate-500 block">115 數學待加強</span>
              <span className="text-lg font-bold font-mono tabular-nums text-slate-900">
                {h115.mathC.toFixed(2)}%
              </span>
              <span className="text-[10px] text-slate-400 block font-mono">
                {school.counts115.mathC} 人
              </span>
            </div>

            <div className="p-3 bg-slate-50 rounded-lg text-center col-span-2 sm:col-span-1">
              <span className="text-[11px] text-slate-500 block">115 英聽待加強</span>
              <span className="text-lg font-bold font-mono tabular-nums text-red-600">
                {h115.listeningC.toFixed(2)}%
              </span>
              <span className="text-[10px] text-slate-400 block">
                全縣 51.26%
              </span>
            </div>
          </div>
        </div>

        {/* 3-Year Historical Performance Table */}
        <div className="mt-6">
          <h3 className="text-sm font-bold text-slate-900 mb-3">
            113～115 年國中教育會考歷年指標走勢與三年平均
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border border-slate-200 rounded-lg overflow-hidden">
              <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                <tr>
                  <th className="py-2.5 px-4">評量指標</th>
                  <th className="py-2.5 px-3 text-right font-mono">113 年</th>
                  <th className="py-2.5 px-3 text-right font-mono">114 年</th>
                  <th className="py-2.5 px-3 text-right font-mono">115 年</th>
                  <th className="py-2.5 px-3 text-right font-mono bg-blue-50/50 text-blue-900">三年平均</th>
                  <th className="py-2.5 px-3 text-right font-mono text-slate-500">115全縣基準</th>
                  <th className="py-2.5 px-4 text-center">三年走勢</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono tabular-nums">
                {/* 英語待加強率 */}
                <tr className="hover:bg-slate-50/60">
                  <td className="py-2.5 px-4 font-sans font-medium text-slate-900">
                    英語待加強率 (%)
                  </td>
                  <td className="py-2.5 px-3 text-right text-slate-700">{h113.englishC.toFixed(2)}%</td>
                  <td className="py-2.5 px-3 text-right text-slate-700">{h114.englishC.toFixed(2)}%</td>
                  <td className="py-2.5 px-3 text-right font-bold text-slate-900">{h115.englishC.toFixed(2)}%</td>
                  <td className="py-2.5 px-3 text-right font-bold bg-blue-50/50 text-blue-900">
                    {school.threeYearAvg.englishC.toFixed(2)}%
                  </td>
                  <td className="py-2.5 px-3 text-right text-slate-500">{countyStats.englishC.county.toFixed(2)}%</td>
                  <td className="py-2.5 px-4 text-center font-sans text-[11px] text-slate-600">
                    {h115.englishC > h113.englishC ? '🔺 呈現升高' : h115.englishC < h113.englishC ? '🔻 總體下降' : '持平'}
                  </td>
                </tr>

                {/* 英語待加強人數 */}
                <tr className="hover:bg-slate-50/60 text-slate-600 bg-slate-50/30">
                  <td className="py-2 px-4 font-sans text-slate-600 pl-8">↳ 英語待加強人數</td>
                  <td className="py-2 px-3 text-right">{h113.englishCCount ?? '—'} 人</td>
                  <td className="py-2 px-3 text-right">{h114.englishCCount ?? '—'} 人</td>
                  <td className="py-2 px-3 text-right font-semibold text-slate-900">{h115.englishCCount ?? '—'} 人</td>
                  <td className="py-2 px-3 text-right bg-blue-50/50 text-slate-400">—</td>
                  <td className="py-2 px-3 text-right text-slate-400">—</td>
                  <td className="py-2 px-4 text-center text-slate-400 font-sans">—</td>
                </tr>

                {/* 英語聽力待加強率 */}
                <tr className="hover:bg-slate-50/60">
                  <td className="py-2.5 px-4 font-sans font-medium text-slate-900">
                    英語聽力待加強率 (%)
                  </td>
                  <td className="py-2.5 px-3 text-right text-slate-700">{h113.listeningC.toFixed(2)}%</td>
                  <td className="py-2.5 px-3 text-right text-slate-700">{h114.listeningC.toFixed(2)}%</td>
                  <td className="py-2.5 px-3 text-right font-bold text-red-600">{h115.listeningC.toFixed(2)}%</td>
                  <td className="py-2.5 px-3 text-right font-bold bg-blue-50/50 text-blue-900">
                    {school.threeYearAvg.listeningC.toFixed(2)}%
                  </td>
                  <td className="py-2.5 px-3 text-right text-slate-500">{countyStats.listeningC.county.toFixed(2)}%</td>
                  <td className="py-2.5 px-4 text-center font-sans text-[11px] text-slate-600">
                    {h115.listeningC >= 80 ? '⚠️ 高度警訊' : '常態偏高'}
                  </td>
                </tr>

                {/* 英語精熟率 */}
                <tr className="hover:bg-slate-50/60 text-slate-600">
                  <td className="py-2.5 px-4 font-sans text-slate-700">英語精熟率 (A) (%)</td>
                  <td className="py-2.5 px-3 text-right">{h113.englishA.toFixed(2)}%</td>
                  <td className="py-2.5 px-3 text-right">{h114.englishA.toFixed(2)}%</td>
                  <td className="py-2.5 px-3 text-right">{h115.englishA.toFixed(2)}%</td>
                  <td className="py-2.5 px-3 text-right bg-blue-50/50 text-slate-700">
                    {school.threeYearAvg.englishA.toFixed(2)}%
                  </td>
                  <td className="py-2.5 px-3 text-right text-slate-500">{countyStats.englishA.county.toFixed(2)}%</td>
                  <td className="py-2.5 px-4 text-center font-sans text-[11px] text-slate-500">
                    {school.threeYearAvg.englishA === 0 ? '三年皆 0' : '低位存續'}
                  </td>
                </tr>

                {/* 數學待加強率 */}
                <tr className="hover:bg-slate-50/60">
                  <td className="py-2.5 px-4 font-sans font-medium text-slate-900">
                    數學待加強率 (%)
                  </td>
                  <td className="py-2.5 px-3 text-right text-slate-700">{h113.mathC.toFixed(2)}%</td>
                  <td className="py-2.5 px-3 text-right text-slate-700">{h114.mathC.toFixed(2)}%</td>
                  <td className="py-2.5 px-3 text-right font-bold text-slate-900">{h115.mathC.toFixed(2)}%</td>
                  <td className="py-2.5 px-3 text-right font-bold bg-blue-50/50 text-blue-900">
                    {school.threeYearAvg.mathC.toFixed(2)}%
                  </td>
                  <td className="py-2.5 px-3 text-right text-slate-500">{countyStats.mathC.county.toFixed(2)}%</td>
                  <td className="py-2.5 px-4 text-center font-sans text-[11px] text-slate-600">
                    {school.ministryFocus.problemPattern.includes('逐年下降')
                      ? '🟢 逐年下降'
                      : h115.mathC > h114.mathC
                      ? '🔺 115回升'
                      : '持平'}
                  </td>
                </tr>

                {/* 數學待加強人數 */}
                <tr className="hover:bg-slate-50/60 text-slate-600 bg-slate-50/30">
                  <td className="py-2 px-4 font-sans text-slate-600 pl-8">↳ 數學待加強人數</td>
                  <td className="py-2 px-3 text-right">{h113.mathCCount ?? '—'} 人</td>
                  <td className="py-2 px-3 text-right">{h114.mathCCount ?? '—'} 人</td>
                  <td className="py-2 px-3 text-right font-semibold text-slate-900">{h115.mathCCount ?? '—'} 人</td>
                  <td className="py-2 px-3 text-right bg-blue-50/50 text-slate-400">—</td>
                  <td className="py-2 px-3 text-right text-slate-400">—</td>
                  <td className="py-2 px-4 text-center text-slate-400 font-sans">—</td>
                </tr>

                {/* 數學精熟率 */}
                <tr className="hover:bg-slate-50/60 text-slate-600">
                  <td className="py-2.5 px-4 font-sans text-slate-700">數學精熟率 (A) (%)</td>
                  <td className="py-2.5 px-3 text-right">{h113.mathA.toFixed(2)}%</td>
                  <td className="py-2.5 px-3 text-right">{h114.mathA.toFixed(2)}%</td>
                  <td className="py-2.5 px-3 text-right">{h115.mathA.toFixed(2)}%</td>
                  <td className="py-2.5 px-3 text-right bg-blue-50/50 text-slate-700">
                    {school.threeYearAvg.mathA.toFixed(2)}%
                  </td>
                  <td className="py-2.5 px-3 text-right text-slate-500">{countyStats.mathA.county.toFixed(2)}%</td>
                  <td className="py-2.5 px-4 text-center font-sans text-[11px] text-slate-500">
                    {school.threeYearAvg.mathA === 0 ? '三年皆 0' : '有精熟生'}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Two Column Layout: Ministry Attention Dossier & Teacher / Cohort Diagnostic */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Ministry Focus */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
              <GraduationCap className="w-4 h-4 text-blue-600" />
              <span>教育部關注樣態分析</span>
              <span aria-hidden="true">·</span>
              <span>附冊表3、表4</span>
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-4">
              問題樣態與教育部診斷定位
            </h3>

            <div className="space-y-3 text-xs leading-relaxed">
              <div className="p-3 bg-slate-50 rounded-lg">
                <span className="font-semibold text-slate-700 block mb-0.5">列入名單原因</span>
                <span className="text-slate-600">{school.ministryFocus.inListReason}</span>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg">
                <span className="font-semibold text-slate-700 block mb-0.5">三年走勢與樣態</span>
                <span className="text-slate-600">
                  {school.ministryFocus.threeYearTrend} · 問題分類：
                  <span className="font-bold text-slate-900 ml-1">{school.ministryFocus.problemPattern}</span>
                </span>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg">
                <span className="font-semibold text-slate-700 block mb-0.5">數據重點摘要</span>
                <span className="text-slate-600">{school.ministryFocus.dataHighlights}</span>
              </div>

              <div className="p-3 bg-blue-50/60 border border-blue-100 rounded-lg">
                <span className="font-semibold text-blue-900 block mb-0.5">教育部報告精準診斷建議</span>
                <span className="text-blue-800">{school.ministryFocus.ministryReportNotes}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Teacher Structure & Support Cohort */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
              <UserCheck className="w-4 h-4 text-emerald-600" />
              <span>師資結構與學習扶助診斷</span>
              <span aria-hidden="true">·</span>
              <span>115-1 授課分析</span>
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-4">
              師資專長、配課與學扶銜接檢核
            </h3>

            <div className="space-y-3 text-xs leading-relaxed">
              {/* Teacher Stats */}
              <div className="p-3 bg-slate-50 rounded-lg">
                <span className="font-semibold text-slate-700 block mb-1">英數師資結構現況</span>
                {school.teacherStats.mathNonSpecialistRate ? (
                  <div className="text-amber-800 font-medium mb-1">
                    • 數學非專長授課節數比：<span className="font-mono font-bold">{school.teacherStats.mathNonSpecialistRate}%</span>
                    {school.teacherStats.mathNonSpecialistNotes && (
                      <span className="text-slate-600 font-normal ml-1">
                        ({school.teacherStats.mathNonSpecialistNotes})
                      </span>
                    )}
                  </div>
                ) : null}

                {school.teacherStats.englishSubstituteRate || school.teacherStats.mathSubstituteRate ? (
                  <div className="text-red-700 font-medium mb-1">
                    • 代理教師比率：英語 {school.teacherStats.englishSubstituteRate || 0}% / 數學 {school.teacherStats.mathSubstituteRate || 0}%
                    <span className="text-slate-500 font-normal block mt-0.5">
                      英數代理比率偏高，教師流動與教材共備交接面臨明顯風險。
                    </span>
                  </div>
                ) : null}

                {school.teacherStats.englishSpecialistFull && (
                  <div className="text-emerald-700 font-medium">
                    • 英語師資：皆由正式具專長教師授課，師資配置完整（待加強仍高時需聚焦課堂教學法與聽力）。
                  </div>
                )}

                {!school.teacherStats.mathNonSpecialistRate &&
                 !school.teacherStats.englishSubstituteRate &&
                 !school.teacherStats.mathSubstituteRate && (
                  <div className="text-slate-600">
                    {school.teacherStats.mathNonSpecialistNotes || '師資結構無異常非專長或代理通報。'}
                  </div>
                )}
              </div>

              {/* Support Coverage */}
              {school.supportCoverageGrade9 && (
                <div className="p-3 bg-slate-50 rounded-lg">
                  <span className="font-semibold text-slate-700 block mb-0.5">九年級學習扶助涵蓋率</span>
                  <span className="text-slate-700">{school.supportCoverageGrade9}</span>
                </div>
              )}

              {/* Early Warning Cohort */}
              {school.earlyWarning && (
                <div className="p-3 bg-amber-50/60 border border-amber-100 rounded-lg">
                  <span className="font-semibold text-amber-900 block mb-0.5">
                    116 年會考考生（現八年級）預警追蹤
                  </span>
                  <span className="text-amber-800 font-medium block">
                    {school.earlyWarning.warningNotes}
                  </span>
                  {school.earlyWarning.grade8MathFailRate && (
                    <span className="text-xs text-amber-700 mt-1 block">
                      八年級數學篩選未通過率：{school.earlyWarning.grade8MathFailRate}%
                    </span>
                  )}
                  {school.earlyWarning.grade8EnglishFailRate && (
                    <span className="text-xs text-amber-700 mt-1 block">
                      八年級英語篩選未通過率：{school.earlyWarning.grade8EnglishFailRate}%
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Expected School Concrete Responses (Action Tracker & Plan) */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 md:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5 mb-5">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
              <span>工作會議報告要求</span>
              <span aria-hidden="true">·</span>
              <span>校內改善計畫追蹤</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              期待本校報告中具體回應事項 ({school.expectedResponses.length} 項核心任務)
            </h3>
          </div>
          <span className="text-xs text-slate-500">
            點擊切換各項落實狀態（待研擬 / 推動中 / 已落實）
          </span>
        </div>

        <div className="space-y-4">
          {school.expectedResponses.map((item, idx) => {
            const key = `${school.id}_${item.tag}`;
            const status = responseStatuses[key] || 'pending';

            return (
              <div
                key={idx}
                className="p-5 rounded-lg border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs font-bold text-slate-400">
                      0{idx + 1}.
                    </span>
                    <span className="text-sm font-bold text-slate-900">
                      【{item.tag}】
                    </span>
                  </div>

                  <button
                    onClick={() => toggleStatus(key)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer self-start sm:self-auto ${
                      status === 'completed'
                        ? 'bg-emerald-100 text-emerald-800'
                        : status === 'in_progress'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {status === 'completed' ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>已具體落實</span>
                      </>
                    ) : status === 'in_progress' ? (
                      <>
                        <Clock className="w-3.5 h-3.5 text-amber-600" />
                        <span>推動進行中</span>
                      </>
                    ) : (
                      <>
                        <HelpCircle className="w-3.5 h-3.5 text-slate-500" />
                        <span>待擬定對策</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-xs text-slate-700 leading-relaxed pl-6 mt-1">
                  {item.content}
                </p>

                {/* Optional School Action Note */}
                <div className="mt-3 pl-6 pt-3 border-t border-slate-200/60">
                  <input
                    type="text"
                    placeholder="點此輸入校內具體因應措施或教務處備註..."
                    value={schoolNotes[key] || ''}
                    onChange={(e) => setSchoolNotes({ ...schoolNotes, [key]: e.target.value })}
                    className="w-full text-xs bg-white border border-slate-200 rounded px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-slate-900 text-slate-800 placeholder-slate-400"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
