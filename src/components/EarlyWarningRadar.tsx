import React, { useState } from 'react';
import { focusSchoolsData, countyStats } from '../data/schoolsData';
import { 
  AlertTriangle, 
  TrendingUp, 
  TrendingDown, 
  ShieldAlert, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Zap,
  Clock,
  Compass
} from 'lucide-react';

interface EarlyWarningRadarProps {
  onSelectSchool: (schoolId: string) => void;
}

export const EarlyWarningRadar: React.FC<EarlyWarningRadarProps> = ({ onSelectSchool }) => {
  const [activeCohortSubject, setActiveCohortSubject] = useState<'all' | 'math' | 'english'>('all');

  // Schools with explicit 7th -> 8th grade cohort tracking data in the report
  const cohortSchools = [
    {
      id: 'huaren',
      name: '化仁國中',
      subject: '數學科',
      g7Rate: 63.2,
      g8Rate: 78.6,
      diff: 15.4,
      riskLevel: '極高危險',
      type: 'math',
      status: 'surge',
      notes: '202605 八年級未通過率 78.6% 全縣最高！由七年級 63.2% 劇增 15.4 個百分點，116 年會考數學恐現重創。',
    },
    {
      id: 'xincheng',
      name: '新城國中',
      subject: '數學科',
      g7Rate: undefined,
      g8Rate: 75.4,
      diff: undefined,
      riskLevel: '極高危險',
      type: 'math',
      status: 'high',
      notes: '八年級數學未通過率 75.4%，加上 85.2% 數學為非專長代理授課，雙重風險疊加。',
    },
    {
      id: 'pinghe',
      name: '平和國中',
      subject: '數學科',
      g7Rate: 29.4,
      g8Rate: 63.2,
      diff: 33.8,
      riskLevel: '暴增高危',
      type: 'math',
      status: 'surge',
      notes: '同一屆由七年級 29.4% 暴升至八年級 63.2%（劇增 33.8 個百分點），代數內容進入後全面潰堤。',
    },
    {
      id: 'sanmin',
      name: '三民國中',
      subject: '數學科',
      g7Rate: 52.9,
      g8Rate: 69.7,
      diff: 16.8,
      riskLevel: '高危險',
      type: 'math',
      status: 'surge',
      notes: '七年級 52.9% 升至八年級 69.7%，雖會考整體呈下降趨勢，但國二代數銜接明顯出現新斷層。',
    },
    {
      id: 'xiulin',
      name: '秀林國中',
      subject: '英語科',
      g7Rate: 81.6,
      g8Rate: 66.2,
      diff: -15.4,
      riskLevel: '高危改善',
      type: 'english',
      status: 'improve',
      notes: '八年級英語未通過率 66.2% 雖仍居全縣之首，但較七年級 81.6% 已顯著收斂 15.4%，經驗需延續至九年級。',
    },
    {
      id: 'fuyuan',
      name: '富源國中',
      subject: '英語科',
      g7Rate: 57.9,
      g8Rate: 23.8,
      diff: -34.1,
      riskLevel: '顯著突破',
      type: 'english',
      status: 'improve',
      notes: '同一屆英語未通過率由 57.9% 劇降至 23.8%（降低 34.1%），為全縣進步典範，數學科應汲取其成功法。',
    },
    {
      id: 'jian',
      name: '吉安國中',
      subject: '英語科',
      g7Rate: 62.7,
      g8Rate: 35.7,
      diff: -27.0,
      riskLevel: '顯著突破',
      type: 'english',
      status: 'improve',
      notes: '同一屆英語未通過率由 62.7% 大幅降至 35.7%（降低 27.0%），顯示校內英語扶助與分組機制奏效。',
    },
    {
      id: 'guangfu',
      name: '光復國中',
      subject: '英語科',
      g7Rate: 66.7,
      g8Rate: 49.0,
      diff: -17.7,
      riskLevel: '顯著突破',
      type: 'english',
      status: 'improve',
      notes: '英語未通過率由七年級 66.7% 降至八年級 49.0%，但需提防八升九會考實戰時的聽力瓶頸。',
    },
    {
      id: 'meilun',
      name: '美崙國中',
      subject: '英語科',
      g7Rate: undefined,
      g8Rate: 57.6,
      diff: undefined,
      riskLevel: '高危險',
      type: 'english',
      status: 'high',
      notes: '八年級英語未通過率 57.6%，聽力待加強逾七成，且英語代理比率達 74.1%，急需社群共備介入。',
    },
    {
      id: 'fuli',
      name: '富里國中',
      subject: '英語科',
      g7Rate: undefined,
      g8Rate: 56.0,
      diff: undefined,
      riskLevel: '辨識缺口',
      type: 'english',
      status: 'gap',
      notes: '八年級英語未通過 56.0%，但會考待加強高達 82.1%，約 1/4 待加強學生在八年級未被篩選測驗提報辨識。',
    },
  ];

  const filteredCohort = cohortSchools.filter((c) => {
    if (activeCohortSubject === 'all') return true;
    if (activeCohortSubject === 'math') return c.type === 'math';
    if (activeCohortSubject === 'english') return c.type === 'english';
    return true;
  });

  return (
    <div className="space-y-8">
      {/* Editorial Title Banner */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5 mb-5">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
              <span>202605 科技化評量篩選測驗 · 同一屆追蹤</span>
              <span aria-hidden="true">·</span>
              <span className="text-amber-600 font-bold">116 年會考考生前瞻預警</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
              116 年會考學力預警雷達：七升八代數斷層與漏接清查
            </h2>
          </div>

          {/* Filter */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg">
            <button
              onClick={() => setActiveCohortSubject('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                activeCohortSubject === 'all'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              全部學校
            </button>
            <button
              onClick={() => setActiveCohortSubject('math')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                activeCohortSubject === 'math'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              數學代數暴升警訊
            </button>
            <button
              onClick={() => setActiveCohortSubject('english')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                activeCohortSubject === 'english'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              英語進步與漏接
            </button>
          </div>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed max-w-4xl">
          縣府同一屆追蹤實證顯示：<strong className="text-slate-900">「七年級升八年級」是花蓮學子數學能力分水嶺。</strong>
          英語未通過率在多數重點學校呈現下降，然而數學未通過率幾乎全面暴增（平和暴增 33.8%、化仁攀升至 78.6%）。
          若不及早在八年級代數（方程式、函數）介入，116 年會考數學待加強率將再次失守。
        </p>
      </div>

      {/* Cohort Comparison Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCohort.map((c) => {
          const isSurge = c.status === 'surge' || c.status === 'high';
          const isImprove = c.status === 'improve';

          return (
            <div
              key={c.id + c.subject}
              className={`bg-white rounded-xl border p-5 flex flex-col justify-between transition-all hover:shadow-xs ${
                isSurge
                  ? 'border-red-200 ring-1 ring-red-50'
                  : isImprove
                  ? 'border-emerald-200'
                  : 'border-amber-200'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectSchool(c.id)}
                      className="text-base font-bold text-slate-900 hover:text-blue-600 transition-colors cursor-pointer"
                    >
                      {c.name}
                    </button>
                    <span className="text-xs text-slate-500">·</span>
                    <span className="text-xs font-semibold text-slate-700">{c.subject}</span>
                  </div>

                  <span
                    className={`text-[11px] px-2 py-0.5 rounded font-bold ${
                      isSurge
                        ? 'bg-red-100 text-red-800'
                        : isImprove
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    {c.riskLevel}
                  </span>
                </div>

                {/* Number Visual Block */}
                <div className="my-3 p-3 bg-slate-50 rounded-lg">
                  <div className="flex items-center justify-between text-xs mb-1 text-slate-600">
                    <span>七年級未過率</span>
                    <span>八年級未過率</span>
                  </div>
                  <div className="flex items-center justify-between font-mono font-bold tabular-nums">
                    <span className="text-sm text-slate-700">
                      {c.g7Rate !== undefined ? `${c.g7Rate.toFixed(1)}%` : '—'}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                    <span
                      className={`text-base ${
                        isSurge ? 'text-red-600' : isImprove ? 'text-emerald-600' : 'text-slate-900'
                      }`}
                    >
                      {c.g8Rate.toFixed(1)}%
                    </span>
                  </div>
                  {c.diff !== undefined && (
                    <div className="text-right mt-1">
                      <span
                        className={`text-[11px] font-mono font-semibold ${
                          c.diff > 0 ? 'text-red-600' : 'text-emerald-600'
                        }`}
                      >
                        {c.diff > 0 ? `▲ 暴升 +${c.diff.toFixed(1)}%` : `▼ 改善 ${c.diff.toFixed(1)}%`}
                      </span>
                    </div>
                  )}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {c.notes}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-end">
                <button
                  onClick={() => onSelectSchool(c.id)}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>查看校內改善計畫</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recommended 3-Stage Intervention Pipeline */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 md:p-8">
        <h3 className="text-base font-bold text-slate-900 mb-2">
          防堵 116 年學力潰堤：三階段預警防護網標準作業程序
        </h3>
        <p className="text-xs text-slate-500 mb-6">
          將被動之「九年級會考前夕衝刺」轉變為「七下起點無縫防護」
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Phase 1 */}
          <div className="p-5 bg-slate-50 rounded-lg border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-blue-700 font-bold mb-2">
                <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center font-mono">1</span>
                <span>第一階段：七年級下學期</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-2">
                代數前置銜接與弱點排查
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                在進入抽象方程式前，針對正負數運算、一元一次方程式未知數概念，全面實施形成性微評量；
                與學區國小對齊四則運算弱點，不讓國小落差積累至國中。
              </p>
            </div>
            <div className="mt-4 text-[11px] font-medium text-slate-500">
              主要權責：七年級英數任課教師 · 國中小銜接共備
            </div>
          </div>

          {/* Phase 2 */}
          <div className="p-5 bg-slate-50 rounded-lg border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-amber-700 font-bold mb-2">
                <span className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center font-mono">2</span>
                <span>第二階段：八年級全學年</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-2">
                篩選測驗精準預警與專長配課
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                202605 篩選測驗結果公布後，教務處以「全年級實有人數」清查未通過率；
                嚴格落實由專長正式教師任教八年級，課堂每週固定 20 分鐘英語聽力訓練。
              </p>
            </div>
            <div className="mt-4 text-[11px] font-medium text-slate-500">
              主要權責：教務處排課 · 英語聽力常態化
            </div>
          </div>

          {/* Phase 3 */}
          <div className="p-5 bg-slate-50 rounded-lg border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-purple-700 font-bold mb-2">
                <span className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center font-mono">3</span>
                <span>第三階段：九年級會考年</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-2">
                全面補辨識補受輔與 KIDMAP 轉化
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                破除「九年級僅開少數班級」之陋習，清查所有待加強學生，將受輔涵蓋率拉高至九成以上；
                導入心測中心 KIDMAP 作答診斷，針對特定迷思概念實施精準複習。
              </p>
            </div>
            <div className="mt-4 text-[11px] font-medium text-slate-500">
              主要權責：輔導室學扶承辦 · 領域共備社群
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
