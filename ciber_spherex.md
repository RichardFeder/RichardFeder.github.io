---
layout: default
title: Projects
---

<!-- <input type="button" onClick="document.getElementById('pcat-de').scrollIntoView();" />

<input type="button" onClick="document.getElementById('gan').scrollIntoView();" />

<input type="button" onClick="document.getElementById('gan').scrollIntoView();" /> -->

<div class="text-left" id="ciber">
<!-- <details> -->
<!-- <summary> -->
<h2 class="post-title">Dissecting the near-Infrared Universe with the Cosmic Infrared Background ExpeRiment (CIBER)</h2>
<p>
CIBER is a sounding rocket experiment designed to characterize the near-infrared EBL through measurement of fluctuation anisotropies and low-resolution spectroscopy. As a member of the CIBER, I have worked on both data analysis of CIBER-1 data and instrumentation work for its successor CIBER-2. During the first half of my PhD, I built hardware for CIBER-2, ran laboratory measurements to characterize detector performance, and worked through integration of the experiment with the full sounding rocket payload. This work was done in collaboration with NASA's sounding rocket program and involved working at NASA Wallops Flight Facility in Virginia and White Sands Missile Range in Las Cruces, New Mexico, where I participated in a successful first flight and experiment recovery (<a href ="https://www.nasa.gov/feature/goddard/2021/rocket-team-to-discern-if-our-star-count-should-go-way-up">Press release for CIBER-2 first flight, June 2021</a>).
</p>
</div>
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
<p>
For my dissertation project I am leading a fluctuation analysis of CIBER-1 fourth flight imaging data. Broad band, near infrared intensity mapping has great potential to shed light on interpretations of the extragalactic background light (EBL), which contains the integrated emission from all sources along each line of sight. Through multi- wavelength measurement of large-angle (several arcminute to degree scale) surface brightness fluctuations, we can interpret the relative amplitudes of astrophysical components that comprise the EBL through spatial and spectral cross-correlations. I am also interested in characterizing the intensity bias of NIR fluctuations correlated against galaxy surveys of large-scale structure.     
</p>

<div class="text-left" id="spherex">
<!-- <details> -->
<!-- <summary> -->
<h2 class="post-title">SPHEREx</h2>
<p>
The Spectrophotometer for the History of the Universe, Epoch of Reionization, and Ices Explorer (SPHEREx) is NASA's next MIDEX mission with a current expected launch date in early 2025. Through the same detector and linear variable filter (LVF) technology used by CIBER, SPHEREx will conduct an all sky spectral survey in 102 bands between 0.75-5 micron, producing a low-resolution spectrum for every 6 x 6 arcsecond line of sight on the sky. The nominal two-year survey will revolutionize studies of NIR intensity mapping through a huge jump in coverage and increased sensitivity. 
</p>
<p>
I am also a member of the <a href="https://spherex.caltech.edu/">SPHEREx</a> cosmology team, for which I have developed realistic galaxy SED simulations and synthetic SPHEREx spectrophotometry through the tool <i>CLIPonSS</i> (Conditional LIne Painting on Synthetic Spectra). We are using these simulations to test redshift recovery for the SPHEREx cosmology sample, which will require hundreds of millions of accurate redshifts to constrain the primordial non-Gaussianity parameter fNL through the scale-dependent bias. I am interested in apply new methodologies to improve the SED modeling and redshift estimates for this sample.
</p>

<div class="text-center">
<p align="center">
  <figure>
  <img src="/img/spherex.jpeg" width="500" alt="spherex" />
  <img src="/img/sphx_spectrum.jpeg" width="600" alt="spherex spectra" />
   <figcaption>
      Left: Artist rendering of SPHEREx. Credit: NASA/JPL. Right: Two examples of synthetic SPHEREx photometry. Both quiescent galaxies and emission line galaxies contain important redshift information! (Feder et al. 2023, in prep.)
    </figcaption>
  </figure>
</p>
</div>

</div>

<div class="text-left" id="pcat">
<!-- <details> -->
<!-- <summary> -->
<h2 class="post-title">Probabilistic cataloging</h2>
<p>
I am also a developer of the Bayesian, transdimensional forward modeling approach "probabilistic cataloging" (PCAT for short). Starting from work applying multi-band probabilistic cataloging to SDSS images for my college senior thesis, I later extended the methodology during my PhD to coherently model point-like and diffuse signals in astronomical images, leading to a measurement of the ICM temperature for galaxy cluster RXJ 1347 through the thermal and relativistic Sunyaev-Zel'dovich effect <a href="https://iopscience.iop.org/article/10.3847/1538-4357/ac6c04">Butler+Feder 2022</a>) and the publication of the code PCAT-DE, with documentation available <a href="https://pcat-de.readthedocs.io/en/latest/">here</a> and implementation detailed in <a href="https://iopscience.iop.org/article/10.3847/1538-3881/ace69b">Feder et al. 2023</a>. The code is flexible and has been made available for use by the broader astronomy community.
</p>

<div class="text-center">
  <p align="center">
  <figure>
  <img align="center" width="800" src='/img/compare_with_without_fcs_1xplanck_092922.png' alt="PCAT-DE"/>
  </figure>
    <figcaption>
      An example highlighting the importance of diffuse cirrus in synthetic Herschel-SPIRE 250um data. Even when diffuse cirrus cannot be seen by eye, it can have a large impact on detection and deblending for fainter sources. We have tested PCAT-DE for robustness using synthetic data with moderate to severe cirrus contamination (see <b>Publications</b> for more information). 
    </figcaption>
  </p>
  </div>


</div>






<!-- </details> -->