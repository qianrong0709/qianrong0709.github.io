---
lang: zh
translation_key: home
permalink: /zh/
excerpt: "钱蓉 · AI 药物发现与分子生成"
author_profile: true
---

<section class="home-hero">
  <h1>关于我</h1>
  <p class="name-line">钱蓉 <span>Rong Qian</span></p>
  <p class="intro-lede">
    我是<strong>香港浸会大学</strong>的博士生，研究方向为<strong>人工智能药物发现（AIDD）</strong>，重点关注<strong>分子生成</strong>。
  </p>
  <p>
    我的研究围绕分子设计中的生成模型展开，尤其关注如何利用物理原理与分子底层信息指导生成，包括<strong>电子密度</strong>、分子动态过程，以及结合结构信息的分子建模。
  </p>
  <div class="home-actions">
    <a href="{{ '/zh/publications/' | relative_url }}" class="pill-link"><i class="fas fa-book-open" aria-hidden="true"></i> 论文</a>
    <a href="{{ '/zh/cv/' | relative_url }}" class="pill-link"><i class="fas fa-file-lines" aria-hidden="true"></i> 简历</a>
    <a href="mailto:qianrong0709@gmail.com" class="pill-link"><i class="fas fa-envelope" aria-hidden="true"></i> 邮箱</a>
  </div>
</section>

{% include news-preview.html %}

<section class="home-section">
  <div class="section-heading">
    <p>研究</p>
    <h2>兴趣方向</h2>
  </div>
  <ul class="research-tags research-tags--large">
    <li>AI 药物发现</li>
    <li>AI for Science</li>
    <li>分子生成</li>
    <li>物理信息引导的 AI</li>
    <li>电子密度</li>
    <li>动态分子建模</li>
    <li>蛋白质设计</li>
    <li>分子表示学习</li>
    <li>知识图谱</li>
  </ul>

  <div class="research-card-grid">
    <article class="research-card">
      <i class="fas fa-atom" aria-hidden="true"></i>
      <h3>分子生成</h3>
      <p>面向分子设计的生成建模，关注化学有效性、分子几何结构与物理约束。</p>
    </article>
    <article class="research-card">
      <i class="fas fa-wave-square" aria-hidden="true"></i>
      <h3>物理信息</h3>
      <p>探索如何利用电子密度、动态行为等分子底层信息，指导分子生成。</p>
    </article>
    <article class="research-card">
      <i class="fas fa-diagram-project" aria-hidden="true"></i>
      <h3>知识与结构</h3>
      <p>自然语言处理与知识图谱方面的研究经历，使我对符号知识、结构信息与学习表示之间的联系保持兴趣。</p>
    </article>
  </div>
</section>

<section class="home-section">
  <div class="section-heading">
    <p>成果</p>
    <h2>精选论文</h2>
    <a href="{{ '/zh/publications/' | relative_url }}" class="section-more">全部论文 <i class="fas fa-arrow-right" aria-hidden="true"></i></a>
  </div>
  <div class="publication-preview-list">
    {% assign selected_publications = site.publications | where: "lang", page.lang | sort: "date" | reverse %}
    {% for post in selected_publications limit: 2 %}
      <article class="publication-preview">
        <p class="publication-venue">{{ post.venue }}</p>
        <h3><a href="{{ post.paperurl | default: post.url }}" lang="en">{{ post.title }}</a></h3>
        <p>{{ post.excerpt }}</p>
      </article>
    {% endfor %}
  </div>
</section>

<section class="home-section" id="writing">
  <div class="section-heading">
    <p>记录</p>
    <h2>博客</h2>
    <a href="{{ '/zh/blog/' | relative_url }}" class="section-more">进入博客 <i class="fas fa-arrow-right" aria-hidden="true"></i></a>
  </div>
  <p>在这里整理 AI 药物发现相关的论文解读与领域随笔，记录方法背后的思路，以及值得继续探索的问题。</p>
</section>

<section class="home-section">
  <div class="section-heading">
    <p>经历</p>
    <h2>教育背景</h2>
  </div>
  <ul class="timeline-list">
    <li>
      <strong>博士在读，香港浸会大学</strong>
      <span class="meta-line">研究方向为 AI 药物发现，重点关注分子生成。</span>
    </li>
    <li>
      <strong>硕士阶段，北京信息科技大学</strong>
      <span class="meta-line">计算机科学、自然语言处理与知识图谱。</span>
    </li>
  </ul>
</section>
