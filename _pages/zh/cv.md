---
lang: zh
translation_key: cv
layout: archive
title: "简历"
permalink: /zh/cv/
author_profile: true
---

{% include base_path %}

教育经历
======
<ul class="timeline-list">
  <li>
    <strong>博士在读</strong>
    <span class="meta-line">香港浸会大学</span>
    <span class="meta-line">研究方向：人工智能药物发现（AIDD）</span>
    <span class="meta-line">联合导师：Dongsheng Cao 教授（中南大学）、Aiping Lu 教授（香港浸会大学）、Jin Liu 教授（香港浸会大学）</span>
  </li>
  <li>
    <strong>硕士阶段</strong>
    <span class="meta-line">北京信息科技大学计算机学院</span>
    <span class="meta-line">研究方向：自然语言处理（NLP）与知识图谱</span>
    <span class="meta-line">导师：Xia Hou 教授</span>
  </li>
</ul>

研究方向
======
<ul class="research-tags">
  <li>AI 药物发现</li>
  <li>AI for Science</li>
  <li>分子生成</li>
  <li>物理信息引导的 AI</li>
  <li>电子密度</li>
  <li>蛋白质设计</li>
  <li>分子表示学习</li>
  <li>自然语言处理</li>
  <li>知识图谱</li>
</ul>

论文
======
{% assign publications = site.publications | where: "lang", page.lang | sort: "date" | reverse %}
{% if publications.size > 0 %}
<ul>{% for post in publications %}
  {% include archive-single-cv.html %}
{% endfor %}</ul>
{% else %}
论文列表将在此更新。
{% endif %}

相关链接
======
<ul class="profile-icons">
  <li><a href="https://scholar.google.com/citations?user=q2r2jrsAAAAJ" title="Google Scholar" aria-label="Google Scholar"><i class="ai ai-google-scholar" aria-hidden="true"></i></a></li>
  <li><a href="https://github.com/qianrong0709" title="GitHub" aria-label="GitHub"><i class="fab fa-github" aria-hidden="true"></i></a></li>
  <li><a href="https://www.linkedin.com/in/rong-qian-723b55337/" title="LinkedIn" aria-label="LinkedIn"><i class="fab fa-linkedin" aria-hidden="true"></i></a></li>
  <li><a href="https://x.com/RongQian0709" title="X" aria-label="X"><i class="fab fa-x-twitter" aria-hidden="true"></i></a></li>
</ul>
