---
layout: page
title: CAROT
description: Techniques to mitigate imbalances in neurosymbolic learning
img: assets/img/4.jpg
importance: 2
category: neurosymbolic learning
github: https://github.com/tsamoura/imbalances-nsl
---

Mitigating learning imbalances (a problem typically referred to as long-tailed
learning) has received considerable attention in supervised and weakly supervised learning with the
proposed techniques operating at training or at test time. However,
these previous algorithms are not appropriate for neurosymbolic learning. 

We propose a statistically consistent technique for estimating the marginals of the hidden labels
given weak labels and two algorithms to mitigate imbalances during training and test time. The first
algorithm assigns pseudolabels to training data based on a novel linear programming formulation of
neurosymbolic learning. The second algorithm uses the marginals of the hidden labels to constrain the
model’s predictions on test data using robust semi-constrained optimal transport.
Our techniques improve the accuracy over strong baselines in
neurosymbolic--<a href="https://proceedings.mlr.press/v80/xu18h/xu18h.pdf">Semantic Loss</a> and <a href="https://proceedings.neurips.cc/paper/2021/hash/d367eef13f90793bd8121e2f675f0dc2-Abstract.html">Scallop</a>--
and long-tailed learning--
<a href="https://openreview.net/forum?id=37nvvqkCo5">Logic Adjustment</a> and 
<a href="https://openreview.net/pdf?id=sXfWoK4KvSW">RECORDS</a>--
by up to <strong>14%</strong>.



## Repository
<a href="https://github.com/tsamoura/imbalances-nsl">Python Library for Neurosymbolic Learning Under Imbalances</a> 

## Relevant publications
<div class="publications">
  {% bibliography -f papers -q @*[key=NeurIPS2025a]* %}
</div>
