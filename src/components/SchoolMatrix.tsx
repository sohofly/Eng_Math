import React, { useState, useMemo } from 'react';
import { focusSchoolsData, countyStats } from '../data/schoolsData';
import { SchoolData, SchoolCategory, SchoolScale } from '../types';
import { 
  ArrowUpDown, 
  Search, 
  Filter, 
  ExternalLink, 
  Layers, 
  ScatterChart as ScatterIcon,
  Table as TableIcon,
  AlertTriangle,
  Award,
  BookOpen
} from 'lucide-react';

interface SchoolMatrixProps {
  onSelectSchool: (schoolId: string) => void;
}

type SortField = 'name' | 'englishC' | 'mathC' | 'listeningC' | 'totalCCount' | 'candidates' | 'avgC';
type SortOrder = 'asc' | 'desc';

export const SchoolMatrix: React.FC<SchoolMatrixProps> = ({ onSelectSchool }) => {
  const [viewMode, setViewMode] = useState<'table' | 'scatter'>('table');
  const [categoryFilter, setCategoryFilter] = useState<'all' | SchoolCategory>('all');
  const [scaleFilter, setScaleFilter] = useState<'all' | SchoolScale>('all');
  const [passionFilter, setPassionFilter] = useState<'all' | 'passion' | 'normal'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortField, setSortField] = useState<SortField>('totalCCount');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');

  // Filtered & Sorted schools
  const processedSchools = useMemo(() => {
    return focusSchoolsData
      .filter((school) => {
        if (categoryFilter !== 'all' && school.category !== categoryFilter) return false;
        if (scaleFilter !== 'all' && school.scale !== scaleFilter) return false;
        if (passionFilter === 'passion' && !school.isPassionSchool) return false;
        if (passionFilter === 'normal' && school.isPassionSchool) return false;
        if (searchQuery && !school.name.includes(searchQuery)) return false;
        return true;
      })
      .sort((a, b) => {
        let valA = 0;
        let valB = 0;

        const a115 = a.history.find((h) => h.year === '115年') || a.history[a.history.length - 1];
        const b115 = b.history.find((h) => h.year === '115年') || b.history[b.history.length - 1];

        switch (sortField) {
          case 'name':
            return sortOrder === 'asc'
              ? a.name.localeCompare(b.name, 'zh-TW')
              : b.name.localeCompare(a.name, 'zh-TW');
          case 'englishC':
            valA = a115.englishC;
            valB = b115.englishC;
            break;
          case 'mathC':
            valA = a115.mathC;
            valB = b115.mathC;
            break;
          case 'listeningC':
            valA = a115.listeningC;
            valB = b115.listeningC;
            break;
          case 'totalCCount':
            valA = a.counts115.englishC + a.counts115.mathC;
            valB = b.counts115.englishC + b.counts115.mathC;
            break;
          case 'candidates':
            valA = a.candidateCount115;
            valB = b.candidateCount115;
            break;
          case 'avgC':
            valA = (a.threeYearAvg.englishC + a.threeYearAvg.mathC) / 2;
            valB = (b.threeYearAvg.englishC + b.threeYearAvg.mathC) / 2;
            break;
        }

        return sortOrder === 'asc' ? valA - valB : valB - valA;
      });
  }, [categoryFilter, scaleFilter, passionFilter, searchQuery, sortField, sortOrder]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('desc');
    }
  };

  return (
    <div className="space-y-6">
      {/* Header & Controls Bar */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-100 pb-5 mb-5">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
              <span>花蓮縣 13 所精進重點國中</span>
              <span aria-hidden="true">·</span>
              <span>113～115 三年趨勢交叉分析</span>
            </div>
            <h2 className="text-xl font-bold tracking-tight text-slate-900">
              校際多維度學力矩陣與樣態定位
            </h2>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2">
            <div className="flex items-center p-1 bg-slate-100 rounded-lg">
              <button
                onClick={() => setViewMode('table')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                  viewMode === 'table'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <TableIcon className="w-3.5 h-3.5" />
                <span>矩陣明細表</span>
              </button>
              <button
                onClick={() => setViewMode('scatter')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                  viewMode === 'scatter'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <ScatterIcon className="w-3.5 h-3.5" />
                <span>英數待加強象限圖</span>
              </button>
            </div>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {/* Search */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="搜尋校名..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-1 focus:ring-slate-900 w-36 sm:w-44"
              />
            </div>

            {/* School Category */}
            <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg">
              <button
                onClick={() => setCategoryFilter('all')}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                  categoryFilter === 'all'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                全類別 ({focusSchoolsData.length})
              </button>
              <button
                onClick={() => setCategoryFilter('非偏遠')}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                  categoryFilter === '非偏遠'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                非偏遠 (5校)
              </button>
              <button
                onClick={() => setCategoryFilter('偏遠')}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                  categoryFilter === '偏遠'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                偏遠 (6校)
              </button>
              <button
                onClick={() => setCategoryFilter('特偏')}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                  categoryFilter === '特偏'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                特偏 (2校)
              </button>
            </div>

            {/* Scale Filter */}
            <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg">
              <button
                onClick={() => setScaleFilter('all')}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                  scaleFilter === 'all'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                全規模
              </button>
              <button
                onClick={() => setScaleFilter('中校')}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                  scaleFilter === '中校'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                中校
              </button>
              <button
                onClick={() => setScaleFilter('小校')}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                  scaleFilter === '小校'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                小校
              </button>
            </div>

            {/* PASSION Filter */}
            <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg">
              <button
                onClick={() => setPassionFilter('all')}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                  passionFilter === 'all'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                全部計畫
              </button>
              <button
                onClick={() => setPassionFilter('passion')}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                  passionFilter === 'passion'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                PASSION 學校 (東里/玉東)
              </button>
            </div>
          </div>

          <div className="text-xs text-slate-500">
            顯示 <span className="font-mono font-bold text-slate-900">{processedSchools.length}</span> 所重點學校
          </div>
        </div>
      </div>

      {/* View 1: High Density Matrix Table */}
      {viewMode === 'table' && (
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold">
                  <th
                    onClick={() => handleSort('name')}
                    className="py-3 px-4 cursor-pointer hover:text-slate-900 whitespace-nowrap"
                  >
                    <div className="flex items-center gap-1">
                      <span>學校名稱 / 規模</span>
                      <ArrowUpDown className="w-3 h-3 text-slate-400" />
                    </div>
                  </th>
                  <th
                    onClick={() => handleSort('candidates')}
                    className="py-3 px-3 cursor-pointer hover:text-slate-900 text-right whitespace-nowrap"
                  >
                    <div className="flex items-center justify-end gap-1">
                      <span>115考生</span>
                      <ArrowUpDown className="w-3 h-3 text-slate-400" />
                    </div>
                  </th>
                  <th
                    onClick={() => handleSort('englishC')}
                    className="py-3 px-3 cursor-pointer hover:text-slate-900 text-right whitespace-nowrap"
                  >
                    <div className="flex items-center justify-end gap-1">
                      <span>115英語待加強率</span>
                      <ArrowUpDown className="w-3 h-3 text-slate-400" />
                    </div>
                  </th>
                  <th
                    onClick={() => handleSort('listeningC')}
                    className="py-3 px-3 cursor-pointer hover:text-slate-900 text-right whitespace-nowrap"
                  >
                    <div className="flex items-center justify-end gap-1">
                      <span>115英聽待加強</span>
                      <ArrowUpDown className="w-3 h-3 text-slate-400" />
                    </div>
                  </th>
                  <th
                    onClick={() => handleSort('mathC')}
                    className="py-3 px-3 cursor-pointer hover:text-slate-900 text-right whitespace-nowrap"
                  >
                    <div className="flex items-center justify-end gap-1">
                      <span>115數學待加強率</span>
                      <ArrowUpDown className="w-3 h-3 text-slate-400" />
                    </div>
                  </th>
                  <th
                    onClick={() => handleSort('totalCCount')}
                    className="py-3 px-3 cursor-pointer hover:text-slate-900 text-right whitespace-nowrap"
                  >
                    <div className="flex items-center justify-end gap-1">
                      <span>待加強總人次</span>
                      <ArrowUpDown className="w-3 h-3 text-slate-400" />
                    </div>
                  </th>
                  <th className="py-3 px-3 whitespace-nowrap">三年趨勢與問題樣態</th>
                  <th className="py-3 px-3 whitespace-nowrap">師資結構與輔導風險警訊</th>
                  <th className="py-3 px-4 text-center whitespace-nowrap">操作</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {processedSchools.map((school) => {
                  const h115 = school.history.find((h) => h.year === '115年') || school.history[school.history.length - 1];
                  const totalCCount = school.counts115.englishC + school.counts115.mathC;

                  // High count alert (e.g. over 80 count)
                  const isHighImpact = totalCCount > 70;

                  return (
                    <tr
                      key={school.id}
                      className="hover:bg-slate-50/80 transition-colors group"
                    >
                      {/* Name & Scale */}
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => onSelectSchool(school.id)}
                            className="font-bold text-slate-900 hover:text-blue-600 transition-colors text-left cursor-pointer"
                          >
                            {school.name}
                          </button>
                          {school.isPassionSchool && (
                            <span className="text-[10px] text-purple-700 bg-purple-50 px-1.5 py-0.5 rounded font-medium">
                              PASSION
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-slate-500 mt-0.5">
                          {school.category} · {school.scale}
                        </div>
                      </td>

                      {/* Candidates */}
                      <td className="py-3 px-3 text-right font-mono tabular-nums text-slate-700">
                        {school.candidateCount115} 人
                      </td>

                      {/* English C */}
                      <td className="py-3 px-3 text-right font-mono tabular-nums">
                        <span
                          className={`font-semibold ${
                            h115.englishC >= 80
                              ? 'text-red-600'
                              : h115.englishC >= 65
                              ? 'text-amber-600'
                              : 'text-slate-800'
                          }`}
                        >
                          {h115.englishC.toFixed(2)}%
                        </span>
                        <span className="text-[11px] text-slate-400 block">
                          ({school.counts115.englishC}人)
                        </span>
                      </td>

                      {/* Listening C */}
                      <td className="py-3 px-3 text-right font-mono tabular-nums">
                        <span
                          className={`font-semibold ${
                            h115.listeningC >= 80 ? 'text-red-600' : 'text-slate-800'
                          }`}
                        >
                          {h115.listeningC.toFixed(2)}%
                        </span>
                      </td>

                      {/* Math C */}
                      <td className="py-3 px-3 text-right font-mono tabular-nums">
                        <span
                          className={`font-semibold ${
                            h115.mathC >= 80
                              ? 'text-red-600'
                              : h115.mathC >= 65
                              ? 'text-amber-600'
                              : 'text-slate-800'
                          }`}
                        >
                          {h115.mathC.toFixed(2)}%
                        </span>
                        <span className="text-[11px] text-slate-400 block">
                          ({school.counts115.mathC}人)
                        </span>
                      </td>

                      {/* Total C Count */}
                      <td className="py-3 px-3 text-right font-mono tabular-nums">
                        <span
                          className={`inline-block px-1.5 py-0.5 rounded font-bold ${
                            isHighImpact
                              ? 'bg-red-50 text-red-700'
                              : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          {totalCCount} 人次
                        </span>
                      </td>

                      {/* Trend & Pattern */}
                      <td className="py-3 px-3 max-w-xs">
                        <div className="font-medium text-slate-800 line-clamp-1">
                          {school.ministryFocus.problemPattern}
                        </div>
                        <div className="text-[11px] text-slate-500 line-clamp-1">
                          {school.ministryFocus.threeYearTrend}
                        </div>
                      </td>

                      {/* Teacher & Warning Notes */}
                      <td className="py-3 px-3 max-w-xs">
                        {school.teacherStats.mathNonSpecialistRate ? (
                          <div className="text-[11px] text-amber-700">
                            數非專長: {school.teacherStats.mathNonSpecialistRate}%
                          </div>
                        ) : null}
                        {school.teacherStats.mathSubstituteRate || school.teacherStats.englishSubstituteRate ? (
                          <div className="text-[11px] text-red-700">
                            代理率高: 英{school.teacherStats.englishSubstituteRate || '-'}% / 數{school.teacherStats.mathSubstituteRate || '-'}%
                          </div>
                        ) : null}
                        {school.earlyWarning?.warningNotes && (
                          <div className="text-[10px] text-slate-500 truncate" title={school.earlyWarning.warningNotes}>
                            ⚠️ {school.earlyWarning.warningNotes}
                          </div>
                        )}
                        {!school.teacherStats.mathNonSpecialistRate &&
                         !school.teacherStats.mathSubstituteRate &&
                         school.teacherStats.englishSpecialistFull && (
                          <div className="text-[11px] text-emerald-700">
                            師資專長完整 (需轉化課堂教學)
                          </div>
                        )}
                      </td>

                      {/* Action */}
                      <td className="py-3 px-4 text-center">
                        <button
                          onClick={() => onSelectSchool(school.id)}
                          className="px-2.5 py-1 text-xs font-medium text-blue-700 bg-blue-50 hover:bg-blue-100 rounded transition-colors whitespace-nowrap cursor-pointer"
                        >
                          深入診斷
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* View 2: 2D Quadrant Scatter Plot */}
      {viewMode === 'scatter' && (
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <div className="mb-4">
            <h3 className="text-base font-bold text-slate-900">
              115 年會考 英數雙科待加強率 二維象限分佈圖
            </h3>
            <p className="text-xs text-slate-500">
              X 軸為英語待加強率 (%)，Y 軸為數學待加強率 (%)。虛線為花蓮縣平均基準線（英 46.15%、數 39.40%）。
              圓圈大小代表 115 年該校考生人數規模（影響學生總量）；點擊圓圈可立即開啟該校深度報告。
            </p>
          </div>

          {/* Interactive SVG Chart Container */}
          <div className="relative w-full aspect-16/10 max-h-[560px] bg-slate-50 rounded-lg border border-slate-200 p-4 sm:p-6 overflow-hidden">
            <svg
              className="w-full h-full"
              viewBox="0 0 800 500"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Grid Lines */}
              {[20, 40, 60, 80, 100].map((tick) => {
                const x = 70 + (tick / 100) * 700;
                const y = 430 - (tick / 100) * 380;
                return (
                  <React.Fragment key={tick}>
                    {/* Vertical Grid */}
                    <line
                      x1={x}
                      y1={50}
                      x2={x}
                      y2={430}
                      stroke="#e2e8f0"
                      strokeDasharray="3 3"
                    />
                    <text
                      x={x}
                      y={450}
                      fontSize="10"
                      fill="#64748b"
                      textAnchor="middle"
                      className="font-mono"
                    >
                      {tick}%
                    </text>

                    {/* Horizontal Grid */}
                    <line
                      x1={70}
                      y1={y}
                      x2={770}
                      y2={y}
                      stroke="#e2e8f0"
                      strokeDasharray="3 3"
                    />
                    <text
                      x={55}
                      y={y + 3}
                      fontSize="10"
                      fill="#64748b"
                      textAnchor="end"
                      className="font-mono"
                    >
                      {tick}%
                    </text>
                  </React.Fragment>
                );
              })}

              {/* County Baseline Vertical: English 46.15% */}
              {(() => {
                const xBase = 70 + (46.15 / 100) * 700;
                return (
                  <g>
                    <line
                      x1={xBase}
                      y1={50}
                      x2={xBase}
                      y2={430}
                      stroke="#2563eb"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                    />
                    <text
                      x={xBase}
                      y={45}
                      fontSize="10"
                      fill="#2563eb"
                      textAnchor="middle"
                      className="font-bold"
                    >
                      全縣英均 46.15%
                    </text>
                  </g>
                );
              })()}

              {/* County Baseline Horizontal: Math 39.40% */}
              {(() => {
                const yBase = 430 - (39.40 / 100) * 380;
                return (
                  <g>
                    <line
                      x1={70}
                      y1={yBase}
                      x2={770}
                      y2={yBase}
                      stroke="#2563eb"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                    />
                    <text
                      x={775}
                      y={yBase + 3}
                      fontSize="10"
                      fill="#2563eb"
                      textAnchor="start"
                      className="font-bold"
                    >
                      全縣數均 39.40%
                    </text>
                  </g>
                );
              })()}

              {/* Axis Titles */}
              <text
                x="420"
                y="485"
                fontSize="12"
                fill="#334155"
                textAnchor="middle"
                fontWeight="bold"
              >
                115 年英語待加強率 (%) →
              </text>
              <text
                x="20"
                y="240"
                fontSize="12"
                fill="#334155"
                textAnchor="middle"
                fontWeight="bold"
                transform="rotate(-90 20 240)"
              >
                115 年數學待加強率 (%) →
              </text>

              {/* Plotted School Nodes */}
              {processedSchools.map((school) => {
                const h115 = school.history.find((h) => h.year === '115年') || school.history[school.history.length - 1];
                const cx = 70 + (h115.englishC / 100) * 700;
                const cy = 430 - (h115.mathC / 100) * 380;
                // Radius proportional to candidate count (e.g. 10 -> 8, 84 -> 20)
                const radius = Math.max(8, Math.min(22, 6 + Math.sqrt(school.candidateCount115) * 1.5));

                const color =
                  school.category === '非偏遠'
                    ? '#2563eb' // Blue
                    : school.category === '偏遠'
                    ? '#d97706' // Amber
                    : '#7c3aed'; // Purple (特偏)

                return (
                  <g
                    key={school.id}
                    className="cursor-pointer group transition-transform"
                    onClick={() => onSelectSchool(school.id)}
                  >
                    <circle
                      cx={cx}
                      cy={cy}
                      r={radius}
                      fill={color}
                      fillOpacity="0.75"
                      stroke="#ffffff"
                      strokeWidth="2"
                      className="group-hover:fill-opacity-100 group-hover:scale-110 transition-all"
                    />
                    <text
                      x={cx}
                      y={cy - radius - 4}
                      fontSize="11"
                      fontWeight="bold"
                      fill="#0f172a"
                      textAnchor="middle"
                      className="pointer-events-none drop-shadow-xs"
                    >
                      {school.name}
                    </text>
                    <text
                      x={cx}
                      y={cy + 3}
                      fontSize="9"
                      fill="#ffffff"
                      textAnchor="middle"
                      fontWeight="bold"
                      className="pointer-events-none font-mono"
                    >
                      {school.candidateCount115}人
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Scatter Plot Legend */}
          <div className="flex flex-wrap items-center justify-between gap-4 mt-4 pt-4 border-t border-slate-100 text-xs text-slate-600">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-blue-600 inline-block" />
                <span>非偏遠學校 (5 所，規模較大)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-amber-600 inline-block" />
                <span>偏遠學校 (6 所)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-purple-600 inline-block" />
                <span>特偏學校 (2 所，如三民、玉東)</span>
              </div>
            </div>

            <span className="text-slate-400">
              *右上象限為「雙科待加強嚴重偏高」區，全體重點學校皆落在全縣均線右上方。
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
