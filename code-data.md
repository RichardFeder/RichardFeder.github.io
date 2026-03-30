---
layout: page
title: Code/Data
permalink: /code-data/
---

<section class="content-section">
  <h2 class="post-title" style="text-align: center; margin-bottom: 20px;">Code/Data</h2>

  <p style="text-align: center; margin-bottom: 30px; max-width: 900px; margin-left: auto; margin-right: auto;">
    Public software and simulation products connected to selected publications are listed below.
  </p>

  <div class="code-data-grid">
    <div class="code-item">
      <h4 class="code-title"><a href="https://github.com/RichardFeder/PAESpec" target="_blank" rel="noopener noreferrer">PAESpec</a></h4>
      <p class="code-description">Probabilistic Autoencoder (PAE) implementation for SED modeling and redshift estimation of SPHEREx spectrophotometry. The repository focuses on the main code for training and running PAESpec on multi-band photometry, while large data products are provided separately.</p>
      <p class="code-links">
        <a href="https://github.com/RichardFeder/PAESpec" target="_blank" rel="noopener noreferrer">GitHub</a>
        <span>|</span>
        <a href="https://arxiv.org/abs/2603.24668" target="_blank" rel="noopener noreferrer">Related publication</a>
      </p>
    </div>

    <div class="code-item">
      <h4 class="code-title"><a href="https://zenodo.org/records/11406518" target="_blank" rel="noopener noreferrer">Synthetic Emission Line Catalog and High-Resolution SEDs for SPHEREx Galaxy Simulations</a></h4>
      <p class="code-description">This Zenodo release contains synthetic galaxy models derived from COSMOS and GAMA photometry, including emission-line strengths and high-resolution SEDs spanning 0.1-8 micron. The products are intended to represent galaxies SPHEREx will observe and are useful for broader survey simulations as well.</p>
      <p class="code-links">
        <a href="https://zenodo.org/records/11406518" target="_blank" rel="noopener noreferrer">Zenodo</a>
        <span>|</span>
        <a href="https://iopscience.iop.org/article/10.3847/1538-4357/ad596d" target="_blank" rel="noopener noreferrer">Related publication</a>
      </p>
    </div>

    <div class="code-item">
      <h4 class="code-title"><a href="https://github.com/RichardFeder/pcat-de" target="_blank" rel="noopener noreferrer">PCAT-DE</a></h4>
      <p class="code-description">Probabilistic Cataloger in the presence of Diffuse Emission (PCAT-DE), built on Lion, jointly models point-like and diffuse structured signals by adding spatial templates and non-parametric Fourier components to the forward model. Core algorithms are in Python with C-based image-model and likelihood evaluation backends.</p>
      <p class="code-links">
        <a href="https://github.com/RichardFeder/pcat-de" target="_blank" rel="noopener noreferrer">GitHub</a>
        <span>|</span>
        <a href="https://pcat-de.readthedocs.io/en/latest/" target="_blank" rel="noopener noreferrer">Documentation</a>
        <span>|</span>
        <a href="https://iopscience.iop.org/article/10.3847/1538-3881/ace69b" target="_blank" rel="noopener noreferrer">Related publication</a>
      </p>
    </div>
  </div>
</section>
