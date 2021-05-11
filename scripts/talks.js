var mytalks = '<h2>Talks</h2> \
\
<table width="100%" align="center" border="0" cellspacing="0" cellpadding="20"> \
<tr> \
<td width="250" valign="middle"> \
<td width="250" valign="top"> \
<video width="350" height="250" controls> \
    <source src="images/iwssip20.mp4" type="video/mp4"> \
</video> \
\
</a>\
<td width="60%" valign="middle"> \
<p align="justify"> \
<b><papertitle> An Exploratory Study Using Stream Learning Algorithms to Predict Duration Time of Vehicle Routes </papertitle></b> \
<a href="https://underline.io/lecture/714-an-exploratory-study-using-stream-learning-algorithms-to-predict-duration-time-of-vehicle-routes"> <br>Link of the Event</a> \
<br><br> \
The time required for a vehicle to travel different routes in the daily traffic of large cities varies and changes constantly, impacting the daily lives of everyone dwelling in those cities. Trying to predict such time is essential to evolve in understanding the behavior of vehicle traffic. On the other hand, due to the vast amount of data generated in this context, it is necessary to use new ways of dealing with this problem. This paper presents an exploratory analysis of the behavior of batch and stream learning algorithms for predicting the trip duration time for vehicles going through different routes. We understand that batch learning algorithms are not necessarily adequate for being used in stream mining situations. However, we would like to have a testbed to analyze the behavior of stream learning algorithms. For our experimental analysis, we used real data from three specific routes. The results show that the use of data stream learning for this domain yields promising results.</p> \
</td></tr> \
</table> <br> \
\
\
<table width="100%" align="center" border="0" cellspacing="0" cellpadding="20"> \
<tr> \
<td width="250" valign="middle"> \
<td width="250" valign="top"> \
<video width="350" height="250" controls> \
    <source src="images/amcis2020.mp4" type="video/mov"> \
</video> \
</a>\
<td width="60%" valign="middle"> \
<p align="justify"> \
<b><papertitle> Towards the Use of Clustering Algorithms in Recommender Systems </papertitle></b> \
<a href="https://aisel.aisnet.org/amcis2020/ai_semantic_for_intelligent_info_systems/ai_semantic_for_intelligent_info_systems/21/"> <br> Link of the Event</a> \
<br><br> \
Recommender Systems have been intensively used in Information Systems in the last decades, facilitating the choice of items individually for each user based on your historical. Clustering techniques have been frequently used in commercial and scientific domains in data mining tasks and visualization tools. However, there is a lack of secondary studies in the literature that analyze the use of clustering algorithms in Recommender Systems and their behavior in different aspects. In this work, we present a Systematic Literature Review (SLR), which discusses the different types of information systems with the use of the clustering algorithm in Recommender Systems, which typically involves three main recommendation approaches found in literature: collaborative filtering, content-based filtering, and hybrid recommendation. In the end, we did a quantitative analysis using K-means clustering for finding patterns between clustering algorithms, recommendation approaches, and some datasets used in their publications.</p> \
</td></tr> \
</table> <br> \
\
\
<table width="100%" align="center" border="0" cellspacing="0" cellpadding="20"> \
<tr> \
<td width="40%" valign="middle"> \
<iframe width="350" height="250" src="https://www.youtube.com/embed/6tNlaytW_t0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\
<td width="60%" valign="middle"> \
<p align="justify"> \
<b><papertitle> Machine Learning: O que é? E como vivemos? <br>(Translated in english) Machine Learning: What is it? And how do we live?</papertitle></b> \
<br><br> \
Esta apresentação nos mostra uma introdução aos conceitos de Machine Learning, e como este assunto está presente nos dias atuais.\
<br><br>(Translated in english) This presentation shows us an introduction to the concepts of Machine Learning and how this theme is present today.</p> \
</td></tr> \
</table> <br> <table width="100%" align="center" border="0" cellspacing="0" cellpadding="20"> \
<tr> \
<td width="40%" valign="middle"> \
<iframe width="350" height="250" src="https://www.youtube.com/embed/OWvwvUp7Y2Q" title="YouTube video player"  \
frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> \
<td width="60%" valign="middle"> \
<p align="justify"> \
<b><papertitle> Tutorial: Análise Exploratória de Dados com Python. <br>Translated in english: Tutorial: Exploratory Data Analysis with Python)</papertitle></b> \
<br><br> \ Gravação do tutorial apresentado ao vivo por Leandro Miranda, doutorando no PPGC-UFF, durante \
a edição de 2020 da Escola de Inverno do PPGC-UFF (http://ev-ppgc.ic.uff.br/2020-2​). Nesse \
tutorial, foram ensinados conceitos de preparação, pré-processamento e transformação dos \
dados, a partir de exemplos com as bibliotecas Numpy e Pandas. Ao final, o aluno terá obtido conhecimento para a elaboração de análises de dados univariados e multivariados. \
<br> <br>(Translated in english) Recording of the tutorial presented live by Leandro Miranda, Ph.D. student at PPGC-UFF, during the  2020 edition of the PPGC-UFF Winter School (http://ev-ppgc.ic.uff.br/2020-2). \
In this tutorial, the concepts of preparation, pre-processing, and data transformation was taught using examples from the Numpy and Pandas libraries. \
In the end, the student will have obtained knowledge for the development of univariate and multivariate data analysis.\
.</p> \
</td></tr> \
</table>'
$(document).ready(function(){
  $("#talks").click(function(){
    $(".content").empty();
    $(".content").append(mytalks);
  });
});
