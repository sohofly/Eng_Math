import React from 'react';
import { countyStats, focusSchoolsData, eightMajorIssues } from '../data/schoolsData';
import { Printer, ArrowLeft, Download, ShieldCheck } from 'lucide-react';
import { NavTabId } from './Navbar';

interface ReportPrintViewProps {
  onBack: () => void;
}

export const ReportPrintView: React.FC<ReportPrintViewProps> = ({ onBack }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Non-print Top Action Bar */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 no-print flex items-center justify-between">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>返回儀表板</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm transition-colors cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>列印 / 另存為 PDF 簡報</span>
          </button>
        </div>
      </div>

      {/* Formal Paper / Printable Document Container */}
      <div className="bg-white p-8 md:p-12 border border-slate-200 rounded-xl shadow-xs print:border-none print:shadow-none print:p-0 text-slate-900">
        {/* Document Header */}
        <div className="border-b-2 border-slate-900 pb-5 mb-8">
          <div className="text-xs text-slate-500 mb-1">
            花蓮縣政府教育處 · 國中英語、數學學力精進重點學校工作會議
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            各校英語、數學學力數據深度分析與精進策略報告書
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mt-2 font-mono">
            <span>分析基準：111～115年國中教育會考</span>
            <span>·</span>
            <span>科技化評量篩選與成長測驗</span>
            <span>·</span>
            <span>發布日期：2026 年</span>
          </div>
          <p className="text-xs text-slate-500 italic mt-2">
            ※ 備註：各項比率屬校際診斷觀察，旨在協助各校研擬有效改善作法，非學校間績效評比或考評排名。
          </p>
        </div>

        {/* Section 1: County vs National Benchmark */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">
            壹、115 年會考花蓮縣與全國學力指標對照
          </h2>
          <table className="w-full text-left text-xs border border-slate-300 rounded mb-4">
            <thead className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-300">
              <tr>
                <th className="py-2.5 px-3">評量指標</th>
                <th className="py-2.5 px-3 text-right font-mono">花蓮縣</th>
                <th className="py-2.5 px-3 text-right font-mono">全國平均</th>
                <th className="py-2.5 px-3 text-right font-mono">差距 (百分點)</th>
                <th className="py-2.5 px-3 text-left">深度診斷備註</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 font-mono tabular-nums">
              <tr>
                <td className="py-2 px-3 font-sans font-medium">英語待加強率 (C)</td>
                <td className="py-2 px-3 text-right font-bold">{countyStats.englishC.county.toFixed(2)}%</td>
                <td className="py-2 px-3 text-right text-slate-600">{countyStats.englishC.national.toFixed(2)}%</td>
                <td className="py-2 px-3 text-right font-bold text-red-600">+{countyStats.englishC.diff.toFixed(2)}</td>
                <td className="py-2 px-3 font-sans text-slate-600">連續三年超過 50% 學校達 11 所</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-sans font-medium">英語聽力待加強率</td>
                <td className="py-2 px-3 text-right font-bold text-red-600">{countyStats.listeningC.county.toFixed(2)}%</td>
                <td className="py-2 px-3 text-right text-slate-600">{countyStats.listeningC.national.toFixed(2)}%</td>
                <td className="py-2 px-3 text-right font-bold text-red-600">+{countyStats.listeningC.diff.toFixed(2)}</td>
                <td className="py-2 px-3 font-sans text-slate-600 font-bold">全縣差距最大項目，13重點校皆逾七成</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-sans font-medium">數學待加強率 (C)</td>
                <td className="py-2 px-3 text-right font-bold">{countyStats.mathC.county.toFixed(2)}%</td>
                <td className="py-2 px-3 text-right text-slate-600">{countyStats.mathC.national.toFixed(2)}%</td>
                <td className="py-2 px-3 text-right font-bold text-red-600">+{countyStats.mathC.diff.toFixed(2)}</td>
                <td className="py-2 px-3 font-sans text-slate-600">八年級代數學習斷層擴大</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-sans">英語精熟率 (A)</td>
                <td className="py-2 px-3 text-right">{countyStats.englishA.county.toFixed(2)}%</td>
                <td className="py-2 px-3 text-right text-slate-600">{countyStats.englishA.national.toFixed(2)}%</td>
                <td className="py-2 px-3 text-right text-slate-600">{countyStats.englishA.diff.toFixed(2)}</td>
                <td className="py-2 px-3 font-sans text-slate-600">落後全國近半</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-sans">數學精熟率 (A)</td>
                <td className="py-2 px-3 text-right">{countyStats.mathA.county.toFixed(2)}%</td>
                <td className="py-2 px-3 text-right text-slate-600">{countyStats.mathA.national.toFixed(2)}%</td>
                <td className="py-2 px-3 text-right text-slate-600">{countyStats.mathA.diff.toFixed(2)}</td>
                <td className="py-2 px-3 font-sans text-slate-600">拔尖機制待加強</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-slate-600 leading-relaxed">
            核心觀察：偏遠學校占全縣 44.00%（全國 22.80%），但 13 所待關心學校中英、數各有 4 所屬「非偏遠中型學校」（秀林、新城、美崙、化仁、吉安），待加強總人數佔全縣極大份額。
          </p>
        </div>

        {/* Section 2: 13 Focus Schools Summary Table */}
        <div className="mb-8 page-break">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">
            貳、13 所重點學校 115 年學力、三年趨勢與教育部關注焦點一覽表
          </h2>
          <table className="w-full text-left text-[11px] border border-slate-300">
            <thead className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-300">
              <tr>
                <th className="py-2 px-2">學校 / 類別</th>
                <th className="py-2 px-2 text-right">115考生</th>
                <th className="py-2 px-2 text-right">英待加強</th>
                <th className="py-2 px-2 text-right">英聽C</th>
                <th className="py-2 px-2 text-right">數待加強</th>
                <th className="py-2 px-2">問題樣態分類</th>
                <th className="py-2 px-2">師資/學扶核心診斷</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 font-mono tabular-nums">
              {focusSchoolsData.map((s) => {
                const h115 = s.history.find((h) => h.year === '115年') || s.history[s.history.length - 1];
                return (
                  <tr key={s.id}>
                    <td className="py-2 px-2 font-sans font-medium text-slate-900">
                      {s.name} ({s.category}·{s.scale})
                    </td>
                    <td className="py-2 px-2 text-right">{s.candidateCount115}</td>
                    <td className="py-2 px-2 text-right font-semibold">
                      {h115.englishC.toFixed(1)}% ({s.counts115.englishC}人)
                    </td>
                    <td className="py-2 px-2 text-right font-semibold">
                      {h115.listeningC.toFixed(1)}%
                    </td>
                    <td className="py-2 px-2 text-right font-semibold">
                      {h115.mathC.toFixed(1)}% ({s.counts115.mathC}人)
                    </td>
                    <td className="py-2 px-2 font-sans text-slate-700">
                      {s.ministryFocus.problemPattern}
                    </td>
                    <td className="py-2 px-2 font-sans text-slate-600 text-[10px]">
                      {s.teacherStats.mathNonSpecialistRate ? `數非專長 ${s.teacherStats.mathNonSpecialistRate}%；` : ''}
                      {s.teacherStats.mathSubstituteRate || s.teacherStats.englishSubstituteRate ? `代理偏高；` : ''}
                      {s.supportCoverageGrade9 || s.earlyWarning?.warningNotes?.slice(0, 20)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Section 3: Eight Strategic Pillars Summary */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">
            參、八大共通問題與精進建議總綱
          </h2>
          <div className="space-y-4 text-xs">
            {eightMajorIssues.map((issue) => (
              <div key={issue.id} className="p-3 bg-slate-50 border border-slate-200 rounded">
                <div className="flex items-center gap-2 font-bold text-slate-900 mb-1">
                  <span>{issue.id}. 【{issue.category}】{issue.title}</span>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  <strong>改善方針：</strong>{issue.schoolGuidance}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Document Footer Signatures */}
        <div className="mt-12 pt-6 border-t-2 border-slate-900 flex justify-between items-end text-xs text-slate-600">
          <div>
            <p>主辦單位：花蓮縣政府教育處</p>
            <p>協辦支持：國立臺灣師範大學心理與教育測驗研究發展中心（KIDMAP）</p>
          </div>
          <div className="text-right">
            <p>學校審核簽名：____________________</p>
            <p className="mt-1">研擬改善日期：_____ 年 _____ 月 _____ 日</p>
          </div>
        </div>
      </div>
    </div>
  );
};
