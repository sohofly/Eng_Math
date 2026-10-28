import React, { useState } from 'react';
import { eightMajorIssues } from '../data/schoolsData';
import { IssueRecommendation } from '../types';
import { 
  Sparkles, 
  ExternalLink, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Compass, 
  BookOpen, 
  Layers, 
  UserCheck, 
  Cpu, 
  Target,
  ArrowRight
} from 'lucide-react';

export const KidmapStrategyView: React.FC = () => {
  const [expandedIssueId, setExpandedIssueId] = useState<number | null>(7); // Default open KIDMAP issue
  const [roleFilter, setRoleFilter] = useState<'all' | '教務處' | '教學組/領域社群' | '輔導室/學扶任課' | '任課教師'>('all');

  const toggleExpand = (id: number) => {
    setExpandedIssueId(expandedIssueId === id ? null : id);
  };

  return (
    <div className="space-y-8">
      {/* KIDMAP Feature Spotlight Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white rounded-xl p-6 md:p-8 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs text-blue-400 font-semibold mb-2">
              <Compass className="w-4 h-4" />
              <span>認知診斷與個別化教學轉化關鍵工具</span>
              <span aria-hidden="true">·</span>
              <span>心測中心與花蓮學力輔導核心</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-2">
              KIDMAP 作答診斷平台與迷思概念轉化
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              教育部報告明確指示重點學校：應擺脫傳統「紙筆重複刷題」思維，運用心測中心作答診斷與 
              <strong> KIDMAP（認知診斷圖譜）</strong>，透過領域會議與教師社群共同備課，
              精準標記學生在英數關鍵概念、易混淆題型與迷思概念上的弱點，將診斷結果轉化為每週 5 分鐘概念翻轉教材。
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href="https://sohofly.github.io/teaching-diagnosis/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              <span>前往 KIDMAP 診斷系統</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 4-Step Closed Loop Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-800 text-xs">
          <div className="p-3 bg-white/5 rounded-lg border border-white/10">
            <span className="text-blue-400 font-bold block mb-1">步驟一 · 評量數據匯入</span>
            <p className="text-slate-300">
              整合國中教育會考、科技化評量篩選測驗及校內段考學生逐題作答反應。
            </p>
          </div>
          <div className="p-3 bg-white/5 rounded-lg border border-white/10">
            <span className="text-blue-400 font-bold block mb-1">步驟二 · KIDMAP 認知定位</span>
            <p className="text-slate-300">
              將學生能力值與試題難度落在二維坐標，自動標示「異常猜對」與「粗心答錯」之迷思節點。
            </p>
          </div>
          <div className="p-3 bg-white/5 rounded-lg border border-white/10">
            <span className="text-blue-400 font-bold block mb-1">步驟三 · 領域社群專題研討</span>
            <p className="text-slate-300">
              各校英數社群每年至少召開 2 場作答診斷會議，研擬高頻錯題之教學引導語。
            </p>
          </div>
          <div className="p-3 bg-white/5 rounded-lg border border-white/10">
            <span className="text-blue-400 font-bold block mb-1">步驟四 · 微任務與後測檢驗</span>
            <p className="text-slate-300">
              結合因材網或客製學扶教材指派個別化微任務，並以定期成長測驗追蹤解盲進度。
            </p>
          </div>
        </div>
      </div>

      {/* Role-based Filter Controls */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5 mb-5">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
              <span>八大共通問題與教育部／縣府具體建議</span>
              <span aria-hidden="true">·</span>
              <span>行動方案指南</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              學校共通問題深度剖析與行動策略清單
            </h3>
          </div>

          {/* Role Filter Pills */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg self-start sm:self-auto">
            <button
              onClick={() => setRoleFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                roleFilter === 'all'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              全部處室
            </button>
            <button
              onClick={() => setRoleFilter('教務處')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                roleFilter === '教務處'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              教務處
            </button>
            <button
              onClick={() => setRoleFilter('教學組/領域社群')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                roleFilter === '教學組/領域社群'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              領域社群
            </button>
            <button
              onClick={() => setRoleFilter('輔導室/學扶任課')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                roleFilter === '輔導室/學扶任課'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              輔導/學扶
            </button>
            <button
              onClick={() => setRoleFilter('任課教師')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                roleFilter === '任課教師'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              任課教師
            </button>
          </div>
        </div>

        {/* 8 Accordion Strategy Cards */}
        <div className="space-y-4">
          {eightMajorIssues.map((issue) => {
            const isExpanded = expandedIssueId === issue.id;
            const filteredActions = issue.actionPillars.filter(
              (p) => roleFilter === 'all' || p.targetRole === roleFilter
            );

            // Skip card if role filtered and has 0 matching actions
            if (roleFilter !== 'all' && filteredActions.length === 0) return null;

            return (
              <div
                key={issue.id}
                className="rounded-xl border border-slate-200 overflow-hidden bg-white shadow-xs transition-colors"
              >
                {/* Header Toggle */}
                <button
                  onClick={() => toggleExpand(issue.id)}
                  className="w-full p-5 text-left flex items-start justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-sm font-bold text-slate-400 mt-0.5">
                      {String(issue.id).padStart(2, '0')}.
                    </span>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                          {issue.category}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-slate-900">
                        {issue.title}
                      </h4>
                    </div>
                  </div>

                  <div className="shrink-0 p-1 rounded-md text-slate-400 hover:text-slate-600">
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="px-5 pb-6 pt-2 border-t border-slate-100 space-y-5 text-xs">
                    {/* Current Status */}
                    <div className="p-4 bg-slate-50 rounded-lg">
                      <span className="font-bold text-slate-800 block mb-1">
                        現況問題診斷（教育部附冊與縣府數據）：
                      </span>
                      <p className="text-slate-600 leading-relaxed">
                        {issue.currentStatus}
                      </p>
                    </div>

                    {/* School Guidance */}
                    <div className="p-4 bg-blue-50/60 border border-blue-100 rounded-lg">
                      <span className="font-bold text-blue-900 block mb-1">
                        會議建議學校精進方向：
                      </span>
                      <p className="text-blue-800 leading-relaxed">
                        {issue.schoolGuidance}
                      </p>
                    </div>

                    {/* Evidence Points */}
                    <div>
                      <span className="font-bold text-slate-800 block mb-2">
                        關鍵佐證數據：
                      </span>
                      <ul className="space-y-1.5 pl-4 list-disc text-slate-600 marker:text-slate-400">
                        {issue.evidence.map((ev, eIdx) => (
                          <li key={eIdx}>{ev}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Pillars by Role */}
                    <div>
                      <span className="font-bold text-slate-800 block mb-2.5">
                        學校各處室具體行動清單 ({filteredActions.length} 項)：
                      </span>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {filteredActions.map((action, aIdx) => (
                          <div
                            key={aIdx}
                            className="p-3 bg-white rounded-lg border border-slate-200"
                          >
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="font-bold text-slate-900">
                                {action.title}
                              </span>
                              <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                                {action.targetRole}
                              </span>
                            </div>
                            <p className="text-slate-600 leading-relaxed">
                              {action.details}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
