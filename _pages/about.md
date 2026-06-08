---
permalink: /
excerpt: "Rong Qian"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<section class="home-hero">
  <h1>About</h1>
  <p class="name-line">Rong Qian <span>钱蓉</span></p>
  <p class="intro-lede">
    I am a PhD student at <strong>Hong Kong Baptist University</strong>, working on <strong>AI for Drug Discovery (AIDD)</strong> with a focus on <strong>Molecular Generation</strong>.
  </p>
  <p>
    My research explores generative models for molecular design, especially methods guided by physical principles and lower-level molecular knowledge, including <strong>Electronic Density</strong>, dynamic molecular processes, and structure-aware molecular modeling.
  </p>
  <div class="home-actions">
    <a href="/publications/" class="pill-link"><i class="fas fa-book-open" aria-hidden="true"></i> Publications</a>
    <a href="/cv/" class="pill-link"><i class="fas fa-file-lines" aria-hidden="true"></i> CV</a>
    <a href="mailto:qianrong0709@gmail.com" class="pill-link"><i class="fas fa-envelope" aria-hidden="true"></i> Email</a>
  </div>
</section>

<section class="home-section" id="news">
  <div class="section-heading">
    <p>Latest</p>
    <h2>News</h2>
  </div>
  <ul class="news-list">
    <li>
      <span class="news-marker"></span>
      <p>Started building this academic homepage to collect research interests, publications, and updates.</p>
    </li>
    <li>
      <span class="news-marker"></span>
      <p>A manuscript on Molecular Generation is currently under review.</p>
    </li>
  </ul>
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
    <a href="/publications/" class="section-more">More <i class="fas fa-arrow-right" aria-hidden="true"></i></a>
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
      <strong>PhD Student, Hong Kong Baptist University</strong>
      <span class="meta-line">AI for Drug Discovery (AIDD), with a focus on Molecular Generation.</span>
    </li>
    <li>
      <strong>Master's Study, Beijing Information Science and Technology University</strong>
      <span class="meta-line">Computer Science, Natural Language Processing (NLP), and Knowledge Graphs.</span>
    </li>
  </ul>
</section>
