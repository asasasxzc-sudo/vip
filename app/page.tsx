"use client";

import React, { useState, useRef } from 'react';
import { Loader2, Zap, Globe, ShoppingChart, Users, Truck, MessageCircle, Activity, CheckCircle2, Lightbulb, RefreshCw, BarChart3, Coffee, Palette, Share2, Rocket, Layout, Search, Ship } from 'lucide-react';

export default function YmteaClub() {
  const [product, setProduct] = useState('');
  const [country, setCountry] = useState('US');
  const [analyzing, setAnalyzing] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  // 模拟SEO数据
  const [dynamicData, setDynamicData] = useState({
    searchIndex: 0,
    level: '',
    businessStrategy: { b2b: '', b2c: '', wholesale: '' }
  });

  const handleAnalyze = async () => {
    if (!product.trim()) return alert("请输入您的产品或领域");
    setAnalyzing(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setDynamicData({
      searchIndex: Math.floor(Math.random() * 5000) + 1000,
      level: 'HIGH GROWTH',
      businessStrategy: {
        b2c: `建议针对 ${country} 建立独立站，利用 TikTok 视觉化呈现产品价值。`,
        b2b: `建立 LinkedIn 矩阵，精准触达海外采购经理。`,
        wholesale: `入驻当地 B2B 目录，并利用 Google Maps 标注本地展示中心。`
      }
    });
    setAnalyzing(false);
    setShowResult(true);
    setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth' }), 200);
  };

  return (
    <div style={{ backgroundColor: '#080808', minHeight: '100vh', color: '#d4d4d8', fontFamily: 'serif' }}>
      {/* 顶部导航 */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', backgroundColor: 'rgba(0,0,0,0.9)', padding: '16px 32px', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ backgroundColor: '#c2410c', padding: '4px', borderRadius: '2px' }}><Coffee size={14} color="white" /></div>
          <span style={{ color: 'white', fontWeight: 'bold', fontSize: '18px', letterSpacing: '2px' }}>云茗荟 · 会员俱乐部</span>
        </div>
        <div style={{ display: 'flex', gap: '20px', fontSize: '14px' }}>
          <a href="#culture" style={{ color: '#a1a1aa', textDecoration: 'none' }}>非遗文化</a>
          <a href="#business" style={{ color: '#a1a1aa', textDecoration: 'none' }}>出海赋能</a>
          <a href="#tool" style={{ color: '#c2410c', textDecoration: 'none', fontWeight: 'bold' }}>AI 实验室</a>
        </div>
      </nav>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 24px' }}>
        
        {/* --- 第一部分：品牌核心（Hero Section） --- */}
        <section style={{ textAlign: 'center', padding: '100px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <h1 style={{ fontSize: 'clamp(40px, 6vw, 72px)', color: 'white', fontWeight: '900', marginBottom: '24px' }}>
            煮茶 <span style={{ color: '#c2410c' }}>论道</span> · 智联 <span style={{ color: '#2563eb' }}>全球</span>
          </h1>
          <p style={{ fontSize: '18px', maxWidth: '800px', margin: '0 auto 40px', lineHeight: '1.8', color: '#71717a' }}>
            云茗荟会员俱乐部：一个融合了宋代雅致生活与现代全球化商业的高端社交圈层。
            在这里，我们回归传统，同时通过技术打破出海增长的天花板。
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <a href="https://work.weixin.qq.com/kfid/kfcab9eba83e85cde3e" target="_blank" style={{ backgroundColor: '#c2410c', color: 'white', padding: '16px 40px', textDecoration: 'none', fontWeight: 'bold' }}>加入会员俱乐部</a>
            <a href="#tool" style={{ border: '1px solid #2563eb', color: '#2563eb', padding: '16px 40px', textDecoration: 'none', fontWeight: 'bold' }}>免费 AI 出海分析</a>
          </div>
        </section>

        {/* --- 第二部分：非遗文化精美组件（Culture Section） --- */}
        <section id="culture" style={{ padding: '80px 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ color: '#c2410c', fontSize: '12px', letterSpacing: '4px' }}>CULTURAL HERITAGE</span>
            <h2 style={{ color: 'white', fontSize: '32px', marginTop: '10px' }}>雅集 · 非遗文化体验</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
            <div style={{ border: '1px solid rgba(194, 65, 12, 0.2)', padding: '40px', backgroundColor: 'rgba(194, 65, 12, 0.02)' }}>
              <Coffee size={40} color="#c2410c" style={{ marginBottom: '20px' }} />
              <h3 style={{ color: 'white', fontSize: '24px', marginBottom: '15px' }}>宋代点茶</h3>
              <p style={{ lineHeight: '1.8', fontSize: '15px' }}>
                复刻《大观茶论》中的极致美学。会员可亲手体验“七汤点茶法”，
                在茶沫之上击拂出如疏星淡月的沫饽，感受穿越千年的静谧与禅意。
              </p>
              <ul style={{ paddingLeft: '20px', marginTop: '20px', fontSize: '13px', color: '#a1a1aa' }}>
                <li>定期举办点茶雅集</li>
                <li>茶圣陆羽文化分享</li>
                <li>高端建盏品鉴</li>
              </ul>
            </div>
            <div style={{ border: '1px solid rgba(37, 99, 235, 0.2)', padding: '40px', backgroundColor: 'rgba(37, 99, 235, 0.02)' }}>
              <Palette size={40} color="#2563eb" style={{ marginBottom: '20px' }} />
              <h3 style={{ color: 'white', fontSize: '24px', marginBottom: '15px' }}>耀州窑刻花</h3>
              <p style={{ lineHeight: '1.8', fontSize: '15px' }}>
                体验刀锋下的艺术。耀州窑刻花以“犀利、圆活”著称。
                由非遗传承人指导，会员可尝试在泥坯上勾勒宋式纹样，领略东方陶瓷的硬朗与灵动。
              </p>
              <ul style={{ paddingLeft: '20px', marginTop: '20px', fontSize: '13px', color: '#a1a1aa' }}>
                <li>泥坯成型现场体验</li>
                <li>刀法技巧一对一指导</li>
                <li>定制个人专属器皿</li>
              </ul>
            </div>
          </div>
        </section>

        {/* --- 第三部分：商业与资源板块（Business Section） --- */}
        <section id="business" style={{ padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            {[
              { icon: <Share2 />, title: "资源互关", desc: "打破信息差，会员资源深度共享，直连上下游供需。" },
              { icon: <Rocket />, title: "项目对接", desc: "定期举办项目投融资路演，共享云茗荟内部实战经验。" },
              { icon: <Layout />, title: "独立站孵化", desc: "从 0 到 1 教学独立站搭建，绕过跨境电商的所有坑。" },
              { icon: <Ship />, title: "全球物流", desc: "共享云茗荟自有海外运输渠道，稳定、高效、低价。" },
              { icon: <Users />, title: "社交娱乐", desc: "高端掼蛋赛、剧本杀、线下桌游，在轻松氛围中成交。" }
            ].map((item, idx) => (
              <div key={idx} style={{ padding: '24px', backgroundColor: '#111' }}>
                <div style={{ color: '#2563eb', marginBottom: '16px' }}>{item.icon}</div>
                <h4 style={{ color: 'white', marginBottom: '8px' }}>{item.title}</h4>
                <p style={{ fontSize: '13px', color: '#71717a', lineHeight: '1.6' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- 第四部分：AI 分析工具（AI Tool Section） --- */}
        <section id="tool" style={{ padding: '100px 0', backgroundColor: '#0c0c0c', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
             <h2 style={{ color: 'white' }}>会员专属：AI 出海流量分析仪</h2>
             <p style={{ color: '#71717a', marginTop: '10px' }}>基于 YMTEA 专有算法，评估您的产品在海外市场的 SEO 潜力</p>
          </div>
          
          <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2px', border: '1px solid rgba(255,255,255,0.1)', padding: '2px' }}>
              <select value={country} onChange={(e) => setCountry(e.target.value)} style={{ backgroundColor: '#111', color: 'white', border: 'none', padding: '12px', outline: 'none' }}>
                <option value="US">美国</option><option value="DE">德国</option><option value="UK">英国</option>
              </select>
              <input 
                type="text" placeholder="产品关键词 (如: Tea, Tech, Ceramic...)"
                style={{ flex: '1 1 200px', backgroundColor: 'transparent', border: 'none', outline: 'none', color: 'white', padding: '12px' }} 
                value={product} onChange={(e) => setProduct(e.target.value)}
              />
              <button onClick={handleAnalyze} disabled={analyzing} style={{ flex: '1 0 120px', backgroundColor: '#2563eb', border: 'none', color: 'white', padding: '12px', fontWeight: 'bold', cursor: 'pointer' }}>
                {analyzing ? <Loader2 className="animate-spin" size={14} /> : 'RUN ANALYSIS'}
              </button>
            </div>
          </div>

          {showResult && (
            <div ref={resultRef} style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1px', backgroundColor: 'rgba(255,255,255,0.05)' }}>
                <div style={{ backgroundColor: '#111', padding: '20px' }}>
                  <div style={{ fontSize: '10px', color: '#52525b' }}>SEARCH INDEX</div>
                  <div style={{ fontSize: '32px', color: '#2563eb', fontWeight: '900' }}>{dynamicData.searchIndex}</div>
                </div>
                <div style={{ backgroundColor: '#111', padding: '20px' }}>
                  <div style={{ fontSize: '10px', color: '#52525b' }}>RANK POTENTIAL</div>
                  <div style={{ fontSize: '20px', color: 'white', fontWeight: '900', marginTop: '8px' }}>{dynamicData.level}</div>
                </div>
              </div>
              
              <div style={{ marginTop: '30px', backgroundColor: '#111', padding: '30px' }}>
                <h4 style={{ color: 'white', marginBottom: '20px', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                   <Lightbulb size={16} color="#f59e0b" /> 针对该品类的商业策略建议
                </h4>
                <div style={{ display: 'grid', gap: '20px' }}>
                  <div style={{ borderLeft: '2px solid #3b82f6', paddingLeft: '15px' }}>
                    <div style={{ fontSize: '12px', color: '#3b82f6', fontWeight: 'bold' }}>B2C 零售模式</div>
                    <p style={{ fontSize: '13px', marginTop: '5px' }}>{dynamicData.businessStrategy.b2c}</p>
                  </div>
                  <div style={{ borderLeft: '2px solid #10b981', paddingLeft: '15px' }}>
                    <div style={{ fontSize: '12px', color: '#10b981', fontWeight: 'bold' }}>B2B 贸易模式</div>
                    <p style={{ fontSize: '13px', marginTop: '5px' }}>{dynamicData.businessStrategy.b2b}</p>
                  </div>
                  <button onClick={() => setShowResult(false)} style={{ background: 'none', border: 'none', color: '#52525b', fontSize: '11px', cursor: 'pointer', textAlign: 'left' }}>
                    <RefreshCw size={10} style={{ marginRight: '5px' }} /> 重新分析
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>

      </main>

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '60px 0', textAlign: 'center', marginTop: '60px' }}>
        <p style={{ color: '#a1a1aa', fontSize: '14px', marginBottom: '20px' }}>© 2026 云茗荟 · YMTEA LABS. 所有权利保留。</p>
        <p style={{ fontSize: '12px', color: '#52525b' }}>让出海更简单，让传统更现代</p>
      </footer>
    </div>
  );
}
