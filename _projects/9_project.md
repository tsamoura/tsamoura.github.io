---
layout: page
title: Concordia
description: Teacher-Student Neurosymbolic Learning
img: assets/img/4.jpg
importance: 1
category: neurosymbolic learning
github: https://github.com/jonathanfeldstein/Concordia
---

Teacher-Student neurosymbolic framework, where instead of being a complex deep model, the teacher is a 
probabilistic logical theory.  
The framework is implemented in PyTorch.
Concordia supports supervised, semi-supervised, and unsupervised training and has been applied to a variety of tasks, outperforming the relevant state-of-the-art. 
In particular, Concordia outperforms
<a href="https://aclanthology.org/D18-1215/">DLP</a>,
<a href="https://aclanthology.org/Q17-1008/">Bi-LSTM</a>, and
<a href="https://arxiv.org/abs/1910.01108">DistilBERT</a>
on entity linking and 
<a href="https://arxiv.org/abs/2010.12968">IARG</a> and
<a href="https://www.computer.org/csdl/proceedings-article/cvprw/2013/4990a566/12OmNyVes6e">PSL-CAD</a> on collective activity detection when using <a href="https://arxiv.org/abs/1704.04861">MobileNet</a> and
<a href="https://arxiv.org/abs/1512.00567">Inception-v3</a> as backbone networks. 
Concordia is strictly more expressive than  
<a href="https://aclanthology.org/D18-1215/">DLP</a> and
<a href="https://aclanthology.org/P16-1228/">T-S</a> 
in terms of the types of supported logical theories.


## Relevant publications
<div class="publications">
  {% bibliography -f papers -q @*[key=feldstein2024mappingneurosymbolicailandscape]* %}
  {% bibliography -f papers -q @*[key=DBLP:conf/icml/FeldsteinJT23]* %}
</div>
