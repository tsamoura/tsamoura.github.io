---
layout: page
title: NGP
description: Scene Graph Generation Using Background Knolwedge 
img: assets/img/4.jpg
importance: 1
category: neurosymbolic learning
---


NGP is a technique implemented in PyTorch for regularizing deep models for scene graph generation (SGG) at training-time, by injecting commonsense knowledge. NGP achieves the following: (i) it improves the accuracy of 
<a href="https://openaccess.thecvf.com/content_cvpr_2017/papers/Xu_Scene_Graph_Generation_CVPR_2017_paper.pdf">IMP</a>,
<a href="https://openaccess.thecvf.com/content_cvpr_2018/papers/Zellers_Neural_Motifs_Scene_CVPR_2018_paper.pdf">MOTIFS</a>,
and <a href="https://openaccess.thecvf.com/content_CVPR_2019/papers/Tang_Learning_to_Compose_Dynamic_Tree_Structures_for_Visual_Contexts_CVPR_2019_paper.pdf">VCTree</a> baseline SGG models, by up to 33%, leading to <strong>16% absolute accuracy improvements</strong>
when applied in conjunction with <a href="https://openaccess.thecvf.com/content_CVPR_2020/papers/Tang_Unbiased_Scene_Graph_Generation_From_Biased_Training_CVPR_2020_paper.pdf">TDE</a>;
(ii) it outperforms <a href="https://www.ecva.net/papers/eccv_2020/papers_ECCV/papers/123680630.pdf">GLAT</a>
and <a href="https://dl.acm.org/doi/abs/10.5555/3454287.3454668">LENSR</a>,
two state-of-the-art training-time regularization techniques, <strong>by up to 18% and 15%</strong>;
(iii) it can improve the accuracy of a baseline SGG model by up to six times when restricting the availability of ground-truth training facts;
(iv) it outperforms in accuracy <a href="https://openaccess.thecvf.com/content/CVPR2021/papers/Li_Bipartite_Graph_Network_With_Adaptive_Message_Passing_for_Unbiased_Scene_CVPR_2021_paper.pdf">BGNN</a> by up to 90% and <a href="https://openaccess.thecvf.com/content_CVPR_2019/papers/Gu_Scene_Graph_Generation_With_External_Knowledge_and_Image_Reconstruction_CVPR_2019_paper.pdf">KBFN</a> by up to 86% when combined with TDE. 
NGP has been evaluated on the <a href="https://link.springer.com/article/10.1007/s11263-016-0981-7">Visual Genome</a>
and the <a href="https://storage.googleapis.com/openimages/web/index.html">Open Images v6</a>
benchmarks. This library builds upon <a href="https://github.com/facebookresearch/maskrcnn-benchmark">Mask R-CNN</a> for bounding box detection. 

## GitHub
Please contact me to grant you access.

## Relevant publications
<div class="publications">
  {% bibliography -f papers -q @*[key=DBLP:conf/aaai/BuffelliT23]* %}
</div>
