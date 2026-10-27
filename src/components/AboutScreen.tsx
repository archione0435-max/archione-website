import React from 'react';
import {
  ANNUAL_CONSTRUCTION_RECORDS,
  CERTIFICATES,
} from '../data/portfolioData';
import { getRecordsGroupedByYear } from '../utils/portfolio';

export const AboutScreen: React.FC = () => {
  const groupedRecords = getRecordsGroupedByYear(ANNUAL_CONSTRUCTION_RECORDS);

  return (
    <main className="flex-grow w-full max-w-[2560px] mx-auto px-6 md:px-12 lg:px-20 pt-[140px] pb-[160px]">
      <div className="flex flex-col w-full">
        {/* Quick Jump Anchors Bar */}
        <nav
          className="w-full bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 py-4 px-6 md:px-10 mb-16 overflow-x-auto rounded-lg"
          aria-label="Section Quick Jump"
        >
          <div className="flex items-center space-x-8 md:space-x-12 text-xs tracking-[0.2em] uppercase font-mono text-neutral-500 whitespace-nowrap">
            <a href="#overview" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              01 / Overview &amp; Ethos
            </a>
            <a href="#ceo" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              02 / CEO Message
            </a>
            <a href="#history" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              03 / Track Record
            </a>
            <a href="#certificates" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              04 / Certificates
            </a>
          </div>
        </nav>

        <div className="flex flex-col space-y-[100px] md:space-y-[140px]">
          {/* SECTION 01 / STUDIO ETHOS & OVERVIEW */}
          <section className="flex flex-col w-full" id="overview">
            <div className="flex items-center space-x-4 mb-8">
              <span className="text-xs font-mono tracking-[0.3em] text-neutral-400 uppercase">
                01 / Overview
              </span>
              <div className="h-[1px] bg-neutral-200 dark:bg-neutral-800 flex-grow" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Philosophy Text Column */}
              <div className="lg:col-span-7 flex flex-col space-y-8">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-neutral-900 dark:text-neutral-100 leading-[1.15]">
                  &ldquo; We make better space! &rdquo;
                </h1>
                <div className="space-y-4 text-neutral-600 dark:text-neutral-400 text-base md:text-lg leading-relaxed">
                  <p className="font-medium text-neutral-900 dark:text-neutral-100">
                    각 분야의 전문가들이 만들어내는 완벽한 조화의 크리에이티브 시너지
                  </p>
                  <p>
                    각자의 전문분야에서 쌓아온 노하우와 다른 분야에 대한 공감대가 빚어내는 아키원만의 크리에이티브 시너지
                  </p>
                  <p className="text-sm text-neutral-500 font-light leading-relaxed">
                    건축, 인테리어, 전시, 환경 디자인의 유기적인 결합을 통해 공간의 가치를 극대화하고, 철저한 품질 관리와 시공 안정성을 바탕으로 고객의 신뢰를 구축해 나갑니다.
                  </p>
                </div>
              </div>

              {/* Corporate Ledger Table Column */}
              <div className="lg:col-span-5 bg-neutral-50 dark:bg-neutral-900 p-6 md:p-10 rounded-2xl flex flex-col space-y-6 border border-neutral-200/60 dark:border-neutral-800/60">
                <div className="border-b border-neutral-200 dark:border-neutral-800 pb-3">
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400">
                    Corporate Register
                  </span>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mt-1">
                    회사 개요
                  </h3>
                </div>

                <div className="space-y-4 text-sm font-sans">
                  <div className="flex justify-between py-3 border-b border-neutral-200/50 dark:border-neutral-800/50">
                    <span className="text-neutral-400 font-mono">Legal Name</span>
                    <span className="text-neutral-900 dark:text-neutral-100 font-medium text-right">
                      ARCHIONE Corp. (주식회사 아키원)
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-neutral-200/50 dark:border-neutral-800/50">
                    <span className="text-neutral-400 font-mono">Representative CEO</span>
                    <span className="text-neutral-900 dark:text-neutral-100 font-medium">
                      Gwi deok, Kim (김귀덕)
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-neutral-200/50 dark:border-neutral-800/50">
                    <span className="text-neutral-400 font-mono">Establishment Date</span>
                    <span className="text-neutral-900 dark:text-neutral-100 font-medium font-mono">
                      March 31, 2008
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-neutral-200/50 dark:border-neutral-800/50">
                    <span className="text-neutral-400 font-mono">Official Licenses</span>
                    <span className="text-neutral-900 dark:text-neutral-100 font-medium text-right text-xs">
                      실내건축공사업 11,585,506천원 (2026년 기준)<br />
                      금속창호공사업 1,068,406천원 (2026년 기준)
                    </span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-neutral-400 font-mono">Headquarters</span>
                    <span className="text-neutral-900 dark:text-neutral-100 font-medium text-right text-xs">
                      전남광주 북구 첨단과기로 208번길 43-22.<br />
                      와이어스파크 A동 901호
                    </span>
                  </div>
                </div>

                {/* Office photo */}
                <div className="pt-2">
                  <div
                    className="w-full h-48 bg-cover bg-center rounded-lg grayscale contrast-125 border border-neutral-200 dark:border-neutral-800"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC-8A0GgPAxC1QFZSa9Yb1wFMdhJ2PUFOcqfJoE54FR5apBw6K_Kqie3zfyQ9Uki6MT0pilbaTBFzCqxYc7pdO5rE5qcdrCZh4UDkiM_9kLCLfjMmpcK-K2Pr3tnwu68buFT3gJfBwTfbuBMNo-tqaq7FSoMVcP7eMKmuT9hhKf_7T8CVHF3KU9Xt5Ok-q6DeO8dDGBtCAwE0UbGDFY8aB3g3G8BSLdipgBo95Y2J3n0LJ1RABPyzxj")',
                    }}
                    role="img"
                    aria-label="ARCHIONE office interior"
                  />
                </div>
              </div>
            </div>

            {/* Organization Chart */}
            <div className="mt-16 pt-12 border-t border-neutral-200 dark:border-neutral-800 flex flex-col space-y-12">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 block mb-1">
                  Organization &amp; Practice Hierarchy
                </span>
                <h2 className="text-2xl lg:text-3xl font-light tracking-tight text-neutral-900 dark:text-neutral-100">
                  조직도 (Organization Structure)
                </h2>
              </div>

              <div className="flex flex-col items-center w-full max-w-5xl mx-auto space-y-4">
                {/* CEO */}
                <div className="px-8 py-3 rounded-full border border-neutral-900 dark:border-neutral-100 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-center shadow-sm">
                  <span className="text-xs font-mono tracking-[0.2em] uppercase block opacity-70">
                    Top Leadership
                  </span>
                  <span className="text-sm font-semibold tracking-wide">대표이사 (CEO)</span>
                </div>

                <div className="w-[1px] h-6 bg-neutral-300 dark:bg-neutral-700" />

                {/* Executives */}
                <div className="px-8 py-2.5 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 text-center">
                  <span className="text-xs font-mono tracking-[0.15em] uppercase block text-neutral-400">
                    Executive Board
                  </span>
                  <span className="text-sm font-medium">임원 (Executives)</span>
                </div>

                <div className="w-[1px] h-8 bg-neutral-300 dark:bg-neutral-700" />

                {/* 5 Divisions */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-2">
                  {/* DIV 01 기술부 */}
                  <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-xl border border-neutral-200/60 dark:border-neutral-800/60 flex flex-col justify-between space-y-4">
                    <div className="border-b border-neutral-200 dark:border-neutral-800 pb-3">
                      <span className="text-[10px] font-mono text-neutral-400 block tracking-widest uppercase">
                        DIV 01
                      </span>
                      <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mt-1">
                        기술부
                      </h3>
                      <span className="text-[11px] font-mono text-neutral-400">Engineering &amp; Tech</span>
                    </div>
                    <ul className="space-y-2 text-xs text-neutral-600 dark:text-neutral-400 font-mono">
                      <li className="flex items-center space-x-2"><span className="w-1 h-1 rounded-full bg-neutral-400" /><span>공사 관리</span></li>
                      <li className="flex items-center space-x-2"><span className="w-1 h-1 rounded-full bg-neutral-400" /><span>안전 관리</span></li>
                      <li className="flex items-center space-x-2"><span className="w-1 h-1 rounded-full bg-neutral-400" /><span>자재 관리</span></li>
                      <li className="flex items-center space-x-2"><span className="w-1 h-1 rounded-full bg-neutral-400" /><span>디스플레이</span></li>
                      <li className="flex items-center space-x-2"><span className="w-1 h-1 rounded-full bg-neutral-400" /><span>SIGN</span></li>
                    </ul>
                  </div>

                  {/* DIV 02 관리부 */}
                  <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-xl border border-neutral-200/60 dark:border-neutral-800/60 flex flex-col justify-between space-y-4">
                    <div className="border-b border-neutral-200 dark:border-neutral-800 pb-3">
                      <span className="text-[10px] font-mono text-neutral-400 block tracking-widest uppercase">
                        DIV 02
                      </span>
                      <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mt-1">
                        관리부
                      </h3>
                      <span className="text-[11px] font-mono text-neutral-400">Administration</span>
                    </div>
                    <ul className="space-y-2 text-xs text-neutral-600 dark:text-neutral-400 font-mono">
                      <li className="flex items-center space-x-2"><span className="w-1 h-1 rounded-full bg-neutral-400" /><span>인사 관리</span></li>
                      <li className="flex items-center space-x-2"><span className="w-1 h-1 rounded-full bg-neutral-400" /><span>자금 관리</span></li>
                      <li className="flex items-center space-x-2"><span className="w-1 h-1 rounded-full bg-neutral-400" /><span>총무 관리</span></li>
                    </ul>
                  </div>

                  {/* DIV 03 공무부 */}
                  <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-xl border border-neutral-200/60 dark:border-neutral-800/60 flex flex-col justify-between space-y-4">
                    <div className="border-b border-neutral-200 dark:border-neutral-800 pb-3">
                      <span className="text-[10px] font-mono text-neutral-400 block tracking-widest uppercase">
                        DIV 03
                      </span>
                      <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mt-1">
                        공무부
                      </h3>
                      <span className="text-[11px] font-mono text-neutral-400">Operations</span>
                    </div>
                    <ul className="space-y-2 text-xs text-neutral-600 dark:text-neutral-400 font-mono">
                      <li className="flex items-center space-x-2"><span className="w-1 h-1 rounded-full bg-neutral-400" /><span>견적 관리</span></li>
                      <li className="flex items-center space-x-2"><span className="w-1 h-1 rounded-full bg-neutral-400" /><span>계약 관리</span></li>
                      <li className="flex items-center space-x-2"><span className="w-1 h-1 rounded-full bg-neutral-400" /><span>업체 관리</span></li>
                    </ul>
                  </div>

                  {/* DIV 04 공사부 */}
                  <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-xl border border-neutral-200/60 dark:border-neutral-800/60 flex flex-col justify-between space-y-4">
                    <div className="border-b border-neutral-200 dark:border-neutral-800 pb-3">
                      <span className="text-[10px] font-mono text-neutral-400 block tracking-widest uppercase">
                        DIV 04
                      </span>
                      <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mt-1">
                        공사부
                      </h3>
                      <span className="text-[11px] font-mono text-neutral-400">Construction</span>
                    </div>
                    <ul className="space-y-2 text-xs text-neutral-600 dark:text-neutral-400 font-mono">
                      <li className="flex items-center space-x-2"><span className="w-1 h-1 rounded-full bg-neutral-400" /><span>시공</span></li>
                      <li className="flex items-center space-x-2"><span className="w-1 h-1 rounded-full bg-neutral-400" /><span>A / S</span></li>
                    </ul>
                  </div>

                  {/* DIV 05 설계부 */}
                  <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-xl border border-neutral-200/60 dark:border-neutral-800/60 flex flex-col justify-between space-y-4">
                    <div className="border-b border-neutral-200 dark:border-neutral-800 pb-3">
                      <span className="text-[10px] font-mono text-neutral-400 block tracking-widest uppercase">
                        DIV 05
                      </span>
                      <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mt-1">
                        설계부
                      </h3>
                      <span className="text-[11px] font-mono text-neutral-400">Design Studio</span>
                    </div>
                    <ul className="space-y-2 text-xs text-neutral-600 dark:text-neutral-400 font-mono">
                      <li className="flex items-center space-x-2"><span className="w-1 h-1 rounded-full bg-neutral-400" /><span>디자인 기획</span></li>
                      <li className="flex items-center space-x-2"><span className="w-1 h-1 rounded-full bg-neutral-400" /><span>기본 설계</span></li>
                      <li className="flex items-center space-x-2"><span className="w-1 h-1 rounded-full bg-neutral-400" /><span>실시 설계</span></li>
                      <li className="flex items-center space-x-2"><span className="w-1 h-1 rounded-full bg-neutral-400" /><span>준공 설계</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 02 / CEO MESSAGE */}
          <section className="flex flex-col w-full" id="ceo">
            <div className="flex items-center space-x-4 mb-8">
              <span className="text-xs font-mono tracking-[0.3em] text-neutral-400 uppercase">
                02 / Leadership
              </span>
              <div className="h-[1px] bg-neutral-200 dark:bg-neutral-800 flex-grow" />
            </div>

            <div className="bg-neutral-50 dark:bg-neutral-900 p-8 md:p-14 lg:p-20 rounded-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-center relative overflow-hidden border border-neutral-200/60 dark:border-neutral-800/60">
              <div className="lg:col-span-5 space-y-6 flex flex-col justify-between h-full">
                <div className="space-y-4 md:space-y-6">
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 block">
                    CEO Message
                  </span>
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-light tracking-tight text-neutral-900 dark:text-neutral-100 leading-[1.2]">
                    &ldquo;Innovation is Every Detail.<br />Value in Every Space.&rdquo;
                  </h2>
                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col justify-between space-y-8 text-neutral-600 dark:text-neutral-400 text-base lg:text-lg leading-relaxed relative">
                <div className="space-y-4 md:space-y-6 text-sm md:text-base">
                  <p className="font-semibold text-neutral-900 dark:text-neutral-100 text-base md:text-lg">
                    주식회사 아키원을 찾아주셔서 진심으로 감사 드립니다.
                  </p>
                  <p className="leading-relaxed">
                    저희 주식회사 아키원은 끊임 없는 기술에 대한 고민과 투자를 통해 환경 친화적인 기술력을 발휘하고 아이디어를 발굴하여 최고의 품질과 서비스로 더 높은 건설가치, 더 높은 고객가치를 무엇보다 중시합니다.
                  </p>
                  <p className="leading-relaxed">
                    축적된 경험과 노하우를 바탕으로 신뢰 받는 건설기업이 되고자 최선을 다할 것이며, 진취적이고 창의적인 자세로 더 나은 삶의 가치를 추구하는 건설산업을 이루고자 노력하고 또 노력 하겠습니다.
                  </p>
                  <div className="space-y-1 pt-2">
                    <p>많은 성원 부탁 드립니다.</p>
                    <p>감사합니다.</p>
                  </div>
                </div>

                <div className="pt-6 flex justify-end items-center border-t border-neutral-200/60 dark:border-neutral-800/60">
                  <span className="text-xs md:text-sm font-medium tracking-widest text-neutral-900 dark:text-neutral-100 uppercase font-mono">
                    CEO KIM GWI DEOK
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 03 / FORTELINE HISTORY */}
          <section className="flex flex-col w-full" id="history">
            <div className="flex items-center space-x-4 mb-8">
              <span className="text-xs font-mono tracking-[0.3em] text-neutral-400 uppercase">
                03 / Track Record
              </span>
              <div className="h-[1px] bg-neutral-200 dark:bg-neutral-800 flex-grow" />
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-light tracking-tight text-neutral-900 dark:text-neutral-100 mb-2">
                연간 공사 실적 (Annual Construction Performance)
              </h2>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-neutral-400 font-mono gap-2">
                <span>2022 — 2026 주요 관공서 및 대형 건설사 협력 시공·설계 실적 총괄</span>
                <div className="flex items-center space-x-4">
                  <span className="inline-flex items-center space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-neutral-900 dark:bg-neutral-100" />
                    <span>진행중 (In Progress)</span>
                  </span>
                  <span className="inline-flex items-center space-x-1.5">
                    <span className="w-2 h-2 rounded-full border border-neutral-400" />
                    <span>준공 (Completed)</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Performance Ledger Table */}
            <div className="w-full bg-white dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800/60 rounded-xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[700px]">
                  <thead className="border-b border-neutral-200 dark:border-neutral-800 text-[11px] font-mono tracking-wider text-neutral-400 uppercase bg-neutral-50/50 dark:bg-neutral-900/50">
                    <tr>
                      <th className="py-3.5 px-6 font-medium w-36">연도 (YEAR)</th>
                      <th className="py-3.5 px-6 font-medium">발주처 및 현장명 (CLIENT &amp; PROJECT TITLE)</th>
                      <th className="py-3.5 px-6 font-medium text-right w-52">공사금액 (CONTRACT VALUE)</th>
                      <th className="py-3.5 px-6 font-medium text-center w-36">진행상황 (STATUS)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200/60 dark:divide-neutral-800/60 text-xs font-mono">
                    {groupedRecords.map((group) => {
                      return group.records.map((rec, rIdx) => (
                        <tr
                          key={`${group.year}-${rIdx}`}
                          className={`${
                            rIdx === 0 ? 'border-t-2 border-neutral-900 dark:border-neutral-100' : ''
                          } hover:bg-neutral-50/50 dark:hover:bg-neutral-800/40 transition-colors`}
                        >
                          {rIdx === 0 && (
                            <td
                              className="py-4 px-6 text-neutral-900 dark:text-neutral-100 font-bold text-base align-top"
                              rowSpan={group.records.length}
                            >
                              <div className="sticky top-24">
                                <div className="text-base font-bold tracking-tight text-neutral-900 dark:text-neutral-100 font-mono">
                                  {group.year}
                                </div>
                                <div className="text-[10px] text-neutral-400 font-mono tracking-wider uppercase mt-0.5">
                                  {group.records.length} PROJECTS
                                </div>
                              </div>
                            </td>
                          )}
                          <td className="py-4 px-6 text-neutral-900 dark:text-neutral-100 font-sans font-normal text-sm">
                            {rec.clientAndTitle}
                          </td>
                          <td className="py-4 px-6 text-right font-mono font-medium text-neutral-900 dark:text-neutral-100">
                            {rec.contractValueFormatted}
                          </td>
                          <td className="py-4 px-6 text-center">
                            {rec.status === '진행중' ? (
                              <span className="inline-block px-2.5 py-1 text-[11px] rounded font-mono font-medium bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900">
                                진행중
                              </span>
                            ) : (
                              <span className="inline-block px-2.5 py-1 text-[11px] rounded font-mono font-medium border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400">
                                준공
                              </span>
                            )}
                          </td>
                        </tr>
                      ));
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* SECTION 04 / CERTIFICATES & OFFICIAL LICENSES */}
          <section className="flex flex-col w-full" id="certificates">
            <div className="flex items-center space-x-4 mb-8">
              <span className="text-xs font-mono tracking-[0.3em] text-neutral-400 uppercase">
                04 / Credentials
              </span>
              <div className="h-[1px] bg-neutral-200 dark:bg-neutral-800 flex-grow" />
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
              <div>
                <h2 className="text-3xl lg:text-4xl font-light tracking-tight text-neutral-900 dark:text-neutral-100">
                  Certificates &amp; Official Licenses
                </h2>
                <p className="text-neutral-500 text-base mt-2">
                  Verified government and institutional accreditations (A4 Vertical Standard)
                </p>
              </div>
              <div className="mt-4 md:mt-0 font-mono text-xs text-neutral-400">
                TOTAL {CERTIFICATES.length} VERIFIED DOCUMENTS / 2024 REVISION
              </div>
            </div>

            {/* A4 Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {CERTIFICATES.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-neutral-50 dark:bg-neutral-900 p-8 rounded-xl flex flex-col justify-between transition-transform duration-300 hover:-translate-y-2 group border border-neutral-200/60 dark:border-neutral-800/60"
                >
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-xs font-mono text-neutral-400">{cert.regNo}</span>
                      <span className="material-symbols-outlined text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                        verified
                      </span>
                    </div>

                    {/* A4 Box Representation */}
                    <div className="w-full aspect-[1/1.414] bg-white dark:bg-neutral-950 p-6 rounded shadow-sm flex flex-col justify-between relative overflow-hidden mb-6 border border-neutral-200 dark:border-neutral-800">
                      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                        <span className="text-7xl font-black font-mono">ARCHIONE</span>
                      </div>
                      <div className="space-y-3 relative z-10 text-center">
                        <div className="w-12 h-12 rounded-full bg-neutral-100 dark:bg-neutral-900 mx-auto flex items-center justify-center mb-4">
                          <span className="material-symbols-outlined text-xl">{cert.iconName}</span>
                        </div>
                        <div className="font-serif text-sm tracking-widest text-neutral-800 dark:text-neutral-200">
                          {cert.englishHeading}
                        </div>
                        <div className="w-8 h-[1px] bg-neutral-300 mx-auto" />
                        <p className="text-[10px] text-center font-mono text-neutral-500">
                          {cert.title} ({cert.koreanName})
                        </p>
                      </div>
                      <div className="text-center relative z-10">
                        <div className="text-[9px] font-mono text-neutral-400">{cert.authority}</div>
                        <div className="w-16 h-4 bg-red-600/20 rounded mx-auto mt-2 flex items-center justify-center">
                          <span className="text-[8px] font-bold text-red-600">OFFICIAL SEAL</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-neutral-900 dark:text-neutral-100 text-lg mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-neutral-500">{cert.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};
