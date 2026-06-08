---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
<ul class="timeline-list">
  <li>
    <strong>PhD Student</strong>
    <span class="meta-line">Hong Kong Baptist University</span>
    <span class="meta-line">Research area: AI for Drug Discovery (AIDD)</span>
    <span class="meta-line">Joint supervisors: Prof. Dongsheng Cao (Central South University), Prof. Aiping Lu (HKBU), and Prof. Jin Liu (HKBU)</span>
  </li>
  <li>
    <strong>Master's Student</strong>
    <span class="meta-line">School of Computer Science, Beijing Information Science and Technology University</span>
    <span class="meta-line">Research area: Natural Language Processing (NLP) and Knowledge Graphs</span>
    <span class="meta-line">Advisor: Prof. Xia Hou</span>
  </li>
</ul>

Research Areas
======
<ul class="research-tags">
  <li>AIDD</li>
  <li>AI for Science</li>
  <li>Molecular Generation</li>
  <li>Physics-Informed AI</li>
  <li>Electronic Density</li>
  <li>Protein Design</li>
  <li>Molecular Representation Learning</li>
  <li>NLP</li>
  <li>Knowledge Graphs</li>
</ul>

Publications
======
{% if site.publications.size > 0 %}
<ul>{% for post in site.publications reversed %}
  {% include archive-single-cv.html %}
{% endfor %}</ul>
{% else %}
Selected publications will be updated here.
{% endif %}

Links
======
<ul class="profile-icons">
  <li><a href="https://scholar.google.com/citations?user=q2r2jrsAAAAJ" title="Google Scholar" aria-label="Google Scholar"><i class="ai ai-google-scholar" aria-hidden="true"></i></a></li>
  <li><a href="https://github.com/qianrong0709" title="GitHub" aria-label="GitHub"><i class="fab fa-github" aria-hidden="true"></i></a></li>
  <li><a href="https://www.linkedin.com/in/rong-qian-723b55337/" title="LinkedIn" aria-label="LinkedIn"><i class="fab fa-linkedin" aria-hidden="true"></i></a></li>
  <li><a href="https://x.com/RongQian0709" title="X" aria-label="X"><i class="fab fa-x-twitter" aria-hidden="true"></i></a></li>
</ul>
