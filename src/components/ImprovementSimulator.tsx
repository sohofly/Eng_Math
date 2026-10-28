import React, { useState } from 'react';
import { countyStats } from '../data/schoolsData';
import { 
  Sliders, 
  RotateCcw, 
  TrendingDown, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  HelpCircle,
  Award
} from 'lucide-react';

export const ImprovementSimulator: React.FC = () => {
  // Baseline initial parameters
  const [supportCoverage, setSupportCoverage] = useState<number>(50); // % of grade 9 un-passed students supported
  const [listeningMinutes, setListeningMinutes] = useState<number>(5); // min / week
  const [mathSpecialistRate, setMathSpecialistRate] = useState<number>(52); // %
  const [algebraBridgeLevel, setAlgebraBridgeLevel] = useState<number>(25); // %
  const [kidmapWorkshops, setKidmapWorkshops] = useState<number>(0); // sessions / yr

  const handleReset = () => {
    setSupportCoverage(50);
    setListeningMinutes(5);
    setMathSpecialistRate(52);
    setAlgebraBridgeLevel(25);
    setKidmapWorkshops(0);
  };

  // Model calculation derived from report regression and gap coefficients
  // Baseline County Rates:
  // English C: 46.15%, Math C: 39.40%, Listening C: 51.26%
  // Estimated candidates in Hualien County ~ 2,100 students
  const totalCountyCandidates = 2100;

  // English C Reduction
  const deltaSupportCoverage = (supportCoverage - 50) / 45; // 0 to 1
  const deltaListening = (listeningMinutes - 5) / 25; // 0 to 1
  const deltaKidmap = kidmapWorkshops / 4; // 0 to 1

  const englishCReduction = Math.min(
    14.5,
    deltaSupportCoverage * 5.8 + deltaListening * 5.2 + deltaKidmap * 2.8
  );

  // Listening C Reduction
  const listeningCReduction = Math.min(
    18.0,
    deltaListening * 11.5 + deltaSupportCoverage * 4.0 + deltaKidmap * 2.5
  );

  // Math C Reduction
  const deltaMathSpecialist = (mathSpecialistRate - 52) / 43; // 0 to 1
  const deltaAlgebra = (algebraBridgeLevel - 25) / 75; // 0 to 1

  const mathCReduction = Math.min(
    13.0,
    deltaSupportCoverage * 4.6 +
      deltaMathSpecialist * 4.2 +
      deltaAlgebra * 4.5 +
      deltaKidmap * 2.0
  );

  const projectedEnglishC = Math.max(25.0, countyStats.englishC.county - englishCReduction);
  const projectedListeningC = Math.max(28.0, countyStats.listeningC.county - listeningCReduction);
  const projectedMathC = Math.max(22.0, countyStats.mathC.county - mathCReduction);

  const estimatedStudentsElevatedEnglish = Math.round(
    (englishCReduction / 100) * totalCountyCandidates
  );
  const estimatedStudentsElevatedMath = Math.round(
    (mathCReduction / 100) * totalCountyCandidates
  );
  const totalElevatedStudentInstances =
    estimatedStudentsElevatedEnglish + estimatedStudentsElevatedMath;

  return (
    <div className="space-y-8">
      {/* Title Header */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 md:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5 mb-5">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
              <span>實證數據驅動決策</span>
              <span aria-hidden="true">·</span>
              <span>策略敏感度與效益預估沙盒</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
              全縣學力精進「成效模擬器」
            </h2>
          </div>

          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer self-start sm:self-auto"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>重設為現況基準</span>
          </button>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed max-w-4xl">
          依據會考數據、學習扶助全年級相關係數（r = +0.79 / +0.82）及師資非專長授課比例，
          本模擬器可即時預算：當全縣學校落實「九年級學扶全涵蓋」、「每週固定聽力」、「專長排課優先」及「KIDMAP 轉化」時，
          預期可為花蓮縣降低之待加強率與挽救脫離 C 等級之學子人數。
        </p>
      </div>

      {/* Simulator Inputs & Dynamic Outputs Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: 5 Parameter Sliders (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 p-6 space-y-6">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Sliders className="w-4 h-4 text-blue-600" />
              <span>關鍵政策介入變數調整</span>
            </h3>
            <span className="text-xs text-slate-500">
              拖動滑桿觀察各項介入對學力指標之邊際貢獻
            </span>
          </div>

          {/* Slider 1 */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-800">
                1. 九年級學習扶助實質受輔涵蓋率
              </span>
              <span className="font-mono font-bold text-blue-600 tabular-nums">
                {supportCoverage}% (現況約 50%)
              </span>
            </div>
            <input
              type="range"
              min="50"
              max="95"
              step="5"
              value={supportCoverage}
              onChange={(e) => setSupportCoverage(Number(e.target.value))}
              className="w-full accent-blue-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
            />
            <p className="text-[11px] text-slate-500">
              補足八年級已辨識但在九年級流失之五成缺口；清查未通過學生全數補受輔。
            </p>
          </div>

          {/* Slider 2 */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-800">
                2. 英語課堂每週固定聽力訓練時間
              </span>
              <span className="font-mono font-bold text-cyan-600 tabular-nums">
                {listeningMinutes} 分鐘 / 週 (現況約 5 分鐘)
              </span>
            </div>
            <input
              type="range"
              min="5"
              max="30"
              step="5"
              value={listeningMinutes}
              onChange={(e) => setListeningMinutes(Number(e.target.value))}
              className="w-full accent-cyan-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
            />
            <p className="text-[11px] text-slate-500">
              目前全縣英聽待加強高達 51.26%；固定練習可大幅拉平落後全國之 17.55 個百分點。
            </p>
          </div>

          {/* Slider 3 */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-800">
                3. 數學科專長正式教師授課比率
              </span>
              <span className="font-mono font-bold text-indigo-600 tabular-nums">
                {mathSpecialistRate}% (重點校平均約 52%)
              </span>
            </div>
            <input
              type="range"
              min="52"
              max="95"
              step="5"
              value={mathSpecialistRate}
              onChange={(e) => setMathSpecialistRate(Number(e.target.value))}
              className="w-full accent-indigo-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
            />
            <p className="text-[11px] text-slate-500">
              優先由數學專長任教八、九年級，大幅降低非專長授課（部分學校高達 69%～85%）。
            </p>
          </div>

          {/* Slider 4 */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-800">
                4. 七升八年級代數前置介入與國中小銜接
              </span>
              <span className="font-mono font-bold text-purple-600 tabular-nums">
                落實度 {algebraBridgeLevel}% (現況約 25%)
              </span>
            </div>
            <input
              type="range"
              min="20"
              max="100"
              step="10"
              value={algebraBridgeLevel}
              onChange={(e) => setAlgebraBridgeLevel(Number(e.target.value))}
              className="w-full accent-purple-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
            />
            <p className="text-[11px] text-slate-500">
              提前於七下補強未知數與方程式，阻斷八年級未通過率劇增 15%～33% 的代數斷層。
            </p>
          </div>

          {/* Slider 5 */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-800">
                5. KIDMAP 作答診斷與迷思概念轉化社群
              </span>
              <span className="font-mono font-bold text-emerald-600 tabular-nums">
                每年 {kidmapWorkshops} 場專題研討 (現況多為 0 場)
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="4"
              step="1"
              value={kidmapWorkshops}
              onChange={(e) => setKidmapWorkshops(Number(e.target.value))}
              className="w-full accent-emerald-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
            />
            <p className="text-[11px] text-slate-500">
              依據教育部建議，社群至少安排 2 場會考或 KIDMAP 診斷，將錯題轉化為客製概念教具。
            </p>
          </div>
        </div>

        {/* Right: Projected Outcomes (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Main Impact Card */}
          <div className="bg-slate-900 text-white rounded-xl p-6 shadow-sm">
            <span className="text-xs text-blue-400 font-semibold block mb-1">
              政策模擬預估產出
            </span>
            <h3 className="text-lg font-bold mb-4">預估全縣學力優化指標</h3>

            <div className="space-y-4">
              {/* English C */}
              <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                <div className="flex justify-between items-baseline mb-1">
                  <span className="text-xs text-slate-300">英語待加強率</span>
                  <div className="flex items-center gap-2 font-mono tabular-nums">
                    <span className="text-xs text-slate-400 line-through">
                      46.15%
                    </span>
                    <span className="text-base font-bold text-emerald-400">
                      {projectedEnglishC.toFixed(2)}%
                    </span>
                  </div>
                </div>
                <div className="text-[11px] text-emerald-300 flex items-center gap-1">
                  <TrendingDown className="w-3.5 h-3.5" />
                  <span>預估降低 {englishCReduction.toFixed(2)} 個百分點</span>
                </div>
              </div>

              {/* Listening C */}
              <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                <div className="flex justify-between items-baseline mb-1">
                  <span className="text-xs text-slate-300">英語聽力待加強率</span>
                  <div className="flex items-center gap-2 font-mono tabular-nums">
                    <span className="text-xs text-slate-400 line-through">
                      51.26%
                    </span>
                    <span className="text-base font-bold text-cyan-400">
                      {projectedListeningC.toFixed(2)}%
                    </span>
                  </div>
                </div>
                <div className="text-[11px] text-cyan-300 flex items-center gap-1">
                  <TrendingDown className="w-3.5 h-3.5" />
                  <span>預估降低 {listeningCReduction.toFixed(2)} 個百分點</span>
                </div>
              </div>

              {/* Math C */}
              <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                <div className="flex justify-between items-baseline mb-1">
                  <span className="text-xs text-slate-300">數學待加強率</span>
                  <div className="flex items-center gap-2 font-mono tabular-nums">
                    <span className="text-xs text-slate-400 line-through">
                      39.40%
                    </span>
                    <span className="text-base font-bold text-purple-400">
                      {projectedMathC.toFixed(2)}%
                    </span>
                  </div>
                </div>
                <div className="text-[11px] text-purple-300 flex items-center gap-1">
                  <TrendingDown className="w-3.5 h-3.5" />
                  <span>預估降低 {mathCReduction.toFixed(2)} 個百分點</span>
                </div>
              </div>
            </div>

            {/* Total Rescued Students Highlight */}
            <div className="mt-6 pt-5 border-t border-slate-800 text-center">
              <span className="text-xs text-slate-400 block mb-1">
                預估全縣成功脫離「待加強 (C)」之學子人次
              </span>
              <span className="text-3xl font-bold font-mono text-white tabular-nums">
                ~ {totalElevatedStudentInstances}{' '}
                <span className="text-sm font-normal text-slate-300">人次 / 屆</span>
              </span>
              <span className="text-[11px] text-slate-400 block mt-1">
                (英語約 {estimatedStudentsElevatedEnglish} 人 · 數學約 {estimatedStudentsElevatedMath} 人)
              </span>
            </div>
          </div>

          {/* Quick Insights on Policy ROI */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 text-xs space-y-3">
            <span className="font-bold text-slate-800 block">
              💡 政策效益敏感度分析排序（最快見效 vs 最深遠）：
            </span>
            <div className="space-y-2 text-slate-600">
              <div className="flex items-start gap-2">
                <span className="font-bold text-cyan-600 shrink-0">1. 最速見效：</span>
                <span>
                  <strong>每週課堂聽力 20 分鐘</strong>。英聽為全縣落後全國最多項目，聽力敏感度能在 3～6 個月內顯著回升。
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-blue-600 shrink-0">2. 關鍵制度：</span>
                <span>
                  <strong>九年級補辨識補受輔</strong>。八年級已成功抓出 65%~80% 弱點，只要落實開班與不流失，立竿見影。
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-purple-600 shrink-0">3. 根本治本：</span>
                <span>
                  <strong>七下代數銜接與專長配課</strong>。阻斷八年級幾何與代數潰堤，方能從源頭消除連續三年偏高現象。
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
