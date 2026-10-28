import React, { useState } from 'react';
import { countyStats } from '../data/schoolsData';
import { NavTabId } from './Navbar';
import { 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  BookOpen, 
  Users, 
  Headphones, 
  Calculator, 
  Sparkles,
  ArrowRight,
  School,
  Activity
} from 'lucide-react';

interface CountyOverviewProps {
  onNavigate: (tab: NavTabId) => void;
}

export const CountyOverview: React.FC<CountyOverviewProps> = ({ onNavigate }) => {
  const [activeSubjectTab, setActiveSubjectTab] = useState<'all' | 'english' | 'math' | 'listening'>('all');

  const comparisonData = [
    {
      subject: '英語待加強率 (C)',
      id: 'english_c',
      type: 'english',
      county: countyStats.englishC.county,
      national: countyStats.englishC.national,
      diff: countyStats.englishC.diff,
      isHigherWorse: true,
      desc: '較全國高 16.82 個百分點，全縣將近每 2 位考生即有 1 位落入待加強',
    },
    {
      subject: '英語聽力待加強率',
      id: 'listening_c',
      type: 'listening',
      county: countyStats.listeningC.county,
      national: countyStats.listeningC.national,
      diff: countyStats.listeningC.diff,
      isHigherWorse: true,
      desc: '超過五成考生英聽待加強，落後全國達 17.55 個百分點，為所有指標中落後幅度最大！',
    },
    {
      subject: '數學待加強率 (C)',
      id: 'math_c',
      type: 'math',
      county: countyStats.mathC.county,
      national: countyStats.mathC.national,
      diff: countyStats.mathC.diff,
      isHigherWorse: true,
      desc: '較全國高 14.19 個百分點，八年級進入抽象代數後落差顯著加劇',
    },
    {
      subject: '英語精熟率 (A)',
      id: 'english_a',
      type: 'english',
      county: countyStats.englishA.county,
      national: countyStats.englishA.national,
      diff: countyStats.englishA.diff,
      isHigherWorse: false,
      desc: '精熟比率僅 11.41%，落後全國近半（全國 23.41%），高分群儲備不足',
    },
    {
      subject: '數學精熟率 (A)',
      id: 'math_a',
      type: 'math',
      county: countyStats.mathA.county,
      national: countyStats.mathA.national,
      diff: countyStats.mathA.diff,
      isHigherWorse: false,
      desc: '精熟比率 13.79%，落後全國 10.87 個百分點，亟需拔尖與延伸思考訓練',
    },
  ];

  const filteredComparison = comparisonData.filter((item) => {
    if (activeSubjectTab === 'all') return true;
    if (activeSubjectTab === 'english') return item.type === 'english';
    if (activeSubjectTab === 'math') return item.type === 'math';
    if (activeSubjectTab === 'listening') return item.type === 'listening';
    return true;
  });

  return (
    <div className="space-y-8">
      {/* Editorial Title / Hero Header */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-1.5">
              <span>花蓮縣國中英語、數學學力精進重點學校工作會議</span>
              <span aria-hidden="true">·</span>
              <span>111～115年國中教育會考學力追蹤</span>
              <span aria-hidden="true">·</span>
              <span className="text-blue-600 font-medium">非績效評比 / 供學校改善參考</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              各校英語、數學學力數據總體診斷與全國對照
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate('matrix')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors whitespace-nowrap cursor-pointer"
            >
              <span>查看 13 所重點學校矩陣</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed max-w-4xl">
          依據 111 至 115 年國中教育會考成績報告、教育部學力分析運用會議資料，以及花蓮縣政府科技化評量（202505、202605篩選測驗與114年成長測驗）跨年度追蹤：
          花蓮縣在英數基礎學力正面臨長期雙科待加強偏高、英聽落差擴大、國中七升八代數銜接斷層，以及九年級學習扶助涵蓋率不足等核心課題。
        </p>

        {/* 4 Core Quick Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-slate-100">
          <div className="p-4 bg-slate-50 rounded-lg">
            <span className="text-xs text-slate-500 block mb-1">全縣英語待加強率</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-slate-900">
                46.15%
              </span>
              <span className="text-xs font-mono font-medium text-red-600">
                +16.82% 全國
              </span>
            </div>
            <span className="text-xs text-slate-500 mt-1 block">全國 29.33%</span>
          </div>

          <div className="p-4 bg-slate-50 rounded-lg">
            <span className="text-xs text-slate-500 block mb-1">全縣英語聽力待加強率</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-red-600">
                51.26%
              </span>
              <span className="text-xs font-mono font-medium text-red-600">
                +17.55% 差距最大
              </span>
            </div>
            <span className="text-xs text-slate-500 mt-1 block">全國 33.71%</span>
          </div>

          <div className="p-4 bg-slate-50 rounded-lg">
            <span className="text-xs text-slate-500 block mb-1">全縣數學待加強率</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-slate-900">
                39.40%
              </span>
              <span className="text-xs font-mono font-medium text-red-600">
                +14.19% 全國
              </span>
            </div>
            <span className="text-xs text-slate-500 mt-1 block">全國 25.21%</span>
          </div>

          <div className="p-4 bg-slate-50 rounded-lg">
            <span className="text-xs text-slate-500 block mb-1">連續三年雙科C率破50%</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-slate-900">
                10 所學校
              </span>
              <span className="text-xs text-slate-500 font-medium">
                (英11校/數12校)
              </span>
            </div>
            <span className="text-xs text-slate-500 mt-1 block">中型學校佔 4 所</span>
          </div>
        </div>
      </div>

      {/* Visual Benchmark Comparison Section */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 md:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              115 年國中教育會考：花蓮縣與全國學力指標對照
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              比率單位為 %；待加強率越低越好，精熟率越高越好
            </p>
          </div>

          {/* Segmented Filter Control */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg self-start sm:self-auto">
            <button
              onClick={() => setActiveSubjectTab('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                activeSubjectTab === 'all'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              全部指標
            </button>
            <button
              onClick={() => setActiveSubjectTab('english')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                activeSubjectTab === 'english'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              英語科
            </button>
            <button
              onClick={() => setActiveSubjectTab('math')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                activeSubjectTab === 'math'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              數學科
            </button>
            <button
              onClick={() => setActiveSubjectTab('listening')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                activeSubjectTab === 'listening'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              英語聽力
            </button>
          </div>
        </div>

        {/* Visual Benchmark Bars Grid */}
        <div className="space-y-6">
          {filteredComparison.map((item) => {
            const isNegativeAlert = item.isHigherWorse ? item.diff > 0 : item.diff < 0;
            return (
              <div key={item.id} className="p-4 rounded-lg bg-slate-50/80 border border-slate-100">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-slate-900">{item.subject}</span>
                    <span className="text-xs text-slate-400">·</span>
                    <span className="text-xs text-slate-500">{item.desc}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-500">
                      差距：
                      <span
                        className={`font-mono font-bold tabular-nums ml-1 ${
                          isNegativeAlert ? 'text-red-600' : 'text-emerald-600'
                        }`}
                      >
                        {item.diff > 0 ? `+${item.diff.toFixed(2)}` : item.diff.toFixed(2)} 百分點
                      </span>
                    </span>
                  </div>
                </div>

                {/* Progress Comparison Bars */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3 pt-3 border-t border-slate-200/60">
                  {/* Hualien Bar */}
                  <div>
                    <div className="flex justify-between text-xs text-slate-600 mb-1">
                      <span className="font-medium text-slate-800">花蓮縣</span>
                      <span className="font-mono font-bold tabular-nums text-slate-900">
                        {item.county.toFixed(2)}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          item.isHigherWorse
                            ? item.county > 40
                              ? 'bg-red-500'
                              : 'bg-amber-500'
                            : 'bg-blue-600'
                        }`}
                        style={{ width: `${Math.min(item.county, 100)}%` }}
                      />
                    </div>
                  </div>

                  {/* National Bar */}
                  <div>
                    <div className="flex justify-between text-xs text-slate-600 mb-1">
                      <span className="font-medium text-slate-600">全國平均</span>
                      <span className="font-mono font-bold tabular-nums text-slate-700">
                        {item.national.toFixed(2)}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-slate-500 rounded-full transition-all duration-500"
                        style={{ width: `${Math.min(item.national, 100)}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Six Crucial Findings & Structural Evidence Cards */}
      <div>
        <div className="mb-4">
          <h2 className="text-lg font-bold text-slate-900">
            全縣學力六大結構性發現與實證關鍵
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            整合教育部附冊與花蓮縣政府科技化評量大數據交叉分析成果
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                <School className="w-4 h-4 text-blue-600" />
                <span>學校屬性結構</span>
                <span aria-hidden="true">·</span>
                <span>打破偏鄉單一藉口</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                非偏遠中型學校待加強人數龐大
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                全縣偏遠學校比例高達 44.00%（全國僅 22.80%），但待關心學校中英、數各有 4 所屬「非偏遠中校」（如秀林、新城、美崙、化仁、吉安）。這類學校單校待加強人數均達 40～70 人，佔全縣待加強學生總量極大比重，亟需優先實施大班教學差異化與補救擴大。
              </p>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg text-xs font-mono text-slate-700">
              秀林英 59 人/數 57 人 · 化仁英 62 人 · 吉安數 58 人
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                <Activity className="w-4 h-4 text-emerald-600" />
                <span>學扶分母方法學突破</span>
                <span aria-hidden="true">·</span>
                <span>強預警指標</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                全年級分母證實篩選測驗極具預警效力
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                教育部以「受測人數」為分母時，八年級未通過率與會考待加強率相關接近 0（英 -0.07、數 0.09）；縣府改以「全年級學生數」為分母，同屆相關係數跳升至英語 +0.79、數學 +0.82！這證實科技化評量能提前一年精準預警會考落點。
              </p>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg text-xs font-mono text-slate-700">
              同屆預警相關：英語 r = +0.79 · 數學 r = +0.82
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>輔導涵蓋斷層</span>
                <span aria-hidden="true">·</span>
                <span>漏接痛點</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                高辨識率背後的九年級受輔斷層
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                八年級篩選測驗已辨識出會考待加強學生的 65%（英語）與 80%（數學），然而進入九年級後，已辨識學生實際受輔率僅約 50%！部分重點學校九年級學扶甚至僅開 2～15 人班級，學生因時段、技藝課程或意願退出，導致預警無效化。
              </p>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg text-xs font-mono text-slate-700">
              已辨識 80% 數學弱點 · 九年級實際受輔僅約 50%
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                <Calculator className="w-4 h-4 text-purple-600" />
                <span>認知斷層階段</span>
                <span aria-hidden="true">·</span>
                <span>代數擴大效應</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                七升八年級：英語進步 vs 數學劇升
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                追蹤同一屆學生歷程發現：七年級至八年級英語未通過率多數學校呈現下降或持平，但數學未通過率幾乎全面暴升（平和由 29.4% 暴升至 63.2%、化仁由 63.2% 升至 78.6%、三民由 52.9% 升至 69.7%）。八年級代數抽象化成為落差引爆點。
              </p>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg text-xs font-mono text-slate-700">
              平和國中數學未過率暴增 33.8% · 化仁未過率高達 78.6%
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                <Users className="w-4 h-4 text-indigo-600" />
                <span>師資結構風險</span>
                <span aria-hidden="true">·</span>
                <span>配課失衡</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                待關心校數學非專長授課達 48.4%
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                13 所待關心學校數學非專長授課比 48.4%，高於全縣其他學校之 33.5%。新城國中數學 54 節中有 46 節由非專長代理教師授課（85.2%）；美崙英數代理節數比分別高達 74.1% 與 78.9%；師資不穩定與配課不當直接影響課堂學習成效。
              </p>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg text-xs font-mono text-slate-700">
              新城非專長代理 85.2% · 美崙代理比 74~79%
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                <Headphones className="w-4 h-4 text-cyan-600" />
                <span>英聽瓶頸突破</span>
                <span aria-hidden="true">·</span>
                <span>落後最大缺口</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                13 所待關心學校英聽待加強均逾七成
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                全縣英語聽力待加強比率 51.26%，大幅落後全國達 17.55 個百分點，東里（88.9%）、富里（89.3%）、富源（100%）、秀林（87.0%）等重點學校待加強率更居高不下。每週課堂常態聽力訓練與學習扶助融入聽力已刻不容緩。
              </p>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg text-xs font-mono text-slate-700">
              全縣英聽 C 率 51.26% · 13 所學校均超過 70%
            </div>
          </div>
        </div>
      </div>

      {/* Quick Action Banner */}
      <div className="bg-slate-900 text-white rounded-xl p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xs text-blue-400 font-medium block mb-1">精進方針導引</span>
          <h3 className="text-lg font-bold">查看 116 年會考考生（八年級）篩選測驗未通過預警</h3>
          <p className="text-xs text-slate-300 mt-1 max-w-2xl">
            依據 202605 最新篩選測驗，化仁、新城、秀林、三民等多所學校八年級數學與英語未通過率已超過六至七成，需於本學期即刻啟動跨年級支持。
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onNavigate('early_warning')}
            className="px-4 py-2 text-xs font-semibold text-slate-900 bg-white rounded-lg hover:bg-slate-100 transition-colors whitespace-nowrap cursor-pointer"
          >
            開啟 116 年預警雷達
          </button>
          <button
            onClick={() => onNavigate('strategy')}
            className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors whitespace-nowrap cursor-pointer"
          >
            檢視八大精進策略
          </button>
        </div>
      </div>
    </div>
  );
};
