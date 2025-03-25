---
layout: page
title: NeuroLog
description: Compositional Neurosymbolic Integration
img: assets/img/4.jpg
importance: 1
category: neurosymbolic learning
github: https://bitbucket.org/tsamoura/neurolog/src/master/
---

Prototype for neurosymbolic integration implemented in PyTorch. 
NeuroLog outperformed in terms of accuracy and runtime all the state-of-the-art neurosymbolic engines by that time, namely 
<a href="https://papers.nips.cc/paper_files/paper/2018/file/dc5d637ed5e62c36ecb73b654b05ba2a-Paper.pdf">DeepProbLog</a>, 
<a href="https://proceedings.neurips.cc/paper_files/paper/2019/file/9c19a2aa1d84e04b0bd4bc888792bd1e-Paper.pdf">ABL</a>, and
<a href="https://www.ijcai.org/proceedings/2020/0243.pdf">NeurASP</a>, supporting training on datasets that those techniques do not scale. NeuroLog laid the foundations for formalizing the problems of 
training neural classifiers using supervision coming from logical theories and learning under imbalances in 
neurosymbolic settings. 

## Relevant publications
<div class="publications">
  {% bibliography -f papers -q @*[key=feldstein2024mappingneurosymbolicailandscape]* %}
  {% bibliography -f papers -q @*[key=wang2024characterizingmitigatingimbalancesmultiinstance]* %}
  {% bibliography -f papers -q @*[key=NeurIPS2023]* %}
  {% bibliography -f papers -q @*[key=DBLP:conf/aaai/TsamouraHM21]* %}
</div>
