var parametrosHumedad = ["lunes","martes","miercoles","jueves","viernes"];
var valoresHumedad = [35,60,90,45,28];
var dataHumedad = [{
    x: parametrosHumedad,
    y: valoresHumedad,
    type: "linear"
  }];
  Plotly.newPlot("graficoHumedad",dataHumedad);

//grafico linear de temperatura
var parametrosTemperatura = ["lunes","martes","miercoles","jueves","viernes"];
var valoresTemperatura = [25,26,32,18,23];
var dataTemperatura = [{
    x: parametrosTemperatura,
    y: valoresTemperatura,
    type: "linear"
  }];
  Plotly.newPlot("graficoTemperatura",dataTemperatura);

  //cambio de grafico linear a grafico de barra de temperatura
  var dataTemperaturaBarra = [{
    x: parametrosTemperatura,
    y: valoresTemperatura,
    type: "bar"
  }];  
  function deLinealABarrasT(){
    Plotly.newPlot("graficoTemperatura",dataTemperaturaBarra);
  }

  //cambio de graficos de barras a lineal de temperatura
  function deBarraALinealT(){
    Plotly.newPlot("graficoTemperatura",dataTemperatura);
  }

  //cambio de grafico linear a grafico de barra de humedad
  var parametrosHumedad = ["lunes","martes","miercoles","jueves","viernes"];
  var valoresHumedad = [35,60,90,45,28];
  var dataHumedadBarra = [{
    x: parametrosHumedad,
    y: valoresHumedad,
    type: "bar"
  }];
  function deLinealABarrasH(){
    Plotly.newPlot("graficoHumedad",dataHumedadBarra);
  }

  //cambio de graficos de barras a lineal de humedad
  function deBarraALinealH(){
    Plotly.newPlot("graficoHumedad",dataHumedad);
  }

  

