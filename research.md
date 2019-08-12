---
layout: default
title: Research
---
<div class="text-left">
  <h2 class="post-title">Data driven cosmological emulation using deep generative modeling</h2>
  In collaboration with <a href="https://science.jpl.nasa.gov/people/PBerger/">Philippe Berger</a> and <a href="https://www.cita.utoronto.ca/~gstein/">George Stein</a>
  <br>
</div>
<div class="text-center">
  <p align="center">
  <figure>
  <img width="500" src='/img/test.jpg' alt="Subvols"/>
    <figcaption>
      Visualizations of 64 Mpc3 GADGET-2 subvolumes (left column), along with samples generated with a standard deep convolutional generative adversarial network (DCGAN) (middle) and Wasserstein GAN with gradient penalty (WGAN-GP) (right). Color scale denotes position along x-axis.
    </figcaption>
  </figure>
  </p>
 </div>
 <div class="text-left">
  
  <h2 class="post-title">Probabilistic Cataloging</h2>
  Supervised by <a href="https://faun.rc.fas.harvard.edu/nebel/dfink//">Douglas Finkbeiner</a>, in collaboration with <a href="http://portillo.ca/">Stephen Portillo</a> and <a href="tansudaylan.com">Tansu Daylan</a>
  <p>
   Cataloging is a fundamental operation in astronomy. In the case where objects (such as stars, galaxies, etc.) are well separated and and observed with high signal to noise, cataloging is a 
    fairly straightforward task. However, things get complicated in crowded fields. Below is an observation of the globular cluster <a href="https://en.wikipedia.org/wiki/Messier_2">Messier 2</a>. When objects blend together, 
    determining their properties to percent-level precision becomes a much more daunting task. Next generation telescopes like LSST, HSC, WFIRST will have improved sensitivity to pick up faint sources, but will not have 
    sufficient angular resolution to distinguish this population of newly observed sources. This means <i>a significant fraction of future observations will suffer from blending!</i>
    <br>
  </p>
  <p align="center">
  <figure>
  <img src='/img/m2_lores.jpg' alt="Messier 2"/>
    <figcaption>
      Messier 2, a globular cluster 11.5 kpc away containing over 150,000 stars.
    </figcaption>
  </figure>
  </p>
  <p>
    Probabilistic cataloging (PCAT) has been proposed as a viable framework to address these problems. PCAT is a Bayesian, hierarchical, and transdimensional sampler designed to explore the 
    space of different catalogs consistent with an observed image. Because the number of objects and in an image may not be known <i>a priori</i>, exploring the "catalog space" involves exploring models with different numbers
    of parameters. This is done by constructing transdimensional proposals that preserve detailed balance -- this is referred to as Reversible Jump Markov Chain Monte 
    Carlo (RJ-MCMC, see <a href="https://pdfs.semanticscholar.org/c440/ea3bbb7fc8dcaa069ea550011ea65ac33fd4.pdf">Green 1995</a>).
  </p>
  <p>
  <h3>Multiband Probabilistic Cataloging</h3>
  PCAT has been shown to outperform traditional cataloging methods on single-band optical data in crowded fields (see <a href="https://arxiv.org/abs/1703.01303">Portillo et al. 2017</a>). For my senior thesis, I worked on extending PCAT to the case of multiband observations. By jointly fitting data from multiple bands, point source detection can directly be enhanced through higher effective signal-to-noise. In addition, one can begin to use additional information in the form of color priors to inform PCAT's hierarchical model. We find that, while our fit is sensitive to the astrometric calibration of the observed data across bands, our two-band fits on $r+i$ go 0.4 mag deeper than the corresponding single-band fit of the same cutout from Messier 2, with lower false discovery rates down to $r\sim 20.5$. When compared to DAOPHOT, a commonly used software for crowded-field photometry, our multiband catalog goes nearly 1.5 mag deeper <i>using the same data</i>! <a href="https://arxiv.org/abs/1907.04929">Check out our paper on the arXiv</a> (August 2019)
  </p>
  <p>
  <h3>Application to the Chandra Deep Field - South Survey</h3>
    I work with Tansu Daylan on the application of probabilistic cataloging to X-ray data, focusing specifically on 
    observations from the <a href="https://en.wikipedia.org/wiki/Chandra_Deep_Field_South">Chandra Deep Field - South Survey (CDF-S).</a>
    CDF-S has been observed for over 8 Ms (the longest exposure of any field taken by the Chandra X-ray telescope), and will be the deepest observation of the extragalactic
    X-ray background accessible for many years to come. The galaxies observed in CDF-S are relatively sparse compared to the stars observed optically in crowded fields. However, the photon statistics from CDF-S observations
    are highly Poisson -- ~3-5 X-ray photons is sometimes enough to "detect" a galaxy! We use PCAT in this limit to better understand the population of sub-threshold galaxies in relation to the 
    poorly understood cosmic X-ray background (CXB). 
  </p>
  
  
  <h2 class="post-title">Target selection for the DESI Bright Galaxy Survey (BGS)</h2>
  Supervised by <a href="https://scholar.harvard.edu/deisenstein">Daniel Eisenstein</a>
  <br>
  <h2 class="post-title">Early Type Galaxies in the <i>Chandra</i> COSMOS Survey</h2>
  Supervised by <a href="https://francesca.civano.it/">Francesca Civano</a>
  <br>
  Paper can be found <a href="https://iopscience.iop.org/article/10.1088/0004-637X/790/1/16">here</a>.
  
</div>
