---
layout: default
title: Projects
---

<!-- <input type="button" onClick="document.getElementById('pcat-de').scrollIntoView();" />

<input type="button" onClick="document.getElementById('gan').scrollIntoView();" />

<input type="button" onClick="document.getElementById('gan').scrollIntoView();" /> -->


<div class="text-left" id="pcat-de">
<!-- <details> -->
<!-- <summary>    -->
  <h2 class="post-title">PCAT-DE: Reconstructing Pointlike and Diffuse Signals in Astronomical Images Using Spatial and Spectral Information</h2>

  <a>Accepted to AJ, <a href="https://iopscience.iop.org/article/10.3847/1538-3881/ace69b">link here</a>.
  <br>
  <p>
    Abstract: Observational data from astronomical imaging surveys contain information about a variety of source populations and environments, and their complexity will increase substantially as telescopes become more sensitive. Even for existing observations, measuring the correlations between pointlike and diffuse emission can be crucial to correctly inferring the properties of any individual component. For this task, information is typically lost, because of conservative data cuts, aggressive filtering, or incomplete treatment of contaminated data. We present the code PCAT-DE, an extension of probabilistic cataloging, designed to simultaneously model pointlike and diffuse signals. This work incorporates both explicit spatial templates and a set of nonparametric Fourier component templates into a forward model of astronomical images, reducing the number of processing steps applied to the observed data. Using synthetic Herschel-SPIRE multiband observations, we demonstrate that point-source and diffuse emission can be reliably separated and measured. We present two applications of this model. For the first, we perform point-source detection/photometry in the presence of galactic cirrus and demonstrate that cosmic infrared background galaxy counts can be recovered in cases of significant contamination. In the second, we show that the spatially extended thermal Sunyaev–Zel'dovich effect signal can be reliably measured even when it is subdominant to the pointlike emission from individual galaxies.
  </p>
</div>

<div class="text-center">
<p align="center">
  <figure>
  <img src="/img/sz_resid_100222.jpeg" width="600" alt="pcatde-szeff" />
   <figcaption>
    10' × 10' cirrus-free mock SPIRE observations toward galaxy cluster RX J1347.5-1145. The columns show (going from left to right) the input SZ effect signal, observed maps, median CIB model, and difference between observed maps and CIB model. By fitting both SZ and CIB simultaneously we can account for the presence of sub-mm point sources without overfitting the underlying SZ signal. The maps in the rightmost column are shown for visualization purposes only.
    </figcaption>
  </figure>
</p>
</div> 


<div class="text-left" id="pcat-de">
<!-- <details> -->
<!-- <summary>    -->
  <h2 class="post-title">Measurement of the Relativistic Sunyaev–Zeldovich Correction in RX J1347.5-1145</h2>

  <a>Co-led with Victoria Butler, Accepted to AJ, <a href="https://iopscience.iop.org/article/10.3847/1538-4357/ac6c04">link here</a>.
  <br>
  <p>
    Abstract: We present a measurement of the relativistic corrections to the thermal Sunyaev–Zel'dovich (SZ) effect spectrum, the rSZ effect, toward the massive galaxy cluster RX J1347.5-1145 by combining submillimeter images from Herschel-SPIRE with millimeter wavelength Bolocam maps. Our analysis simultaneously models the SZ effect signal, the population of cosmic infrared background galaxies, and the galactic cirrus dust emission in a manner that fully accounts for their spatial and frequency-dependent correlations. Gravitational lensing of background galaxies by RX J1347.5-1145 is included in our methodology based on a mass model derived from the Hubble Space Telescope observations. Utilizing a set of realistic mock observations, we employ a forward modeling approach that accounts for the non-Gaussian covariances between the observed astrophysical components to determine the posterior distribution of SZ effect brightness values consistent with the observed data. We determine a maximum a posteriori (MAP) value of the average Comptonization parameter of the intracluster medium (ICM) within R2500 to be 〈y〉2500 = 1.56 × 10−4, with corresponding 68% credible interval [1.42, 1.63] × 10−4, and a MAP ICM electron temperature of 〈Tsz〉2500 = 22.4 keV with 68% credible interval spanning [10.4, 33.0] keV. This is in good agreement with the pressure-weighted temperature obtained from Chandra X-ray observations, 〈Tx,pw〉2500 = 17.4 ± 2.3 keV. We aim to apply this methodology to comparable existing data for a sample of 39 galaxy clusters, with an estimated uncertainty on the ensemble mean 〈Tsz〉2500 at the ≃ 1 keV level, sufficiently precise to probe ICM physics and to inform X-ray temperature calibration.
  </p>
</div>

<div class="text-center">
<p align="center">
  <figure>
  <img src="/img/szspec.jpeg" width="400" alt="SZ spectrum" />
  <img src="/img/szpost.jpeg" width="400" alt="SZ T post" />    
   <figcaption>
      Left: SZ spectrum measurements. Right: Constraints on ICM temperature given relativistic corrections to the tSZ spectrum.
    </figcaption>
  </figure>
</p>
</div>  


<div class="text-left" id="ciber">
<!-- <details> -->
<h2 class="post-title" color=>Dissecting the near-Infrared Universe with the Cosmic Infrared Background ExpeRiment (CIBER)</h2>
<p>
As a member of the CIBER collaboration, I have worked on both data analysis of CIBER-1 data and instrumentation work for the CIBER-2 experiment. During the first half of my PhD, I built hardware for CIBER-2, ran laboratory measurements to characterize detector performance, and worked through integration of the experiment with the full sounding rocket payload. This work was done in collaboration with NASA's sounding rocket program and involved working at NASA Wallops Flight Facility in Virginia and White Sands Missile Range in Las Cruces, New Mexico, where I participated in a successful first flight and experiment recovery (<a href ="https://www.nasa.gov/feature/goddard/2021/rocket-team-to-discern-if-our-star-count-should-go-way-up">Press release for CIBER-2 first flight, June 2021</a>).

<div class="text-center">
<p align="center">
  <figure>
  <img src="/img/richard_wallops.jpeg" width="400" alt="Wallops pre vibe" />
  <img src="/img/wsmr_hotcount.jpeg" width="400" alt="WSMR hot count" />    
  <img src="/img/wsmr_recovery_1.jpeg" width="800" alt="WSMR experiment recovery" />
   <figcaption>
      Top Left: CIBER-2 during integration at Wallops Flight Facility. Top Right: Hot count at White Sands Missile Range (WSMR), New Mexico. Bottom: Experiment recovery at WSMR.
    </figcaption>
  </figure>
</p>
</div>  


</div>
<!-- </details> -->

<div class="text-left" id="gan">
  <h2 class="post-title">Non-linear 3D Cosmic Web Simulation with Heavy-Tailed Generative Adversarial Networks</h2>  
  In collaboration with <a href="https://science.jpl.nasa.gov/people/PBerger/">Philippe Berger</a> and <a href="https://www.cita.utoronto.ca/~gstein/">George Stein</a>. Accepted to Physical Review D, arXiv link <a href="https://arxiv.org/abs/2005.03050">here</a>.
  <br>
  <p>
    Many inference problems in cosmology incorporate information from simulations when making comparisons to observational data. Comparing data to simulations (e.g., N-body, hydrodynamical, etc.) can be challenging when the data are high-dimensional and when generating the simulations is computationally expensive. Some summary statistics can be analytically derived (the power spectrum being one example), but for higher order statistics and covariances these analytical prescriptions often have limitations. I am interested in the ways deep generative modeling can be used to bridge the gap between expensive simulations and robust cosmological inference.
  </p>
  <p>
    My collaborators and I investigated how well generative adversarial networks (GANs) could emulate evolved dark matter density fields trained on ensembles of N-body simulations. Deep learning methods excel at modeling non-linear data, so by emulating directly to the data space, summary statistics like the power spectrum and bispectrum can be predicted well into the small-scale, non-linear regime where analytic methods fail but where there is often more constraining power. In addition to reproducing the two- and three-point statistics of GADGET dark matter simulations (and their covariances), we demonstrated the capability for these models to interpolate in redshift space. Work by others following this publication has extended this deep generative modeling approach to interpolate cosmological parameters and model other fields such as those from hydrodynamical simulations.
  </p>

<!-- </div> -->

  <div class="text-center">
  <p align="center">
  <figure>
<!--   <img align="center" width="600" src='img/real_gen_res.jpg' alt="Subvols"/> -->
  <img align="center" width="600" src='/img/multiz_alpha.gif' alt="Subvol evolution"/>
  </figure>
    <figcaption>
      Visualization of cGAN-generated samples, interpolated from redshift z=3 to z=0. Voxels with higher density are more red and less transparent.
    </figcaption>
  </p>
  </div>
 
<!-- </details> -->

<div class="text-left" id="multiband_pcat">
<h2>Multi-band Probabilistic Cataloging: A Joint Fitting Approach to Point-source Detection and Deblending</h2>
<b> Supervised by <a href="https://faun.rc.fas.harvard.edu/nebel/dfink//">Douglas Finkbeiner</a>, in collaboration with <a href="http://portillo.ca/">Stephen Portillo</a> and <a href="tansudaylan.com">Tansu Daylan</a> </b> <br>
<p>
Abstract: Probabilistic cataloging (PCAT) outperforms traditional cataloging methods on single-band optical data in crowded fields. We extend our work to multiple bands, achieving greater sensitivity (∼0.4 mag) and greater speed (500×) compared to previous single-band results. We demonstrate the effectiveness of multiband PCAT on mock data, in terms of both recovering accurate posteriors in the catalog space and directly deblending sources. When applied to Sloan Digital Sky Survey (SDSS) observations of M2, taking Hubble Space Telescope data as truth, our joint fit on r- and i-band data goes ∼0.4 mag deeper than single-band probabilistic cataloging and has a false discovery rate less than 20% for F606W ≤ 20. Compared to DAOPHOT, the two-band SDSS catalog fit goes nearly 1.5 mag deeper using the same data and maintains a lower false discovery rate down to F606W ∼ 20.5. Given recent improvements in computational speed, multiband PCAT shows promise in application to large-scale surveys and is a plausible framework for joint analysis of multi-instrument observational data. https://github.com/RichardFeder/multiband_pcat.
</p>
<p>
  <a href="https://arxiv.org/abs/1907.04929">Check out our paper on the arXiv</a> (August 2019) and the <a href="https://iopscience.iop.org/article/10.3847/1538-3881/ab74cf">published version</a>. And check out <a href="https://aasnova.org/2020/04/24/a-stellar-method-of-catalog-creation/?fbclid=IwAR1m4kUkcipyRn3RGrPtU7uMz-yFy7W6n5A1v0L906mKJpcZwkgiYN3ig8I">this article</a> by AAS Nova about the publication!
</p>
<p align="center">
<figure>
<img width="400" src='/img/ht606_magbins.png' alt="Completeness"/>
<img width="400" src='/img/sdss_r_magbins.png' alt="False Discovery Rate"/>
</figure>
</p>

</div>
   
<!-- <div class="text-left" id="pcat">
  <h2 class="post-title">Forward modeling of astronomical images with probabilistic cataloging</h2>
  <p>
   Cataloging is a fundamental operation in astronomy. In the case where objects (such as stars, galaxies, etc.) are well separated and and observed with high signal to noise, cataloging is a 
    fairly straightforward task. However, things get complicated in crowded fields. Below is an observation of the globular cluster <a href="https://en.wikipedia.org/wiki/Messier_2">Messier 2</a>. When objects blend together, 
    determining their properties to percent-level precision becomes a much more daunting task. Next generation telescopes like LSST, HSC, WFIRST will have improved sensitivity to pick up faint sources, but will not have 
    sufficient angular resolution to distinguish this population of newly observed sources. This means <i>a significant fraction of future observations will suffer from blending!</i>
  </p>
  </div> -->
  
<!--   <div class="text-center">
  <p align="center">
  <figure>
  <img align="center" width="600" src='/img/m2_lores.jpg' alt="Messier 2"/>
  </figure>
    <figcaption>
      Messier 2, a globular cluster 11.5 kpc away containing over 150,000 stars.
    </figcaption>
  </p> -->
<!--   </div> -->
  
  
  <!-- <div class="text-left"> -->
<!--   <p>
    Probabilistic cataloging (PCAT) has been proposed as a viable framework to address these problems. PCAT is a Bayesian, hierarchical, and transdimensional sampler designed to explore the 
    space of different catalogs consistent with an observed image. Because the number of objects and in an image may not be known <i>a priori</i>, exploring the "catalog space" involves exploring models with different numbers
    of parameters. This is done by constructing transdimensional proposals that preserve detailed balance -- this is referred to as Reversible Jump Markov Chain Monte 
    Carlo (RJ-MCMC, see <a href="https://pdfs.semanticscholar.org/c440/ea3bbb7fc8dcaa069ea550011ea65ac33fd4.pdf">Green 1995</a>).
  </p>
  <p> -->
<!--   <h3>Multiband Probabilistic Cataloging</h3>
   <b> Supervised by <a href="https://faun.rc.fas.harvard.edu/nebel/dfink//">Douglas Finkbeiner</a>, in collaboration with <a href="http://portillo.ca/">Stephen Portillo</a> and <a href="tansudaylan.com">Tansu Daylan</a> </b> <br> -->
<!--     
PCAT has been shown to outperform traditional cataloging methods on single-band optical data in crowded fields (see <a href="https://arxiv.org/abs/1703.01303">Portillo et al. 2017</a>). For my senior thesis, I worked on extending PCAT to the case of multiband observations. By jointly fitting data from multiple bands, point source detection can directly be enhanced through higher effective signal-to-noise. In addition, one can begin to use additional information in the form of color priors to inform PCAT's hierarchical model. We find that, while our fit is sensitive to the astrometric calibration of the observed data across bands, our two-band fits on r+i go 0.4 mag deeper than the corresponding single-band fit of the same cutout from Messier 2, with lower false discovery rates down to r~20.5. When compared to DAOPHOT, a commonly used software for crowded-field photometry, our multiband catalog goes nearly 1.5 magnitudes deeper <i>using the same data</i>! <a href="https://arxiv.org/abs/1907.04929">Check out our paper on the arXiv</a> (August 2019) and the <a href="https://iopscience.iop.org/article/10.3847/1538-3881/ab74cf">published version</a>. And check out <a href="https://aasnova.org/2020/04/24/a-stellar-method-of-catalog-creation/?fbclid=IwAR1m4kUkcipyRn3RGrPtU7uMz-yFy7W6n5A1v0L906mKJpcZwkgiYN3ig8I">this article</a> by AAS Nova about the publication. 
  </p> -->
<!-- </div> -->
<!-- <div class="text-center"> -->
<!--   <p align="center">
  <figure>
  <img width="400" src='/img/ht606_magbins.png' alt="Completeness"/>
  <img width="400" src='/img/sdss_r_magbins.png' alt="False Discovery Rate"/>
  </figure>
  </p> -->
<!-- </div> -->
 

<!-- <div class="text-left">   -->
<!--   <details>
  <summary>
  <h2 class="post-title">Early Type Galaxies in the <i>Chandra</i> COSMOS Survey</h2>
    </summary>
  Supervised by <a href="https://francesca.civano.it/">Francesca Civano</a>
  <br>
  Paper can be found <a href="https://iopscience.iop.org/article/10.1088/0004-637X/790/1/16">here</a>.
  </details> -->
<!-- </div> -->
