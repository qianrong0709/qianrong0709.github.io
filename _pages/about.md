---
permalink: /
excerpt: "Rong Qian"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<section class="home-hero">
  <p class="hero-kicker">AI for Drug Discovery · Molecular Generation</p>
  <h1>Rong Qian</h1>
  <p class="intro-lede">
    I am a PhD student at <strong>Hong Kong Baptist University</strong>, working on <strong>AI for Drug Discovery (AIDD)</strong> with a focus on <strong>Molecular Generation</strong>.
  </p>
  <p>
    My research explores generative models for molecular design, especially methods guided by physical principles and lower-level molecular knowledge, including <strong>Electronic Density</strong>, dynamic molecular processes, and structure-aware molecular modeling.
  </p>
  <div class="home-actions">
    <a href="/publications/" class="pill-link"><i class="fas fa-book-open" aria-hidden="true"></i> Publications</a>
    <a href="/cv/" class="pill-link"><i class="ai ai-cv" aria-hidden="true"></i> CV</a>
    <a href="mailto:qianrong0709@gmail.com" class="pill-link"><i class="fas fa-envelope" aria-hidden="true"></i> Email</a>
  </div>
</section>

<section class="home-section">
  <div class="section-heading">
    <p>Research</p>
    <h2>Interests</h2>
  </div>
  <ul class="research-tags research-tags--large">
    <li>AIDD</li>
    <li>AI for Science</li>
    <li>Molecular Generation</li>
    <li>Physics-Informed AI</li>
    <li>Electronic Density</li>
    <li>Dynamic Molecular Modeling</li>
    <li>Protein Design</li>
    <li>Molecular Representation Learning</li>
    <li>Knowledge Graphs</li>
  </ul>

  <div class="research-card-grid">
    <article class="research-card">
      <i class="fas fa-atom" aria-hidden="true"></i>
      <h3>Molecular Generation</h3>
      <p>Generative modeling for molecular design with attention to chemical validity, molecular geometry, and physical constraints.</p>
    </article>
    <article class="research-card">
      <i class="fas fa-wave-square" aria-hidden="true"></i>
      <h3>Physical Signals</h3>
      <p>Interest in using lower-level molecular information, such as Electronic Density and dynamic behavior, to guide generation.</p>
    </article>
    <article class="research-card">
      <i class="fas fa-diagram-project" aria-hidden="true"></i>
      <h3>Knowledge and Structure</h3>
      <p>Previous training in NLP and Knowledge Graphs motivates my interest in connecting symbolic, structural, and learned representations.</p>
    </article>
  </div>
</section>

<section class="home-section">
  <div class="section-heading">
    <p>Selected</p>
    <h2>Publications</h2>
  </div>
  <div class="publication-preview-list">
    {% assign selected_publications = site.publications | sort: "date" | reverse %}
    {% for post in selected_publications limit: 2 %}
      <article class="publication-preview">
        <p class="publication-venue">{{ post.venue }}</p>
        <h3><a href="{{ post.paperurl | default: post.url }}">{{ post.title }}</a></h3>
        <p>{{ post.excerpt }}</p>
      </article>
    {% endfor %}
  </div>
</section>

<section class="home-section">
  <div class="section-heading">
    <p>Background</p>
    <h2>Education and Advising</h2>
  </div>
  <ul class="timeline-list">
    <li>
      <strong>PhD Student, AI for Drug Discovery</strong>
      <span class="meta-line">Hong Kong Baptist University</span>
      <span class="meta-line">Joint supervisors: Prof. Dongsheng Cao (Central South University), Prof. Aiping Lu (HKBU), and Prof. Jin Liu (HKBU)</span>
    </li>
    <li>
      <strong>Master's Study, Computer Science</strong>
      <span class="meta-line">School of Computer Science, Beijing Information Science and Technology University</span>
      <span class="meta-line">Advisor: Prof. Xia Hou; research area: Natural Language Processing (NLP) and Knowledge Graphs</span>
    </li>
  </ul>
</section>
